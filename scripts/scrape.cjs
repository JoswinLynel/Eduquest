const https = require('https');
const fs = require('fs');

https.get('https://www.rseducation.co.uk/partners/local', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/125.0.0.0 Safari/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('rs_body.html', data);
    console.log('HTML downloaded, length:', data.length);
    
    // Extract image URLs
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const urls = [];
    while ((match = imgRegex.exec(data)) !== null) {
      if (match[1].includes('logo') || match[1].includes('upload') || match[1].includes('partner')) {
        urls.push(match[1]);
      }
    }
    console.log('Found image URLs:', urls);
  });
}).on('error', err => {
  console.error('Error:', err.message);
});
