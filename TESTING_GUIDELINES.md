## Test Guideline for the Project

This document outlines the intended structure and best practices for testing in this project.
These guidelines describe the target state for testing implementations.
Future adjustments may be made based on project developments and recommendations provided by coworkers like Cursor AI.

Initiallly created with ChatGPT Canvas <https://chatgpt.com/canvas/shared/67c03719cadc8191bf72e015944a81e1>

### 1. **Testing Framework Selection**

- **Jest**: A widely used testing framework for JavaScript/React applications.
- **React Testing Library**: Preferred for testing React components to ensure a user-centric approach.
- **Vitest**: Considered for future adoption due to its speed and compatibility with Vite and TypeScript.

#### Transition Considerations

- Initially, Jest is expected to be used due to its deep integration with Create React App (CRA).
- As the project moves towards Vite and TypeScript, Vitest may replace Jest to take advantage of its performance benefits and native support.

### 2. **Planned Directory Structure for Tests**

To maintain a clean separation between source code and tests, the following directory structure is proposed:

```
project-root/
├── src/
│   ├── components/
│   │   ├── ImageWithContent/
│   │   │   ├── ImageWithContent.js
│   │   │   ├── ImageWithContent.scss
│   │   │   ├── index.js
│   │   │   ├── README.md
│   │   ├── LinkCard/
│   │   │   ├── ...
│   │   ├── ResponsiveImage/
│   │   │   ├── ...
│   ├── tests/
│   │   ├── unit/
│   │   │   ├── ImageWithContent.test.js
│   │   ├── snapshot/
│   │   │   ├── ImageWithContent.snapshot.test.js
│   │   ├── integration/
│   │   │   ├── ImageWithContent.integration.test.js
│   │   ├── accessibility/
│   │   │   ├── ImageWithContent.a11y.test.js
├── package.json
├── jest.config.js (if using Jest)
├── vitest.config.ts (if using Vitest in the future)
├── babel.config.js
├── tsconfig.json (if using TypeScript)
└── README.md
```

### 3. **Planned Test Organization**

- All test types will be placed in a `tests/` directory to avoid cluttering source files.
- Separate subdirectories will be created for different test types, ensuring clarity and maintainability.

### 4. **Types of Tests to Implement**

- **Unit Tests**: Verify the smallest functional parts of the application.
- **Snapshot Tests**: Ensure the rendered output remains consistent over time.
- **Integration Tests**: Confirm components work correctly with dependencies and external APIs.
- **Accessibility Tests**: Use `jest-axe` to enforce accessibility best practices.

### 5. **Example Unit Test (Target Implementation)**

```tsx
import { render, screen } from "@testing-library/react";
import ImageWithContent from "../../src/components/ImageWithContent";

test("renders correctly", () => {
  render(<ImageWithContent title="Hello" />);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});
```

### 6. **Mocking External Dependencies**

- `jest.fn()` will be used for simple mocks.
- `msw` (Mock Service Worker) will be considered for API interactions.

### 7. **Planned CI/CD Integration**

To ensure code quality, tests will be executed automatically in CI/CD pipelines:

- GitHub Actions (or another CI tool) will run tests on push and pull requests.
- A test script in `package.json` will facilitate local execution:

```json
  "scripts": {
    "test": "jest --coverage"
  }
  ```

### 8. **Future Publishing Considerations**

Before publishing to npm or deploying, the following test requirements should be met:

- All tests must pass (`npm test` or `yarn test`).
- A `prepublishOnly` hook in `package.json` will enforce test execution before publishing:
  
  ```json
  "prepublishOnly": "npm test"
  ```

- TypeScript adoption will be ensured to improve maintainability and reliability.

By following this guideline, testing in the project will remain well-structured, scalable, and adaptable to future technology choices.

Adjustments to these guidelines may be made as the project evolves, and recommendations from Cursor AI will be considered for further improvements.
