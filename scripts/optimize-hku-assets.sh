#!/usr/bin/env bash
# Re-run HKU asset optimization. Requires macOS sips. Run from repo root.
#
# 1. HEIC/HEIF -> JPG (max 2200px, quality 85). HEIC bronbestanden blijven staan.
# 2. PNG -> compressed JPG (max 2200px, quality 82), then remove PNG twins.
# 3. Re-encode large JPG/JPEG in place if wider than 2200px.

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
HKU="$ROOT/public/hku"

echo "Converting HEIC/HEIF to JPG in $HKU ..."
while IFS= read -r -d '' f; do
  dir=$(dirname "$f")
  base=$(basename "$f")
  name="${base%.*}"
  out="$dir/$name.jpg"
  [ -f "$out" ] && continue
  sips -Z 2200 -s format jpeg -s formatOptions 85 "$f" --out "$out" >/dev/null 2>&1 || true
done < <(find "$HKU" -type f \( -iname "*.heic" -o -iname "*.heif" \) -print0)

echo "Optimizing PNG/JPG images in $HKU ..."

while IFS= read -r -d '' f; do
  dir=$(dirname "$f")
  base=$(basename "$f")
  name="${base%.*}"
  out="$dir/$name.jpg"
  [ -f "$out" ] && continue
  sips -Z 2200 -s format jpeg -s formatOptions 82 "$f" --out "$out" >/dev/null 2>&1 || true
done < <(find "$HKU" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) -print0)

while IFS= read -r -d '' f; do
  jpg="${f%.*}.jpg"
  [ -f "$jpg" ] && rm -f "$f"
done < <(find "$HKU" -type f -iname "*.png" -print0)

du -sh "$HKU"
echo "Done. Site should reference .jpg paths in data/hkuPortfolio.ts (not .heic)."
