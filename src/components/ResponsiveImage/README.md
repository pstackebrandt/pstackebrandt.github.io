# ResponsiveImage Component

A flexible, reusable component for displaying responsive images with support for multiple sizes and formats.

## Features

- Supports multiple image sizes for different viewport widths
- WebP format support with automatic fallbacks
- Lazy loading for improved performance
- Simple API for common image handling needs
- Consistent styling with customization options

## Usage

```jsx
import ResponsiveImage from '../components/ResponsiveImage';

function MyComponent() {
  const imageSourcesFull = {
    // Standard formats
    small: '/images/photo-small.jpg',
    medium: '/images/photo-medium.jpg',
    large: '/images/photo-large.jpg',
    
    // WebP formats (better performance)
    smallWebp: '/images/photo-small.webp',
    mediumWebp: '/images/photo-medium.webp',
    largeWebp: '/images/photo-large.webp'
  };

  // Minimal required example
  const imageSourcesMinimal = {
    small: '/images/photo-small.jpg'
  };

  return (
    <ResponsiveImage 
      sources={imageSourcesFull}
      alt="Descriptive text for accessibility"
      lazy={false} // Load eagerly for above-the-fold content
    />
  );
}
```

## API

### Props

| Prop                 | Type    | Required | Default | Description                                                   |
| -------------------- | ------- | -------- | ------- | ------------------------------------------------------------- |
| `sources`            | object  | Yes      | -       | Object containing image paths for different sizes and formats |
| `sources.small`      | string  | Yes      | -       | Path to small image (required, fallback)                      |
| `sources.medium`     | string  | No       | -       | Path to medium-sized image                                    |
| `sources.large`      | string  | No       | -       | Path to large-sized image                                     |
| `sources.smallWebp`  | string  | No       | -       | Path to small WebP format image                               |
| `sources.mediumWebp` | string  | No       | -       | Path to medium WebP format image                              |
| `sources.largeWebp`  | string  | No       | -       | Path to large WebP format image                               |
| `alt`                | string  | Yes      | -       | Alternative text for the image                                |
| `className`          | string  | No       | ''      | Additional CSS class names                                    |
| `lazy`               | boolean | No       | true    | Whether to use lazy loading for image                         |

## Responsive Behavior

The component automatically selects the appropriate image source based on viewport width:

- Large images (and WebP): viewport width ≥ 1024px
- Medium images (and WebP): viewport width ≥ 768px
- Small images (and WebP): viewport width < 768px

## Styling

The component uses ResponsiveImage.scss file for styling. You can customize the appearance by:

- Modifying ResponsiveImage.scss directly
- Passing a custom className prop
- Overriding the default styles in your own stylesheet

## Dependencies

- React
- PropTypes

## Accessibility

The component follows accessibility best practices:

- Required alt text for screen readers
- Maintains aspect ratio to prevent layout shifts
- Supports lazy loading for performance

## Example with WebP and Fallbacks

```jsx
// Full example with all options
const imageSourcesFull = {
  // Standard formats
  small: '/images/photo-small.jpg',
  medium: '/images/photo-medium.jpg',
  large: '/images/photo-large.jpg',
  
  // WebP formats (better performance)
  smallWebp: '/images/photo-small.webp',
  mediumWebp: '/images/photo-medium.webp',
  largeWebp: '/images/photo-large.webp'
};

// Minimal required example
const imageSourcesMinimal = {
  small: '/images/photo-small.jpg'
};

<ResponsiveImage 
  sources={imageSourcesFull}
  alt="Descriptive text for accessibility"
  lazy={false} // Load eagerly for above-the-fold content
/>
```
