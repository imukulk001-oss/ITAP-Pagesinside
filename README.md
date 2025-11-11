# CSIR IT Apps Portal - Landing Page

A responsive, well-structured landing page for CSIR IT Apps Portal built with ReactJS.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd csir-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Header1.jsx          # Top accessibility bar
│   ├── Header2.jsx          # Main header with logo
│   ├── HeroSection.jsx       # Hero section with CTA
│   ├── LoginSection.jsx      # Login form section
│   ├── AppsCatalog.jsx       # Apps catalog grid
│   └── Footer.jsx            # Footer with links
├── App.jsx                   # Main app component
├── App.css                   # Global app styles
└── index.css                 # Base styles
```

## Components

### Header1
- Accessibility links (Skip to main content, Screen Reader Access, Text Size)
- Real-time date and time display
- Text size adjustment controls

### Header2
- CSIR logo and organization name (Hindi and English)
- Navigation menu
- Active state indicator

### HeroSection
- Background image with gradient overlay
- Main title and description
- "Explore" button that scrolls to apps catalog

### LoginSection
- Information card about the portal
- Login form with:
  - Email input with validation
  - Password input with show/hide toggle
  - "Forgot Password" link
  - Form validation and error messages
  - "Login With Parichay" button

### AppsCatalog
- Grid of app cards (4 apps)
- Each card includes:
  - App image
  - Title and description
  - "Read More" link
  - "Open" button
- Responsive grid layout (4 columns → 3 → 2 → 1)

### Footer
- CSIR logo and organization information
- Footer links (Privacy Policy, Disclaimer, Help, etc.)
- Copyright notice

## Functionality

All buttons and interactive elements are functional:

- **Explore Button**: Smoothly scrolls to the apps catalog section
- **Login Form**: Validates email and password, shows error messages
- **Password Toggle**: Shows/hides password text
- **Forgot Password**: Displays alert (ready for API integration)
- **App Cards**: "Open" and "Read More" buttons show alerts (ready for navigation)
- **Footer Links**: All links are clickable (ready for routing)

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## Technologies Used

- React 18
- CSS3 (with Flexbox and Grid)
- Google Fonts (Poppins, Noto Sans)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- Images are stored in `public/images/`
- All form validations are client-side
- Button actions currently show alerts - ready for API integration
- The design follows the Figma specifications closely

## License

This project is created for CSIR IT Apps Portal.
