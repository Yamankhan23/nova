# NovaAI — Intelligent Automation Suite Landing Page

## Overview

NovaAI is a responsive, futuristic landing page for an intelligent automation platform. The design emphasizes premium gradients, soft glows, smooth animations, and modular components for easy reuse across pages.

---

## Tech Stack

* **Framework:** Next.js (React-based)
* **Styling:** Tailwind CSS
* **UI Prototyping:** Vercel v0 (initial scaffolding for first 3 components)
* **Animations:** Custom CSS keyframes, Tailwind utilities

---

## Features

* **Hero Section (`Hero.tsx`)**

  * Gradient heading & subtext
  * Call-to-action buttons
  * Dynamic NovaAI-style background & floating particles
  * Smooth glowing cursor

* **Features Section (`Features.tsx`)**

  * Highlights key product capabilities
  * Animated glows & floating effects

* **Highlights Section (`Highlight.tsx`)**

  * Glowing panels with information
  * Soft, floating animations

* **Contact Section (`Contact.tsx`)**

  * Mobile-first form with glowing inputs
  * Responsive design

* **Footer (`Footer.tsx`)**

  * Brand-consistent navigation and links

* **Navbar (`Navbar.tsx`)**

  * Fixed top, responsive, blur & gradient effects

---

## Vercel v0 Usage

The first three components (`Hero.tsx`, `Features.tsx`, `Highlight.tsx`) were **generated using Vercel v0** to speed up UI scaffolding.
After that, all sections were **manually polished and enhanced** for:

* Responsive design
* NovaAI-themed gradients and animations
* Modular, reusable components

---

## Installation & Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Yamankhan23/nova
   cd novaai-landing
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open in browser:

   ```
   http://localhost:3000
   ```

---

## Project Structure

```
novaai-landing/
├─ app/
│  ├─ components/
│  │  ├─ Contact.tsx
│  │  ├─ CursorGlow.tsx
│  │  ├─ Features.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Hero.tsx
│  │  └─ Highlight.tsx
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ globals.css

```

* **components/** → Reusable sections for the landing page
* **layout.tsx & page.tsx** → Core layout + main page, import globals.css
* **globals.css** → Tailwind base + animations + cursor glow styles

---

## License

This project uses the **GNU Affero General Public License v3.0 (AGPL-3.0)**.

* Ensures open-source sharing if used in networked apps
* Suitable for portfolio/demo purposes

---

## Notes

* Fully responsive from mobile to desktop
* Lightweight animations for low-end devices
* Modular, reusable components
* Vercel v0 was used to scaffold initial UI, later enhanced manually
