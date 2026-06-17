Next.js sets standard Cache-Control headers that CDNs can use to cache responses at the edge.

sets Cache-Control headers based on the rendering strategy of each route:

- Static pages (no revalidation): s-maxage=31536000 (one year)
- SR pages (time-based revalidation): s-maxage={revalidate}, stale-while-revalidate={expire - revalidate}. The default expire is one year, so stale-while-revalidate is included in the response header by default. (https://nextjs.org/docs/app/api-reference/functions/cacheLife)
- Dynamic pages (no caching): private, no-cache, no-store, max-age=0, must-revalidate

CDNs that respect s-maxage and stale-while-revalidate can cache static and ISR pages at the edge. However, CDN-level caching alone does not support on-demand revalidation (revalidateTag() / revalidatePath()): those calls invalidate the Next.js server cache, but the CDN will continue serving its cached copy until the s-maxage TTL expires. To propagate on-demand revalidation to the CDN, trigger CDN purges alongside your revalidation call. A common pattern is: call revalidateTag()/revalidatePath() to invalidate the Next.js server cache, then call your CDN purge API for the affected keys (including both HTML and RSC variants).

Static assets (JavaScript, CSS, images, fonts) served from /\_next/static/ include content hashes in their filenames and have a 1 year max-age and immutable directive: public,max-age=31536000,immutable

### Continue

- https://nextjs.org/docs/app/api-reference/functions/revalidateTag
- https://nextjs.org/docs/app/api-reference/functions/revalidatePath
- https://nextjs.org/docs/app/api-reference/config/next-config-js/assetPrefix
