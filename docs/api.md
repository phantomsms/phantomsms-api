# API Reference (PLACEHOLDER)

WARNING: This file contains placeholder values only. The repository previously included unconfirmed endpoints. All concrete hostnames and unverified paths have been removed.

Do NOT include or rely on any unconfirmed path values in this repository. The following are explicit requirements for this file:

- Do NOT include any of these strings anywhere: `api.phantomsms.com`, `/messages`, `/otp`, `/otp/verify`, `/virtual_numbers`, or `/v1` unless those paths are explicitly confirmed by your API provider.

Instead of hardcoding endpoints, this file shows how to configure the examples to use a base URL and a resource path supplied at runtime.

## How to configure

Set the following environment variables:

```bash
export PHANTOMSMS_API_BASE="https://api.example.com" # Replace with your API base URL
export PHANTOMSMS_API_KEY="YOUR_API_KEY"            # Replace with your API key
export PHANTOMSMS_RESOURCE_PATH="path/to/endpoint" # Replace with the confirmed resource path (do not include leading /)
```

Notes:
- PHANTOMSMS_API_BASE should be the base URL for your deployment (for example https://api.example.com).
- PHANTOMSMS_RESOURCE_PATH should be the resource path provided by your API owner (for example `messages/send` or `otp/generate`), but do NOT assume any specific path — confirm with your provider.

## Usage

Examples in the `examples/` directory construct the request URL by joining `PHANTOMSMS_API_BASE` and `PHANTOMSMS_RESOURCE_PATH` at runtime. No example in this repository includes hard-coded unconfirmed paths.

## Security

- Do not store API keys in version control.
- Use HTTPS for all requests.
- Contact your API administrator to obtain confirmed endpoint information.
