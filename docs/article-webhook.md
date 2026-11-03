# SEO.AI content webhook

The content receiver is available at:

`POST https://webdesignspectrum.com/api/webhooks/articles`

One endpoint accepts both blog posts and updates for the site's existing service pages.

## Configure environment variables

Set these as server-side environment variables in the hosting project:

- `ARTICLE_WEBHOOK_TOKEN`: a long random secret used as the incoming Bearer token.
- `GITHUB_CONTENT_TOKEN`: a GitHub fine-grained token with Contents read and write access to `bdtmw/WebDesignSpectrum`.
- `ARTICLE_GITHUB_REPOSITORY`: optional; defaults to `bdtmw/WebDesignSpectrum`.
- `ARTICLE_GITHUB_BRANCH`: optional; defaults to `main`.

Keep both tokens private. Do not add them to client-side variables or commit them to the repository.

## Send content

Send `Content-Type: application/json` and `Authorization: Bearer <ARTICLE_WEBHOOK_TOKEN>`. Required fields are `document_id`, `title`, `body` (Markdown), `meta_title`, `meta_description`, `url`, `featured_image_url`, `featured_image_alt`, `images`, `keyword`, and `created_at`. Nullable metadata and image fields may be `null`. `slug` is optional and otherwise derived from title.

Optional routing fields:

- `content_type`: `blog` or `service_page`
- `target_path`: an existing Web Design Spectrum service page path

To publish a blog, send `content_type: "blog"` or omit `content_type` and leave `url` null or set it to a blog path. Blog posts appear at `/blog/<slug>`.

To update an existing service page, set `content_type: "service_page"` and set `target_path` or `url` to its current path. If `content_type` is omitted, an exact match in `url` automatically routes to that service page. Allowed service paths are:

- `/wyoming-web-design`
- `/cms-website-development`
- `/ecommerce-web-development`
- `/web-application-development`
- `/mobile-application-development`
- `/logo-and-branding`
- `/seo-friendly-web-design`
- `/social-media-marketing-services-for-small-businesses`

Only these existing service paths can be updated. Other targets are rejected for explicit service page requests.

Example request:

```sh
curl -X POST "https://webdesignspectrum.com/api/webhooks/articles" \
  -H "Authorization: Bearer $ARTICLE_WEBHOOK_TOKEN" \
  -H "Content-Type: application/json" \
  --data-binary @article.json
```

The receiver saves blog records to `content/articles/<slug>.json` and service page records to `content/service-pages/<service-slug>.json` in the configured GitHub branch. Repeated posts update the matching record. If the webhook payload's `url` is `null`, a blog URL defaults to `/blog/<slug>`.

The success response includes `content_type`, `slug`, `url`, `storage_path`, and whether the file was created or updated. A repository update triggers a deployment. Blog content appears in the `/blog` listing and article page; service content replaces the content on its matched existing service route while keeping the site header and footer.

Invalid payloads return `400`, a missing or incorrect Bearer token returns `401`, an oversized payload returns `413`, missing server configuration returns `503`, and upstream GitHub failures return `502`.
