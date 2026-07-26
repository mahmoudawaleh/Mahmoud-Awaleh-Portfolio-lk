# Database Setup & Management

Complete guide for setting up, managing, and maintaining the PostgreSQL database.

## Initial Setup

### 1. Create Database (Neon)

1. Go to [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Add to `.env.local`:
   ```
   POSTGRES_URL=postgresql://user:password@host/database
   ```

### 2. Apply Schema

```bash
# Push schema to database
npm run db:push

# Verify schema
npm run db:studio
```

This creates all tables and relationships defined in `lib/db/schema.ts`.

## Database Schema Overview

### Core Tables

#### Users System
```sql
users (id, email, name, password_hash, role, created_at, updated_at)
sessions (id, user_id, token, expires_at)
tokens (id, user_id, type, token, expires_at)
```

#### Portfolio
```sql
portfolio_items (
  id, title, slug, description, content,
  image_url, technologies, tags,
  featured, published, created_at, updated_at
)
```

#### Blog
```sql
blog_posts (
  id, title, slug, content, excerpt,
  featured_image, category_id, author_id,
  published, publish_date, created_at, updated_at
)
categories (id, name, slug, description)
tags (id, name, slug)
blog_post_tags (post_id, tag_id)
```

#### Pages
```sql
pages (
  id, title, slug, content,
  meta_description, meta_keywords,
  published, created_at, updated_at
)
page_blocks (
  id, page_id, type, content,
  position, created_at
)
```

#### Media
```sql
media_items (
  id, name, file_path, file_size,
  mime_type, uploaded_by, created_at
)
media_folders (id, name, parent_id)
```

#### Settings
```sql
settings (key, value, updated_at)
page_metadata (
  page_id, title, description, keywords,
  og_image, og_title, og_description
)
```

#### Analytics
```sql
analytics_events (
  id, event_type, user_id, data,
  timestamp
)
analytics_pageviews (
  id, path, user_id, referrer,
  timestamp
)
```

#### Audit
```sql
audit_logs (
  id, action, resource_type, resource_id,
  user_id, changes, timestamp
)
```

## Seeding Data

### Manual Seeding

Create a seed file and run it:

```bash
# Create seed file
cat > scripts/seed.ts << 'EOF'
import { db } from '@/lib/db'
import { users, blogPosts } from '@/lib/db/schema'

async function seed() {
  // Create admin user
  await db.insert(users).values({
    email: 'admin@example.com',
    name: 'Admin User',
    role: 'admin',
    passwordHash: 'hashed_password'
  })

  // Add blog posts
  await db.insert(blogPosts).values([
    {
      title: 'Welcome to the Blog',
      slug: 'welcome',
      content: 'Welcome to our blog!',
      published: true
    }
  ])

  console.log('✓ Seed completed')
}

seed().catch(console.error)
EOF

# Run seed
npx tsx scripts/seed.ts
```

### Bulk Import

For larger datasets, use the admin API:

```bash
# Create portfolio items
curl -X POST http://localhost:3000/api/portfolio \
  -H "Content-Type: application/json" \
  -d @portfolio_items.json

# Create blog posts
curl -X POST http://localhost:3000/api/blog \
  -H "Content-Type: application/json" \
  -d @blog_posts.json
```

## Common Queries

### User Management

```sql
-- Get all users
SELECT * FROM users ORDER BY created_at DESC;

-- Get user role counts
SELECT role, COUNT(*) FROM users GROUP BY role;

-- Get users by role
SELECT * FROM users WHERE role = 'editor';

-- Update user role
UPDATE users SET role = 'admin' WHERE id = 1;
```

### Content Management

```sql
-- Get published blog posts
SELECT * FROM blog_posts WHERE published = true ORDER BY publish_date DESC;

-- Get draft posts
SELECT * FROM blog_posts WHERE published = false;

-- Count posts by category
SELECT category_id, COUNT(*) FROM blog_posts GROUP BY category_id;

-- Get portfolio items with tag
SELECT DISTINCT p.* FROM portfolio_items p, unnest(p.tags) AS tag WHERE tag = 'react';
```

### Analytics

```sql
-- Most viewed pages (last 30 days)
SELECT path, COUNT(*) as views FROM analytics_pageviews 
WHERE timestamp > NOW() - INTERVAL '30 days'
GROUP BY path ORDER BY views DESC LIMIT 10;

-- Event summary
SELECT event_type, COUNT(*) FROM analytics_events 
WHERE timestamp > NOW() - INTERVAL '7 days'
GROUP BY event_type;

-- User activity
SELECT user_id, COUNT(*) FROM analytics_events 
GROUP BY user_id ORDER BY COUNT(*) DESC LIMIT 10;
```

### Audit Logs

```sql
-- Recent changes
SELECT * FROM audit_logs ORDER BY timestamp DESC LIMIT 50;

-- Changes by user
SELECT user_id, action, COUNT(*) FROM audit_logs 
GROUP BY user_id, action ORDER BY COUNT(*) DESC;

-- Specific resource history
SELECT * FROM audit_logs 
WHERE resource_type = 'blog_post' AND resource_id = 1
ORDER BY timestamp DESC;
```

## Backup & Recovery

### Automated Backups (Neon)

Neon automatically creates backups:
- Daily backups: 7-day retention
- Hourly snapshots: 7-day retention
- Point-in-time recovery available

### Manual Backup

```bash
# Export database
pg_dump $POSTGRES_URL > backup.sql

# Import backup
psql $POSTGRES_URL < backup.sql
```

### Restoration

Via Neon console:
1. Go to project dashboard
2. Click "Backups"
3. Select backup point
4. Click "Restore"

## Maintenance

### Regular Tasks

```bash
# Check database size
SELECT pg_size_pretty(pg_database_size('database_name'));

# Vacuum and analyze
VACUUM ANALYZE;

# Check for missing indexes
# Review slow queries in logs
```

### Optimization Tips

1. **Add Indexes** on frequently filtered columns
2. **Archive Old Data** for large analytics tables
3. **Monitor Query Performance** using EXPLAIN ANALYZE
4. **Use Connection Pooling** for production

### Migration Strategy

When making schema changes:

1. **Development**: Test locally with `npm run db:generate`
2. **Review**: Check migration file
3. **Test**: Apply to test database
4. **Stage**: Apply to staging environment
5. **Production**: Schedule maintenance window, apply migration

```bash
# Create migration from schema changes
npm run db:generate

# Review generated migration
cat drizzle/YYYY-MM-DD_HHMM_*.sql

# Apply to database
npm run db:push
```

## Performance Monitoring

### Enable Query Logging

```sql
-- Set log_min_duration_statement to log slow queries
SET log_min_duration_statement = 1000; -- 1 second
```

### Identify Slow Queries

```sql
-- Use EXPLAIN ANALYZE to understand query performance
EXPLAIN ANALYZE
SELECT * FROM blog_posts 
WHERE category_id = 1 
ORDER BY publish_date DESC;
```

### Add Strategic Indexes

```sql
-- Index frequently filtered columns
CREATE INDEX idx_blog_posts_category ON blog_posts(category_id);
CREATE INDEX idx_blog_posts_published ON blog_posts(published);
CREATE INDEX idx_portfolio_tags ON portfolio_items USING gin(tags);
CREATE INDEX idx_analytics_pageviews_timestamp ON analytics_pageviews(timestamp);
```

## Troubleshooting

### Connection Issues

```bash
# Test connection
psql $POSTGRES_URL -c "SELECT 1"

# Check connection string format
postgresql://[user[:password]@][netloc][:port][/dbname][?param1=value1&...]
```

### Migration Issues

```bash
# Check migration status
npm run db:studio

# Manual rollback (if needed)
# - Reset schema: npm run db:push
# - Reapply migrations

# Clear and retry
rm -rf drizzle/
npm run db:generate
npm run db:push
```

### Performance Issues

1. Check query performance with EXPLAIN
2. Add missing indexes
3. Archive old data
4. Optimize N+1 queries
5. Use connection pooling

### Data Integrity

```sql
-- Check for orphaned records
SELECT * FROM blog_posts WHERE category_id NOT IN (SELECT id FROM categories);

-- Verify relationships
SELECT * FROM audit_logs WHERE user_id NOT IN (SELECT id FROM users);
```

## Drizzle Studio

Interactive database management UI:

```bash
npm run db:studio
```

Then visit provided URL to:
- Browse all tables
- View and edit data
- Create new records
- Manage relationships
- Monitor database size

## Best Practices

1. **Use Migrations** for all schema changes
2. **Regular Backups** for data safety
3. **Monitor Performance** with logs and EXPLAIN
4. **Index Wisely** on high-cardinality columns
5. **Normalize Data** to reduce redundancy
6. **Document Changes** with migration comments
7. **Test Migrations** before production
8. **Use Transactions** for multi-step operations

## Resources

- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [Neon Documentation](https://neon.tech/docs)
- [Drizzle ORM Guide](https://orm.drizzle.team)
- [Database Design Principles](https://www.postgresql.org/docs/current/ddl.html)
