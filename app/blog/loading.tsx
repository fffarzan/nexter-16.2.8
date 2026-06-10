// - `loading.js` will be nested inside `layout.js`, and will automatically
// wrap the `page.js` file and any children below in a `<Suspense>` boundary.
// - `loading.js` works well for streaming route segments, using `<Suspense>`
//  closer to the runtime or uncached data access is recommended.
export default function Loading() {
	return <div>Loading...</div>;
}
