# Slide Component

The `Slide` component is a flexible UI component designed to display structured content, including text and images, in a visually appealing manner. It allows customization of text order, styling, and background images.

## Installation

Ensure you have the required dependencies set up in your Astro project.

```astro
import Slide from "./Slide.astro";
```

## Usage

The `Slide` component accepts various props to customize its content and layout.

### Basic Example

```astro
<Slide
  upperText="Up to"
  mainText="3.5x"
  lowerText="Faster CPU"
/>
```

### Example with Image

```astro
<Slide
  upperText="New"
  mainText="Magic Keyboard"
  lowerText="Smooth typing experience"
  imageSrc="/keyboard.png"
  imageAlt="Keyboard"
  imageWidth={200}
  imageHeight={100}
  className="bg-white shadow-lg p-6"
/>
```

### Example with Background Image and Overlay

```astro
<Slide
  upperText="Secure"
  mainText="Touch ID"
  lowerText="Enhanced Security"
  bgImage="/secure-bg.png"
  bgOverlay="bg-black/50"
/>
```

## Props

| Prop Name         | Type                 | Default Value       | Description |
|------------------|---------------------|---------------------|-------------|
| `upperText`      | `string`             | `undefined`         | Text displayed at the top of the slide. |
| `mainText`       | `string`             | `undefined`         | The main highlighted text, often the focal point. |
| `lowerText`      | `string`             | `undefined`         | Supporting text below the main text. |
| `mainTextGradient` | `string`           | `from-[#417b8a] to-[#e72752]` | Gradient color for the main text. |
| `imageSrc`       | `string`             | `undefined`         | Path to the image to be displayed. |
| `imageAlt`       | `string`             | `'Custom Image'`    | Alternative text for the image. |
| `imageWidth`     | `number`             | `100`               | Image width in pixels. |
| `imageHeight`    | `number`             | `100`               | Image height in pixels. |
| `className`      | `string`             | `''`                | Additional classes for styling. |
| `imageClass`     | `string`             | `'rounded-lg w-full h-auto'` | Custom styles for the image. |
| `textOrder`      | `TextOrderType` or `string` | `['upperText', 'mainText', 'lowerText']` | The order in which text and image appear. |
| `upperTextClass` | `string`             | `''`                | Custom class for upper text. |
| `mainTextClass`  | `string`             | `''`                | Custom class for main text. |
| `lowerTextClass` | `string`             | `''`                | Custom class for lower text. |
| `bgImage`        | `string`             | `''`                | Background image for the slide. |
| `bgOverlay`      | `string`             | `'bg-black/40'`     | Overlay color on the background image. |

## Customization

You can modify text order using `textOrder`:

```astro
<Slide
  textOrder="image, upperText, mainText, lowerText"
  imageSrc="/processor.png"
  upperText="Powerful"
  mainText="M3 Chip"
  lowerText="Next-gen performance"
/>
```



