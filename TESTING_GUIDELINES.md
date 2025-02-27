## Test Guideline for the Project

This document outlines the intended structure and best practices for testing in this project.
These guidelines describe the target state for testing implementations.
Future adjustments may be made based on project developments and recommendations provided by coworkers like Cursor AI.

Initially created with ChatGPT Canvas <https://chatgpt.com/canvas/shared/67c03719cadc8191bf72e015944a81e1>

## 1. Testing Framework Selection

- **Jest**: A widely used testing framework for JavaScript/React applications.
- **React Testing Library**: Preferred for testing React components to ensure a user-centric approach.
- **Vitest**: Considered for future adoption due to its speed and compatibility with Vite and TypeScript.

### Transition Considerations

- Initially, Jest is used due to its deep integration with Create React App (CRA).
- As the project moves towards Vite and TypeScript, Vitest may replace Jest to take advantage of its performance benefits and native support.

## 2. Directory Structure for Tests

For better organization and maintainability, we follow a hybrid approach:

```
project-root/
├── src/
│   ├── components/
│   │   ├── ComponentName/
│   │   │   ├── ComponentName.js
│   │   │   ├── ComponentName.scss
│   │   │   ├── ComponentName.test.js
│   │   │   ├── index.js
│   │   │   ├── README.md
│   ├── tests/
│   │   ├── snapshot/
│   │   ├── integration/
│   │   ├── accessibility/
│   │   ├── fixtures/
│   │   │   ├── testData.js
├── package.json
└── setupTests.js
```

## 3. Test Organization

- **Unit Tests**: Co-located with their respective components for easier discovery and maintenance
- **Specialized Tests**: Placed in a dedicated `tests/` directory by test type (snapshot, integration, accessibility)

## 4. Types of Tests to Implement

- **Unit Tests**: Verify the smallest functional parts of the application.
- **Snapshot Tests**: Ensure the rendered output remains consistent over time.
- **Integration Tests**: Confirm components work correctly with dependencies and external APIs.
- **Accessibility Tests**: Use `jest-axe` to enforce accessibility best practices.

## 5. Example Unit Test (Current Implementation)

```javascript
// ResponsiveImage.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ResponsiveImage from './ResponsiveImage';

describe('ResponsiveImage', () => {
  const minimalProps = {
    sources: { small: '/images/test-small.jpg' },
    alt: 'Test image'
  };

  it('renders with minimal required props', () => {
    render(<ResponsiveImage {...minimalProps} />);
    const imgElement = screen.getByAltText('Test image');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.getAttribute('src')).toBe('/images/test-small.jpg');
  });
  
  // Additional tests...
});
```

## 6. Mocking External Dependencies

- `jest.fn()` will be used for simple mocks.
- `msw` (Mock Service Worker) will be considered for API interactions.
- For CSS/SCSS modules, use `identity-obj-proxy` in Jest configuration.
- For window/DOM APIs (especially for responsive components), use `jest.spyOn`:

```javascript
// Example of spying on window methods
const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
// Test code...
expect(consoleSpy).toHaveBeenCalled();
consoleSpy.mockRestore();
```

## 7. Test Data Management

- Use fixture files for complex test data in `src/tests/fixtures/`
- For image testing, use mock paths like `/images/test-small.jpg` (no need for actual images)
- Add test IDs with the format `data-testid="component-name-element-type"` when needed

## 8. CI/CD Integration

To ensure code quality, tests will be executed automatically in CI/CD pipelines:

- GitHub Actions (or another CI tool) will run tests on push and pull requests.
- Test scripts in `package.json` will facilitate local execution:

```json
{
  "scripts": {
    "test": "react-scripts test",
    "test:coverage": "react-scripts test --coverage",
    "test:watch": "react-scripts test --watch",
    "test:ci": "react-scripts test --ci --watchAll=false"
  }
}
```

## 9. Future Publishing Considerations

Before publishing to npm or deploying, the following test requirements should be met:

- All tests must pass (`npm test` or `yarn test`).
- A `prepublishOnly` hook in `package.json` will enforce test execution before publishing:
  
  ```json
  "prepublishOnly": "npm test"
  ```

- TypeScript adoption will be ensured to improve maintainability and reliability.

By following this guideline, testing in the project will remain well-structured, scalable, and adaptable to future technology choices.

Adjustments to these guidelines may be made as the project evolves, and recommendations from Cursor AI will be considered for further improvements.

## 10. DOM Interaction Best Practices

- **Avoid direct DOM manipulation**: Avoid using methods like `querySelector`, `getElementsByClassName`, `closest`, or direct element property access in tests
  
- **Use Testing Library queries**: Always prefer queries provided by React Testing Library in this order of preference:
  1. `getByRole` - Most accessible and user-centric
  2. `getByLabelText` - For form elements with labels
  3. `getByPlaceholderText` - For input fields with placeholders
  4. `getByText` - For elements containing visible text
  5. `getByDisplayValue` - For form elements with a specific value
  6. `getByAltText` - For images
  7. `getByTitle` - For elements with title attributes
  8. `getByTestId` - Last resort when no other selectors work

- **Component design considerations**:
  - Design components to accept and spread additional props to their root elements:
  
    ```jsx
    const MyComponent = ({ className = '', ...otherProps }) => (
      <div className={`my-component ${className}`} {...otherProps}>
        {/* component content */}
      </div>
    );
    ```

  - This makes them more testable by allowing `data-testid` attributes

- **Why this matters**:
  - Tests become more resilient to implementation changes
  - Encourages building accessible components
  - Tests better reflect how users interact with the UI
  - Improves test maintenance and clarity

- **Origin of these rules**:
  - These practices come from the core philosophy of Testing Library: "The more your tests resemble the way your software is used, the more confidence they can give you."
  - Enforced by `eslint-plugin-testing-library` rules, particularly `testing-library/no-node-access`
  - Developed by Kent C. Dodds and the Testing Library community as a reaction against implementation-detail-focused testing
  - The error "Avoid direct Node access. Prefer using the methods from Testing Library" comes from the `testing-library/no-node-access` ESLint rule
  - Official documentation: <https://testing-library.com/docs/queries/about/#priority>
