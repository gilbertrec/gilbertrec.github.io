import os
from datetime import datetime

BASE_URL = "https://gilbertrec.github.io/personal_doc/publications"
FOLDER_PATH = "public/personal_doc/publications"

sitemap_entries = []

for file in sorted(os.listdir(FOLDER_PATH)):
    if file.endswith(".pdf"):
        url = f"{BASE_URL}/{file}"
        sitemap_entries.append(f"""  <url>\n    <loc>{url}</loc>\n  </url>""")

sitemap = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(sitemap_entries)}
</urlset>"""

with open("sitemap.xml", "w") as f:
    f.write(sitemap)

print("✅ sitemap.xml generated!")
