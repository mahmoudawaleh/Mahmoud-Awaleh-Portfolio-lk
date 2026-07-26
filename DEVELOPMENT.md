# Development Guide

This guide covers development setup, architecture, and contribution guidelines for the production platform.

## Development Setup

### Initial Setup

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Add your Neon database URL to .env.local
# POSTGRES_URL=postgresql://...

# Generate and push database schema
npm run db:push

# Start development server
npm run dev
```

The app will be available at http://localhost:3000

### Database Commands

```bash
# Generate migrations from schema changes
npm run db:generate

# Push schema changes to database
npm run db:push

# Run database migrations
npm run db:migrate

# Open Drizzle Studio to view database
npm run db:studio
```

## Project Architecture

### Directory Structure

```
/app                 # Next.js app routes
  /api              # REST API endpoints (route handlers)
  /admin            # Admin dashboard and management pages
  /(public)         # Public-facing pages (route group)
/lib                 # Shared utilities and functions
  /db               # Database setup and client
  /auth             # Authentication utilities
  /api              # API helpers and response handlers
  /hooks            # React hooks
  /validators       # Zod schema validators
/components          # React components
  /admin            # Admin-specific components
  /ui               # Shadcn UI components
/public             # Static assets
```

### Key Files

- `drizzle.config.ts` - Drizzle ORM configuration
- `lib/db/schema.ts` - Complete database schema definition
- `lib/auth/permissions.ts` - RBAC permission rules
- `lib/validators/index.ts` - Request validation schemas

## Database Schema

The platform uses 30+ tables organized into logical groups:

### Users & Authentication
- `users` - User accounts and profiles
- `sessions` - Active user sessions
- `tokens` - Reset and verification tokens

### Content Management
- `portfolio_items` - Portfolio projects
- `blog_posts` - Blog articles
- `pages` - Custom pages
- `page_blocks` - Content blocks for pages

### Media & Files
- `media_items` - Images and files
- `media_folders` - Folder organization

### Metadata & SEO
- `page_metadata` - SEO metadata per page
- `tags` - Content tags
- `categories` - Content categories

### Analytics & Tracking
- `analytics_events` - User interaction events
- `analytics_pageviews` - Page view data
- `analytics_referrers` - Traffic source tracking

### System & Admin
- `settings` - Site-wide configuration
- `audit_logs` - Activity logging
- `api_keys` - API key management
- `webhooks` - Webhook configurations

## API Architecture

All API endpoints follow REST conventions:

### Endpoint Structure

```
GET    /api/[resource]              - List all items
POST   /api/[resource]              - Create new item
GET    /api/[resource]/[id]         - Get specific item
PATCH  /api/[resource]/[id]         - Update item
DELETE /api/[resource]/[id]         - Delete item
```

### Response Format

All responses follow a consistent format:

```json
{
  "success": true,
  "data": { },
  "error": null,
  "metadata": {
    "timestamp": "2024-01-01T00:00:00Z",
    "version": "1.0"
  }
}
```

### Error Responses

```json
{
  "success": false,
  "data": null,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request parameters",
    "details": []
  }
}
```

## Authentication & RBAC

### User Roles

- `admin` - Full system access
- `editor` - Can create and manage content
- `viewer` - Read-only access
- `guest` - Unauthenticated users

### Permission System

Permissions are defined in `lib/auth/permissions.ts` and follow a resource + action pattern:

```typescript
// Example permissions
portfolio:create    // Create portfolio items
portfolio:read      // View portfolio
blog:publish        // Publish blog posts
users:manage        // Manage user accounts
settings:edit       // Modify site settings
```

### Adding New Permissions

1. Define in `lib/auth/permissions.ts`
2. Add to role assignments
3. Check in route handlers using `checkPermission()`

## Adding New Features

### Adding a New API Endpoint

1. Create route handler in `/app/api/[resource]/route.ts`
2. Define request/response schemas in `lib/validators`
3. Add database queries using Drizzle ORM
4. Use `createResponse()` for consistent responses
5. Add error handling with `createErrorResponse()`

Example:

```typescript
// app/api/example/route.ts
import { createResponse, createErrorResponse } from '@/lib/api/response'
import { exampleSchema } from '@/lib/validators'
import { db } from '@/lib/db'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const validated = exampleSchema.parse(body)
    
    // Database operation
    const result = await db.insert(/* ... */)
    
    return createResponse('Example created', result, 201)
  } catch (error) {
    return createErrorResponse(error)
  }
}
```

### Adding a New Page

1. Create directory structure in `/app/(public)` or `/admin`
2. Add `page.tsx` for the page component
3. Use server components when possible
4. Fetch data from API endpoints
5. Add to navigation if needed

### Adding Database Fields

1. Update schema in `lib/db/schema.ts`
2. Run `npm run db:generate` to create migration
3. Review migration file
4. Run `npm run db:push` to apply changes
5. Update validators if needed

## Testing

### Manual Testing

Use the admin dashboard at `/admin` to test functionality:

1. `/admin` - Dashboard overview
2. `/admin/portfolio` - Portfolio management
3. `/admin/blog` - Blog management
4. `/admin/pages` - Page management
5. `/admin/media` - Media library
6. `/admin/users` - User management
7. `/admin/settings` - Site settings
8. `/admin/analytics` - Analytics view

### API Testing

Use curl or Postman to test API endpoints:

```bash
# Create blog post
curl -X POST http://localhost:3000/api/blog \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Post",
    "slug": "test-post",
    "content": "Test content",
    "published": true
  }'

