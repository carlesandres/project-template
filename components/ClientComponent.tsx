'use client';
import Link from 'next/link';
import { Button } from './ui/button';

const ClientComponent = () => {
  const handleClick = () => {
    alert('click');
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Button variant="link">
        <Link href="/blog">Blog</Link>
      </Button>
      <Button onClick={handleClick}>Click me!</Button>
    </div>
  );
};

export default ClientComponent;
