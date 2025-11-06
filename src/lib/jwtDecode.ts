export interface JwtPayload {
  sub: string;
  type: string;
  iat: number;
  exp: number;
}

export function decodeJwt(token: string): JwtPayload | null {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('JWT decode error:', error);
    return null;
  }
}

export function getAccountIdFromToken(token: string | null): string | null {
  if (!token) return null;
  const payload = decodeJwt(token);
  return payload?.sub || null;
}
