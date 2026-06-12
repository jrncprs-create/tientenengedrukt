#!/usr/bin/env bash
# Re-run HKU asset optimization: PNG/JPG -> compressed JPG (max 2200px), remove PNG twins.
# Requires macOS sips. Run from repo root.

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
HKU="$ROOT/public/hku"

echo "Optimizing images in $HKU ..."

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
echo "Done. Update data/hkuPortfolio.ts to use .jpg extensions where needed."
