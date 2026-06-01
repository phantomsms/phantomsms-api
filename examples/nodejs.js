// examples/nodejs.js
// EXAMPLE: replace PHANTOMSMS_API_BASE with your real API base URL and set PHANTOMSMS_API_KEY via env vars
// Requires Node 18+ (global fetch) or install node-fetch for earlier versions.

const PHANTOMSMS_API_BASE = process.env.PHANTOMSMS_API_BASE || 'https://PHANTOMSMS_API_BASE'; // EXAMPLE placeholder
const API_KEY = process.env.PHANTOMSMS_API_KEY || 'YOUR_API_KEY';

async function sendSms(to, from, message) {
  const url = `${PHANTOMSMS_API_BASE.replace(/\/+$/, '')}/sms/send`; // example path
  const body = { to, from, message };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text}`);
  }
  return res.json();
}

(async () => {
  try {
    const result = await sendSms('+15551234567', 'PHANTOM', 'Hello from PhantomSMS (example).');
    console.log('SMS sent:', result);
  } catch (err) {
    console.error('Error sending SMS:', err);
  }
})();
