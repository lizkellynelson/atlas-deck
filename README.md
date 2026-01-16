# Atlas Deck

**A stunning, interactive web-based presentation framework for The Independent Journalism Atlas**

Atlas Deck is a modern, fully responsive presentation tool built with React, TypeScript, Framer Motion, and Tailwind CSS. Unlike traditional presentation software, Atlas Deck provides beautiful animations, touch/swipe gestures, keyboard navigation, and complete customization—all in a single web page.

## Features

- **Beautiful Animations**: Smooth transitions and motion effects powered by Framer Motion
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Touch & Keyboard Navigation**: Swipe on mobile, use arrow keys on desktop
- **Multiple Slide Layouts**: Pre-built components for various content types
- **Customizable Design**: Built with Tailwind CSS for easy styling
- **No Dependencies on Third-Party Platforms**: Self-hosted, open-source solution

## Quick Start

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The presentation will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

## Navigation

### Keyboard Controls
- **Arrow Right/Down**: Next slide
- **Arrow Left/Up**: Previous slide
- **Space**: Next slide
- **Home**: First slide
- **End**: Last slide

### Touch/Mouse Controls
- **Swipe left**: Next slide
- **Swipe right**: Previous slide
- **Click dots**: Jump to specific slide

## Slide Types

Atlas Deck includes several pre-built slide components:

### 1. Title Slide
Large, impactful title slides with optional subtitle and author.

```tsx
<TitleSlide
  title="Your Title"
  subtitle="Optional subtitle"
  author="Your Name"
/>
```

### 2. Content Slide
Text-focused slides with a title and content area.

```tsx
<ContentSlide
  title="Slide Title"
  content="Your content here..."
  align="left" // or "center"
/>
```

### 3. Stats Slide
Display key metrics with large, eye-catching numbers.

```tsx
<StatsSlide
  title="Our Impact"
  stats={[
    { value: '500+', label: 'Stories', description: 'Published in 2025' },
    { value: '2.5M', label: 'Readers', description: 'Worldwide' },
  ]}
/>
```

### 4. Quote Slide
Showcase testimonials or important quotes.

```tsx
<QuoteSlide
  quote="Your impactful quote here..."
  author="Author Name"
  role="Their Title"
  image="/path/to/image.jpg" // optional
/>
```

### 5. Two-Column Slide
Split content into two columns for comparison or detailed information.

```tsx
<TwoColumnSlide
  title="Optional Title"
  leftContent={<div>Left side content</div>}
  rightContent={<div>Right side content</div>}
/>
```

### 6. Image Slide
Full-screen images with optional text overlay.

```tsx
<ImageSlide
  imageUrl="https://example.com/image.jpg"
  title="Image Title"
  caption="Optional caption"
  overlay="dark" // "light", "dark", or "none"
/>
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  'atlas': {
    50: '#f0f9ff',
    // ... customize your brand colors
  },
}
```

### Fonts
The project uses Google Fonts (Inter and Space Grotesk). Change fonts in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

### Adding New Slides
1. Create slides in `src/App.tsx`
2. Import the slide components you need
3. Add them to the `slides` array

```tsx
const slides = [
  <TitleSlide title="First Slide" />,
  <ContentSlide title="Second Slide" content="..." />,
  // Add more slides here
];
```

## Project Structure

```
atlas-deck/
├── src/
│   ├── components/
│   │   ├── Slide.tsx           # Base slide component
│   │   └── SlidesDeck.tsx      # Main presentation container
│   ├── slides/
│   │   ├── TitleSlide.tsx
│   │   ├── ContentSlide.tsx
│   │   ├── StatsSlide.tsx
│   │   ├── QuoteSlide.tsx
│   │   ├── TwoColumnSlide.tsx
│   │   └── ImageSlide.tsx
│   ├── hooks/
│   │   └── useSlideNavigation.ts  # Navigation logic
│   ├── App.tsx                 # Your presentation content
│   ├── index.css              # Global styles
│   └── types.ts               # TypeScript types
├── tailwind.config.js         # Tailwind configuration
└── package.json
```

## Tips for Creating Great Presentations

1. **Less is More**: Keep text minimal and impactful
2. **Use Visual Hierarchy**: Larger text for important points
3. **Consistent Spacing**: Use the built-in spacing utilities
4. **High-Quality Images**: Use large, high-resolution images for ImageSlide
5. **Test on Mobile**: Always check how your presentation looks on small screens
6. **Tell a Story**: Structure your slides with a clear narrative arc

## Technologies Used

- **React 18**: Modern UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Lightning-fast build tool
- **Framer Motion**: Animation library
- **Tailwind CSS**: Utility-first CSS framework

## Browser Support

Atlas Deck works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this for your presentations!

## Contributing

This is an open-source project. Contributions are welcome! Feel free to:
- Add new slide types
- Improve animations
- Fix bugs
- Enhance documentation

---

Built with ❤️ for The Independent Journalism Atlas
