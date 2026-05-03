#!/usr/bin/env python3
"""Extract embedded assets from bundler standalone HTML and rewrite index.html with local paths."""
import base64
import gzip
import json
import os
import re
from pathlib import Path

ROOT = Path(__file__).parent
SRC = ROOT / "Loan Hoang Realtor _standalone_.html"
INDEX = ROOT / "index.html"
ASSETS = ROOT / "assets"
ASSETS.mkdir(exist_ok=True)

# Read line 172 (manifest) and line 180 (template) — 1-indexed
with SRC.open() as f:
    lines = f.readlines()

manifest_json = lines[171]
template_json = lines[179]

manifest = json.loads(manifest_json)
template_html = json.loads(template_json)

# Friendly aliases for known asset IDs (from ext_resources at line 176)
EXT = json.loads(lines[175])
alias_by_uuid = {item["uuid"]: item["id"] for item in EXT}

MIME_EXT = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
    "image/svg+xml": ".svg",
    "image/gif": ".gif",
    "font/woff2": ".woff2",
    "application/font-woff2": ".woff2",
    "text/javascript": ".js",
    "application/javascript": ".js",
    "text/css": ".css",
    "text/babel": ".jsx",
}

uuid_to_path = {}
for uuid, entry in manifest.items():
    mime = entry.get("mime", "application/octet-stream")
    data_b64 = entry["data"]
    raw = base64.b64decode(data_b64)
    if entry.get("compressed"):
        raw = gzip.decompress(raw)

    ext = MIME_EXT.get(mime, ".bin")
    name = alias_by_uuid.get(uuid, uuid)
    fname = f"{name}{ext}"
    out = ASSETS / fname
    out.write_bytes(raw)
    uuid_to_path[uuid] = f"assets/{fname}"

print(f"Wrote {len(uuid_to_path)} assets to {ASSETS}")

# Rewrite the template to replace UUID references with local paths
html = template_html
for uuid, path in uuid_to_path.items():
    html = html.replace(uuid, path)

# Strip integrity attributes since file contents are unchanged but URLs differ
# (browsers will still validate, but we've replaced the src)
INDEX.write_text(html)
print(f"Wrote rewritten {INDEX}")
