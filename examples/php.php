<?php
// PhantomSMS PHP example using cURL
// Replace YOUR_API_KEY with your API key
$apiBase = 'https://api.phantomsms.com/v1';
$apiKey = getenv('PHANTOMSMS_API_KEY') ?: 'YOUR_API_KEY';

function http_post($url, $data, $apiKey) {
    $ch = curl_init($url);
    $payload = json_encode($data);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type:application/json',
        'Authorization: Bearer ' . $apiKey
    ));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($ch);
    $err = curl_error($ch);
    curl_close($ch);
    if ($err) throw new Exception($err);
    return json_decode($result, true);
}

try {
    // Send SMS
    $sms = http_post($apiBase . '/messages', [
        'to' => '+15551234567',
        'from' => 'PhantomSMS',
        'text' => 'Your verification code is 123456'
    ], $apiKey);
    print_r($sms);

    // Create OTP
    $otp = http_post($apiBase . '/otp', [
        'to' => '+15551234567',
        'length' => 6,
        'ttl' => 300
    ], $apiKey);
    print_r($otp);
} catch (Exception $e) {
    echo 'Error: ' . $e->getMessage();
}

?>
