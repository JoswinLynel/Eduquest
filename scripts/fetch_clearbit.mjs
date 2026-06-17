import fs from 'fs';
import { pipeline } from 'stream/promises';
import { Readable } from 'stream';

const unis = [
    { file: "beds.png", domain: "beds.ac.uk" },
    { file: "abertay.png", domain: "abertay.ac.uk" },
    { file: "chester.png", domain: "chester.ac.uk" },
    { file: "uca.png", domain: "uca.ac.uk" },
    { file: "dmu.png", domain: "dmu.ac.uk" },
    { file: "keele.png", domain: "keele.ac.uk" },
    { file: "lsbu.png", domain: "lsbu.ac.uk" },
    { file: "northeastern.png", domain: "northeastern.edu" },
    { file: "northumbria.png", domain: "northumbria.ac.uk" },
    { file: "qub.png", domain: "qub.ac.uk" },
    { file: "solent.png", domain: "solent.ac.uk" },
    { file: "ulster.png", domain: "ulster.ac.uk" },
    { file: "southwales.png", domain: "southwales.ac.uk" },
    { file: "wrexham.png", domain: "wrexham.ac.uk" },
    { file: "portsmouth.png", domain: "port.ac.uk" },
    { file: "coventry.png", domain: "coventry.ac.uk" },
    { file: "canterbury.png", domain: "canterbury.ac.uk" },
    { file: "falmouth.png", domain: "falmouth.ac.uk" },
    { file: "londonmet.png", domain: "londonmet.ac.uk" },
    { file: "hull.png", domain: "hull.ac.uk" },
    { file: "law.png", domain: "law.ac.uk" },
    { file: "roehampton.png", domain: "roehampton.ac.uk" },
    { file: "brighton.png", domain: "brighton.ac.uk" },
    { file: "glos.png", domain: "glos.ac.uk" },
    { file: "aston.png", domain: "aston.ac.uk" },
    { file: "bpp.png", domain: "bpp.com" },
    { file: "uwe.png", domain: "uwe.ac.uk" },
    { file: "herts.png", domain: "herts.ac.uk" }
];

async function downloadLogos() {
    for (const uni of unis) {
        try {
            const url = `https://logo.clearbit.com/${uni.domain}?size=400`;
            const res = await fetch(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
                    'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
                    'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8'
                }
            });

            if (res.ok) {
                const outPath = `public/uni-logos/${uni.file}`;
                await pipeline(Readable.fromWeb(res.body), fs.createWriteStream(outPath));
                console.log(`[OK] Downloaded ${uni.domain}`);
                
                // remove the svg placeholder
                const svgPath = `public/uni-logos/${uni.file.replace('.png', '.svg')}`;
                if (fs.existsSync(svgPath)) {
                    fs.unlinkSync(svgPath);
                }
            } else {
                console.log(`[FAIL] ${uni.domain} - ${res.status} ${res.statusText}`);
            }
        } catch (e) {
            console.log(`[ERROR] ${uni.domain} - ${e.message}`);
        }
        await new Promise(r => setTimeout(r, 500));
    }
}

downloadLogos();
