# API Documentation

## Base URL
```
http://localhost:3000/api
```

All responses follow this format:
```json
{
  "success": true,
  "data": {},
  "message": "Operation successful",
  "timestamp": "2026-07-26T12:00:00.000Z"
}
```

## Authentication

The API uses Better Auth for session-based authentication. Include session cookies with requests.

## Endpoints

### Portfolio Items

#### Get All Portfolio Items
```http
GET /portfolio
```

**Query Parameters:**
- `status` (string): Filter by status (published, draft, archived)
- `category` (string): Filter by category

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "title": "Project Title",
      "slug": "project-title",
      "description": "Project description",
      "thumbnail": "https://...",
      "category": "Design",
      "status": "published",
      "publishedAt": "2026-07-26T00:00:00.000Z",
      ...
    }
  ]
}
```

#### Get Single Portfolio Item
```http
GET /portfolio/{id}
```

**Response:** Single portfolio item object

#### Create Portfolio Item
```http
POST /portfolio
```

**Request Body:**
```json
{
  "title": "My Project",
  "slug": "my-project",
  "description": "Project description",
  "content": "Detailed content",
  "category": "Design",
  "thumbnail": "https://...",
  "images": [
    {"url": "https://...", "caption": "Image caption"}
  ],
  "links": {
    "liveUrl": "https://...",
    "githubUrl": "https://..."
  },
  "tags": ["design", "web"],
  "authorId": "user-id"
}
```

**Response:** Created portfolio item object

#### Update Portfolio Item
```http
PUT /portfolio/{id}
```

**Request Body:** Same as create (all fields optional)

**Response:** Updated portfolio item object

#### Delete Portfolio Item
```http
DELETE /portfolio/{id}
```

**Response:**
```json
{
  "success": true,
  "data": { /* deleted item */ }
}
```

---

### Blog Posts

#### Get All Blog Posts
```http
GET /blog
```

**Query Parameters:**
- `status` (string): Filter by status
- `category` (string): Filter by category
- `search` (string): Search in title and excerpt
- `page` (number): Pagination

**Response:** Array of blog post objects

#### Get Single Blog Post
```http
GET /blog/{id}
```

**Response:** Single blog post object (increments view count)

#### Create Blog Post
```http
POST /blog
```

**Request Body:**
```json
{
  "title": "Article Title",
  "slug": "article-title",
  "excerpt": "Short summary",
  "content": "Full article content",
  "featuredImage": "https://...",
  "category": "Technology",
  "tags": ["tech", "coding"],
  "authorId": "user-id"
}
```

**Response:** Created blog post object (reading time auto-calculated)

#### Update Blog Post
```http
PUT /blog/{id}
```

**Request Body:** Same as create

**Response:** Updated blog post object

#### Delete Blog Post
```http
DELETE /blog/{id}
```

---

### Pages

#### Get All Pages
```http
GET /pages
```

**Query Parameters:**
- `status` (string): Filter by status

**Response:** Array of page objects

#### Get Single Page
```http
GET /pages/{id}
```

**Response:** Page object with blocks

#### Create Page
```http
POST /pages
```

**Request Body:**
```json
{
  "title": "Page Title",
  "slug": "page-slug",
  "description": "Meta description",
  "content": "Page content",
  "featuredImage": "https://...",
  "authorId": "user-id"
}
```

#### Update Page
```http
PUT /pages/{id}
```

#### Delete Page
```http
DELETE /pages/{id}
```

---

### Media

#### Get All Media
```http
GET /media
```

**Query Parameters:**
- `tag` (string): Filter by tag
- `page` (number): Pagination

**Response:** Array of media objects

#### Get Single Media
```http
GET /media/{id}
```

**Response:** Media object

#### Upload Media
```http
POST /media
```

**Request Body:**
```json
{
  "fileName": "image.jpg",
  "originalName": "My Image",
  "mimeType": "image/jpeg",
  "size": 102400,
  "width": 1920,
  "height": 1080,
  "url": "https://...",
  "thumbnailUrl": "https://...",
  "uploadedBy": "user-id",
  "tags": ["portfolio", "hero"],
  "altText": "Image alt text",
  "caption": "Image caption"
}
```

#### Update Media Metadata
```http
PUT /media/{id}
```

**Request Body:** (only metadata fields)
```json
{
  "altText": "New alt text",
  "caption": "New caption",
  "tags": ["updated", "tags"]
}
```

#### Delete Media
```http
DELETE /media/{id}
```

---

### Users

#### Get All Users
```http
GET /users
```

**Query Parameters:**
- `page` (number): Pagination
- `role` (string): Filter by role

**Response:** Array of user objects (password excluded)

#### Get Single User
```http
GET /users/{id}
```

**Response:** User object

#### Update User
```http
PUT /users/{id}
```

**Request Body:**
```json
{
  "name": "User Name",
  "role": "editor",
  "isActive": true
}
```

#### Delete User
```http
DELETE /users/{id}
```

---

### Authentication

#### Get Current Session
```http
GET /auth/session
```

#### Login
```http
POST /auth/login
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password"
}
```

#### Logout
```http
POST /auth/logout
```

#### Register
```http
POST /auth/register
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password",
  "name": "User Name"
}
```

---

## Error Responses

All error responses follow this format:

```json
{
  "success": false,
  "error": "Error code",
  "message": "Error description",
  "timestamp": "2026-07-26T12:00:00.000Z"
}
```

### Common Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

### Example Error Response

```json
{
  "success": false,
  "error": "Portfolio item not found",
  "message": "The requested portfolio item does not exist",
  "timestamp": "2026-07-26T12:00:00.000Z"
}
```

---

## Rate Limiting

Currently no rate limiting is implemented. In production, consider adding:
- 100 requests per minute per IP
- 1000 requests per hour per user
- 10000 requests per day per API key

---

## Pagination

Paginated endpoints return:

```json
{
  "success": true,
  "data": [ /* items */ ],
  "pagination": {
    "total": 100,
    "page": 1,
    "pageSize": 20,
    "totalPages": 5
  }
}
```

---

## Data Validation

### Slug Format
Must match: `^[a-z0-9]+(?:-[a-z0-9]+)*$`

Examples:
- ✅ `my-project`
- ✅ `project-123`
- ❌ `My Project` (contains spaces)
- ❌ `my_project` (contains underscore)

### Email Format
Must be valid email address

### Required Fields
Varies by endpoint - check individual documentation above

---

## Examples

### Create and Publish a Portfolio Item

```bash
# Create item
curl -X POST http://localhost:3000/api/portfolio \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Amazing Project",
    "slug": "amazing-project",
    "description": "A really cool project",
    "content": "Here are the details...",
    "category": "Web Design",
    "status": "published",
    "tags": ["design", "web"]
  }'
```

### List Published Portfolio by Category

```bash
curl "http://localhost:3000/api/portfolio?status=published&category=Design"
```

### Update Blog Post Metadata

```bash
curl -X PUT http://localhost:3000/api/blog/{id} \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Title",
    "tags": ["new-tag"]
  }'
```

---

## Integration Guide

### Using with JavaScript/TypeScript

```typescript
// Fetch portfolio items
const response = await fetch('/api/portfolio?status=published');
const { data: items } = await response.json();

// Create new item
const newItem = await fetch('/api/portfolio', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'New Project',
    slug: 'new-project',
    // ... other fields
  })
});
```

### Using with React Hooks

```typescript
import { useFetch, useMutation } from '@/lib/hooks/useFetch';

// Fetch data
const { data: portfolio } = useFetch('/api/portfolio');

// Mutate data
const { mutate: createItem, loading } = useMutation('/api/portfolio');

const handleCreate = async (formData) => {
  const result = await createItem(formData);
  // Handle success
};
```

---

**Last Updated**: July 26, 2026  
**API Version**: 1.0  
**Status**: Production Ready
