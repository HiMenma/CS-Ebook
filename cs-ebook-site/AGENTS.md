# Agent Instructions for CS-Ebook-Site

## Build/Lint/Test Commands

```bash
# Development
pnpm dev              # Start Vite dev server with hot reload
pnpm start            # Start production server (after build)

# Building
pnpm build            # Build client + bundle server with esbuild
pnpm preview          # Preview production build locally

# Type Checking & Formatting
pnpm check            # Run TypeScript type checker (tsc --noEmit)
pnpm format           # Format all files with Prettier

# Testing (vitest installed but no test script defined)
# To run tests: npx vitest
# To run single test: npx vitest run <path-to-test>
```

## Code Style Guidelines

### TypeScript

- **Strict mode enabled** - No implicit any, strict null checks, etc.
- Use ESNext modules with `type: "module"` in package.json
- Import TypeScript extensions: `import './file.ts'` (allowImportingTsExtensions)

### Formatting (Prettier)

- 80 character print width
- 2-space indentation (no tabs)
- Semicolons required
- Double quotes for strings
- ES5 trailing commas
- Arrow functions without parens when single arg: `x => x`
- LF line endings

### Imports

```typescript
// External packages first
import { createRoot } from "react-dom/client";

// Internal aliases
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { SharedType } from "@shared/types";

// Relative imports last
import { LocalComponent } from "./LocalComponent";
```

### Naming Conventions

- **Components**: PascalCase (e.g., `Button.tsx`, `ErrorBoundary.tsx`)
- **Hooks**: camelCase starting with "use" (e.g., `useMobile.tsx`, `useTheme.tsx`)
- **Utils**: camelCase (e.g., `utils.ts`, `books-data.ts`)
- **Types/Interfaces**: PascalCase with descriptive names

### React Patterns

- Use functional components with explicit return types when needed
- Destructure props in component signature
- Use `React.ComponentProps<"element">` for HTML prop extension
- Use `...props` spread for rest props
- Error boundaries wrap the app

### Styling (Tailwind + CVA)

- Use `cn()` utility from `@/lib/utils` for class merging
- Use class-variance-authority (CVA) for component variants
- Follow existing UI component patterns in `client/src/components/ui/`
- Theme uses CSS variables (dark mode default)

### Error Handling

- Use try-catch for async operations
- Use ErrorBoundary for React error handling
- Type assertions: prefer `as Type` over `any`

## Project Structure

```
client/src/
  components/ui/     # Radix UI primitives (Button, Card, Dialog, etc.)
  contexts/          # React contexts (ThemeContext, etc.)
  hooks/             # Custom React hooks
  lib/               # Utilities (cn, etc.)
  pages/             # Route pages (Home, NotFound)
  App.tsx            # Root component
  main.tsx           # Entry point

server/
  index.ts           # Express server entry

shared/              # Shared types/utilities
```

## Key Aliases

- `@/` → `client/src/`
- `@shared/` → `shared/`

## Important Notes

- Package manager: **pnpm** (do not use npm/yarn)
- TypeScript: 5.6.3 (pinned version)
- React: 19.x (latest)
- Always run `pnpm check` after making changes to verify types
- Always run `pnpm format` before committing
