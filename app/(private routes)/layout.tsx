'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';

export default function PrivateLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, [router]);

  return (
    <>
      <Breadcrumbs />
      {children}
    </>
  );
}
