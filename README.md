# About

Reproduction of issue with Next.js v14.0.3-canary.12 and higher (up to at least v14.0.4-canary.37), where the `@pathfinder-ide/react` package can not be imported dynamically in a pages router page because of failed imports.

## How to observe the error

- Start a build with `pnpm build` (v14.0.4-canary.37 installed)
- Observer the following error

```
Module not found: ESM packages (@pathfinder-ide/react) need to be imported. Use 'import' to reference the package instead. https://nextjs.org/docs/messages/import-esm-externals
```

- Downgrade to v14.0.3-canary.11 `pnpm add next@14.0.3-canary.11 && pnpm build` and observe that the build passes
- Updrade to v14.0.3-canary.12 `pnpm add next@14.0.3-canary.12 && pnpm build` and observe that the build fails
