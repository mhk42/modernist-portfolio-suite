# Process Notes: Corporate Modernism Portfolio Website

## Project Overview
This project involved creating a personal portfolio website that reflects the **Corporate Modernism** style. The goal was to design a professional, clean, and structured site that communicates identity, systematized engineering work, and project showcases.

---

## 1. Research Phase

### 1.1 Understanding Corporate Modernism
- **Key Traits Identified:**
  - Grid-based layout and modular sections
  - Neutral, professional color palettes (white, gray, subtle blues)
  - Minimal ornamentation, focusing on typography and spacing
  - Strong hierarchy with consistent borders, dividers, and card layouts
  - Subtle interactivity (hover effects, transitions) without excessive animation
  - Systematic, professional identity in content and naming

- **Sources Referenced:**
  - [IBM](https://www.ibm.com/)
  - [Adobe](https://www.adobe.com/)
  - [Deloitte](https://www.deloitte.com/)
  - Web design inspiration blogs (webstacks.com, framerbite.com)
  - Examples of lesser-known corporate-modern websites for variation and adaptability

### 1.2 Identifying Design Patterns
- Hero section with large, bold heading and supporting text
- Project cards in a responsive grid
- Modular content sections with clear headers and dividers
- Footer with minimal info and consistent style
- Use of primary color for CTAs and accents

---

## 2. Planning the Website Structure

### 2.1 Page Outline
- **Header & Navigation:** Logo, menu links, sticky top, consistent identity
- **Main Section:**
  - Hero Section: tagline, brief description, CTA button
  - Featured Projects: project cards, titles, short descriptions, links
- **Footer:** copyright, versioning, simple styling
- **Responsive Considerations:** mobile-friendly typography and spacing

### 2.2 Design Choices
- **Font:** Inter, fallback to Arial/Helvetica/sans-serif
- **Colors:**
  - `corporate-primary`: #004d9c (authority blue)
  - `corporate-dark`: #1a1a1a (text hierarchy)
  - `corporate-light`: #f7f7f7 (background)
  - `corporate-border`: #cccccc (dividers and card borders)
- **Interactivity:** subtle hover effects for cards and links
- **Styling Framework:** Tailwind CSS for rapid layout and styling

---

## 3. Development Phase

### 3.1 Initial Setup
- Created base HTML template with `<!DOCTYPE html>` and `<html lang="en">`
- Linked Tailwind CSS via CDN for utility-first styling
- Added `<meta>` viewport tag for responsive design
- Configured custom Tailwind colors and font families

### 3.2 Building Components
- **Header & Navigation:** sticky top bar, logo, links with hover color changes
- **Hero Section:** large heading, description, CTA button
- **Project Cards:** grid layout with title, category, description, link
- **Footer:** minimalist, centered text

### 3.3 Custom Styling
- Defined CSS classes for:
  - `.header-border`
  - `.logo-mark`
  - `.project-card`
  - `.h-section-divider`
- Applied subtle hover transforms and box shadows
- Ensured mobile responsiveness with media queries

---

## 4. Testing & Refinement
- **Responsiveness:** tested layout on multiple screen widths (desktop, tablet, mobile)
- **Accessibility:** checked color contrast and readable font sizes
- **Consistency:** verified that spacing, typography, and colors remained uniform across sections
- **Performance:** minimized custom CSS, leveraged Tailwind utilities

---

## 5. Reflections
- Corporate Modernism is about **order, clarity, and professional identity**. Following this style helped create a portfolio that is both structured and visually clean.
- Using Tailwind CSS accelerated development while maintaining precise control over styling.
- Subtle interactivity and grid-based layout improved user experience without clutter.
- Future improvements could include:
  - Adding a blog or insights section in the same corporate-modern style
  - Including system diagrams or schematic visuals to reinforce engineering identity
  - Enhancing accessibility features (ARIA labels, keyboard navigation)

---

## 6. References
- IBM: https://www.ibm.com/  
- Adobe: https://www.adobe.com/  
- Deloitte: https://www.deloitte.com/  
- Web design inspiration: webstacks.com, framerbite.com, minimadesk.com  
- Tailwind CSS documentation: https://tailwindcss.com/docs
