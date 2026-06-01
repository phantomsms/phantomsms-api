// Node.js example for PhantomSMS API (uses placeholder PHANTOMSMS_API_BASE)
// This example will refuse to run until PHANTOMSMS_API_BASE is set in the environment.

const fetch = require('node-fetch');

const API_BASE = process.env.PHANTOMSMS_API_BASE;
const API_KEY = process.env.PHANTOMSMS_API_KEY;

if (!API_BASE) {
  console.error('ERROR: PHANTOMSMS_API_BASE is not set. Please set the environment variable to your API base URL.');
  process.exit(1);
}

if (!API_KEY) {
  console.error('ERROR: PHANTOMSMS_API_KEY is not set. Please set the environment variable to your API key.');
  process.exit(1);
}

async function sendMessage() {
  const url = `${API_BASE}/v1/messages`; // placeholder path — replace with confirmed path
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
