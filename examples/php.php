<?php
// PHP example for PhantomSMS API (uses placeholder PHANTOMSMS_API_BASE)
// This example will refuse to run until PHANTOMSMS_API_BASE, PHANTOMSMS_API_KEY and PHANTOMSMS_RESOURCE_PATH are set in the environment.

$apiBase = getenv('PHANTOMSMS_API_BASE');
$apiKey  = getenv('PHANTOMSMS_API_KEY');
$resourcePath = getenv('PHANTOMSMS_RESOURCE_PATH');

if (!$apiBase) {
    fwrite(STDERR, "ERROR: PHANTOMSMS_API_BASE is not set. Please set the environment variable to your API base URL.\n");
    exit(1);
}

if (!$apiKey) {
    fwrite(STDERR, "ERROR: PHANTOMSMS_API_KEY is not set. Please set the environment variable to your API key.\n");
    exit(1);
}

if (!$resourcePath) {
    fwrite(STDERR, "ERROR: PHANTOMSMS_RESOURCE_PATH is not set. Please set the environment variable to the confirmed resource path (no leading slash).\n");
    exit(1);
}

$apiBase = rtrim($apiBase, '/');
$resource = ltrim($resourcePath, '/');
$url = $apiBase . '/' . $resource; // no hard-coded paths

$data = json_encode(["to" => "+1234567890", "message" => "Hello from PhantomSMS PHP example"]);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $apiKey,
    'Content-Type: application/json',
    'Content-Length: ' . strlen($data)
]);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
if ($response === false) {
    fwrite(STDERR, 'cURL error: ' . curl_error($ch) . "\n");
}
curl_close($ch);

fwrite(STDOUT, "Request URL: $url\n");
fwrite(STDOUT, "Status: $httpcode\n");
fwrite(STDOUT, "Response: $response\n");
