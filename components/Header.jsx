"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavLinkClass = (path) => {
    const isActive = pathname === path;
    return `link-underline px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
      isActive ? "text-secondary" : "text-white/70 hover:text-secondary"
    }`;
  };

  return (
    <header className="w-full font-body sticky top-0 z-50 bg-primary-dark">
      {/* Aksen tipis di puncak header */}
      <div className="h-[3px] w-full bg-secondary" />

      {/* Nav Bar */}
      <div className="py-3 px-4 md:px-8 flex justify-between items-center border-b border-white/10">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/logo-3a-emblem-hijau.png"
            alt="Logo Tema Grounding Petir"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-white/10 bg-white shrink-0"
          />

          <div className="flex flex-col">
            <h1 className="text-white font-bold text-lg md:text-xl leading-none">Tema Grounding Petir</h1>
            <p className="text-secondary text-[8px] md:text-[10px] font-semibold tracking-[0.25em] uppercase mt-1.5">Penangkal Petir</p>
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link href="/" className={getNavLinkClass("/")}>Home</Link>
          <Link href="/tentang-kami" className={getNavLinkClass("/tentang-kami")}>Tentang Kami</Link>
          <Link href="/layanan" className={getNavLinkClass("/layanan")}>Layanan</Link>
          <Link href="/galeri" className={getNavLinkClass("/galeri")}>Galeri</Link>
          <Link href="/artikel" className={getNavLinkClass("/artikel")}>Artikel</Link>
          <Link href="/kontak" className={getNavLinkClass("/kontak")}>Kontak</Link>
        </nav>

        {/* Tombol Hamburger Mobile */}
        <button className="lg:hidden p-2 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary-dark border-t border-white/10 shadow-2xl absolute w-full left-0 animate-in fade-in slide-in-from-top duration-300 overflow-y-auto max-h-[80vh] rounded-b-3xl">
          <div className="flex flex-col p-6 gap-1">
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className="px-4 py-2.5 text-white/70 hover:text-secondary font-medium">Home</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/tentang-kami" className="px-4 py-2.5 text-white/70 hover:text-secondary font-medium">Tentang Kami</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/layanan" className="px-4 py-2.5 text-white/70 hover:text-secondary font-medium">Layanan</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/galeri" className="px-4 py-2.5 text-white/70 hover:text-secondary font-medium">Galeri</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/artikel" className="px-4 py-2.5 text-white/70 hover:text-secondary font-medium">Artikel</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/kontak" className="px-4 py-2.5 text-white/70 hover:text-secondary font-medium">Kontak</Link>
          </div>
        </div>
      )}
    </header>
  );
}
