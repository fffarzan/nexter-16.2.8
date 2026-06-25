# Ways

- Tailwind: With `postcss`
- CSS Modules: With this, it can be used the same class in different files without name collisions. Use a consistent naming convention, like `<name>.module.css` not `<name>.tsx`.
- Global CSS: Applies styles across the app.
- Ext stylesheets
- Sass
- CSS-in-JS

Notes:

- In production, all CSS files are automatically concatenated into many minified and code-split `.css` files, ensuring the minimal amount of CSS is loaded for a route.
- CSS ordering can behave differently in development, always check production.
- Turn off linters or formatters that auto-sort imports like ESLint’s `sort-imports`.

# Ordering

```jsx
// page
import { BaseButton } from './base-button';
import styles from './page.module.css'; // then this. Because BaseButton is imported before.

export default function Page() {
	return <BaseButton className={styles.primary} />;
}

// base-button
import styles from './base-button.module.css'; // this will be ordered at first

export function BaseButton() {
	return <button className={styles.primary} />;
}
```

# Pattern

Next.js uses React's built-in support for stylesheets to integrate with Suspense. This currently does not remove stylesheets as you navigate between routes which can lead to conflicts. It is recommended using global styles for truly global CSS (like Tailwind's base styles), Tailwind CSS for component styling, and CSS Modules for custom scoped CSS when needed.

# Refs

- [css](https://nextjs.org/docs/app/getting-started/css)

### continue

- https://nextjs.org/docs/architecture/fast-refresh
- https://nextjs.org/docs/app/guides/sass
- https://nextjs.org/docs/app/guides/css-in-js
- https://nextjs.org/docs/app/api-reference/config/next-config-js/cssChunking
