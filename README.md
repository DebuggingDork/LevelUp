
# LevelUp AI - Chrome Extension Landing Page

A modern, responsive landing page for the LevelUp AI Chrome extension built with React, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Design**: Sleek, professional design with gradient backgrounds and glass morphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Privacy-First**: Comprehensive privacy policy page
- **Professional Sections**: 
  - Hero section with compelling CTA
  - Features showcase
  - Demo video placeholders
  - How-to-use guide
  - Tips & tricks
  - About the creator
  - Contact/support
  - Professional footer

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd levelup-ai-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Customization

### Adding Your Own Icon
Replace the rocket emoji (🚀) in the following files with your custom icon:
- `src/components/HeroSection.tsx` (line 23)
- `src/pages/Index.tsx` (line 17)
- `src/components/Footer.tsx` (line 9)

### Adding Creator Photo
Replace the placeholder in `src/components/AboutSection.tsx` with your actual photo by updating the image source.

### Adding Demo Videos
Replace the video placeholders in `src/components/ScreenshotsSection.tsx` with your actual demo videos.

## 🚀 Deployment on Vercel

### Method 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub**:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Vite project

3. **Configure Build Settings** (usually auto-detected):
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**:
   - Click "Deploy"
   - Your site will be live at `https://your-project-name.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

4. **Follow the prompts**:
   - Set up and deploy? `Y`
   - Which scope? Select your account
   - Link to existing project? `N`
   - Project name? Press enter or type a name
   - In which directory is your code located? `./`

5. **Production Deployment**:
```bash
vercel --prod
```

### Method 3: Manual Upload

1. **Build the project**:
```bash
npm run build
```

2. **Upload to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Click "Browse" and select your `dist` folder
   - Click "Deploy"

## 🔧 Build Configuration

The project includes optimal build configuration for production:

- **Vite**: Fast build tool with hot reload
- **TypeScript**: Type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework
- **Tree Shaking**: Automatic removal of unused code
- **Asset Optimization**: Images and assets are optimized for production

## 📝 Environment Variables

No environment variables are required for this static frontend application.

## 🎯 Performance Optimizations

- **Code Splitting**: Automatic code splitting for optimal loading
- **Image Optimization**: Responsive images with proper sizing
- **CSS Purging**: Unused CSS is automatically removed
- **Minification**: All assets are minified in production
- **Gzip Compression**: Enabled by default on Vercel

## 🔄 Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- Deploy every push to the main branch
- Create preview deployments for pull requests
- Provide deployment URLs for testing

## 📱 Custom Domain Setup

To add a custom domain on Vercel:

1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your domain
4. Configure DNS settings as instructed
5. Vercel will automatically handle SSL certificates

## 🧪 Testing

Run the build locally to test before deployment:

```bash
npm run build
npm run preview
```

## 📋 Deployment Checklist

- [ ] Replace placeholder icons with your actual icons
- [ ] Add your creator photo
- [ ] Update contact information
- [ ] Test all links and navigation
- [ ] Verify responsive design on different devices
- [ ] Check performance with Lighthouse
- [ ] Test privacy policy page
- [ ] Verify all external links work correctly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📧 Support

For support, email mamidala.mani1355@gmail.com or create an issue in the repository.

---

**Built with ❤️ by Mani Mamidala**

Happy deploying! 🚀
