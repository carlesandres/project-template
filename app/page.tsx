import ClientComponent from 'components/ClientComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: process.env.PROJECT_TITLE || 'Project title',
  description: 'A nice project description',
  alternates: {
    canonical: `/`,
  },
  openGraph: {
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
};

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col py-2 text-center sm:py-24">
      <h1 className="mb-8 text-5xl font-bold">Carles Andres Starter Kit</h1>

      <ClientComponent />
    </main>
  );
}
