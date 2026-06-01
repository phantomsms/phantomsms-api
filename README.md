# PhantomSMS API

This repository contains documentation and examples to help you integrate with the PhantomSMS API.

IMPORTANT: The files in this repository use placeholder values for API endpoints and keys. Do NOT hardcode production endpoints or real API keys into these files or into public repositories.

## Quick start

1. Set PHANTOMSMS_API_BASE to the base URL of your PhantomSMS API (for example, https://api.example.com).
2. Set PHANTOMSMS_API_KEY to your API key.
3. Run the example scripts in the `examples/` directory after replacing placeholders.

## Requirements

- Python 3.8+ (for Python example)
- Node.js 12+ (for Node.js example)
- PHP 7.4+ (for PHP example)

## Installation

Clone the repository:

```bash
git clone https://github.com/phantomsms/phantomsms-api.git
cd phantomsms-api
```

## Usage

Examples are provided in the `examples/` directory. Each example reads `PHANTOMSMS_API_BASE` from the environment and will refuse to run if it remains unset.

Example files:

- examples/python.py
- examples/nodejs.js
- examples/php.php

## Security

- Never expose API keys in client-side code or public repositories.
- Use HTTPS for all API requests.
- Rotate keys if you believe they have been exposed.

## Contributing

Contributions are welcome. Open an issue or pull request.
