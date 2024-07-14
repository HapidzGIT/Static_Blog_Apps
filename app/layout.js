'use client';
import './globals.css';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { Github, Instagram, Moon, Sun, Youtube } from 'lucide-react';
import { useEffect, useState } from 'react';

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    // Cek preferensi tema dari localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setOpen(true);
    } else if (savedTheme === 'light') {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    // Terapkan atau hapus kelas 'dark' pada elemen <html>
    if (open) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [open]);

  const handleDark = () => {
    setOpen(!open);
  };
  const header = (
    <header>
      <div className="text-center dark:bg-slate-800 dark:text-slate-200 bg-slate-300 my-6 rounded-md p-8">
        {/* <Image src={'/Foto-art.png'} width={100} height={50} alt='images' className='mx-auto rounded-[100%] overflow-hidden'/> */}
        <Link href={'/'}>
          <h1 className="text-xl lg:text-2xl mb-3 font-bold">Hafidz&apos;s Blog 💻</h1>
        </Link>
        <p className="font-medium">The place where you can find my thought 💭 and expreince🍃</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="text-center dark:text-slate-200 ">
        <Link href={'/'}>
          <h2 className="mt-10 mb-3 border-t pt-5 text-md md:text-xl">Create With ✨ By Muhammad Hafidz</h2>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-3 dark:text-white pb-10">
        <a href="https://github.com/HapidzGIT" target="_blank">
          {' '}
          <Github />
        </a>
        <a href="https://www.youtube.com/@muhammadhafidz." target="_blank">
          {' '}
          <Youtube />
        </a>
        <a href="https://www.instagram.com/hafidzfrqn_/" target="_blank">
          {' '}
          <Instagram />
        </a>
      </div>
    </footer>
  );
  return (
    <html lang="en">
      <body className="dark:bg-[#121212]">
        <main className={poppins.className}>
          <button onClick={handleDark} className=" z-10 dark:text-white fixed top-3 right-2 md:top-10 md:right-20">
            {open ? <Sun /> : <Moon />}
          </button>
          <div className="mx-auto max-w-3xl container px-8 relative">
            {header}
            {children}
            {footer}
          </div>
        </main>
      </body>
    </html>
  );
}
