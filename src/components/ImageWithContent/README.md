# ImageWithContent Component

A responsive layout component that displays an image alongside content.
The layout automatically adjusts from two columns to a single column on smaller screens.

## Features

- Responsive two-column layout that collapses to single column on small screens
- Configurable image position (left or right)
- Customizable image width at different screen sizes (desktop, tablet, mobile)
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
      imageAlt="Person smiling"
      imagePosition="left"
    >
      <h2>About Me</h2>
      <p>This is content that will appear next to the image.</p>
      <p>The layout will automatically adjust on smaller screens.</p>
    </ImageWithContent>
  );
}
```

## Props

| Prop           | Type    | Required | Default | Description                                             |
| -------------- | ------- | -------- | ------- | ------------------------------------------------------- |
| sources        | object  | Yes      | -       | Object containing image paths (same as ResponsiveImage) |
| imageAlt       | string  | Yes      | -       | Alternative text for the image                          |
| children       | node    | Yes      | -       | Content to display next to the image                    |
| className      | string  | No       | ''      | Additional CSS class names                              |
| imagePosition  | string  | No       | 'left'  | Position of image ('left' or 'right')                   |
| imageWidth     | number  | No       | Default | Width of image column in pixels for desktop screens     |
| mediumMaxWidth | number  | No       | Default | Maximum width of image on medium screens (tablets)      |
| mobileMaxWidth | number  | No       | Default | Maximum width of image on small screens (phones)        |
| lazy           | boolean | No       | true    | Whether to use lazy loading for image                   |

## Responsive Behavior

- Desktop: Two-column layout with image on left or right (configurable width)
- Medium screens (≤768px): Single-column layout with customizable image width
- Small screens (≤480px): Single-column layout with smaller image width

## Styling

The component uses ImageWithContent.scss for styling. You can customize the appearance by:

- Modifying ImageWithContent.scss directly
- Passing a custom className prop
- Overriding the default styles in your own stylesheet
- Using the width props to control image dimensions at different screen sizes

## Dependencies

- React
- PropTypes
- ResponsiveImage component

## Example with Custom Styling

```jsx
<ImageWithContent
  sources={profileImages}
  imageAlt="Profile picture"
  imagePosition="right"
  imageWidth={350}
  mediumMaxWidth={250}
  mobileMaxWidth={180}
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
