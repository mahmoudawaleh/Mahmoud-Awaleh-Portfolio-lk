# Migration Guide: From Hardcoded to CMS

This guide helps you migrate from hardcoded portfolio content to the new database-driven CMS system.

## Overview

The old portfolio had content hardcoded in React components. The new system stores everything in the database for easy management via the admin panel.

### Old Structure
```
components/portfolio.tsx  ← hardcoded data
components/blog.tsx      ← hardcoded data
components/hero.tsx      ← hardcoded data
```

### New Structure
```
database (Neon PostgreSQL)
  ├── portfolio_items table
  ├── blog_posts table
  ├── pages table
  └── media table

Admin UI
  ├── Portfolio management
  ├── Blog editor
  └── Media library
```

## Migration Steps

### Step 1: Prepare Your Data

Export your existing portfolio items and blog posts from the old components:

1. Review `components/portfolio.tsx` for projects
2. Note down all project details (title, description, images, category, links)
3. Review `components/blog.tsx` for articles
4. Export article details and content

### Step 2: Add Initial Content to Database

#### Via Admin Panel (Recommended)

1. Start the dev server: `npm run dev`
2. Navigate to `http://localhost:3000/admin`
3. Go to Portfolio or Blog section
4. Click "New Project" or "New Post"
5. Fill in the form with your content
6. Click Create

#### Via API (Bulk Import)

Create a script `scripts/seed.ts`:

```typescript
import { db } from "@/lib/db";
import { portfolioItems, blogPosts } from "@/lib/db/schema";

async function seedPortfolio() {
  const projects = [
    {
      id: "1",
      title: "Project Name",
      slug: "project-name",
      description: "Description",
      content: "Content",
      category: "Design",
      thumbnail: "https://...",
      status: "published",
      author: "admin",
      publishedAt: new Date(),
    },
    // ... more projects
  ];

  await db.insert(portfolioItems).values(projects);
}

seedPortfolio().catch(console.error);
```

Run: `npx tsx scripts/seed.ts`

### Step 3: Migrate Portfolio Items

Example portfolio item structure:
```json
{
  "title": "Magazine Design",
  "slug": "magazine-design",
  "description": "A modern magazine design project",
  "content": "<h2>Project Overview</h2>...",
  "category": "Graphic Design",
  "thumbnail": "https://images.com/magazine.jpg",
  "images": [
    {"url": "https://images.com/1.jpg", "caption": "Cover design"},
    {"url": "https://images.com/2.jpg", "caption": "Layout"}
  ],
  "links": {
    "liveUrl": "https://magazine.com",
    "caseStudyUrl": "https://..."
  },
  "tags": ["design", "print"],
  "status": "published"
}
```

### Step 4: Migrate Blog Posts

Example blog post structure:
```json
{
  "title": "Design Trends in 2026",
  "slug": "design-trends-2026",
  "excerpt": "Exploring the latest design trends",
  "content": "<p>Full article content...</p>",
  "featuredImage": "https://images.com/featured.jpg",
  "category": "Design",
  "tags": ["trends", "design", "2026"],
  "status": "published"
}
```

### Step 5: Update URLs

Update any hardcoded portfolio/blog links in components:

**Before:**
```jsx
<Link href="/portfolio/magazine">View Project</Link>
<Link href="/blog/design-trends">Read Article</Link>
```

**After:**
```jsx
// Same URLs work with new system!
<Link href="/portfolio/magazine-design">View Project</Link>
<Link href="/blog/design-trends-2026">Read Article</Link>
```

### Step 6: Upload Media

1. Go to Admin → Media
2. Upload all portfolio and blog images
3. Tag them for easy organization
4. Add alt text and captions

### Step 7: Migrate Pages

Convert static pages to CMS pages:

1. Create page in Admin → Pages
2. Add title, slug, and content
3. Use page blocks for different sections
4. Publish when ready

Example pages to create:
- About page
- Services page
- Contact page
- Press kit page

## Data Mapping

### Old Components → New Database

#### Portfolio Component
```
components/portfolio.tsx
  ├── projects[].title → portfolio_items.title
  ├── projects[].image → portfolio_items.thumbnail
  ├── projects[].description → portfolio_items.description
  ├── projects[].category → portfolio_items.category
  └── projects[].link → portfolio_items.links
```

