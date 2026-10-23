#!/usr/bin/env bash
# Exit 0 if graphify-out/ differs from HEAD in substance, 1 if not.
# Ignores what Graphify rewrites on every run even when the code graph is identical:
# the commit hash stamped into graph.json and the directory name + date heading GRAPH_REPORT.md.
set -euo pipefail

normalize() {
  case "$1" in
    *graph.json) sed -E 's/"built_at_commit": ?"[0-9a-f]*"//g' ;;
    *GRAPH_REPORT.md) sed -E '1s/^# Graph Report - .*$/# Graph Report/' ;;
    *) cat ;;
  esac
}

changed=1
while IFS= read -r -d '' f; do
  [ -e "$f" ] || continue
  [ -e "$f" ] || continue
  if ! git cat-file -e "HEAD:$f" 2>/dev/null; then
    echo "new: $f"; changed=0; continue
  fi
  if ! cmp -s <(git show "HEAD:$f" | normalize "$f") <(normalize "$f" < "$f"); then
    echo "changed: $f"; changed=0
  fi
done < <(git ls-files -z --modified --others --exclude-standard -- graphify-out)

# Files Graphify stopped producing.
if [ -n "$(git ls-files --deleted -- graphify-out)" ]; then
  git ls-files --deleted -- graphify-out | sed 's/^/deleted: /'; changed=0
fi
exit "$changed"
