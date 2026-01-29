# Modern Portfolio Website

A modern, responsive portfolio website built with React + Vite, featuring clean design, smooth animations, and professional functionality.

## 🚀 Features

- **Modern Design**: Clean, minimalistic design with professional aesthetics
- **Responsive Layout**: Mobile-first approach with seamless tablet and desktop experience
- **Interactive Components**: Auto-scrolling testimonials, project modals, image carousel
- **Smooth Animations**: Framer Motion animations and micro-interactions
- **Contact Form**: Fully functional contact form with validation
- **Blog System**: Complete blog functionality with markdown support
- **Gallery**: Interactive image gallery with lightbox functionality
- **Performance Optimized**: Fast loading with lazy loading and optimized images

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite

## 🎨 Content Management with Sanity CMS

This project uses Sanity CMS as an external headless CMS for content management. The admin panel (Sanity Studio) runs separately from the frontend.

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- A Sanity account (free at [sanity.io](https://www.sanity.io))

### Initial Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Create Sanity Project**
   - Go to [sanity.io/manage](https://www.sanity.io/manage)
   - Create a new project
   - Note your Project ID and Dataset name (usually "production")

3. **Configure Environment Variables**
   
   Create a `.env` file in the project root:
   ```env
   VITE_SANITY_PROJECT_ID=your_project_id_here
   VITE_SANITY_DATASET=production
   ```

   **Important:** Never commit `.env` to version control. It's already in `.gitignore`.

4. **Install Sanity CLI** (if not already installed)
   ```bash
   npm install -g @sanity/cli
   ```

5. **Initialize Sanity Studio**
   ```bash
   sanity init
   ```
   - Select your existing project
   - Choose the project path (e.g., `studio/`)
   - Select "Clean project with no predefined schemas"

6. **Copy Schema Files**
   
   Copy the schema files from the `schemas/` directory to your Sanity Studio:
   ```bash
   cp schemas/* studio/schemas/
   ```

7. **Update Sanity Studio Configuration**
   
   Edit `studio/sanity.config.js` to import the schemas:
   ```javascript
   import {defineConfig} from 'sanity'
   import {deskTool} from 'sanity/desk'
   import {visionTool} from '@sanity/vision'
   import {schemaTypes} from './schemas'

   export default defineConfig({
     name: 'default',
     title: 'Portfolio CMS',
     projectId: 'your_project_id',
     dataset: 'production',
     plugins: [deskTool(), visionTool()],
     schema: {
       types: schemaTypes,
     },
   })
   ```

8. **Start Sanity Studio**
   ```bash
   cd studio
   sanity start
   ```
   
   Sanity Studio will open at `http://localhost:3333`

9. **Deploy Sanity Studio** (Optional)
   ```bash
   cd studio
   sanity deploy
   ```
   
   Your studio will be available at `https://your-project.sanity.studio`

### Content Structure

The CMS includes the following content types:

- **Personal Info** (Singleton): Your profile, bio, contact info, social links
- **Projects**: Portfolio projects with categories, images, and detailed descriptions
- **Blog Posts**: Articles with rich text, featured images, and SEO fields
- **Skills**: Skill categories with proficiency levels
- **Tools**: Technologies and tools you use
- **Testimonials**: Client and colleague testimonials

### Adding Content

1. Open Sanity Studio (locally or deployed)
2. Navigate to the content type you want to edit
3. Fill in the required fields
4. Click "Publish" to make content live
5. The frontend will automatically fetch the new content

### Fallback Data

If Sanity is not configured or unavailable, the website will use fallback data from `src/data/placeholderData.js`. This ensures the site remains functional during development or if CMS connection fails.

### Troubleshooting

**Issue: "Missing environment variables" error**
- Ensure `.env` file exists in project root
- Verify `VITE_SANITY_PROJECT_ID` and `VITE_SANITY_DATASET` are set
- Restart the dev server after adding environment variables

**Issue: "CORS error" when fetching data**
- Add your localhost and production domains to CORS origins in Sanity project settings
- Go to [sanity.io/manage](https://www.sanity.io/manage) → Your Project → API → CORS Origins

**Issue: Content not updating**
- Check if content is published (not draft) in Sanity Studio
- Verify environment variables are correct
- Check browser console for API errors

### Development Workflow

1. **Start Frontend**: `npm run dev` (runs on `http://localhost:5173`)
2. **Start Sanity Studio**: `cd studio && sanity start` (runs on `http://localhost:3333`)
3. Edit content in Sanity Studio
4. Changes appear immediately in the frontend (with hot reload)

## 📁 Project Structure

