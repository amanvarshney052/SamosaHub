# SamosaHub Next.js Application

This is the enhanced React/Next.js version of the SamosaHub website, featuring advanced animations and a modular architecture.

## 🚀 Key Features
- **Framer Motion Integration**: Smooth scroll-triggered animations and parallax effects.
- **Modular Components**: Clean architecture with reusable UI blocks.
- **Parallax Hero**: Interactive first impression.
- **Tailwind CVA**: Type-safe component variants.

## Prerequisites

You must have **Node.js** installed on your computer.
Download it from: [https://nodejs.org/](https://nodejs.org/)

## Getting Started

1. Open your terminal.
2. Navigate to this directory:
   ```bash
   cd samosahub-next
   ```
3. **IMPORTANT: Install new dependencies:**
   ```bash
   npm install
   npm install framer-motion clsx tailwind-merge class-variance-authority
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `components/ui/AnimatedSection.tsx`: Core animation wrapper.
- `components/home/`: Landing page feature blocks.
- `lib/utils.ts`: Styles merging utility.
- `app/`: Next.js 14 App Router pages.
