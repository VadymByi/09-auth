import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up | NoteHub',
  description: 'Log out of your NoteHub account.',
  openGraph: {
    title: 'Sign Up | NoteHub',
    description: 'Log out of your NoteHub account.',
    url: `#/sign-up`,

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

export default function SignUpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
