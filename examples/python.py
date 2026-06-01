#!/usr/bin/env python3
"""
Example Python usage for PhantomSMS API (uses placeholder PHANTOMSMS_API_BASE).

WARNING: This script uses placeholders and will NOT work until you set the PHANTOMSMS_API_BASE and PHANTOMSMS_API_KEY environment variables.
"""
import os
import requests
import sys

API_BASE = os.environ.get('PHANTOMSMS_API_BASE', 'PHANTOMSMS_API_BASE')
API_KEY = os.environ.get('PHANTOMSMS_API_KEY', 'YOUR_API_KEY')

if API_BASE == 'PHANTOMSMS_API_BASE':
    print('ERROR: PHANTOMSMS_API_BASE is not set. Please set the environment variable to your API base URL.')
    sys.exit(1)

headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

# Example: send a message (placeholder path)
url = f"{API_BASE}/v1/messages"
payload = {
    "to": "+1234567890",
    "message": "Hello from PhantomSMS example"
}

resp = requests.post(url, json=payload, headers=headers)
print('Status:', resp.status_code)
print('Response:', resp.text)
