# Personal Portfolio Website

A modern, professional portfolio website built for a 3rd-year IT Engineering student specializing in MERN Stack and AI/ML technologies.

## Features

- **Responsive Design**: Fully mobile-friendly with a mobile-first approach
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Interactive Animations**: Subtle hover effects and scroll animations
- **Contact Form**: Integrated with Supabase for message storage
- **Modern UI**: Glassmorphism effects, gradients, and smooth transitions
- **SEO Friendly**: Optimized meta tags and semantic HTML

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL)
- **Build Tool**: Vite
- **Deployment Ready**: Optimized for Vercel/Netlify

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or download the code

2. Install dependencies:
```bash
npm install
```

3. The Supabase configuration is already set up in `.env` file

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit: `http://localhost:5173`

## Customization Guide

### 1. Personal Information

Update the following files with your information:

**Hero Section** (`src/components/Hero.tsx`):
- Replace "Your Name" with your actual name
- Update links to your GitHub, LinkedIn, email, and LeetCode profiles

**About Section** (`src/components/About.tsx`):
- Customize the description text
- Update the initials in the profile placeholder (YN)
- Modify CGPA and education details

**Contact Section** (`src/components/Contact.tsx`):
- Update email address
- Update phone number
- Update location

**Footer** (`src/components/Footer.tsx`):
- Update all personal information and links

### 2. Projects

Edit `src/components/Projects.tsx` to add your own projects:
- Replace project titles and descriptions
- Update technology stacks
- Add your project URLs (GitHub and live demos)
- Use stock photos from Pexels or your own screenshots

### 3. Experience

Edit `src/components/Experience.tsx`:
- Update with your actual internships and work experience
- Modify job descriptions and achievements
- Adjust time periods and locations

### 4. Skills

Edit `src/components/Skills.tsx`:
- Add or remove skills based on your expertise
- Adjust skill levels (percentage)
- Modify technology tags at the bottom

### 5. Resume

Edit `src/components/Resume.tsx`:
- Update statistics (CGPA, projects count, internships)
- Create and link to your actual PDF resume

### 6. Colors and Theme

To change the color scheme, update the gradient classes in Tailwind CSS:
- Current gradients use: `from-blue-500 to-purple-600`
- Replace throughout the components with your preferred colors
- Common patterns: `bg-gradient-to-r from-[color1] to-[color2]`

### 7. Images

Replace placeholder images:
- Profile photo in About section (currently showing initials)
- Project screenshots (currently using Pexels stock photos)

## Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder, ready for deployment.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Netlify
1. Push your code to GitHub
2. Import the repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables
6. Deploy

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Database Schema

The contact form uses a Supabase PostgreSQL database with the following schema:

```sql
contacts (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
)
```

Row Level Security (RLS) is enabled:
- Anonymous users can insert contact submissions
- Only authenticated users can view contacts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Contact

Feel free to reach out if you have any questions or suggestions!

---

**Built with React, TypeScript, and Tailwind CSS**
