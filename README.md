# PhantomSMS — Developer Examples

Developer-focused examples and quick start for integrating SMS functionality. These examples are intentionally minimal and use placeholders — replace them with your API base URL and credentials before using.

GitHub Pages: https://phantomsms.github.io/phantomsms-api/

## Quick start

1. Clone this repo:
   ```bash
   git clone https://github.com/phantomsms/phantomsms-api.git
   cd phantomsms-api
   ```

2. Update placeholders:
   - Replace `PHANTOMSMS_API_BASE` with your API base URL in `examples/*`.
   - Set API keys securely (environment variables or secrets manager).

3. Run examples:
   - Python:
     ```bash
     python3 examples/python.py
     ```
   - Node.js (Node 18+ recommended):
     ```bash
     PHANTOMSMS_API_BASE=https://api.example.com PHANTOMSMS_API_KEY=abc node examples/nodejs.js
     ```
   - PHP:
     ```bash
     php examples/php.php
     ```

## Features

- Minimal, readable examples in Python, Node.js, and PHP
- Clear placeholders for API base and keys (PHANTOMSMS_API_BASE)
- Examples use standard HTTP conventions (Bearer token, application/json)
- GitHub Pages landing page for quick access to docs and examples

## Examples

- The examples demonstrate a single use-case: sending an SMS. They are intentionally small to be easy to adapt into production code.
- Important: the example path `/sms/send` is illustrative. Use the documented endpoints from your SMS provider and follow their authentication scheme.

## Contributing

Contributions welcome — open a PR or issue. Please keep code examples small, language-specific, and well-documented.

## SEO keywords

PhantomSMS, SMS API, SMS examples, SMS quick start, developer examples, API integration, SMS SDK, webhook, SMS gateway

## License

Specify license here (e.g., MIT). Replace or add LICENSE file as appropriate.
