# LinkCard Component

The LinkCard component displays links with associated descriptions in a visually appealing card format.
It supports responsive design and automatically truncates long descriptions based on the viewport width.

## Features

- Displays a link with a title and description
- Responsive design that adapts to different screen sizes
- Automatic truncation of long descriptions with "Show More/Less" toggle
- Properly formats text with line breaks
- Visual feedback on hover (elevation and shadow changes)

## Usage

```jsx
import LinkCard from '../components/LinkCard';

function MyComponent() {
  return (
    <LinkCard 
      href="https://example.com"
      text="Example Website"
      description="This is a description of the example website. It can be multiple lines and will be truncated if it's too long for the current screen size."
      className="custom-class" // Optional
    />
  );
}
```

## Props

| Prop          | Type   | Required | Default              | Description                                          |
| ------------- | ------ | -------- | -------------------- | ---------------------------------------------------- |
| `href`        | string | Yes      | -                    | The URL that the link points to                      |
| `text`        | string | Yes      | -                    | The text content/title of the link                   |
| `description` | string | Yes      | -                    | A description of the link that appears below it      |
| `className`   | string | No       | 'link-card--default' | Additional CSS class names to apply to the component |

## Responsive Behavior

The component automatically adjusts the maximum number of visible characters in the description based on the viewport width:

- Small screens (mobile): 300 characters
- Medium screens (tablets): 500 characters
- Large screens (desktops): 800 characters

When a description exceeds these limits, a "Show More" button appears to let users expand the text.

## Styling

The component uses the `LinkCard.scss` file for styling. You can customize the appearance by:

1. Modifying `LinkCard.scss` directly
2. Passing a custom `className` prop
3. Overriding the default styles in your own stylesheet

## Dependencies

- React
- PropTypes
- Internal configuration from `config.js` for responsive breakpoints

## Internal Helpers

The component uses a `renderTextWithLineBreaks` utility function to properly format text with line breaks, converting newline characters into React's `<br />` elements.

## Accessibility

The component follows accessibility best practices:

- "Show More/Less" button includes `aria-expanded` attribute
- Toggle button has `aria-controls` attribute
- Interactive elements are keyboard navigable
- Sufficient color contrast for text elements

### Custom Styling Example

```scss
// In your custom stylesheet
.my-custom-link-card {
  // Custom styles here
  background-color: #f5f5f5;
  border-left: 3px solid #0066cc;
}
```

```jsx
<LinkCard 
  href="https://example.com"
  text="Custom Styled Card"
  description="This card has custom styling applied."
  className="my-custom-link-card"
/>
```