# Get all posts
curl http://localhost:3000/api/blog

# Get specific post
curl http://localhost:3000/api/blog/1

# Update post
curl -X PATCH http://localhost:3000/api/blog/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Title"}'

# Delete post
curl -X DELETE http://localhost:3000/api/blog/1
```

## Performance Optimization

### Database
- Indexes are created on frequently queried columns
- Use `.with()` for eager loading relationships
- Implement pagination for large datasets

### Caching
- Use Next.js built-in caching with `revalidateTag()`
- Cache API responses in browsers
- Consider Redis for session management

### Frontend
- Code split components using dynamic imports
- Optimize images with Next.js Image component
- Use React.memo() for expensive components

## Deployment

### Vercel Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

Environment variables are managed in Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add all variables from `.env.example`

### Database Migrations

Before deploying:

```bash
# Test migrations locally
npm run db:push

# Review changes
npm run db:studio
```

The production database URL should be set to your Neon database.

## Debugging

### Enable Debug Logging

Add console.log statements with `[v0]` prefix:

```typescript
console.log('[v0] Debug info:', data)
```

These help track execution flow without cluttering the codebase.

### Check Database Queries

```bash
# Open Drizzle Studio to inspect database
npm run db:studio
```

### Network Requests

- Use browser DevTools Network tab
- Check API response format and status codes
- Look for CORS or authentication errors

## Code Style

### TypeScript
- Use proper types for all functions
- Avoid `any` type unless absolutely necessary
- Use enums for constants

### React Components
- Keep components small and focused
- Use functional components with hooks
- Lift state up when needed
- Memoize expensive components

### Database Queries
- Use Drizzle ORM for all queries
- Never construct raw SQL
- Use parameterized queries
- Handle null values explicitly

## Troubleshooting

### Database Connection Issues

```bash
# Test database connection
npm run db:studio

# If connection fails, check:
# 1. POSTGRES_URL is correct in .env.local
# 2. Database is accessible
# 3. Firewall allows connections
```

### Dependencies Issues

```bash
# Clear and reinstall
rm -rf node_modules pnpm-lock.yaml
npm install
```

### Build Errors

```bash
# Clean build cache
rm -rf .next
npm run build
```

## Contributing

1. Create a feature branch from `main`
2. Make changes following code style
3. Test functionality locally
4. Create pull request with description
5. Wait for review and CI checks

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Drizzle ORM Docs](https://orm.drizzle.team)
- [Better Auth Docs](https://www.better-auth.com)
- [Zod Validation](https://zod.dev)
- [Tailwind CSS](https://tailwindcss.com)
