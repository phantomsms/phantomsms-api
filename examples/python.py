"""
PhantomSMS API Python examples

Install:
    pip install requests

Replace YOUR_API_KEY with your API key
"""

import requests
import os

API_BASE = "https://api.phantomsms.com/v1"
API_KEY = os.getenv('PHANTOMSMS_API_KEY', 'YOUR_API_KEY')
HEADERS = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}


def send_sms(to, text, sender='PhantomSMS'):
    payload = {
        'to': to,
        'from': sender,
        'text': text
    }
    resp = requests.post(f"{API_BASE}/messages", json=payload, headers=HEADERS)
    resp.raise_for_status()
    return resp.json()


def create_otp(to, length=6, ttl=300):
    payload = {
        'to': to,
        'length': length,
        'ttl': ttl
    }
    resp = requests.post(f"{API_BASE}/otp", json=payload, headers=HEADERS)
    resp.raise_for_status()
    return resp.json()


def verify_otp(otp_id, code):
    payload = {'otp_id': otp_id, 'code': code}
    resp = requests.post(f"{API_BASE}/otp/verify", json=payload, headers=HEADERS)
    resp.raise_for_status()
    return resp.json()


if __name__ == '__main__':
    # Quick demo (replace numbers and key before using in production)
    to_number = '+15551234567'

    print('Creating OTP...')
    otp = create_otp(to_number)
    print('OTP created:', otp)

    print('Send a test SMS...')
    msg = send_sms(to_number, 'Your verification code is 123456')
    print('SMS response:', msg)

    # Example verification (use real code from SMS)
    # verify = verify_otp(otp['otp_id'], '123456')
    # print('Verify result:', verify)
