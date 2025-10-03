# Tripsam Types Monorepo

This repository contains shared type definitions and wrapper packages for the Tripsam ecosystem.

## Packages

- **[@tripsam/types](/packages/types)**  
  Core package that contains all type definitions.  
  Builds two namespaces:

  - `@tripsam/types/console/*`
  - `@tripsam/types/main/*`

- **[@tripsam/console](/packages/console)**  
  Wrapper package that re-exports the `console` namespace from `@tripsam/types`.  
  Provides a clean DX:
  ```ts
  import { Location } from "@tripsam/console";
  ```
  - **[@tripsam/console](/packages/main)**  
    Wrapper package that re-exports the `main` namespace from `@tripsam/types`.  
    Provides a clean DX:
  ```ts
  import { Location } from "@tripsam/main";
  ```
