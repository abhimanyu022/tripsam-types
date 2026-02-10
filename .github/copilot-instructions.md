# Copilot Instructions for ui-onboarding

Instruction for github copilot to follow when generating code for the ui-onboarding project.

```md
---
description: This file describes the coding style and conventions for the ui-onboarding project.
applyTo: **/*.ts
---

1. Use TypeScript for all code files.
2. Follow the Airbnb JavaScript Style Guide for code formatting and conventions.
3. Use functional components and React hooks for all React components.
4. Use descriptive variable and function names that clearly indicate their purpose.
5. Write JSDoc comments for all functions and components to describe their purpose, parameters, and return values.
6. Use consistent indentation (2 spaces) and line breaks for readability.
7. Ensure that all components are properly typed with TypeScript interfaces or types.


Application specific instructions:
1. The application is defined in three packages: console, onboarding, and main.
The console package is for the tripsam console application, which is used by the admin to manage the onboarding process. The onboarding package is for the onboarding application, which is used by the users to complete their onboarding process. The main package is for the main application, which is used by the end user to access the tripsam services. Ensure that all code is properly organized and categorized based on the package it belongs to, and follow the specific guidelines and conventions for each package as defined in their respective documentation and codebase.
```

2. each package denotes a separate application, so ensure that all code is properly organized and categorized based on the application it belongs to. All three application will be publish to npm repo by using following command in the root directory of the project

```bash
"publish:onboarding": "npm publish --workspace @tripsam/onboarding --access public",
    "publish:console": "npm publish --workspace @tripsam/console --access public",
    "publish:main": "npm publish --workspace @tripsam/main --access public",
```

-- Console Application specific instructions:
1. All .ts files in the console package has zod schema defined, so ensure that all data validation and parsing in the console application is done using the zod schemas defined in the respective .ts files. Avoid using any other validation libraries or custom validation logic, and always refer to the zod schemas for consistent and reliable data validation throughout the console application.
```

2. Use naming convesion something like this
```ts
export const me = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable().optional(),
  isSystem: z.boolean(),
  version: z.number(),
  permissions: z.array(z.string()),
  updatedAt: z.string().refine((s) => !Number.isNaN(Date.parse(s)), "invalid ISO date"),
  isActive: z.boolean(),
});

export type SafeGet = z.output<typeof get>;

take a reference from the above code snippet for defining zod schema and types in the console application. Ensure that all zod schemas and types in the console application follow a similar naming convention and structure for consistency and readability across the codebase.
```

-- Onboarding and Main Application specific instructions:
Use same instruction as defined for console application.


STRICTLY

After making any change update the version in package.json file of the respective package and publish the package to npm repo using the command defined in the root directory of the project.








