import Link from 'next/link';
import { Button } from './ui/button';

export const Header = () => {
  return (
    <div className="background">
      <Button asChild variant="link">
        <Link href="/">Home</Link>
      </Button>
      <Button asChild variant="link">
        <Link href="/blog">Blog</Link>
      </Button>
    </div>
  );
};
