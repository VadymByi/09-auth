// app/(private routes)/layout.tsx
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs />
      {children}
    </>
  );
}
