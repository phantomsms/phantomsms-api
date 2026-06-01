# Installation & Quick Start

This guide shows how to get started with the PhantomSMS API in minutes.

Prerequisites

- PhantomSMS account and API key (from dashboard)
- Git (optional, to clone examples)
- Python 3 or Node.js or PHP installed depending on your integration

Environment variables

Set your API key as an environment variable (recommended):

- macOS / Linux (bash/zsh):

```bash
export PHANTOMSMS_API_KEY="YOUR_API_KEY"
```

- Windows (PowerShell):

```powershell
setx PHANTOMSMS_API_KEY "YOUR_API_KEY"
```

Quick start with curl

Send an SMS:

```bash
curl -X POST https://api.phantomsms.com/v1/messages \
  -H "Authorization: Bearer $PHANTOMSMS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"to":"+15551234567","from":"PhantomSMS","text":"Your code is 123456"}'
```

Request an OTP:

```bash
curl -X POST https://api.phantomsms.com/v1/otp \
  -H "Authorization: Bearer $PHANTOMSMS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"to":"+15551234567","length":6,"ttl":300}'
```

Verify an OTP:

```bash
curl -X POST https://api.phantomsms.com/v1/otp/verify \
  -H "Authorization: Bearer $PHANTOMSMS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"otp_id":"otp_abc123","code":"123456"}'
```

SDK recommendations

- Use the official examples in the `examples/` directory as a starting point.
- For production, implement:
  - Secure storage for API keys
  - Retry logic with exponential backoff
  - Idempotency where appropriate
  - Proper logging and monitoring

Production checklist

- Rotate API keys regularly
- Configure webhook signing and verify payloads
- Use virtual numbers for inbound OTP where regional coverage is required
- Monitor delivery rates, latency, and error responses

Support & contact

For support, billing, or enterprise integrations, visit https://www.phantomsms.com or email support@phantomsms.com
