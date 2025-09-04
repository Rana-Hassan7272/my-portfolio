# 🚀 Vercel Deployment Guide

This guide will help you deploy your portfolio website to Vercel quickly and easily.

## 📋 Prerequisites

- GitHub account
- Vercel account (free)
- Your portfolio code pushed to GitHub

## 🎯 Quick Deployment Steps

### Method 1: Direct Upload to Vercel (Recommended)

1. **Prepare Your Project**
   - Make sure all files are committed to your repository
   - Ensure `package.json` has the correct build script: `"build": "vite build"`

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Vite project
   - Click "Deploy"

3. **Configuration**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from your project directory
vercel

# For production deployment
vercel --prod
```

## ⚙️ Configuration Files

The following files are already configured for optimal Vercel deployment:

### `vercel.json`
- Configures build settings
- Sets up routing for SPA
- Adds security headers
- Optimizes caching for static assets

### `.vercelignore`
- Excludes unnecessary files from deployment
- Reduces build time and deployment size

## 🔧 Build Settings

Vercel will automatically detect these settings:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node.js Version**: 18.x (latest)

## 🌐 Custom Domain (Optional)

1. Go to your project dashboard on Vercel
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Wait for SSL certificate (automatic)

## 📊 Performance Optimizations

Your deployment includes:
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Image optimization
- ✅ Static asset caching
- ✅ Security headers
- ✅ Gzip compression

## 🔄 Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch triggers automatic deployment
- Preview deployments for pull requests
- Instant rollbacks to previous versions

## 🐛 Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure build script exists: `"build": "vite build"`
- Verify Node.js version compatibility

### Routing Issues
- The `vercel.json` includes SPA routing configuration
- All routes redirect to `index.html` for client-side routing

### Environment Variables
- Add any environment variables in Vercel dashboard
- Go to Settings → Environment Variables

## 📈 Analytics & Monitoring

Vercel provides:
- Real-time analytics
- Performance monitoring
- Error tracking
- Core Web Vitals metrics

## 🎉 Success!

Once deployed, your portfolio will be available at:
- `https://your-project-name.vercel.app`
- Or your custom domain if configured

Your portfolio is now live and ready to showcase your AI engineering expertise! 🚀
