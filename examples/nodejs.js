// Node.js example for PhantomSMS API (uses placeholder PHANTOMSMS_API_BASE)
// This example will refuse to run until PHANTOMSMS_API_BASE, PHANTOMSMS_API_KEY and PHANTOMSMS_RESOURCE_PATH are set in the environment.

const fetch = require('node-fetch');

const API_BASE = process.env.PHANTOMSMS_API_BASE;
const API_KEY = process.env.PHANTOMSMS_API_KEY;
const RESOURCE_PATH = process.env.PHANTOMSMS_RESOURCE_PATH;

if (!API_BASE) {
  console.error('ERROR: PHANTOMSMS_API_BASE is not set. Please set the environment variable to your API base URL.');
  process.exit(1);
}

if (!API_KEY) {
  console.error('ERROR: PHANTOMSMS_API_KEY is not set. Please set the environment variable to your API key.');
  process.exit(1);
}

if (!RESOURCE_PATH) {
  console.error('ERROR: PHANTOMSMS_RESOURCE_PATH is not set. Please set the environment variable to the confirmed resource path (no leading slash).');
  process.exit(1);
}

async function sendMessage() {
  const apiBase = API_BASE.replace(/\/+$/, '');
  const resource = RESOURCE_PATH.replace(/^\/+/, '');
  const url = `${apiBase}/${resource}`; // no hard-coded paths

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ to: '+1234567890', message: 'Hello from PhantomSMS Node.js example' })
  });

  console.log('Request URL:', url);
  console.log('Status:', res.status);
  const text = await res.text();
  console.log('Response:', text);
}

sendMessage().catch(err => { console.error(err); process.exit(1); });
