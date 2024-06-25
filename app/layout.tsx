import 'styles/main.css';
import 'styles/custom.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Footer from 'components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';

const description =
  'The best project template to build your Next.js apps with Tailwind CSS, TypeScript, ESLint, Prettier, Jest, and Husky.';

export const metadata = {
  title: {
    template: '%s | Product Name',
    default: 'Product Name',
  },
  description,
  keywords: ['next.js', 'template', 'tailwindcss', 'shadcn/ui', 'zod'],
  authors: [{ name: 'Carles Andrés', url: 'https://carlesandres.com' }],
  robots: 'index, follow',
};

async function MyApp({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4a4a4a" />
      </head>
      <body className="bg-grid ">
        <div className="min-h-screen">{children}</div>
        <Footer />
        <SpeedInsights />
        <div id="modal-root" />
      </body>
    </html>
  );
}

export default MyApp;
