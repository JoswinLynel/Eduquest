$outputDir = "c:\Users\jswnd\.gemini\antigravity\scratch\Eduquest\public\uni-logos"
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

$baseUrl = "https://www.rseducation.co.uk"

$headers = @{
  "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
  "Referer"    = "https://www.rseducation.co.uk/"
  "Accept"     = "image/webp,image/png,image/*,*/*"
}

# Logo files directly from RS Education's CDN
$logos = @{
  "arden.svg"              = "$baseUrl/logo/arden.svg"
  "aru.jpg"                = "$baseUrl/logo/aru.jpg"
  "ucll.png"               = "$baseUrl/logo/ucll.png"
  "uobm.jpg"               = "$baseUrl/logo/uobm.jpg"
  "QAHE.png"               = "$baseUrl/logo/QAHE.png"
  "lsme.png"               = "$baseUrl/logo/lsme.png"
  "LCCA.png"               = "$baseUrl/logo/LCCA.png"
  "LSTT.png"               = "$baseUrl/logo/LSTT.png"
  "dghe.png"               = "$baseUrl/logo/dghe.png"
  "rcl.png"                = "$baseUrl/logo/rcl.png"
  "oxfordinternational.png"= "$baseUrl/logo/oxfordinternational.png"
  "vcad.webp"              = "$baseUrl/logo/vcad.webp"
  "WC.png"                 = "$baseUrl/logo/WC.png"
  "lsc.svg"                = "$baseUrl/logo/lsc.svg"
  "fsb.png"                = "$baseUrl/logo/fsb.png"
  "ukcb.png"               = "$baseUrl/logo/ukcb.png"
  "ukcbc.png"              = "$baseUrl/logo/ukcbc.png"
  "tlg.png"                = "$baseUrl/logo/tlg.png"
  "lccm.png"               = "$baseUrl/logo/lccm.png"
}

$success = 0; $failed = 0

foreach ($entry in $logos.GetEnumerator()) {
  $outFile = Join-Path $outputDir $entry.Key
  try {
    Invoke-WebRequest -Uri $entry.Value -OutFile $outFile -Headers $headers -TimeoutSec 15 -ErrorAction Stop
    $size = (Get-Item $outFile).Length
    if ($size -lt 200) { throw "Too small ($size bytes)" }
    Write-Host "OK ($size bytes): $($entry.Key)" -ForegroundColor Green
    $success++
  } catch {
    Write-Host "FAIL: $($entry.Key) | $($_.Exception.Message)" -ForegroundColor Red
    $failed++
  }
}

Write-Host "`nDone: $success ok, $failed failed." -ForegroundColor Cyan
