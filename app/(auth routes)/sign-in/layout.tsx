import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In | NoteHub',
  description: 'Login to your NoteHub account to manage your notes.',
  openGraph: {
    title: 'Sign In | NoteHub',
    description: 'Login to your NoteHub account to manage your notes.',
    url: `#/sign-in`,

    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub',
      },
    ],
  },
};

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
