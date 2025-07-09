import ClientComponent from 'components/ClientComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project title',
  description: 'A nice project description',
  alternates: {
    canonical: `/`,
  },
  openGraph: {
    url: 'https://production_url.com',
  },
};

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col text-center py-2 sm:py-24">
      <h1 className="text-5xl font-bold mb-8">Carles Andres Starter Kit</h1>

      <ClientComponent />
    </main>
  );
}
