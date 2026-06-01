# API Reference (Placeholder)

WARNING: This file contains placeholder values only. The API endpoints that were previously included in this repository were not confirmed and may be incorrect or harmful to use. Do NOT use any hard-coded production endpoint values from this repository.

All references to concrete hostnames (for example `api.phantomsms.com`) have been removed and replaced with a placeholder value: `PHANTOMSMS_API_BASE`.

Before using the examples or making requests, set the PHANTOMSMS_API_BASE value to your API server's base URL (for example, `https://api.example.com`). Never commit real API keys or production endpoints to public repositories.

## How to configure

- Set an environment variable named `PHANTOMSMS_API_BASE` to the base URL of your PhantomSMS API.
- Set an environment variable named `PHANTOMSMS_API_KEY` to your API key.

Examples (bash):

```bash
export PHANTOMSMS_API_BASE="https://api.example.com"
export PHANTOMSMS_API_KEY="sk_live_..."
```

## Placeholder endpoints

Below are example endpoint paths shown with the `PHANTOMSMS_API_BASE` placeholder. These are NOT real endpoints — they are examples only. Confirm your API's actual paths and parameters with your API provider.

- {PHANTOMSMS_API_BASE}/v1/messages
- {PHANTOMSMS_API_BASE}/v1/otp
- {PHANTOMSMS_API_BASE}/v1/virtual_numbers

Replace the placeholder and the paths above with the real values provided by your PhantomSMS deployment.

## Security

- Never expose API keys in client-side code or public repositories.
- Use secure transport (HTTPS) for all API requests.
- Rotate keys if you believe they have been exposed.

## Contact / Support

If you are unsure which endpoints to use, consult the official PhantomSMS service documentation or contact your administrator. This repository intentionally omits confirmed production endpoints.
