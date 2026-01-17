import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Profile | NoteHub',
  description: 'View and edit your NoteHub profile',
  openGraph: {
    title: 'My Profile | NoteHub',
    description: 'View and edit your NoteHub profile',
    url: `https://09-auth-ecru-alpha.vercel.app/profile`,
    type: 'website',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
