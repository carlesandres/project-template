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
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-5xl font-bold mb-8">Project title</h1>
        <ClientComponent />
      </main>
    </div>
  );
}