#### Blog Component
```
components/blog.tsx
  ├── posts[].title → blog_posts.title
  ├── posts[].excerpt → blog_posts.excerpt
  ├── posts[].image → blog_posts.featuredImage
  ├── posts[].date → blog_posts.publishedAt
  ├── posts[].category → blog_posts.category
  └── posts[].tags → blog_posts.tags
```

## Content Migration Checklist

- [ ] Export all portfolio project details
- [ ] Export all blog post content
- [ ] Create portfolio items in database
- [ ] Create blog posts in database
- [ ] Upload all media files
- [ ] Add SEO metadata for each content piece
- [ ] Test all links and pages
- [ ] Verify images load correctly
- [ ] Check search functionality
- [ ] Update analytics tracking
- [ ] Notify team of URL changes (if any)

## Rollback Strategy

If you need to revert to hardcoded content:

1. **Keep old components**: The old components still exist at:
   - `/app/blog/[slug]/page.tsx` (static)
   - `/app/portfolio/[slug]/page.tsx` (static)

2. **Restore old page.tsx**: The original homepage with hardcoded components is still available

3. **Database backup**: Always backup your database before major changes

## Post-Migration

### Update Home Page

Update `app/page.tsx` to use CMS data:

```typescript
import { getPortfolioItems } from "@/lib/db/queries";
import { getBlogPosts } from "@/lib/db/queries";

export default async function HomePage() {
  const portfolio = await getPortfolioItems({ limit: 3 });
  const blog = await getBlogPosts({ limit: 3 });

  return (
    <div>
      <Hero />
      <Portfolio items={portfolio} />
      <Blog posts={blog} />
      <Contact />
      <Footer />
    </div>
  );
}
```

### Create Query Functions

Add to `lib/db/queries.ts`:

```typescript
import { db } from "@/lib/db";
import { portfolioItems, blogPosts } from "@/lib/db/schema";
import { desc, eq, limit } from "drizzle-orm";

export async function getPortfolioItems(options = {}) {
  return await db
    .select()
    .from(portfolioItems)
    .where(eq(portfolioItems.status, "published"))
    .orderBy(desc(portfolioItems.publishedAt))
    .limit(options.limit || 100);
}

export async function getBlogPosts(options = {}) {
  return await db
    .select()
    .from(blogPosts)
    .where(eq(blogPosts.status, "published"))
    .orderBy(desc(blogPosts.publishedAt))
    .limit(options.limit || 100);
}

export async function getPageBySlug(slug: string) {
  return await db.query.pages.findFirst({
    where: eq(pages.slug, slug),
    with: { blocks: true },
  });
}
```

### Update Analytics

The new system automatically tracks:
- Page views
- User interactions
- Content performance
- Traffic sources

Access analytics at: Admin → Analytics

## Performance Considerations

### Before (Hardcoded)
- All data in JavaScript bundle
- Fast initial load
- Limited scalability
- Requires rebuild to update content

### After (Database)
- Data fetched from database
- Slightly slower initial load
- Highly scalable
- Real-time content updates
- Better for large content libraries

### Optimization Tips

1. **Use caching**: 
   ```typescript
   export const revalidate = 3600; // Cache for 1 hour
   ```

2. **Implement image optimization**:
   ```typescript
   import Image from "next/image";
   <Image src={url} alt={alt} width={800} height={600} />
   ```

3. **Add pagination** for large content lists

4. **Use search indexes** for better performance

## Troubleshooting Migration

### Issue: Duplicate Content
- Clear browser cache
- Restart dev server
- Check both old and new paths

### Issue: Missing Images
- Verify URLs in database
- Re-upload media
- Check file permissions

### Issue: Broken Links
- Update all internal links to new URLs
- Use `robots.txt` redirects for SEO
- Test all navigation paths

### Issue: Data Not Showing
- Check database connection
- Verify data in database
- Check browser console for errors
- Review API responses

## Timeline

**Phase 1 (Week 1):** Prepare and plan migration
**Phase 2 (Week 2):** Migrate portfolio and blog content
**Phase 3 (Week 3):** Test and verify
**Phase 4 (Week 4):** Deploy and monitor

## Support

For migration questions:
1. Check the IMPLEMENTATION.md document
2. Review API documentation
3. Check database schema in lib/db/schema.ts
4. Run `npm run db:studio` to inspect data

---

**Migration Date**: Your migration start date  
**Content Migration Status**: [In Progress / Complete]
**Post-Migration Testing**: [Pending / Complete]
