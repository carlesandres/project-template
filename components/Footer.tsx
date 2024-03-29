import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-white pb-24 pt-6 text-xs sm:pb-6 sm:text-sm print:hidden">
      <div className="flex flex-col items-center  justify-center gap-4 sm:flex-row sm:gap-16">
        <div className="">
          Find us on
          <Link
            className="ml-1 cursor-pointer items-center text-zinc-500 hover:text-zinc-600"
            href="https://github.com/carlesandres/project-template"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

