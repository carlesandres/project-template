import ClientComponent from 'components/ClientComponent';
import Head from 'next/head';

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>My project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-5xl font-bold mb-8">Welcome to your project!</h1>
        <ClientComponent />
      </main>
    </div>
  );
}
