#!/usr/bin/env python3
"""
Example Python usage for PhantomSMS API (uses placeholder PHANTOMSMS_API_BASE).

This example will refuse to run until you set PHANTOMSMS_API_BASE, PHANTOMSMS_API_KEY and PHANTOMSMS_RESOURCE_PATH in your environment.
"""
import os
import requests
import sys

API_BASE = os.environ.get('PHANTOMSMS_API_BASE')
API_KEY = os.environ.get('PHANTOMSMS_API_KEY')
RESOURCE_PATH = os.environ.get('PHANTOMSMS_RESOURCE_PATH')

if not API_BASE:
    print('ERROR: PHANTOMSMS_API_BASE is not set. Please set the environment variable to your API base URL.')
    sys.exit(1)

if not API_KEY:
    print('ERROR: PHANTOMSMS_API_KEY is not set. Please set the environment variable to your API key.')
    sys.exit(1)

if not RESOURCE_PATH:
    print('ERROR: PHANTOMSMS_RESOURCE_PATH is not set. Please set the environment variable to the confirmed resource path (no leading slash).')
    sys.exit(1)

headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

# Build the URL without hardcoding any unconfirmed paths
api_base = API_BASE.rstrip('/')
resource = RESOURCE_PATH.lstrip('/')
url = f"{api_base}/{resource}"

payload = {
    "to": "+1234567890",
    "message": "Hello from PhantomSMS example"
}

resp = requests.post(url, json=payload, headers=headers)
print('Request URL:', url)
print('Status:', resp.status_code)
print('Response:', resp.text)
