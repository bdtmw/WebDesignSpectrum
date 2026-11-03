# Article webhook

The article receiver is available at:

`POST https://webdesignspectrum.com/api/webhooks/articles`

Use the equivalent production domain if the site is served from a different canonical hostname.

## Configure environment variables

Set these as server-side environment variables in the hosting project:

- `ARTICLE_WEBHOOK_TOKEN`: a long random secret used as the incoming Bearer token.
- `GITHUB_CONTENT_TOKEN`: a GitHub fine-grained token with Contents read and write access to `bdtmw/WebDesignSpectrum`.
- `ARTICLE_GITHUB_REPOSITORY`: optional; defaults to `bdtmw/WebDesignSpectrum`.
- `ARTICLE_GITHUB_BRANCH`: optional; defaults to `main`.

Keep both tokens private. Do not add them to client-side variables or commit them to the repository. The webhook returns `503` until both required secrets are configured.

## Send an article

Send `Content-Type: application/json` and `Authorization: Bearer <ARTICLE_WEBHOOK_TOKEN>`. The JSON body must include:

- `document_id`: positive integer
- `title`, `body`: non-empty strings; body is Markdown
- `meta_title`, `meta_description`, `url`, `featured_image_url`, `featured_image_alt`, `keyword`: strings or `null`
- `slug`: optional string; defaults to a slug derived from title
- `images`: array of absolute HTTP or HTTPS URLs
- `created_at`: ISO 8601 timestamp

Example:

```sh
curl -X POST "https://webdesignspectrum.com/api/webhooks/articles" \
  -H "Authorization: Bearer $ARTICLE_WEBHOOK_TOKEN" \
  -H "Content-Type: application/json" \
  --data-binary @article.json
```

The endpoint validates the payload and saves it as `content/articles/<slug>.json` in the configured GitHub branch. Sending the same slug updates that article file. If `url` is null, the endpoint sets it to `/blog/<slug>`. A new file returns HTTP `201`; an update returns HTTP `200`. The success response includes the public article URL.

## Responses

Success returns `success`, `document_id`, `slug`, `storage_path`, and whether the file was created or updated. Invalid JSON or fields return `400`, a missing or incorrect Bearer token returns `401`, an oversized payload returns `413`, and upstream GitHub failures return `502`.

Incoming articles are listed at `/blog` and rendered as public Markdown pages at `/blog/<slug>`. The article routes and sitemap are generated from the JSON records in `content/articles/`, so articles saved by the webhook become available with the deployment triggered by the repository update.
