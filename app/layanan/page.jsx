import React from 'react';
import LayananContent from '@/components/LayananContent';

export const metadata = {
  title: 'Layanan Penangkal Petir – Tema Grounding Petir',
  description: 'Paket penangkal petir konvensional, elektrostatis, dan surge arrester. Gratis jasa instalasi, free tes grounding, dan garansi resmi hingga 2 tahun.',
};

export default function LayananPage() {
  return (
    <main className="min-h-screen bg-neutral-bg pb-24">

      {/* Banner Header */}
      <section className="bg-primary py-24 text-center text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-lines" />
        <div className="relative z-10">
          <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-4">Layanan</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Penangkal Petir</h1>
          <p className="text-white/60 text-lg font-medium">Penjualan &amp; Pemasangan Penangkal Petir Terpercaya Se-Indonesia</p>
        </div>
      </section>

      <LayananContent />
    </main>
  );
}
