# SOMAME Team Research Platform

[![Live Site](https://img.shields.io/badge/Live_Site-somameresearch.netlify.app-8B2E1A?style=for-the-badge&logo=netlify)](https://somameresearch.netlify.app/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> **Official student-led research portal** under the **Society of Metallurgical & Material Engineers (SOMAME)** at the **Department of Metallurgical and Materials Engineering (MME)**, **University of Engineering and Technology (UET), Lahore, Pakistan**.

🌐 **Live Platform**: [https://somameresearch.netlify.app/](https://somameresearch.netlify.app/)  
🏛️ **Department Website**: [https://mme.uet.edu.pk/](https://mme.uet.edu.pk/)

---

## 🔬 Overview

SOMAME Team Research is an academic research platform established to bridge theoretical metallurgy with hands-on scientific investigation, experimental characterization, and computational AI tools. The platform provides students with a progressive 4-phase framework: **Learn → Explore → Practice → Research**.

### Core Research Domains
- **MAT-01**: Microstructure & Characterization *(SEM, EDX, XRD, TEM, EBSD, Optical Metallography)*
- **MAT-02**: Phase Diagrams & Thermodynamics *(CALPHAD, Thermo-Calc, Gibbs Energy Minimization)*
- **MAT-03**: Mechanical Behavior of Materials *(Tensile Testing, Hardness Mapping, Fatigue, Creep, Fractography)*
- **MAT-04**: Computational Materials Science *(DFT, VASP, Quantum ESPRESSO, LAMMPS, FEA)*
- **MAT-05**: AI × Materials Integration *(ML Property Prediction, NLP Literature Mining, AFLOW, Materials Project)*
- **MAT-06**: Corrosion & Surface Science *(Electrochemical EIS, Potentiodynamic Polarization, Protective Coatings)*

---

## 🏛️ Governance & Leadership

- **Society Advisor**: **Dr. Khushnuda Nur** — Assistant Professor, Department of Metallurgical & Materials Engineering (MME), UET Lahore
- **Director**: **Fatima Imran** — Final Year Undergraduate (Batch 2023–2027)
- **Co-Director**: **Abdullah Waris** — 3rd Year Undergraduate (Batch 2024–2028)
- **Co-Director**: **Adeel Shahid** — 3rd Year Undergraduate (Batch 2024–2028)

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS with custom institutional design tokens (`#8B2E1A` burnt sienna, `#0F172A` charcoal, `#F8F7F5` warm surface, `#E8E4DF` sand border)
- **Build Tool**: Vite 6 (with Rolldown / SWC optimizations)
- **Linter**: Oxlint (116 rules, type-aware linting)
- **Icons**: Lucide React + Custom Scientific SVGs
- **SEO & AEO**: Full Schema.org JSON-LD Knowledge Graph, OpenGraph, Twitter Cards, `sitemap.xml`, `robots.txt`, and `/llms.txt`

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` (v9.0.0 or higher)

### Installation
```bash
# 1. Clone repository
git clone https://github.com/<your-username>/somame-research.git
cd somame-research

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
This generates an optimized, minified production bundle in the `dist/` directory.

### Code Linting
```bash
npm run lint
# or
npx oxlint
```

---

## 🌐 Netlify Deployment

This repository is pre-configured with `netlify.toml` and `public/_redirects` for zero-configuration Netlify deployments:

### Option A: Connect via GitHub (Recommended for Continuous Deployment)
1. Push this repository to your GitHub account (see instructions below).
2. Log into [Netlify](https://app.netlify.com/).
3. Click **"Add new site"** ➔ **"Import an existing project"** ➔ Choose **GitHub**.
4. Select your repository.
5. The build settings will be automatically detected from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy site"**. Every push to `main` will automatically trigger a new deployment.

### Option B: Deploy via Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

---

## 📦 Pushing to GitHub

To push this codebase to a new GitHub repository:

```bash
# 1. Initialize git (if not already done)
git init -b main

# 2. Stage all files
git add .

# 3. Commit changes
git commit -m "feat: complete SOMAME Team Research platform with SEO, AEO & mobile optimization"

# 4. Add your GitHub remote repository
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 5. Push to GitHub
git push -u origin main
```

---

## 📄 License & Attribution

- **Institution**: Department of Metallurgical & Materials Engineering (MME), University of Engineering and Technology (UET), Lahore, Pakistan.
- **Design & Development**: Built & Designed by [**ViR Developers**](https://virdevelopers.netlify.app).
