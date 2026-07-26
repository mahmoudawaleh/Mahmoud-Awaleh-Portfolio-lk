import {
  pgTable,
  text,
  serial,
  varchar,
  timestamp,
  boolean,
  jsonb,
  integer,
  decimal,
  enum as pgEnum,
  index,
  uniqueIndex,
  primaryKey,
} from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

// ============= ENUMS =============

export const userRoleEnum = pgEnum("user_role", ["admin", "editor", "viewer", "public"])
export const portfolioStatusEnum = pgEnum("portfolio_status", ["draft", "published", "archived"])
export const blogStatusEnum = pgEnum("blog_status", ["draft", "published", "scheduled", "archived"])
export const pageStatusEnum = pgEnum("page_status", ["draft", "published", "archived"])
export const notificationTypeEnum = pgEnum("notification_type", [
  "email",
  "in_app",
  "system",
])
export const auditActionEnum = pgEnum("audit_action", [
  "create",
  "update",
  "delete",
  "publish",
  "login",
  "logout",
])

// ============= USERS & AUTH =============

export const users = pgTable(
  "users",
  {
    id: text("id").primaryKey(),
    name: text("name"),
    email: text("email").notNull().unique(),
    emailVerified: boolean("email_verified").default(false),
    image: text("image"),
    role: userRoleEnum("role").default("viewer"),
    password: text("password"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
    lastLogin: timestamp("last_login"),
    isActive: boolean("is_active").default(true),
  },
  (table) => ({
    emailIdx: index("users_email_idx").on(table.email),
    roleIdx: index("users_role_idx").on(table.role),
  })
)

export const sessions = pgTable(
  "sessions",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    userIdIdx: index("sessions_user_id_idx").on(table.userId),
  })
)

// ============= SITE SETTINGS =============

export const siteSettings = pgTable("site_settings", {
  id: serial("id").primaryKey(),
  siteTitle: text("site_title").default("Mahmoud Awaleh Portfolio"),
  siteDescription: text("site_description"),
  siteLogo: text("site_logo"),
  siteUrl: text("site_url"),
  primaryColor: varchar("primary_color", { length: 7 }).default("#000000"),
  secondaryColor: varchar("secondary_color", { length: 7 }).default("#ffffff"),
  accentColor: varchar("accent_color", { length: 7 }).default("#808080"),
  faviconUrl: text("favicon_url"),
  socialLinks: jsonb("social_links").default({}),
  analyticsEnabled: boolean("analytics_enabled").default(true),
  maintenanceMode: boolean("maintenance_mode").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

// ============= SEO & METADATA =============

export const seoMetadata = pgTable(
  "seo_metadata",
  {
    id: serial("id").primaryKey(),
    pageType: text("page_type"), // portfolio, blog, page, homepage
    entityId: text("entity_id"), // id of the entity (post id, portfolio id, etc)
    title: varchar("title", { length: 160 }),
    description: varchar("description", { length: 160 }),
    keywords: text("keywords"),
    ogImage: text("og_image"),
    ogTitle: varchar("og_title", { length: 160 }),
    ogDescription: varchar("og_description", { length: 160 }),
    twitterCard: varchar("twitter_card", { length: 20 }),
    canonicalUrl: text("canonical_url"),
    robotsIndex: boolean("robots_index").default(true),
    robotsFollow: boolean("robots_follow").default(true),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    entityIdx: index("seo_metadata_entity_idx").on(table.entityId),
    typeIdx: index("seo_metadata_type_idx").on(table.pageType),
  })
)

// ============= MEDIA & ASSETS =============

export const media = pgTable(
  "media",
  {
    id: text("id").primaryKey(),
    fileName: text("file_name").notNull(),
    originalName: text("original_name"),
    mimeType: varchar("mime_type", { length: 100 }),
    size: integer("size"),
    width: integer("width"),
    height: integer("height"),
    url: text("url").notNull(),
    thumbnailUrl: text("thumbnail_url"),
    uploadedBy: text("uploaded_by")
      .notNull()
      .references(() => users.id, { onDelete: "set null" }),
    metadata: jsonb("metadata").default({}),
    tags: text("tags").array(),
    altText: text("alt_text"),
    caption: text("caption"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    uploadedByIdx: index("media_uploaded_by_idx").on(table.uploadedBy),
    tagsIdx: index("media_tags_idx").on(table.tags),
  })
)

// ============= CONTENT PAGES & CMS =============

export const pages = pgTable(
  "pages",
  {
    id: text("id").primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull().unique(),
    description: text("description"),
    content: text("content"),
    status: pageStatusEnum("status").default("draft"),
    featuredImage: text("featured_image"),
    author: text("author")
      .notNull()
      .references(() => users.id, { onDelete: "restrict" }),
    publishedAt: timestamp("published_at"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    slugIdx: uniqueIndex("pages_slug_idx").on(table.slug),
    statusIdx: index("pages_status_idx").on(table.status),
    authorIdx: index("pages_author_idx").on(table.author),
  })
)

export const pageBlocks = pgTable(
  "page_blocks",
  {
    id: text("id").primaryKey(),
    pageId: text("page_id")
      .notNull()
      .references(() => pages.id, { onDelete: "cascade" }),
    blockType: varchar("block_type", { length: 50 }).notNull(), // hero, gallery, text, form, etc
    order: integer("order").notNull(),
    content: jsonb("content").notNull(),
    settings: jsonb("settings").default({}),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    pageIdIdx: index("page_blocks_page_id_idx").on(table.pageId),
    orderIdx: index("page_blocks_order_idx").on(table.order),
  })
)

