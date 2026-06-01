// Node.js PhantomSMS API examples
// Install: npm install node-fetch

const fetch = require('node-fetch');
const API_BASE = 'https://api.phantomsms.com/v1';
const API_KEY = process.env.PHANTOMSMS_API_KEY || 'YOUR_API_KEY';

const headers = {
  'Authorization': `Bearer ${API_KEY}`,
  'Content-Type': 'application/json'
};

async function sendSms(to, text, from = 'PhantomSMS') {
  const resp = await fetch(`${API_BASE}/messages`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ to, from, text })
  });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return await resp.json();
}

async function createOtp(to, length = 6, ttl = 300) {
  const resp = await fetch(`${API_BASE}/otp`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ to, length, ttl })
  });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return await resp.json();
}

async function verifyOtp(otpId, code) {
  const resp = await fetch(`${API_BASE}/otp/verify`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ otp_id: otpId, code })
  });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return await resp.json();
}

(async () => {
  try {
    const to = '+15551234567';
    console.log('Creating OTP...');
    const otp = await createOtp(to);
    console.log('OTP created:', otp);

    console.log('Sending SMS...');
    const sms = await sendSms(to, 'Your verification code is 123456');
    console.log('SMS response:', sms);

    // Example verify
    // const result = await verifyOtp(otp.otp_id, '123456');
    // console.log('Verify result:', result);
  } catch (err) {
    console.error('Error:', err);
  }
})();
