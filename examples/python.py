#!/usr/bin/env python3
"""
Example Python usage for PhantomSMS API (uses placeholder PHANTOMSMS_API_BASE).

This example will refuse to run until you set PHANTOMSMS_API_BASE in your environment.
"""
import os
import requests
import sys

API_BASE = os.environ.get('PHANTOMSMS_API_BASE')
API_KEY = os.environ.get('PHANTOMSMS_API_KEY')

if not API_BASE:
    print('ERROR: PHANTOMSMS_API_BASE is not set. Please set the environment variable to your API base URL.')
    sys.exit(1)

if not API_KEY:
    print('ERROR: PHANTOMSMS_API_KEY is not set. Please set the environment variable to your API key.')
    sys.exit(1)

headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

# Example: send a message (placeholder path — replace with your confirmed endpoint)
url = f"{API_BASE}/v1/messages"
payload = {
    "to": "+1234567890",
    "message": "Hello from PhantomSMS example"
}

resp = requests.post(url, json=payload, headers=headers)
print('Status:', resp.status_code)
print('Response:', resp.text)
