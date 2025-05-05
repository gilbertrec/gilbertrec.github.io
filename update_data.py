from serpapi.google_search import GoogleSearch
import json
params = {
  "api_key": "895677a99461c37362d231f52aed660a607f33a22cba5f41911e5fd7bc968a72",
  "engine": "google_scholar_author",
  "hl": "en",
  "author_id": "Rl6vnGIAAAAJ"
}

search = GoogleSearch(params)
results = search.get_dict()
# Extract articles
articles = results.get("articles", [])

# Filter out articles from excluded sources
filtered_articles = [
    article for article in articles
    if "publication" in article and
    not any(excluded in article["publication"].lower() for excluded in ["arxiv", "ssrn"])
    and not any(excluded in article["title"].lower() for excluded in ["proceedings"])
]


# Order by year (descending)
filtered_articles.sort(key=lambda article: article.get("year", 0), reverse=True)

# Transform into a JSON-friendly format
articles_json = [
    {
        "title": article.get("title"),
        "subtitle": "",
        "authors": article.get("authors"),
        "conference": article.get("publication"),
        "date": f"{article.get('year', '0000')}-01-01",  # Defaulting to '0000' if no year is provided
        "desc": "",
        "link": article.get("link")
    }
    for article in filtered_articles
]

# Save to a JSON file
with open("articles.json", "w") as f:
    json.dump(articles_json, f, indent=4)

# Print JSON output
print(json.dumps(articles_json, indent=4))
