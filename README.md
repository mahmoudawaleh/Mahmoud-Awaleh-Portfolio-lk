# Mahmoud Mohamed Awaleh - Production Portfolio Platform

*A comprehensive, production-ready content management system and portfolio platform*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/mahmoudawaleh-7861s-projects/v0-mahmoud-mohamed-awaleh-portfoli-xv)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/s7iVcA74yQG)
[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?logo=nextjs)](https://nextjs.org)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-336791?logo=postgresql)](https://www.postgresql.org)

## 🚀 Features

### Admin Dashboard & CMS
- **Complete Admin Panel** - Manage all content from a centralized dashboard
- **User Authentication** - Role-based access control (RBAC) with email/password auth
- **Portfolio Management** - Create, edit, and publish portfolio projects
- **Blog System** - Full-featured blog with markdown support and scheduling
- **Media Library** - Upload and manage images and files
- **Page Builder** - Create custom pages with drag-and-drop components
- **User Management** - Manage team members and their permissions
- **Analytics Dashboard** - Track views, engagement, and performance metrics
- **Settings Management** - Configure site-wide settings and metadata

### Content Management
- **Dynamic Portfolio System** - Display portfolio items from database
- **Blog Publishing** - Publish and manage blog posts with SEO metadata
- **Custom Pages** - Create unlimited custom pages with content blocks
- **Media Assets** - Centralized media library with image optimization
- **Content Scheduling** - Schedule content to publish at specific times
- **Draft/Published States** - Create drafts and schedule publishing

### Frontend Features
- **Public Portfolio Page** - Showcase portfolio projects
- **Blog Listing & Individual Posts** - Read blog content publicly
- **Dynamic Page Rendering** - Custom pages render from database
- **Search Functionality** - Full-text search across content
- **SEO Optimization** - Structured metadata and Open Graph support
- **Responsive Design** - Mobile-first, fully responsive layout

### Backend & Infrastructure
- **PostgreSQL Database** - Robust relational database with Neon
- **REST API** - Comprehensive API for all content operations
- **Authentication** - Better-Auth with JWT tokens
- **RBAC System** - Fine-grained permission control
- **Error Handling** - Structured error responses with proper HTTP codes
- **Request Validation** - Zod schema validation on all endpoints
- **Audit Logging** - Track all important actions and changes

## 📋 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database (Neon recommended)
- Environment variables configured

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd <project-directory>

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Generate and run database migrations
npm run db:push

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the app and `http://localhost:3000/admin` for the admin panel.

## 📚 Documentation

- **[API Documentation](./API.md)** - Complete API reference
- **[Implementation Guide](./IMPLEMENTATION.md)** - Detailed feature documentation
- **[Quick Start Guide](./QUICKSTART.md)** - Step-by-step setup instructions
- **[Migration Guide](./MIGRATION.md)** - Migrate existing content to CMS

## 🏗️ Project Structure

```
/app
  /(public)              # Public-facing pages
    /blog               # Blog listing and posts
    /portfolio          # Portfolio listing and projects
  /admin                # Admin panel
    /analytics          # Analytics dashboard
    /blog              # Blog management
    /media             # Media library
    /pages             # Page management
    /portfolio         # Portfolio management
    /users             # User management
    /settings          # Site settings
  /api                  # REST API endpoints
    /auth              # Authentication endpoints
    /blog              # Blog API
    /portfolio         # Portfolio API
    /pages             # Pages API
    /media             # Media API
    /users             # Users API
/lib
  /db                   # Database configuration
  /auth                 # Authentication logic
  /api                  # API utilities
  /hooks               # React hooks
  /validators          # Schema validation
/components
  /admin               # Admin components
  /ui                  # Shadcn UI components
```

## 🔐 Security Features

- **Password Hashing** - Secure password hashing with better-auth
- **Session Management** - Secure session tokens
- **RBAC** - Role-based access control for fine-grained permissions
- **Input Validation** - Schema validation on all inputs
- **SQL Injection Prevention** - Parameterized queries with Drizzle ORM
- **CORS & Security Headers** - Proper security configurations
- **Audit Logging** - Track all important actions

## 🗄️ Database Schema

The platform uses 30+ tables for:
- **Users & Auth** - User accounts, sessions, tokens
- **Portfolio** - Projects, technologies, images, links
- **Blog** - Posts, categories, tags, comments
- **Pages** - Custom pages, content blocks, sections
- **Media** - Files, images, metadata
- **Analytics** - Views, events, performance metrics
- **Settings** - Site configuration, metadata
- **Audit Logs** - Action history and compliance

## 📦 Built With

- **Framework** - Next.js 15 with React 19
- **Database** - PostgreSQL with Drizzle ORM
- **Authentication** - Better-Auth
- **Validation** - Zod schemas
- **UI Components** - Shadcn/ui
- **Styling** - Tailwind CSS
- **Forms** - React Hook Form

## 🚢 Deployment

The project is configured for Vercel deployment:

```bash
npm run build
npm start
```

Environment variables are managed via Vercel's Vars section.

## 🔄 Syncing with v0.dev

This repository automatically syncs with v0.dev deployments:

1. Create and modify your project on [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version

## 📖 API Overview

The platform provides a comprehensive REST API:

- `GET /api/blog` - List all blog posts
- `POST /api/blog` - Create new blog post
- `GET /api/blog/[id]` - Get specific blog post
- `PATCH /api/blog/[id]` - Update blog post
- `DELETE /api/blog/[id]` - Delete blog post
- `GET /api/portfolio` - List portfolio projects
- `POST /api/portfolio` - Create new project
- `GET /api/pages` - List custom pages
- `POST /api/pages` - Create new page
- `GET /api/media` - List media files
- `POST /api/media` - Upload new file

See [API.md](./API.md) for complete documentation.

## 📝 License

MIT - See LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please follow the existing code style and create pull requests for any improvements.

## 📧 Support

For issues and questions, please open a GitHub issue or contact the maintainer.
