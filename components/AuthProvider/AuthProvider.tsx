'use client';

import { ReactNode, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '../../lib/store/authStore';
import { checkSession } from '../../lib/api/clientApi';
import MonkeyLoader from '../MonkeyLoader/MonkeyLoader';

export default function AuthProvider({ children }: { children: ReactNode }) {
  const { setUser, clearIsAuthenticated, isAuthenticated } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const user = await checkSession();
        if (user) {
          setUser(user);
        } else {
          clearIsAuthenticated();
        }
      } catch (error) {
        clearIsAuthenticated();
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, [setUser, clearIsAuthenticated]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated && pathname.includes('/profile')) {
      router.push('/sign-in');
    }
  }, [isLoading, isAuthenticated, pathname, router]);

  if (isLoading) {
    return <MonkeyLoader show={true} />;
  }

  return <>{children}</>;
}
