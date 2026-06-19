# Define

Next.js has file-system based routing. Folders define the route segments that map to URL segments. Files create UI for a segment.

# `page.js`

It's the **leaf** of the route subtree.

- required.
- It's Server Components by default.
- wrapped by `loading.js`, `error.js`, `template.js`, and `layout.js` in the same segment.

### `params`

It's a promise, you must use async/await or React's `use` to access the values.

- `app/shop/[category]/[item]/page.js`: `/shop/1/2`: `Promise<{ category: '1', item: '2' }>`
- `app/shop/[...slug]/page.js`: `/shop/1/2`: `Promise<{ slug: ['1', '2'] }>`
- Static routes resolve `params` to `{}`.
- After type generation, the `PageProps` helper is globally available. It doesn't need to be imported.

### `searchParams`

Accessing search parameters to handle filtering, pagination, or sorting based on the query string.

- In server components: `searchParams` prop --> when the need is using "search params" to load data for the page.
- In client components: `searchParams` prop and `use` without any async/await.

- `/shop?a=1&a=2`: `Promise<{ a: ['1', '2'] }>`
- `searchParams` is a Request-time API whose values cannot be known ahead of time. Using it will opt the page into dynamic rendering at request time (??).
- `searchParams` is a plain JS object, not a `URLSearchParams` instance

### continue for `page.js`

- https://nextjs.org/docs/app/getting-started/project-structure#component-hierarchy
- https://developer.mozilla.org/docs/Learn/Common_questions/What_is_a_URL#parameters

# Layout

It is shared between multiple pages.

- On navigation, layouts preserve state, remain interactive, and do not rerender (I think because it's a parent component for pages).
- Layouts can be nested.

## Nesting Layout

# Dynamic Route Segment

It is used to generate multiple pages from data. Layouts can be nested by adding layout inside folders.

# Dynamic Segment

# `searchParams`

Accessing search parameters

- In server components: `searchParams` prop --> when the need is using "search params" to load data for the page.
- In client components: `useSearchParam` hook.

Optimiztion: use `new URLSearchParams(window.location.search)` in callbacks or event handlers --> Reading "search params" without triggering re-renders.

### Notes

- `PageProps`, `LayoutProps` are global helpers — no imports required.
- Types are generated during `next dev`, `next build` or `next typegen`.

# Dynamic Rendering

When a component is rendered at request time rather than build time. A component becomes dynamic when it uses Request-time APIs.

- https://nextjs.org/docs/app/glossary#dynamic-rendering
- https://nextjs.org/docs/app/glossary#build-time
- https://nextjs.org/docs/app/glossary#request-time-apis

# Refs

- [layouts and pages](https://nextjs.org/docs/app/getting-started/layouts-and-pages)
- [page.js](https://nextjs.org/docs/app/api-reference/file-conventions/page)
- https://nextjs.org/docs/app/api-reference/file-conventions/layout
- https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes
- https://nextjs.org/docs/app/getting-started/linking-and-navigating
- https://nextjs.org/docs/app/api-reference/components/link
- https://nextjs.org/docs/app/api-reference/functions/use-search-params
- https://nextjs.org/docs/app/api-reference/functions/use-router
