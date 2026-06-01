# PhantomSMS API Reference

This document provides an overview of the PhantomSMS REST API endpoints, authentication, and example requests. Use these endpoints to send SMS, request and verify OTPs, manage virtual numbers, and receive messages via webhooks.

Base URL

- Production: https://api.phantomsms.com/v1

Authentication

All requests require an API key. Send it in the `Authorization` header as a Bearer token.

Header example

```
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

Endpoints

1) Send SMS

POST /messages

Request body

```json
{
  "to": "+15551234567",
  "from": "PhantomSMS",
  "text": "Your verification code is 123456"
}
```

Response (201)

```json
{
  "message_id": "msg_abc123",
  "status": "queued"
}
```

2) Create OTP session

POST /otp

Request body

```json
{
  "to": "+15551234567",
  "length": 6,
  "ttl": 300
}
```

Response

```json
{
  "otp_id": "otp_abc123",
  "expires_in": 300
}
```

3) Verify OTP

POST /otp/verify

Request body

```json
{
  "otp_id": "otp_abc123",
  "code": "123456"
}
```

Response

```json
{
  "verified": true,
  "phone": "+15551234567"
}
```

4) List virtual numbers

GET /virtual_numbers

Response

```json
{
  "numbers": [
    "+12025550123",
    "+447700900000"
  ]
}
```

5) Receive messages (Webhook)

PhantomSMS posts inbound messages and delivery receipts to the webhook URL you configure in the dashboard.

Example inbound webhook payload (POST)

```json
{
  "type": "inbound",
  "message_id": "msg_in_123",
  "from": "+15551234567",
  "to": "+12025550123",
  "text": "Your OTP is 123456",
  "received_at": "2026-06-01T12:00:00Z"
}
```

Error handling

Errors use standard HTTP status codes and return JSON with details:

```json
{
  "error": {
    "code": "invalid_api_key",
    "message": "The provided API key is invalid"
  }
}
```

Rate limits

- Default: 60 requests per minute per API key. Contact support to increase limits for production traffic.

Webhooks & best practices

- Always respond with HTTP 200 quickly to acknowledge receipt.
- Validate webhook signatures if enabled in the dashboard.
- Retry logic: PhantomSMS will retry failed webhook deliveries with exponential backoff.

SDKs & Libraries

We provide official SDKs and examples in this repository for Python, Node.js, and PHP. Community SDKs may be available—check the README and topics.

Contact & support

For enterprise onboarding, dedicated IPs, and compliance questions, contact sales@phantomsms.com or visit https://www.phantomsms.com.
