# Server Comps

## With fetch

It change a component to an async function.

### fetch feats

- Identical fetch requests in a React component tree are `memoized` by default, so we can fetch data in the component that needs it instead of drilling props.
- fetch requests are not cached by default and will block the page from rendering until the request is complete. Use the `use cache` directive to cache results, or wrap the fetching component in `<Suspense>` to stream fresh data at request time.

## With DB or ORM

:)

## Straming

Definition: To improve the initial load time and ux, we can break the page into smaller chunks and send those chunks from the server to the client.

### with `loading.js`

### With `<Suspense>`

Streams the entire page while the data is being fetched. It works well for streaming route segments.

- It will be nested inside `layout.js`, and will automatically wrap the `page.js` file and any children below in a `<Suspense>` boundary.
- `loading.js` works well for streaming route segments, using `<Suspense>` closer to the runtime or uncached data access is recommended.
- a layout that accesses uncached or runtime data (e.g. `cookies()`, `headers()`, or uncached fetches) does not fall back to a same route segment `loading.js`. Instead, it blocks navigation until the layout finishes rendering.

# Client Comps

## With `use`

## With third-party libs

- SWR
- React Query

# Examples

- Sequential data fetching: when one request depends on data from another
- Parallel data fetching

Note: If one request fails when using Promise.all, the entire operation will fail. To handle this, you can use the Promise.allSettled method instead.

continue from here: https://nextjs.org/docs/app/getting-started/fetching-data#parallel-data-fetching

# Refs

- [fetching data](https://nextjs.org/docs/app/getting-started/fetching-data)

# continue

- https://nextjs.org/docs/app/api-reference/config/next-config-js/logging
- https://nextjs.org/docs/app/guides/data-security
- https://nextjs.org/docs/app/guides/streaming
- https://nextjs.org/docs/app/getting-started/caching
- https://nextjs.org/docs/app/api-reference/file-conventions/loading
- https://nextjs.org/docs/app/getting-started/layouts-and-pages
