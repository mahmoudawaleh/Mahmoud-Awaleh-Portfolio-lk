# Quick Start Guide

## Setup (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
# Copy the environment template
cp .env.example .env.local

# Update DATABASE_URL with your Neon connection string
# Update BETTER_AUTH_SECRET (generate with: openssl rand -base64 32)
```

### 3. Setup Database
```bash
# Generate migration files from schema
npm run db:generate

# Push schema to database
npm run db:push
```

### 4. Start Development Server
```bash
npm run dev
```

Access the application:
- **Public Site**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin
- **Blog**: http://localhost:3000/blog
- **Portfolio**: http://localhost:3000/portfolio

## Create First Content

### Create a Portfolio Item

1. Navigate to Admin → Portfolio
2. Click "New Project"
3. Fill in the form:
   - **Title**: "My First Project"
   - **Description**: Project summary
   - **Content**: Detailed description (supports HTML)
   - **Category**: Design, Development, etc.
   - **Tags**: Comma-separated tags
   - **Status**: Draft (can be changed to Published)
4. Click "Create"

### Create a Blog Post

1. Navigate to Admin → Blog
2. Click "New Post"
3. Fill in the form:
   - **Title**: "My First Post"
   - **Excerpt**: Short summary
   - **Content**: Full article content
   - **Category**: Pick a category
   - **Tags**: Related tags
4. Click "Create"

### Upload Media

1. Navigate to Admin → Media
2. Click "Upload Media"
3. Select and upload images
4. Add alt text and captions
5. Use in portfolio/blog content

## Key Features

### Dashboard
- View all statistics at a glance
- Page views analytics
- Content overview

### Content Management
- **Pages**: Create custom CMS pages
- **Portfolio**: Showcase projects with images and links
- **Blog**: Write and publish articles
- **Media**: Centralized asset library

### User Management
- Add team members
- Set roles (Admin, Editor, Viewer)
- Track user activity

### Settings
- Customize site colors
- Update site information
- Toggle features on/off

## API Endpoints

All API endpoints follow REST conventions:

```bash
# Get all portfolio items
curl http://localhost:3000/api/portfolio

# Get specific item
curl http://localhost:3000/api/portfolio/{id}

# Create new item
curl -X POST http://localhost:3000/api/portfolio \
  -H "Content-Type: application/json" \
  -d '{"title":"Project","slug":"project",...}'

# Update item
curl -X PUT http://localhost:3000/api/portfolio/{id} \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated",...}'

# Delete item
curl -X DELETE http://localhost:3000/api/portfolio/{id}
```

Same pattern applies to `/api/blog`, `/api/pages`, and `/api/media`.

## Troubleshooting

### Database Connection Error
```
Error: DATABASE_URL is not set
```
Solution: Make sure DATABASE_URL is set in `.env.local`

### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::3000
```
Solution: Kill the process or use a different port:
```bash
PORT=3001 npm run dev
```

### Missing Dependencies
```
Error: Cannot find module 'drizzle-orm'
```
Solution: Run `npm install` again

### Database Migration Failed
```
Error: Error querying the database
```
Solution: Check that DATABASE_URL is correct and the database exists

## Next Steps

1. **Connect to Database**: Update DATABASE_URL with your Neon database
2. **Create First Content**: Add portfolio items and blog posts
3. **Customize Design**: Update colors in settings
4. **Add Team Members**: Create editor accounts
5. **Deploy**: Push to Vercel or your preferred hosting

## Database Structure

The database includes tables for:
- Users and authentication
- Content (pages, posts, items)
- Media and files
- Analytics tracking
- SEO metadata
- Notifications and audit logs

See `IMPLEMENTATION.md` for complete schema details.

## Support

For issues and questions:
1. Check the error logs in console
2. Review the API response status codes
3. Verify environment variables are set
4. Check the database connection

## Performance Tips

- Use image optimization for media uploads
- Enable caching for frequently accessed pages
- Monitor database queries in Drizzle Studio
- Use the analytics dashboard to track performance

---

Happy building! 🚀
