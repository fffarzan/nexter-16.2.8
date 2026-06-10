Identical fetch requests in a React component tree are memoized by default, so you can fetch data in the component that needs it instead of drilling props.

fetch requests are not cached by default and will block the page from rendering until the request is complete. Use the use cache directive to cache results, or wrap the fetching component in <Suspense> to stream fresh data at request time.
