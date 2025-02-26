# ImageWithTexts Component

A responsive layout component that displays an image alongside text content.
The layout automatically adjusts from two columns to a single column on smaller screens.

## Features

- Responsive two-column layout that collapses to single column on small screens
- Configurable image position (left or right)
- Customizable image width
- Uses ResponsiveImage component for optimal image loading
- Supports any React components as content (TODO If this is is the case (any components as content): should we rename the component to ImageWithComponents (something like that)?)

## Usage

```jsx
import ImageWithTexts from '../components/ImageWithTexts';

function MyComponent() {
  const imageSources = {
    small: '/images/person-small.jpg',
    medium: '/images/person-medium.jpg',
    smallWebp: '/images/person-small.webp',
    mediumWebp: '/images/person-medium.webp'
  };

  return (
    <ImageWithTexts
      imageSources={imageSources}
      imageAlt="Person smiling"
      imagePosition="left"
      imageWidth={300}
    >
      <h2>About Me</h2>
      <p>This is some text content that will appear next to the image.</p>
      <p>The layout will automatically adjust on smaller screens.</p>
    </ImageWithTexts>
  );
}
```

## Props

| Prop          | Type    | Required | Default | Description                                             |
| ------------- | ------- | -------- | ------- | ------------------------------------------------------- |
| imageSources  | object  | Yes      | -       | Object containing image paths (same as ResponsiveImage) |
| imageAlt      | string  | Yes      | -       | Alternative text for the image                          |
| children      | node    | Yes      | -       | Content to display next to the image                    |
| className     | string  | No       | ''      | Additional CSS class names                              |
| imagePosition | string  | No       | 'left'  | Position of image ('left' or 'right')                   |
| imageWidth    | number  | No       | 300     | Width of image column in pixels                         |
| lazyLoad      | boolean | No       | true    | Whether to use lazy loading for image                   |

## Responsive Behavior

- Desktop: Two-column layout with image on left or right (configurable)
- Mobile (≤ 768px): Single-column layout with image always on top

## Styling

The component uses ImageWithTexts.scss for styling. You can customize the appearance by:

- Modifying ImageWithTexts.scss directly
- Passing a custom className prop
- Overriding the default styles in your own stylesheet
- Using the imageWidth prop to control image column width

## Dependencies

- React
- PropTypes
- ResponsiveImage component

## Example with Custom Styling

```jsx
<ImageWithTexts
  imageSources={profileImages}
  imageAlt="Profile picture"
  imagePosition="right"
  imageWidth={350}
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
</ImageWithTexts>
```
