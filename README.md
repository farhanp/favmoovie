# favMoovie 🎬

A beautiful, responsive movie discovery application built with React and Tailwind CSS. Features dark mode, dynamic search, and a modern UI with smooth animations.

## ✨ Features

- **🌙 Dark Mode Toggle** - Seamless light/dark theme switching with system preference detection
- **🔍 Movie Search** - Real-time search functionality to discover movies
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop screens
- **🎨 Modern UI** - Gold and red gradient theme with smooth animations
- **⚡ Fast Performance** - Built with React and optimized Tailwind CSS
- **💾 Persistent Theme** - Theme preference saved to localStorage

## 🛠️ Tech Stack

- **Frontend Framework:** React 18+
- **Styling:** Tailwind CSS 4.1
- **UI Components:** DaisyUI
- **Icons:** Lucide React
- **Font:** Quicksand (Google Fonts)
- **Build Tool:** Vite

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/favmoovie.git
cd favmoovie
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open `http://localhost:5173` in your browser

## 🎯 Project Structure

```
favmoovie/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation & theme toggle
│   │   └── search.jsx          # Movie search component
│   ├── hooks/
│   │   └── useDarkMode.js      # Dark mode logic hook
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Global styles & animations
│   └── main.jsx                # React entry point
├── public/
├── tailwind.config.js          # Tailwind configuration
├── index.html                  # HTML template
└── package.json
```

## 🌓 Dark Mode Implementation

The app uses a custom `useDarkMode` hook that:
- Detects system dark mode preference
- Saves theme choice to localStorage
- Applies/removes the `dark` class on `<html>` element
- Provides `[isDark, setIsDark]` state for toggle button

```jsx
const [isDark, setIsDark] = useDarkMode();
```

## 🎨 Color Theme

**Light Mode:**
- Primary Gradient: Red (#EF4444) → Rose (#F43F5E)
- Background: White
- Text: Black

**Dark Mode:**
- Primary Gradient: Gold (#FBBF24) → Amber (#F59E0B)
- Background: Slate-950
- Text: White

## 🔧 Configuration

### Tailwind Config (`tailwind.config.js`)

```javascript
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [require("daisyui")],
};
```

### DaisyUI Integration
- Configured in `tailwind.config.js` via plugins
- Themes: Light & Dark
- Custom scrollbar styling included

## 🎬 Key Components

### Header (`Header.jsx`)
- Logo with gradient text (responsive to theme)
- Theme toggle button with animated Sun/Moon icons
- Search integration
- Responsive navbar with DaisyUI

### useDarkMode Hook (`useDarkMode.js`)
- Initializes theme from localStorage or system preference
- Syncs DOM class with state
- Returns `[isDark, setIsDark]` tuple

### Global Styles (`App.css`)
- Custom animations: `lights-on`, `lights-off`
- Diagonal background animation for dark mode
- Quicksand font family
- Custom scrollbar styling

## 🎬 Animations

- **Lights On** - Smooth fade-in animation when entering dark mode (0.6s)
- **Lights Off** - Quick fade-out when exiting dark mode (0.3s)
- **Theme Toggle** - Smooth icon transitions with rotation and scale

## 📱 Responsive Design

- Mobile-first approach using Tailwind utilities
- Flexbox layouts for adaptive spacing
- Touch-friendly button sizes
- Responsive typography scaling

## 🚀 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋 Support

For issues or questions, please open a GitHub issue or contact the maintainer.

---

**Made with ❤️ by Farhan**
