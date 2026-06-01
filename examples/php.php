<?php
// examples/php.php
// EXAMPLE: replace PHANTOMSMS_API_BASE with your real API base URL and set API_KEY securely.
// This example uses cURL and demonstrates basic error handling.

$PHANTOMSMS_API_BASE = 'https://PHANTOMSMS_API_BASE'; // EXAMPLE placeholder
$API_KEY = 'YOUR_API_KEY'; // In production, use getenv() or secure storage

function send_sms($to, $from, $message) {
    global $PHANTOMSMS_API_BASE, $API_KEY;

    $url = rtrim($PHANTOMSMS_API_BASE, '/') . '/sms/send'; // example path - replace with real endpoint
    $payload = json_encode([
        'to' => $to,
        'from' => $from,
        'message' => $message,
    ]);

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $API_KEY,
        'Content-Type: application/json',
        'Accept: application/json',
    ]);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

    $response = curl_exec($ch);
    if ($response === false) {
        $err = curl_error($ch);
        curl_close($ch);
        throw new Exception('cURL error: ' . $err);
    }

    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    $decoded = json_decode($response, true);
    if ($httpCode < 200 || $httpCode >= 300) {
        $msg = isset($decoded['error']) ? json_encode($decoded['error']) : $response;
        throw new Exception("HTTP {$httpCode}: {$msg}");
    }

    return $decoded;
}

try {
    $result = send_sms('+15551234567', 'PHANTOM', 'Hello from PhantomSMS (example).');
    echo "SMS sent: " . print_r($result, true) . PHP_EOL;
} catch (Exception $e) {
    echo "Error sending SMS: " . $e->getMessage() . PHP_EOL;
}