// ============= PORTFOLIO =============

export const portfolioItems = pgTable(
  "portfolio_items",
  {
    id: text("id").primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull().unique(),
    description: text("description"),
    content: text("content"),
    category: varchar("category", { length: 100 }),
    thumbnail: text("thumbnail"),
    images: jsonb("images").default([]),
    links: jsonb("links").default({}), // { liveUrl, githubUrl, etc }
    status: portfolioStatusEnum("status").default("draft"),
    tags: text("tags").array(),
    author: text("author")
      .notNull()
      .references(() => users.id, { onDelete: "restrict" }),
    publishedAt: timestamp("published_at"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    slugIdx: uniqueIndex("portfolio_items_slug_idx").on(table.slug),
    statusIdx: index("portfolio_items_status_idx").on(table.status),
    categoryIdx: index("portfolio_items_category_idx").on(table.category),
    tagsIdx: index("portfolio_items_tags_idx").on(table.tags),
    authorIdx: index("portfolio_items_author_idx").on(table.author),
  })
)

// ============= BLOG =============

export const blogPosts = pgTable(
  "blog_posts",
  {
    id: text("id").primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull().unique(),
    excerpt: text("excerpt"),
    content: text("content").notNull(),
    featuredImage: text("featured_image"),
    category: varchar("category", { length: 100 }),
    status: blogStatusEnum("status").default("draft"),
    tags: text("tags").array(),
    author: text("author")
      .notNull()
      .references(() => users.id, { onDelete: "restrict" }),
    readingTime: integer("reading_time"),
    views: integer("views").default(0),
    publishedAt: timestamp("published_at"),
    scheduledFor: timestamp("scheduled_for"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    slugIdx: uniqueIndex("blog_posts_slug_idx").on(table.slug),
    statusIdx: index("blog_posts_status_idx").on(table.status),
    categoryIdx: index("blog_posts_category_idx").on(table.category),
    tagsIdx: index("blog_posts_tags_idx").on(table.tags),
    authorIdx: index("blog_posts_author_idx").on(table.author),
  })
)

export const blogComments = pgTable(
  "blog_comments",
  {
    id: text("id").primaryKey(),
    postId: text("post_id")
      .notNull()
      .references(() => blogPosts.id, { onDelete: "cascade" }),
    author: text("author"),
    email: text("email"),
    content: text("content").notNull(),
    approved: boolean("approved").default(false),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    postIdIdx: index("blog_comments_post_id_idx").on(table.postId),
  })
)

// ============= ANALYTICS & TRACKING =============

export const pageViews = pgTable(
  "page_views",
  {
    id: serial("id").primaryKey(),
    pageType: varchar("page_type", { length: 50 }), // portfolio, blog, page
    pageId: text("page_id"),
    path: text("path"),
    referrer: text("referrer"),
    userAgent: text("user_agent"),
    ipAddress: varchar("ip_address", { length: 45 }),
    sessionId: text("session_id"),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    pageIdIdx: index("page_views_page_id_idx").on(table.pageId),
    pageTypeIdx: index("page_views_page_type_idx").on(table.pageType),
    dateIdx: index("page_views_created_at_idx").on(table.createdAt),
  })
)

