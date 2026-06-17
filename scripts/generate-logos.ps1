$outputDir = "c:\Users\jswnd\.gemini\antigravity\scratch\Eduquest\public\uni-logos"
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

# For each uni, create a professional SVG wordmark logo
$unis = @(
  @{f='beds.svg';        abbr='UoB';  name='University of Bedfordshire';           color='#007749'; bg='#E8F5EE'},
  @{f='abertay.svg';     abbr='AU';   name='Abertay University';                   color='#003DA5'; bg='#E8EEF9'},
  @{f='chester.svg';     abbr='UoC';  name='University of Chester';                color='#592C82'; bg='#F0EAF8'},
  @{f='uca.svg';         abbr='UCA';  name='University for the Creative Arts';     color='#C8A000'; bg='#FDF6E0'},
  @{f='dmu.svg';         abbr='DMU';  name='De Montfort University';               color='#C8102E'; bg='#FAEAED'},
  @{f='keele.svg';       abbr='KU';   name='Keele University';                     color='#003087'; bg='#E8EDF7'},
  @{f='lsbu.svg';        abbr='LSBU'; name='London South Bank University';         color='#E4002B'; bg='#FAEAED'},
  @{f='northeastern.svg';abbr='NEU';  name='Northeastern University';              color='#C8102E'; bg='#FAEAED'},
  @{f='northumbria.svg'; abbr='NU';   name='Northumbria University';               color='#003DA5'; bg='#E8EEF9'},
  @{f='qub.svg';         abbr='QUB';  name="Queen's University Belfast";           color='#003087'; bg='#E8EDF7'},
  @{f='solent.svg';      abbr='SU';   name='Solent University';                    color='#592C82'; bg='#F0EAF8'},
  @{f='ulster.svg';      abbr='UU';   name='Ulster University';                    color='#007749'; bg='#E8F5EE'},
  @{f='southwales.svg';  abbr='USW';  name='University of South Wales';            color='#C8102E'; bg='#FAEAED'},
  @{f='wrexham.svg';     abbr='WU';   name='Wrexham University';                   color='#B8860B'; bg='#FDF6E0'},
  @{f='portsmouth.svg';  abbr='UoP';  name='University of Portsmouth';             color='#003087'; bg='#E8EDF7'},
  @{f='coventry.svg';    abbr='CU';   name='Coventry University';                  color='#590000'; bg='#F5E8E8'},
  @{f='canterbury.svg';  abbr='CCCU'; name='Canterbury Christ Church University';  color='#003DA5'; bg='#E8EEF9'},
  @{f='falmouth.svg';    abbr='FU';   name='Falmouth University';                  color='#1A1A1A'; bg='#F0F0F0'},
  @{f='londonmet.svg';   abbr='LMU';  name='London Metropolitan University';       color='#E4002B'; bg='#FAEAED'},
  @{f='hull.svg';        abbr='UoH';  name='University of Hull';                   color='#590000'; bg='#F5E8E8'},
  @{f='law.svg';         abbr='ULaw'; name='University of Law';                    color='#1A1A1A'; bg='#F0F0F0'},
  @{f='roehampton.svg';  abbr='UoR';  name='University of Roehampton';             color='#003DA5'; bg='#E8EEF9'},
  @{f='brighton.svg';    abbr='UoB';  name='University of Brighton';               color='#990000'; bg='#F5E8E8'},
  @{f='glos.svg';        abbr='UoG';  name='University of Gloucestershire';        color='#007749'; bg='#E8F5EE'},
  @{f='aston.svg';       abbr='AU';   name='Aston University';                     color='#003087'; bg='#E8EDF7'},
  @{f='bpp.svg';         abbr='BPP';  name='BPP University';                       color='#B8860B'; bg='#FDF6E0'},
  @{f='uwe.svg';         abbr='UWE';  name='UWE Bristol';                          color='#003DA5'; bg='#E8EEF9'},
  @{f='herts.svg';       abbr='UoH';  name='University of Hertfordshire';          color='#590000'; bg='#F5E8E8'}
)

foreach ($u in $unis) {
  $out = Join-Path $outputDir $u.f
  # Skip if already a real image exists with same base name but different ext
  $pngPath = $out -replace '\.svg$', '.png'
  if ((Test-Path $pngPath) -and (Get-Item $pngPath).Length -gt 2000) {
    Write-Host "SKIP (png exists): $($u.f)" -ForegroundColor DarkGray
    continue
  }

  $abbrLen = $u.abbr.Length
  $fontSize = if ($abbrLen -le 3) { 36 } elseif ($abbrLen -le 4) { 30 } else { 24 }
  $nameWords = $u.name -split ' '
  # Split name into max 2 lines
  $half = [Math]::Ceiling($nameWords.Count / 2)
  $line1 = ($nameWords[0..($half-1)] -join ' ')
  $line2 = ($nameWords[$half..($nameWords.Count-1)] -join ' ')

  $svg = @"
<svg xmlns="http://www.w3.org/2000/svg" width="240" height="100" viewBox="0 0 240 100">
  <rect width="240" height="100" rx="8" fill="white"/>
  <!-- Coloured left accent bar -->
  <rect x="0" y="0" width="6" height="100" rx="3" fill="$($u.color)"/>
  <!-- Abbreviation badge -->
  <rect x="16" y="20" width="60" height="60" rx="8" fill="$($u.bg)"/>
  <text x="46" y="$( if($abbrLen -le 2){57} elseif($abbrLen -le 3){57} else{54} )" font-family="'Arial Black',Arial,sans-serif" font-size="$fontSize" font-weight="900" fill="$($u.color)" text-anchor="middle" dominant-baseline="middle">$($u.abbr)</text>
  <!-- University name -->
  <text x="88" y="38" font-family="Arial,sans-serif" font-size="11" font-weight="700" fill="$($u.color)" dominant-baseline="middle">$($line1.ToUpper())</text>
  <text x="88" y="56" font-family="Arial,sans-serif" font-size="11" fill="#555" dominant-baseline="middle">$($line2.ToUpper())</text>
</svg>
"@
  [System.IO.File]::WriteAllText($out, $svg, [System.Text.Encoding]::UTF8)
  Write-Host "Created: $($u.f)" -ForegroundColor Green
}

Write-Host "Done!" -ForegroundColor Cyan
Get-ChildItem $outputDir | Measure-Object | Select-Object Count
