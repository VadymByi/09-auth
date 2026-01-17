import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Profile | NoteHub',
  description: 'View and edit your NoteHub profile',
};

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
