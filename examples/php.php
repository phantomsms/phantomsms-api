<?php
// PHP example for PhantomSMS API (uses placeholder PHANTOMSMS_API_BASE)
// This example will refuse to run until PHANTOMSMS_API_BASE is set in the environment.

$apiBase = getenv('PHANTOMSMS_API_BASE');
$apiKey  = getenv('PHANTOMSMS_API_KEY');

if (!$apiBase) {
    fwrite(STDERR, "ERROR: PHANTOMSMS_API_BASE is not set. Please set the environment variable to your API base URL.\n");
    exit(1);
}

if (!$apiKey) {
    fwrite(STDERR, "ERROR: PHANTOMSMS_API_KEY is not set. Please set the environment variable to your API key.\n");
    exit(1);
}

$url = rtrim($apiBase, '/') . '/v1/messages'; // placeholder path — replace with confirmed path
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

fwrite(STDOUT, "Status: $httpcode\n");
fwrite(STDOUT, "Response: $response\n");
