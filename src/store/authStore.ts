import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getAccountIdFromToken } from '@/lib/jwtDecode';

interface AuthState {
  accessToken: string | null;
  accountId: string | null;
  isLoggedIn: boolean;
  setAccessToken: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      accountId: null,
      isLoggedIn: false,
      setAccessToken: (token: string) => {
        localStorage.setItem('AT', token);
        const accountId = getAccountIdFromToken(token);
        set({ accessToken: token, accountId, isLoggedIn: true });
      },
      logout: () => {
        localStorage.removeItem('AT');
        set({ accessToken: null, accountId: null, isLoggedIn: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
