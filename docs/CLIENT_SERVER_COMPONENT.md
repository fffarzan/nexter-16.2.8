# What is server component?

- Fetches data and renders parts of your UI on the server.
- Optionally cache the result.
- Streams data to the client.

## How it works

On the server, Next.js uses React's APIs to orchestrate rendering.

They are rendered into a special data format called the React Server Component Payload (RSC Payload).

RSC: It's a compact binary representation of the rendered React Server Components tree. It's used by React on the client to update the browser's DOM.

React context is not supported in Server Components.

## Server component usage

- Fetching data
- Using API keys, tokens, and other secrets.
- Reducing the amount of JS sent to the browser.
- Imroving FCP.

## Client component usage

- Needing state and event handlers and hooks.
- Needing browser-APIs.

When using a third-party component that relies on client-only features, you can wrap it in a Client Component to ensure it works as expected. if you try to use it directly within a Server Component, you'll see an error. This is because Next.js doesn't know `<Carousel />` is using client-only features. To fix this:

```js
// app/carousel.tsx
// we should wrap the package
'use client';

import { Carousel } from 'acme-carousel';

export default Carousel;

// app/page.tsx
import Carousel from './carousel'

export default function Page() {
  return (
    <div>
      <p>View pictures</p>
      <Carousel />
    </div>
  )
}
```

## `use client`

It is used to declare a boundary between the Server and Client module trees.

Module graph: A graph of file dependencies in your app. Each file (module) is a node, and import/export relationships form the edges.

To reduce the size of client JS bundles, add `use client` to specific interactive components instead of marking large parts of the UI as Client Components.

# On first load

1. HTML is used to immediately show a fast non-interactive preview.
2. RSC Payload is used to reconcile the Client and Server Component trees.
3. JS is used to hydrate Client Components

Hydration: The React's process for attaching event handlers to the DOM, to make the static HTML interactive.

# On navigation:

- RSC Payload is prefetched and cached
- Client Components are rendered entirely on the client

# Refs

- [server and client components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [module graph](https://nextjs.org/docs/app/glossary#module-graph)
- [configure esbuild to include the "use client" directive](https://github.com/shuding/react-wrap-balancer/blob/main/tsup.config.ts#L10-L13)

### Other

Client Components and the RSC Payload are used to `prerender` HTML.

You can pass Server Components as a prop to a Client Component. This allows you to visually nest server-rendered UI within Client components. The React Server Component Payload contains the rendered result of those Server Components, plus placeholders for where Client Components should be rendered and references to their JavaScript files.

If you’re building a component library, add the "use client" directive to entry points that rely on client-only features. This lets your users import components into Server Components without needing to create wrappers.

To prevent accidental usage in Client Components, you can use the `server-only` package. Then, import the package into a file that contains `server-only` code. Now, if you try to import the module into a Client Component, there will be a build-time error.

The corresponding `client-only` package can be used to mark modules that contain client-only logic like code that accesses the window object.

Next.js also provides its own type declarations for server-only and client-only, for TypeScript configurations where `noUncheckedSideEffectImports` is active