export const events = pgTable(
  "events",
  {
    id: serial("id").primaryKey(),
    eventName: varchar("event_name", { length: 100 }).notNull(),
    pageId: text("page_id"),
    userId: text("user_id"),
    sessionId: text("session_id"),
    properties: jsonb("properties").default({}),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    eventNameIdx: index("events_event_name_idx").on(table.eventName),
    dateIdx: index("events_created_at_idx").on(table.createdAt),
  })
)

// ============= NOTIFICATIONS =============

export const notifications = pgTable(
  "notifications",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: notificationTypeEnum("type"),
    title: varchar("title", { length: 255 }),
    message: text("message"),
    actionUrl: text("action_url"),
    read: boolean("read").default(false),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    userIdIdx: index("notifications_user_id_idx").on(table.userId),
    readIdx: index("notifications_read_idx").on(table.read),
  })
)

// ============= AUDIT LOGS =============

export const auditLogs = pgTable(
  "audit_logs",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    action: auditActionEnum("action"),
    resourceType: varchar("resource_type", { length: 100 }),
    resourceId: text("resource_id"),
    details: jsonb("details").default({}),
    ipAddress: varchar("ip_address", { length: 45 }),
    userAgent: text("user_agent"),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    userIdIdx: index("audit_logs_user_id_idx").on(table.userId),
    resourceIdx: index("audit_logs_resource_idx").on(table.resourceType),
    dateIdx: index("audit_logs_created_at_idx").on(table.createdAt),
  })
)

// ============= WORKFLOWS & AUTOMATION =============

export const workflows = pgTable(
  "workflows",
  {
    id: text("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    description: text("description"),
    trigger: varchar("trigger", { length: 100 }), // on_publish, on_schedule, manual
    actions: jsonb("actions"), // array of actions to perform
    isActive: boolean("is_active").default(true),
    createdBy: text("created_by")
      .notNull()
      .references(() => users.id, { onDelete: "restrict" }),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    createdByIdx: index("workflows_created_by_idx").on(table.createdBy),
  })
)

// ============= RELATIONS =============

export const usersRelations = relations(users, ({ many }) => ({
  sessions: many(sessions),
  portfolioItems: many(portfolioItems),
  blogPosts: many(blogPosts),
  media: many(media),
  notifications: many(notifications),
  auditLogs: many(auditLogs),
}))

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}))

export const pagesRelations = relations(pages, ({ one, many }) => ({
  author: one(users, {
    fields: [pages.author],
    references: [users.id],
  }),
  blocks: many(pageBlocks),
}))

export const pageBlocksRelations = relations(pageBlocks, ({ one }) => ({
  page: one(pages, {
    fields: [pageBlocks.pageId],
    references: [pages.id],
  }),
}))

export const portfolioItemsRelations = relations(portfolioItems, ({ one }) => ({
  author: one(users, {
    fields: [portfolioItems.author],
    references: [users.id],
  }),
}))

export const blogPostsRelations = relations(blogPosts, ({ one, many }) => ({
  author: one(users, {
    fields: [blogPosts.author],
    references: [users.id],
  }),
  comments: many(blogComments),
}))

export const blogCommentsRelations = relations(blogComments, ({ one }) => ({
  post: one(blogPosts, {
    fields: [blogComments.postId],
    references: [blogPosts.id],
  }),
}))

export const mediaRelations = relations(media, ({ one }) => ({
  uploadedBy: one(users, {
    fields: [media.uploadedBy],
    references: [users.id],
  }),
}))

export const notificationsRelations = relations(notifications, ({ one }) => ({
  user: one(users, {
    fields: [notifications.userId],
    references: [users.id],
  }),
}))

export const auditLogsRelations = relations(auditLogs, ({ one }) => ({
  user: one(users, {
    fields: [auditLogs.userId],
    references: [users.id],
  }),
}))

export const workflowsRelations = relations(workflows, ({ one }) => ({
  creator: one(users, {
    fields: [workflows.createdBy],
    references: [users.id],
  }),
}))
