# PageHeading Component

The PageHeading component displays a page title and optional subtitle using consistent styling across the application.
It uses custom styling instead of Bootstrap classes for better control and consistency with the project's design system.

## Features

- Displays a primary page title with an optional subtitle
- Responsive design that adapts to different screen sizes
- Uses custom styling aligned with the project's visual identity
- Consistent typography using the project's typography variables

## Usage

```jsx
import PageHeading from '../components/PageHeading';

function MyComponent() {
  return (
    <PageHeading 
      title="Page Title"
      subtitle="Optional page subtitle"
      className="custom-class" // Optional
    />
  );
}
```

## Props

| Prop        | Type   | Required | Default | Description                                          |
| ----------- | ------ | -------- | ------- | ---------------------------------------------------- |
| `title`     | string | Yes      | -       | The main title text to display                       |
| `subtitle`  | string | No       | ""      | Optional subtitle text to display below the title    |
| `className` | string | No       | ""      | Additional CSS class names to apply to the component |

## Responsive Behavior

The component automatically adjusts padding based on screen size:

- Standard padding on larger screens
- Reduced padding on mobile devices

## Styling

The component uses the `PageHeading.scss` file for styling.
The styling follows the BEM naming convention with the base class `page-heading` and uses the project's design tokens:

- `page-heading__container`: Container element with appropriate margins and padding
- `page-heading__title`: Styling for the main heading
- `page-heading__subtitle`: Styling for the optional subtitle

## Dependencies

- React
- PropTypes
- Internal design tokens from the project's SCSS variables and typography files

## Customization

You can customize the appearance by:

1. Passing a custom `className` prop
2. Modifying `PageHeading.scss` directly
3. Overriding the default styles in your own stylesheet

## Accessibility

The component follows accessibility best practices:

- Proper heading hierarchy with `<h1>` for the main title
- Semantic markup for content structure
- Responsive text sizing for readability

## Example

```jsx
// Basic usage
<PageHeading 
  title="Projects"
  subtitle="Explore my recent work"
/>

// With custom className
<PageHeading 
  title="Contact"
  subtitle="Get in touch with me"
  className="contact-page-heading"
/>

// Title only
<PageHeading 
  title="About Me"
/>
```
