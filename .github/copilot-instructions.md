# AI Agent Instructions for Portfolio Project

## Project Overview
A personal portfolio website (Comafay) built with Express.js backend serving a single-page HTML frontend with Bootstrap 5, custom animations (AOS), and typewriter effects (Typed.js).

## Architecture

### Backend (Node.js/Express)
- **Server**: [server.js](server.js) - Minimal Express setup
  - Static file serving from `public/` directory
  - Single root route (`/`) serving `index.html`
  - Environment-driven PORT configuration (default: 3000)
  - Uses `dotenv` for `.env` configuration
- **Start Command**: `node server.js` runs on `http://localhost:3000`

### Frontend (Single-Page HTML)
- **Main File**: [index.html](index.html) (352 lines)
  - Fixed 300px left sidebar (header with nav) via `#header`
  - Content sections: intro, about, resume with `margin-left: 320px` compensation
  - Bootstrap 5 CDN + custom CSS
  - Video background + profile image
  - Social media icon links (Bootstrap Icons)

### Styling System
- **CSS Variables** (in [public/css/style.css](public/css/style.css)):
  - `--primary-color: #212529` (dark background)
  - `--secondary-color: #ffffff` (text)
  - `--tertiary-color: #ffc107` (accent/hover)
  - `--accent-color: #d63384` (secondary accent)
- **Layout**: Fixed sidebar + left-margin content pattern
- **Responsive**: Bootstrap grid for mobile adaptability

### Frontend JavaScript
- **File**: [public/scripts.js](public/scripts.js) (minimal)
  - Timeline interactions: toggles `.active` class on `.timeline-item` elements
  - Use `classList.toggle()` pattern for expanding/collapsing UI elements
- **Inline Scripts in HTML**: Quote slider and filter buttons embedded directly in [index.html](index.html)
  - Quote slider: `nextQuote()` cycles through quotes with display toggling
  - Filter buttons: Click handlers show/hide items by `data-type` attribute
  - Modal system: Click handlers open/close modal with description content
- **Video Background**: Fixed positioning overlay in [public/css/style.css](public/css/style.css)
  - `position: fixed`, `z-index: -1`, `object-fit: cover` for full-screen background

### Resume & About Section Structure
- **Resume Section** (`#resume`): Educational timeline + certifications/awards/courses
  - Timeline items expand/collapse via `.active` class with smooth max-height transition
  - Expandable `.details` div (hidden by default, `max-height: 0`)
  - Filter buttons display certifications, awards, or courses (data attributes: `data-type`, `data-id`)
  - Click items to open modal with detailed descriptions
- **About Section** (`#about`): Skill bars + quote slider
  - Skill bars: inline styles for width/color; progress bars use flexbox layout
  - Quote slider: manual toggle via `nextQuote()` function; quotes stored as `<span>` elements
  - All sections use `margin-left: 320px` for sidebar offset

### Assets Organization
- **Third-party**: [portfolio/](portfolio/) contains AOS, Bootstrap, Typed.js libraries
- **Static files**: [public/](public/) for user-served assets (CSS, images, compiled scripts)
- **Images**: Portfolio uses JFIF and MP4 video backgrounds from `public/images/`

## Developer Workflow

### Setup & Running
1. **Install dependencies**: `npm install` (installs Express and dotenv)
2. **Configure environment**: Create or verify `.env` file in root with `PORT=3000`
3. **Start server**: `node server.js` → runs on `http://localhost:3000`
4. **No build step**: Changes to HTML/CSS/JS are served directly; refresh browser to see updates

### File Structure Guidelines
- **HTML changes**: Edit [index.html](index.html) directly; server auto-serves updates
- **Styling changes**: Edit [public/css/style.css](public/css/style.css); only CSS variables and component-specific rules
- **Frontend interactivity**: Add minimal JS to [public/scripts.js](public/scripts.js) following the timeline toggle pattern
- **New static assets**: Place in [public/](public/) (images, videos, additional CSS/JS files)

## Key Conventions & Patterns

### Navigation & Routing
- **Single-page scrolling model**: Use anchor links (`#intro`, `#about`, `#resume`) - no server routing needed
- **Sidebar navigation** fixed at 300px width; all content sections account for this offset

### Content Sections
- Wrap section content in `<section id="sectionname">` with `margin-left: 320px`
- Use Bootstrap grid classes for responsive layouts
- **Key sections**: `#intro`, `#about`, `#resume` (all existing; add new ones following this pattern)

