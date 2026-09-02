import React from 'react';

export const metadata = {
  title: 'Galeri – Tema Grounding Petir',
  description: 'Dokumentasi hasil pemasangan penangkal petir Tema Grounding Petir.',
};

const galleryImages = Array.from({ length: 12 }, (_, i) => `/images/gallery/${i + 1}.jpg`);

export default function GaleriPage() {
  return (
    <main className="min-h-screen bg-neutral-bg pb-24">

      {/* Banner Header */}
      <section className="bg-primary py-24 text-center text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-lines" />
        <div className="relative z-10">
          <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-4">Portofolio</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeri Foto</h1>
          <p className="text-white/60 text-lg font-medium">Dokumentasi Hasil Pemasangan Tema Grounding Petir</p>
        </div>
      </section>

      {/* Grid Galeri */}
      <section className="container mx-auto max-w-7xl px-4 md:px-8 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="group relative w-full aspect-[4/3] bg-surface overflow-hidden rounded-2xl border border-primary/20 hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={src}
                alt={`Dokumentasi pemasangan penangkal petir ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300" />
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
