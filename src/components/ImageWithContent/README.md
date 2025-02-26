# ImageWithContent Component

A responsive layout component that displays an image alongside content.
The layout automatically adjusts from two columns to a single column on smaller screens.

## Features

- Responsive two-column layout that collapses to single column on small screens
- Configurable image position (left or right)
- Customizable image width
- Uses ResponsiveImage component for optimal image loading
- Supports any React components as content

## Usage

```jsx
import ImageWithContent from '../components/ImageWithContent';

function MyComponent() {
  const sources = {
    small: '/images/person-small.jpg',
    medium: '/images/person-medium.jpg',
    smallWebp: '/images/person-small.webp',
    mediumWebp: '/images/person-medium.webp'
  };

  return (
    <ImageWithContent
      sources={sources}
      alt="Person smiling"
      position="left"
      width={300}
    >
      <h2>About Me</h2>
      <p>This is content that will appear next to the image.</p>
      <p>The layout will automatically adjust on smaller screens.</p>
    </ImageWithContent>
  );
}
```

## Props

| Prop      | Type    | Required | Default | Description                                             |
| --------- | ------- | -------- | ------- | ------------------------------------------------------- |
| sources   | object  | Yes      | -       | Object containing image paths (same as ResponsiveImage) |
| alt       | string  | Yes      | -       | Alternative text for the image                          |
| children  | node    | Yes      | -       | Content to display next to the image                    |
| className | string  | No       | ''      | Additional CSS class names                              |
| position  | string  | No       | 'left'  | Position of image ('left' or 'right')                   |
| width     | number  | No       | 300     | Width of image column in pixels                         |
| lazy      | boolean | No       | true    | Whether to use lazy loading for image                   |

## Responsive Behavior

- Desktop: Two-column layout with image on left or right (configurable)
- Mobile (≤ 768px): Single-column layout with image always on top

## Styling

The component uses ImageWithContent.scss for styling. You can customize the appearance by:

- Modifying ImageWithContent.scss directly
- Passing a custom className prop
- Overriding the default styles in your own stylesheet
- Using the imageWidth prop to control image column width

## Dependencies

- React
- PropTypes
- ResponsiveImage component

## Example with Custom Styling

```jsx
<ImageWithContent
  sources={profileImages}
  alt="Profile picture"
  position="right"
  width={350}
  className="about-me-section"
>
  <h2 className="about-heading">About Me</h2>
  <div className="about-content">
    <p>Detailed information about me and my work...</p>
    <LinkCard
      href="https://example.com/cv"
      text="View My Resume"
      description="Download my full CV in PDF format"
    />
  </div>
</ImageWithContent>
```
