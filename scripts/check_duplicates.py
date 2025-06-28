#!/usr/bin/env python3
import json
import sys
from collections import defaultdict

filename = sys.argv[1] if len(sys.argv) > 1 else 'responses.json'

with open(filename, 'r', encoding='utf-8') as f:
    content = f.read()

# Preserve order and duplicates
pairs = json.loads(content, object_pairs_hook=list)

counts = defaultdict(list)

for key, value in pairs:
    counts[key].append(value)

found = False
for key, values in counts.items():
    if len(values) > 1:
        found = True
        print(f"Duplicate key: {key} ({len(values)})")
        for i, val in enumerate(values, 1):
            preview = val
            if isinstance(preview, str) and len(preview) > 60:
                preview = preview[:60] + '...'
            print(f"  {i}. {preview}")

if not found:
    print("No duplicate keys found.")
