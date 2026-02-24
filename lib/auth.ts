// Simple authentication utilities (in production, use a proper auth library)

const ADMIN_PASSWORD = 'admin123'; // In production, use proper environment variables and hashing

export function isValidAdminPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export function setAdminSession(password: string): string | null {
  if (isValidAdminPassword(password)) {
    return 'admin-session-token'; // Simple token for demo
  }
  return null;
}

export function getAdminFromCookie(token: string): boolean {
  return token === 'admin-session-token';
}
