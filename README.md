# Nirmal Narasimha — Personal Portfolio

A modern, dark-themed personal portfolio website built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **React 19** + **Vite 8** — fast build tooling
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin
- **Framer Motion** — page and scroll animations
- **react-intersection-observer** — scroll-triggered section reveal
- **react-icons** — GitHub, LinkedIn, and other icons
- **gh-pages** — GitHub Pages deployment

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Sticky nav with active section tracking & hamburger menu
│   ├── Hero.jsx           # Animated hero with social links & featured project cards
│   ├── Education.jsx      # USC degree card with coursework pills
│   ├── Experience.jsx     # Timeline layout of work history
│   ├── Projects.jsx       # 2-col project grid with tech tags & Featured badges
│   ├── Skills.jsx         # Grouped skill pill badges
│   ├── Certifications.jsx # Certification list
│   ├── Contact.jsx        # Contact cards with icons
│   └── Footer.jsx         # Footer with social links & copyright
├── App.jsx
├── main.jsx
└── index.css              # Tailwind v4 import + Inter font + global styles
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Adding Your Photo

In `src/components/Hero.jsx`, find the comment:

```jsx
{/* REPLACE: add <img src="your-photo.jpg"> here */}
```

Replace the initials `<div>` with:

```jsx
<img
  src="your-photo.jpg"
  alt="Nirmal Narasimha"
  style={{
    width: '96px', height: '96px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #7C3AED',
  }}
/>
```

## Deployment

The site is configured for GitHub Pages under `/nirmal-portfolio/`.

```bash
npm run deploy
```

This runs `vite build` then pushes the `dist/` folder to the `gh-pages` branch.
