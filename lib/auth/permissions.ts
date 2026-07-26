import type { userRoleEnum } from "@/lib/db/schema"

type UserRole = (typeof userRoleEnum.enumValues)[number]

interface Permission {
  action: string
  resource: string
}

const rolePermissions: Record<UserRole, Permission[]> = {
  admin: [
    // Users
    { action: "create", resource: "user" },
    { action: "read", resource: "user" },
    { action: "update", resource: "user" },
    { action: "delete", resource: "user" },
    // Content
    { action: "create", resource: "page" },
    { action: "read", resource: "page" },
    { action: "update", resource: "page" },
    { action: "delete", resource: "page" },
    { action: "publish", resource: "page" },
    // Portfolio
    { action: "create", resource: "portfolio" },
    { action: "read", resource: "portfolio" },
    { action: "update", resource: "portfolio" },
    { action: "delete", resource: "portfolio" },
    { action: "publish", resource: "portfolio" },
    // Blog
    { action: "create", resource: "blog" },
    { action: "read", resource: "blog" },
    { action: "update", resource: "blog" },
    { action: "delete", resource: "blog" },
    { action: "publish", resource: "blog" },
    // Media
    { action: "create", resource: "media" },
    { action: "read", resource: "media" },
    { action: "delete", resource: "media" },
    // Settings
    { action: "read", resource: "settings" },
    { action: "update", resource: "settings" },
    // Analytics
    { action: "read", resource: "analytics" },
    // Audit Logs
    { action: "read", resource: "audit_logs" },
  ],
  editor: [
    // Content
    { action: "create", resource: "page" },
    { action: "read", resource: "page" },
    { action: "update", resource: "page" },
    { action: "publish", resource: "page" },
    // Portfolio
    { action: "create", resource: "portfolio" },
    { action: "read", resource: "portfolio" },
    { action: "update", resource: "portfolio" },
    { action: "publish", resource: "portfolio" },
    // Blog
    { action: "create", resource: "blog" },
    { action: "read", resource: "blog" },
    { action: "update", resource: "blog" },
    { action: "publish", resource: "blog" },
    // Media
    { action: "create", resource: "media" },
    { action: "read", resource: "media" },
    // Analytics (read-only)
    { action: "read", resource: "analytics" },
  ],
  viewer: [
    // Read-only access
    { action: "read", resource: "page" },
    { action: "read", resource: "portfolio" },
    { action: "read", resource: "blog" },
    { action: "read", resource: "media" },
    { action: "read", resource: "analytics" },
  ],
  public: [],
}

export function hasPermission(role: UserRole, action: string, resource: string): boolean {
  const permissions = rolePermissions[role] || []
  return permissions.some((p) => p.action === action && p.resource === resource)
}

export function hasAnyPermission(role: UserRole, permissions: Permission[]): boolean {
  return permissions.some((p) => hasPermission(role, p.action, p.resource))
}

export function hasAllPermissions(role: UserRole, permissions: Permission[]): boolean {
  return permissions.every((p) => hasPermission(role, p.action, p.resource))
}

export function canAccess(role: UserRole, resource: string): boolean {
  return hasPermission(role, "read", resource)
}

export function canCreate(role: UserRole, resource: string): boolean {
  return hasPermission(role, "create", resource)
}

export function canUpdate(role: UserRole, resource: string): boolean {
  return hasPermission(role, "update", resource)
}

export function canDelete(role: UserRole, resource: string): boolean {
  return hasPermission(role, "delete", resource)
}

export function canPublish(role: UserRole, resource: string): boolean {
  return hasPermission(role, "publish", resource)
}
