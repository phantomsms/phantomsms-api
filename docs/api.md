# API Reference (PLACEHOLDER)

WARNING: This file contains placeholder values only. The repository previously included unconfirmed endpoints. All concrete hostnames and unverified paths have been removed.

If you see references to `api.phantomsms.com`, `/messages`, `/otp`, `/otp/verify`, or `/virtual_numbers` in this repository, they were unconfirmed and were replaced with placeholders.

Before using this repository, determine the correct base URL and paths for your PhantomSMS deployment. Use the environment variable `PHANTOMSMS_API_BASE` to configure the base URL in examples and scripts.

## How to configure

Set the following environment variables:

```bash
export PHANTOMSMS_API_BASE="https://api.example.com"
export PHANTOMSMS_API_KEY="YOUR_API_KEY"
```

## Placeholder paths (examples)

The sections below demonstrate example path patterns only. These are NOT confirmed production endpoints and are shown for illustration. Replace them with the real, confirmed paths from your API provider.

- {PHANTOMSMS_API_BASE}/v1/<resource>

Do NOT assume any of the above paths are valid for your environment until confirmed.

## Security

- Do not store API keys in version control.
- Use HTTPS for all requests.
- Contact your API administrator to obtain confirmed endpoint information.
