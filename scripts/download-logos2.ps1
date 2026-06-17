$outputDir = "c:\Users\jswnd\.gemini\antigravity\scratch\Eduquest\public\uni-logos"
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

$h = @{
  'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
  'Accept' = 'image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
  'Accept-Language' = 'en-GB,en;q=0.9'
}

# Direct CDN/asset URLs from university websites and media kits
$logos = @(
  @{f='beds.png';         u='https://www.beds.ac.uk/media/275958/university-of-bedfordshire-logo.png'},
  @{f='abertay.png';      u='https://www.abertay.ac.uk/globalassets/images/abertay-logo.png'},
  @{f='chester.png';      u='https://www.chester.ac.uk/media/imgs/chester-university-logo.png'},
  @{f='uca.png';          u='https://www.uca.ac.uk/images/uca-logo.png'},
  @{f='dmu.png';          u='https://www.dmu.ac.uk/images/dmu-logo.png'},
  @{f='keele.png';        u='https://www.keele.ac.uk/media/keeleuniversity/images/branding/keele-logo.png'},
  @{f='lsbu.png';         u='https://www.lsbu.ac.uk/images/lsbu-logo.png'},
  @{f='northeastern.png'; u='https://brand.northeastern.edu/wp-content/uploads/northeastern-logo.png'},
  @{f='northumbria.png';  u='https://www.northumbria.ac.uk/globalassets/university-services/marketing/brand/northumbria-university-logo.png'},
  @{f='qub.png';          u='https://www.qub.ac.uk/sites/QUBHOME/FileStore/Logos/Queens-University-Belfast-Logo.png'},
  @{f='solent.png';       u='https://www.solent.ac.uk/images/solent-logo.png'},
  @{f='ulster.png';       u='https://www.ulster.ac.uk/images/ulster-university-logo.png'},
  @{f='southwales.png';   u='https://www.southwales.ac.uk/images/usw-logo.png'},
  @{f='wrexham.png';      u='https://www.wrexham.ac.uk/images/wrexham-logo.png'},
  @{f='portsmouth.png';   u='https://www.port.ac.uk/images/university-of-portsmouth-logo.png'},
  @{f='coventry.png';     u='https://brand.coventry.ac.uk/wp-content/uploads/Coventry-University-Logo.png'},
  @{f='canterbury.png';   u='https://www.canterbury.ac.uk/images/cccu-logo.png'},
  @{f='falmouth.png';     u='https://www.falmouth.ac.uk/images/falmouth-logo.png'},
  @{f='londonmet.png';    u='https://www.londonmet.ac.uk/images/london-met-logo.png'},
  @{f='hull.png';         u='https://www.hull.ac.uk/images/university-of-hull-logo.png'},
  @{f='law.png';          u='https://www.law.ac.uk/images/university-of-law-logo.png'},
  @{f='roehampton.png';   u='https://www.roehampton.ac.uk/images/roehampton-logo.png'},
  @{f='brighton.png';     u='https://www.brighton.ac.uk/images/university-of-brighton-logo.png'},
  @{f='glos.png';         u='https://www.glos.ac.uk/images/university-of-gloucestershire-logo.png'},
  @{f='aston.png';        u='https://www.aston.ac.uk/aston-university-logo.png'},
  @{f='bpp.png';          u='https://www.bpp.com/images/bpp-university-logo.png'},
  @{f='uwe.png';          u='https://www.uwe.ac.uk/images/uwe-logo.png'},
  @{f='herts.png';        u='https://www.herts.ac.uk/images/university-of-hertfordshire-logo.png'}
)

$ok=0; $fail=0
foreach ($e in $logos) {
  $out = Join-Path $outputDir $e.f
  if ((Test-Path $out) -and (Get-Item $out).Length -gt 500) {
    Write-Host "SKIP: $($e.f)" -ForegroundColor DarkGray; $ok++; continue
  }
  try {
    Invoke-WebRequest -Uri $e.u -OutFile $out -Headers $h -TimeoutSec 15 -EA Stop
    $sz = (Get-Item $out).Length
    if ($sz -lt 500) { throw "tiny ($sz)" }
    Write-Host "OK $sz : $($e.f)" -ForegroundColor Green; $ok++
  } catch {
    Write-Host "FAIL: $($e.f)" -ForegroundColor Red; $fail++
    if (Test-Path $out) { Remove-Item $out -Force }
  }
  Start-Sleep -Milliseconds 200
}
Write-Host "Done: $ok ok, $fail failed" -ForegroundColor Cyan
