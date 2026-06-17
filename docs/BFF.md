suggests creating a customized backend layer for each frontend application.

- Security
- Flexibility
- Centralized Error Handling
- Rate Limiting and Caching

Since all requests pass through the Next.js server, CORS issues are eliminated.

You can also offload heavy computations to the server and reduce client battery and data usage.

In static export mode of Next.js, it will generate purely static HTML, CSS, and JS. You cannot run server-side code (like API endpoints). If you still need an API, you’d have to host it separately (e.g., a standalone Node.js server).

If your data is only used inside your Next.js app, you may not need a public API at all.

# Usage

- public API for multiple client
- Manipulating data
- Proxying to a backend
- Webhooks and callback URLs
- Custom Authentication
- Building shard middleware logic (applying the same logic across multiple Route Handlers, you can create reusable functions that wrap your handlers)

Note: If you only need server-side data fetching for your own Next.js app (and you don’t need to share that data externally), Server Components might be sufficient to fetch data directly during render—no separate API layer is required.

# Refs

- [bff pattern with next js](https://medium.com/digigeek/bff-backend-for-frontend-pattern-with-next-js-api-routes-secure-and-scalable-architecture-d6e088a39855)
- [backend for frontend](https://nextjs.org/docs/app/guides/backend-for-frontend)
- [building apis with nextjs](https://nextjs.org/blog/building-apis-with-nextjs)
- https://nextjs.org/docs/app/api-reference/functions/next-request
- https://nextjs.org/docs/app/api-reference/functions/next-response
- https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites
- https://nextjs.org/docs/app/api-reference/functions/redirect
- https://nextjs.org/docs/app/api-reference/file-conventions/proxy

# See More

- [Response MDN](https://developer.mozilla.org/en-US/docs/Web/API/Response)
- [Request MDN](https://developer.mozilla.org/en-US/docs/Web/API/Request)
