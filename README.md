# 360° Panorama Viewer

A modern, responsive React application for viewing 360-degree panorama images with an intuitive interface and smooth navigation controls.

## Features

-   **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
-   **🎨 Minimalistic Dark Theme**: Clean, modern interface with dark color scheme
-   **🖱️ Interactive Controls**: Drag to pan on desktop, touch to navigate on mobile
-   **⛶ Fullscreen Mode**: Immersive viewing experience with fullscreen support
-   **📷 Image Gallery**: Browse and select from multiple panorama images
-   **⚡ Smooth Performance**: Optimized rendering and smooth scrolling

## Getting Started

### Prerequisites

-   Node.js (version 16 or higher)
-   npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory:

    ```bash
    cd panorama-viewer
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

5. Open your browser and visit `http://localhost:5173`

## Usage

1. **Select an Image**: Click on any image in the gallery on the left side
2. **Navigate the Panorama**:
    - **Desktop**: Click and drag to pan left/right
    - **Mobile**: Touch and swipe to navigate
3. **Fullscreen View**: Click the fullscreen button (⛶) for immersive viewing
4. **Switch Images**: Select different images from the gallery at any time

## Project Structure

```
panorama-viewer/
├── src/
│   ├── components/
│   │   ├── PhotoGallery.jsx      # Image gallery component
│   │   ├── PhotoGallery.css      # Gallery styles
│   │   ├── PanoramaViewer.jsx    # Main viewer component
│   │   └── PanoramaViewer.css    # Viewer styles
│   ├── App.jsx                   # Main app component
│   ├── App.css                   # App styles
│   ├── index.css                 # Global styles
│   └── main.jsx                  # App entry point
├── public/                       # Static assets
└── package.json                  # Dependencies and scripts
```

## Customization

### Adding Your Own Images

To add your own panorama images, edit the `images` array in `src/components/PhotoGallery.jsx`:

```javascript
const [images] = useState([
    {
        id: 1,
        name: "Your Image Name",
        url: "/path/to/your/panorama.jpg",
        thumbnail: "/path/to/your/thumbnail.jpg",
    },
    // Add more images...
]);
```

### Styling

The app uses CSS modules and custom properties for easy theming. Main color variables are defined in the CSS files:

-   Primary background: `#0a0a0a`
-   Secondary background: `#111111`
-   Accent color: `#3b82f6`
-   Text color: `#ffffff`

## Browser Support

-   Chrome (recommended)
-   Firefox
-   Safari
-   Edge
-   Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

-   **React 18**: Modern React with hooks
-   **Vite**: Fast build tool and development server
-   **CSS3**: Modern styling with Grid and Flexbox
-   **JavaScript ES6+**: Modern JavaScript features

## Performance Features

-   Lazy loading for images
-   Optimized touch and mouse event handling
-   Smooth scrolling with hardware acceleration
-   Responsive image sizing

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to submit issues and enhancement requests!
