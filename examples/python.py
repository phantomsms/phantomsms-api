# examples/python.py
# EXAMPLE: replace PHANTOMSMS_API_BASE with your real API base URL and set API_KEY securely.
# This is a minimal, developer-friendly example demonstrating an HTTP POST to send SMS.

import requests

PHANTOMSMS_API_BASE = "https://PHANTOMSMS_API_BASE"  # EXAMPLE placeholder — replace with your base URL
API_KEY = "YOUR_API_KEY"  # In production, load this from env vars or a secrets manager


def send_sms(to, from_, message):
    """
    Send an SMS. This is an example — do not assume this endpoint exists in your provider.
    Replace the URL path with your provider's documented endpoint.
    """
    url = f"{PHANTOMSMS_API_BASE.rstrip('/')}/sms/send"  # example path (replace with real path)
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
    payload = {
        "to": to,
        "from": from_,
        "message": message,
    }

    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    return resp.json()


def main():
    to = "+15551234567"
    from_ = "PHANTOM"
    message = "Hello from PhantomSMS (example). Replace placeholders with real values."
    try:
        result = send_sms(to, from_, message)
        print("SMS sent:", result)
    except Exception as e:
        print("Error sending SMS:", e)


if __name__ == "__main__":
    main()
