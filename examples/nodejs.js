// Node.js example for PhantomSMS API (uses placeholder PHANTOMSMS_API_BASE)
// WARNING: This example uses placeholders. Configure PHANTOMSMS_API_BASE and PHANTOMSMS_API_KEY in your environment.

const fetch = require('node-fetch'); // or global fetch in newer Node.js

const API_BASE = process.env.PHANTOMSMS_API_BASE || 'PHANTOMSMS_API_BASE';
const API_KEY = process.env.PHANTOMSMS_API_KEY || 'YOUR_API_KEY';

if (API_BASE === 'PHANTOMSMS_API_BASE') {
  console.error('ERROR: PHANTOMSMS_API_BASE is not set. Please set the environment variable to your API base URL.');
  process.exit(1);
}

async function sendMessage() {
  const url = `${API_BASE}/v1/messages`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ to: '+1234567890', message: 'Hello from PhantomSMS Node.js example' })
  });

  console.log('Status:', res.status);
  const text = await res.text();
  console.log('Response:', text);
}

sendMessage().catch(err => { console.error(err); process.exit(1); });
