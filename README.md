# About

Reproduction of issue with Next.js v14.0.2 and higher (up to at least v14.0.4-canary.11), where the `@pathfinder-ide/react` package can not be included in an app router page because of failed imports.

## How to observe the error

- Start a build with `pnpm build`
- Observer the following error

```
Attempted import error: 's' is not exported from './index-95c7a92d.js' (imported as 'ee').
```

- Downgrade from Next v14.0.3 (same error in v14.0.4-canary.11) to v14.0.1 `pnpm add next@14.0.1`
- Run `pnpm build` again
- Observe that the build passed. You can als `pnpm start` and visit the page to see that the IDE is properly instantiated.
