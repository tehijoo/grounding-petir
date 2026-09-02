import React from 'react';
import Link from 'next/link';
import { articles } from './data';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Artikel & Blog – Tema Grounding Petir',
  description: 'Kumpulan artikel dan informasi seputar penangkal petir, sistem grounding, dan tips perawatannya.',
};

export default function ArtikelPage() {
  return (
    <main className="min-h-screen bg-neutral-bg pb-24">

      {/* Banner Header */}
      <section className="bg-primary py-24 text-center text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-lines" />
        <div className="relative z-10">
          <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-4">Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog &amp; Artikel</h1>
          <p className="text-white/60 text-lg font-medium">Informasi, Tips, dan Update Terbaru dari Tema Grounding Petir</p>
        </div>
      </section>

      {/* Grid Artikel */}
      <section className="container mx-auto max-w-7xl px-4 md:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {articles.map((article, index) => (
            <ScrollReveal direction="up" delay={index * 0.1} key={article.id}>
              <Link
                href={`/artikel/${article.slug}`}
                className="group block border border-primary/20 hover:border-secondary hover:shadow-md rounded-2xl overflow-hidden transition-all duration-300 h-full"
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-8 flex flex-col">
                  <div className="flex items-center text-xs text-neutral-text/40 mb-3 gap-2">
                    <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <span className="font-medium">{article.date}</span>
                  </div>

                  <h3 className="font-bold text-primary text-lg md:text-xl leading-snug mb-3 group-hover:text-secondary transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-sm text-neutral-text/60 leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="mt-auto flex items-center text-primary font-semibold text-sm group-hover:text-secondary transition-colors duration-300 gap-2 pt-4 border-t border-primary/20">
                    Read More
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}

        </div>
      </section>

    </main>
  );
}