### Adding New Animated Elements
- **For scroll animations**: Add `data-aos="fade-up"` (or other AOS animation types) to HTML elements
- **AOS is pre-loaded** in HTML; animations trigger automatically on scroll
- **No JS required** for basic animations—AOS handles everything via CSS classes

### Interactivity Pattern (Minimal JavaScript)
- Prefer CSS animations (AOS library handles scroll animations)
- Use Typed.js for typewriter text effects (already loaded in HTML)
- For DOM interactions: Simple `addEventListener` + `classList` manipulation (see timeline pattern)
- Avoid complex state management; this project uses vanilla JS

### Color & Spacing
- Always reference CSS variables for colors - don't hardcode hex values
- Use Bootstrap spacing utilities (margin/padding classes) before custom CSS
- Header sidebar is `width: 300px`; adjust content `margin-left` proportionally if sidebar width changes

## External Dependencies
- **Express**: Server framework; minimal config, just static serving
- **dotenv**: Environment variables from `.env`
- **Bootstrap 5**: CSS framework via CDN in HTML head
- **AOS.js**: Scroll animations (in [portfolio/aos/](portfolio/aos/))
- **Typed.js**: Typewriter/typing effect (in [portfolio/js/typed.js/](portfolio/js/typed.js/))
- **Bootstrap Icons**: Icon library (CDN in HTML)

## Common Tasks

### Add a new portfolio section
1. Add `<section id="newsection">` in [index.html](index.html) with `margin-left: 320px`
2. Add navigation link in sidebar nav with matching `href="#newsection"`
3. Add optional CSS rules to [public/css/style.css](public/css/style.css) for section-specific styling
4. Use `data-aos="fade-up"` or other AOS animation types on elements for scroll animations

### Modify timeline items (educational background, experiences)
1. Timeline items in [index.html](index.html) use `<div class="timeline-item">` pattern
2. Add `.details { max-height: 0; }` hidden div inside each timeline-item
3. On click, toggle `.active` class to show/hide with smooth max-height animation
4. Style timeline-item headings with hover effects in [public/css/style.css](public/css/style.css)

### Add skill bars
1. Create `.skill-bar-container` > `.skill-bar` > `.skill-progress` hierarchy
2. Set `.skill-progress` width percentage inline or via JS: `style="width: 50%;"`
3. Use background-color inline or CSS variable for bar colors

### Add quote/content slider
1. Create slider container with multiple `<span>` elements (one per item)
2. Hide all spans via CSS or JS: `.quote-slider span { display: none; }`
3. Show first span by default in window.onload handler
4. Create button that calls `nextQuote()`: cycle with modulo operator, toggle display

### Modify header/sidebar
- Edit header HTML in [index.html](index.html) lines ~15-50 (`#header` section)
- Update sidebar width in [public/css/style.css](public/css/style.css) `.header { width: 300px }`
- *Deployment Notes
- **No build process**: Serve static files directly from Express
- **Production**: Set `PORT` environment variable before `node server.js` (e.g., `PORT=8000 node server.js`)
- **Environment files**: `.env` loaded automatically by dotenv; create before starting server
- **Static assets**: All public files served from `public/` directory; third-party libraries from `portfolio/`

## Critical File Mapping
| Purpose | File |
|---------|------|
| HTML structure & content | [index.html](index.html) |
| Backend server | [server.js](server.js) |
| Custom CSS & variables | [public/css/style.css](public/css/style.css) |
| Frontend interactions | [public/scripts.js](public/scripts.js) |
| Dependencies | [package.json](package.json) |
| Environment config | `.env` |
| Video background | [public/images/dark-alley-of-night-city.1920x1080.mp4](public/images/) |
| Profile images | [public/images/\*.jfif, \*.png](public/images/)d` attributes on filterable items
- Filter buttons toggle `display: none/block` based on `data-filter` attribute
- Example: Certificates/awards/courses section in [index.html](index.html) lines ~285-320

### Update styling
- Use CSS variables; never hardcode colors
- All animations are AOS-based; add `data-aos="animation-type"` to HTML elements
- Hover effects use `transition: 0.3s` pattern

## Critical File Mapping
| Purpose | File |
|---------|------|
| HTML structure & content | [index.html](index.html) |
| Backend server | [server.js](server.js) |
| Custom CSS & variables | [public/css/style.css](public/css/style.css) |
| Frontend interactions | [public/scripts.js](public/scripts.js) |
| Dependencies | [package.json](package.json) |
| Environment config | `.env` |
