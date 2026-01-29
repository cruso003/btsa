# Copy biogas images from repository root biogas/ into public/projects/biogas/
# Run this from the btsa-frontend folder (or execute the script directly).

$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Definition
$source = Join-Path $scriptRoot "..\..\biogas"
$dest = Join-Path $scriptRoot "..\public\projects\biogas"

Write-Host "Source: $source"
Write-Host "Destination: $dest"

New-Item -ItemType Directory -Force -Path $dest | Out-Null

$mapping = @{
    'pic1.jpeg' = 'hero.jpg'
    'pic2.jpeg' = 'challenge1.jpg'
    'pic 3.jpeg' = 'challenge2.jpg'
    'pic4.jpeg' = 'solution.jpg'
    'pic 5.jpeg' = 'gallery4.jpg'
    'vid1.mp4' = 'vid1.mp4'
}

foreach ($k in $mapping.Keys) {
    $srcFile = Join-Path $source $k
    $destFile = Join-Path $dest $mapping[$k]
    if (Test-Path $srcFile) {
        Copy-Item -Path $srcFile -Destination $destFile -Force
        Write-Host "Copied $k -> $($mapping[$k])"
    } else {
        Write-Host "Missing: $srcFile" -ForegroundColor Yellow
    }
}

Write-Host "Done. Verify files in public/projects/biogas"
