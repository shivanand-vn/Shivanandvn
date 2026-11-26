# ✨ Shivanand Viranna Naganur — Developer Portfolio

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live_Portfolio-shivanandvn.vercel.app-emerald?style=for-the-badge&logo=vercel&logoColor=white)](https://shivanandvn.vercel.app/)
[![React](https://img.shields.io/badge/React-19.2-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.3-0055FF?style=for-the-badge&logo=framer&logoColor=white)]

<br />

**Modern, performant, responsive developer portfolio engineered with React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion.**

[🌐 Explore Live Application](https://shivanandvn.vercel.app/) • [📬 Get In Touch](https://shivanandvn.vercel.app/#contact) • [📄 View Resume](https://shivanandvn.vercel.app/)

</div>

---

## 🌟 Overview

Welcome to my personal developer portfolio repository! I'm **Shivanand Viranna Naganur**, an MCA Scholar & Software Developer passionate about building high-performance web applications, robust backend APIs, automated desktop systems, and applied computer vision solutions.

This portfolio is crafted from the ground up to provide a smooth, fluid user experience with dark/light mode fluidity, micro-interactions, responsive bento grids, and interactive modal dialogs.

---

## 🚀 Key Features

- **🌓 Dynamic Ambient Glow & Technical Grid**: Interactive dual-theme background utilizing `framer-motion` glowing orbs with architectural grid lines and cinematic vignette overlays.
- **📱 Responsive Layout System**:
  - **Desktop**: Clean 2-column bento-style project cards with intelligent auto-centering for trailing single items.
  - **Mobile**: Polished 1-column layout with optimized spacing and zero badge collisions.
- **🖼️ Auto-Scrolling Multi-Image Carousel**: Interactive project preview strips featuring smooth continuous auto-scrolling across high-resolution project UI screenshots.
- **🔍 Comprehensive Project Details Modal**: Deep-dive modals presenting system architecture, challenge & resolution narratives, key metrics, and direct live/repo links.
- **🏆 Event-Driven Achievement Highlighting**: Clicking client appreciation and award badges on projects smoothly scrolls directly to the corresponding certificate with a radiant pulse animation.
- **⚡ Dual-Row Animated Skills Marquee**: Infinite moving logo ticker displaying full-stack capabilities with hover glow effects and tech tooltips.
- **📄 Interactive In-App Resume Viewer**: Built-in PDF reader dialog with zoom controls, page-by-page navigation, full-screen expansion, and direct PDF download.

---

## 🛠️ Tech Stack & Toolbox

| Category | Technologies |
| :--- | :--- |
| **Frontend** | React 19, TypeScript, JavaScript (ES6+), Vite, Tailwind CSS, Framer Motion, Vue.js, HTML5, CSS3 |
| **Backend & APIs** | Node.js, Express.js, Python (Flask), RESTful APIs, JWT Authentication |
| **Databases & Cloud** | PostgreSQL, MongoDB, MySQL, Firebase, Supabase, Cloudflare, Vercel |
| **AI / ML & Vision** | TensorFlow, Keras, OpenCV, MobileNetV2, Data Analysis |
| **Desktop & Automation** | Python (Tkinter, CustomTkinter), ReportLab (PDF Generation) |
| **Developer Tools** | Git, GitHub, Postman, VS Code, Figma, npm, Vite PWA |

---

## 💼 Featured Projects Showcase

| Project | Category | Tech Stack | Highlights |
| :--- | :--- | :--- | :--- |
| **[BKMA](https://bkma.in/)** | Production Web Application | React, Firebase, Tailwind CSS, Cloudflare | 🏆 **Client Appreciation** • Official portal for Bulletin of Kerala Mathematics Association. Global readership across 25+ countries. |
| **SV Pharma** | Full-Stack Healthcare | React, Node.js, Express, MongoDB, Tailwind | 🏆 **Client Appreciation** • Enterprise pharmacy ERP managing 500+ medicines, real-time inventory alerts, and instant invoice printing. |
| **Transport Management** | Desktop Logistics | Python, Tkinter, MySQL, ReportLab | 🏆 **Client Appreciation** • Automated freight and logistics billing; reduced manual entry by 80% with 100% billing accuracy. |
| **Vehicle Dent Detection** | Deep Learning / AI | Python, TensorFlow, Keras, OpenCV, MobileNetV2 | Automated automotive damage appraisal with 88% validation accuracy for insurance claim pipelines. |
| **PharmIQ** | Enterprise ERP | Python, CustomTkinter, MySQL, ReportLab | Comprehensive pharmaceutical distribution ERP with GST billing, batch tracking, and low-stock alerts. |
| **UI MasterLine 2025** | UI / UX Design | Figma, Modern Design System | 🏆 **Best Performer Award** • Advanced student & teacher management system interface designed for optimal accessibility. |
| **Smart Waste Management** | IoT & AI/ML | ESP32, Firebase, Blynk, AI/ML | 🏆 **INCOMEX 2026 Selection** • Real-time bin level tracking, route optimization, and automated waste classification. |

---

## 📂 Project Architecture

```plaintext
Portfolio/
├── public/
│   ├── certificates/          # High-resolution credentials & appreciation letters
│   ├── project-previews/      # Optimized project UI screenshots (.webp)
│   ├── tech-logos/            # Tech stack SVG vectors
│   └── resume.pdf             # Curated curriculum vitae
├── src/
│   ├── components/            # Reusable UI primitives & compound widgets
│   │   ├── CertificateCard.tsx
│   │   ├── CertificateModal.tsx
│   │   ├── FeaturedProject.tsx       # Bento card with anti-collision badge header
│   │   ├── LogoMarquee.tsx           # Dual-row infinite moving tech ticker
│   │   ├── ProjectModal.tsx          # Full-screen project details deep-dive
│   │   ├── ProjectPreviewStrip.tsx   # Continuous auto-scrolling preview strip
│   │   ├── ResumeModal.tsx           # Interactive PDF viewer
│   │   └── ThemeToggle.tsx           # Dark / Light mode switcher
│   ├── data/
│   │   └── portfolio.ts       # Central source of truth for portfolio content
│   ├── sections/              # Page sections (Hero, About, Projects, Skills, Contact)
│   ├── lib/                   # Utility helpers & scroll listeners
│   ├── App.tsx                # Application root with dynamic ambient backgrounds
│   └── main.tsx               # Entry point
├── index.html                 # SEO metadata & fonts
├── tailwind.config.js         # Custom theme colors, keyframes & animations
├── vite.config.ts             # Vite build pipeline & server config
└── package.json               # Dependencies & scripts
```

---

## ⚡ Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version `18.x` or higher recommended)
- `npm` or `pnpm`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shivanand-vn/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready artifacts will be bundled in the `dist/` directory.

---

## 📬 Contact & Connect

- **Email**: [shivanandvn.mca@gmail.com](mailto:shivanandvn.mca@gmail.com)
- **LinkedIn**: [linkedin.com/in/shivanandvn](https://www.linkedin.com/in/shivanandvn)
- **GitHub**: [@shivanand-vn](https://github.com/shivanand-vn)
- **Website**: [shivanandvn.vercel.app](https://shivanandvn.vercel.app/)

---

<div align="center">
  <sub>Designed & Developed by <b>Shivanand Viranna Naganur</b> • © 2026 All Rights Reserved</sub>
</div>
