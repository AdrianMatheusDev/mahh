# Mariane's Romantic Website

Welcome to the Mariane Romantic Website project! This project is dedicated to celebrating the beauty and love associated with Mariane. Below you will find an overview of the project structure, features, and setup instructions.

## Project Structure

The project is organized as follows:

```
mariane-romantic-website
├── src
│   ├── index.html          # Main HTML entry point
│   ├── styles              # Contains CSS files for styling
│   │   ├── main.css        # Main styles for layout and typography
│   │   └── animations.css   # CSS animations for visual effects
│   ├── scripts             # Contains TypeScript files for functionality
│   │   ├── main.ts         # Main script to initialize the website
│   │   ├── bootstrap.ts     # Bootstrapping the application
│   │   ├── components      # Component scripts
│   │   │   ├── hero.ts     # Hero section functionality
│   │   │   ├── love-letter.ts # Love letter functionality
│   │   │   ├── interactive-map.ts # Interactive map functionality
│   │   │   └── audio-player.ts # Audio player functionality
│   │   ├── effects         # Visual effects scripts
│   │   │   ├── canvas-effects.ts # Canvas effects
│   │   │   └── webgl-aurora.ts # WebGL aurora effects
│   │   └── utils          # Utility functions
│   │       └── helpers.ts  # Helper functions
│   ├── components          # HTML components
│   │   ├── hero.html      # Hero section HTML
│   │   ├── letter.html    # Love letter HTML
│   │   └── gallery.html    # Gallery HTML
│   └── data               # Data files
│       └── content.json    # JSON data for content
├── public                 # Public assets
│   └── fonts              # Custom fonts
│       └── mariane-display.woff2 # Font used in the website
├── tests                  # Testing files
│   ├── unit               # Unit tests
│   │   └── components.test.ts # Tests for components
│   └── e2e                # End-to-end tests
│       └── ux.spec.ts     # User experience tests
├── .gitignore             # Git ignore file
├── package.json           # NPM configuration file
├── tsconfig.json          # TypeScript configuration file
├── vite.config.ts         # Vite configuration file
└── README.md              # Project documentation
```

## Features

- **Hero Section**: A captivating introduction to Mariane with beautiful imagery.
- **Love Letter**: An interactive love letter component that displays romantic messages.
- **Interactive Map**: A map showcasing significant locations related to Mariane and the romantic journey.
- **Audio Player**: An audio player for listening to romantic music or messages.
- **Visual Effects**: Canvas and WebGL effects that enhance the aesthetic of the website.
- **Responsive Design**: The website is designed to be responsive and accessible on various devices.

## Setup Instructions

1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd mariane-romantic-website
   ```

2. **Install Dependencies**: 
   ```
   npm install
   ```

3. **Run the Development Server**: 
   ```
   npm run dev
   ```

4. **Open in Browser**: Navigate to `http://localhost:3000` to view the website.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Thank you for visiting the Mariane Romantic Website project! We hope you enjoy exploring the love and beauty dedicated to Mariane.