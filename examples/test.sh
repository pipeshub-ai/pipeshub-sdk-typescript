#!/usr/bin/env bash
# Run every example and write TEST_REPORT.md in this directory.

cd "$(dirname "$0")" || exit 1

OUT="TEST_REPORT.md"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

FILES=$(find . -path ./node_modules -prune -o -name '*.ts' -print | sed 's|^\./||' | sort)

PASS=0
FAIL=0
GROUP=""

echo "# Example test report" > "$OUT"
echo "" >> "$OUT"
echo "$(date '+%Y-%m-%d %H:%M:%S')" >> "$OUT"
echo "" >> "$OUT"

for f in $FILES; do
  printf '%-46s ' "$f"

  timeout 180 npx tsx "$f" > "$TMP/out" 2> "$TMP/err"
  code=$?

  # Every example ends with main().catch(console.error), so a failure still
  # exits 0. Anything on stderr means the example failed.
  grep -v '^[[:space:]]*$' "$TMP/err" > "$TMP/err2"

  if [ $code -eq 0 ] && [ ! -s "$TMP/err2" ]; then
    status="PASS"
    PASS=$((PASS + 1))
  else
    status="FAIL"
    FAIL=$((FAIL + 1))
  fi
  echo "$status"

  g=$(dirname "$f")
  if [ "$g" != "$GROUP" ]; then
    echo "" >> "$OUT"
    echo "## $g" >> "$OUT"
    echo "" >> "$OUT"
    GROUP="$g"
  fi

  if [ "$status" = "PASS" ]; then
    echo "- [x] $(basename "$f") — PASS" >> "$OUT"
  else
    echo "- [ ] $(basename "$f") — FAIL" >> "$OUT"
    echo "" >> "$OUT"
    echo '  ```' >> "$OUT"
    tail -n 20 "$TMP/err2" | sed 's/^/  /' >> "$OUT"
    echo '  ```' >> "$OUT"
    echo "" >> "$OUT"
  fi
done

echo "" >> "$OUT"
echo "**$PASS passed, $FAIL failed**" >> "$OUT"

echo ""
echo "$PASS passed, $FAIL failed"
echo "report: $OUT"
