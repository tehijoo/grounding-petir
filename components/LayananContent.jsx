import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import PhotoPlaceholder from '@/components/PhotoPlaceholder';
import { Home as HomeIcon, Building2, Zap } from 'lucide-react';

const WA_NUMBER = '6285694549518';

const formatPrice = (price) => `Rp ${price.toLocaleString('id-ID')}`;

const waLink = (title, price) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Halo Tema Grounding Petir, saya ingin pesan paket ${title} (${formatPrice(price)}). Mohon info lebih lanjut.`
  )}`;

const konvensionalPackages = [
  {
    title: 'Penangkal Petir Konvensional 2 AIP',
    price: 2000000,
    image: '/images/layanan/konvensional-3-aip.jpg',
    items: [
      '1 Buah Split (Tombak) Atas',
      '1 Buah Split (As Grounding) Bawah',
      '15 Meter Kabel BC 25',
      'Grounding (Pembumian) Max 8 Meter',
      '3 Buah Pipa PVC 1/2',
      'Gratis jasa instalasi',
      'Garansi',
    ],
  },
  {
    title: 'Penangkal Petir Konvensional 3 AIP',
    price: 2500000,
    image: '/images/layanan/konvensional-3-aip.jpg',
    items: [
      '2 Buah Split (Tombak) Atas',
      '1 Buah Split (As Grounding) Bawah',
      '15 Meter Kabel BC 25',
      'Grounding (Pembumian) Max 8 Meter',
      '3 Buah Pipa PVC 1/2',
      'Gratis jasa instalasi',
      'Garansi',
    ],
  },
  {
    title: 'Penangkal Petir Konvensional 4 AIP',
    price: 3000000,
    image: '/images/layanan/konvensional-4-aip.jpg',
    items: [
      '3 Buah Split (Tombak) Atas',
      '1 Buah Split (As Grounding) Bawah',
      '15 Meter Kabel BC 25',
      'Grounding (Pembumian) Max 8 Meter',
      '3 Buah Pipa PVC 1/2',
      'Gratis jasa instalasi',
      'Garansi',
    ],
  },
];

const elektrostatisPackages = [
  {
    title: 'Elektrostatis Blue Curn R 35',
    price: 7500000,
    image: '/images/layanan/elektrostatis-blue-curn-r35.jpg',
    items: [
      'Head Terminal Blue Curnt R 35 Meter',
      'Connecting Sleeve',
      '15 Meter Kabel BC 50',
      'Tiang Penyangga Galvanis 3 Meter',
      'As Grounding 5/8" 1 Meter',
      'Grounding (Pembumian) Max 8 Meter',
      '3 Buah Pipa PVC 1/2',
      'Bok Kontrol 20 x 40 MM',
      'Accessories',
      'Free Tes Grounding',
      'Gratis jasa instalasi',
      'Garansi',
    ],
  },
  {
    title: 'Elektrostatis Kurn R 85',
    price: 8500000,
    image: '/images/layanan/elektrostatis-kurn-r85.jpg',
    items: [
      'Head Terminal Kurn R 85 Meter',
      'Connecting Sleeve',
      '15 Meter Kabel BC 50',
      'Tiang Penyangga Galvanis 3 Meter',
      'As Grounding 5/8" 1 Meter',
      'Grounding (Pembumian) Max 8 Meter',
      '3 Buah Pipa PVC 1/2',
      'Bok Kontrol 20 x 40 MM',
      'Accessories',
      'Free Tes Grounding',
      'Gratis jasa instalasi',
      'Garansi',
    ],
  },
  {
    title: 'Elektrostatis Kurn R 150',
    price: 9300000,
    image: '/images/layanan/elektrostatis-kurn-r150.jpg',
    items: [
      'Head Terminal Kurn R 150 Meter',
      'Connecting Sleeve',
      '15 Meter Kabel BC 50',
      'Tiang Penyangga Galvanis 3 Meter',
      'As Grounding 5/8" 1 Meter',
      'Grounding (Pembumian) Max 8 Meter',
      '3 Buah Pipa PVC 1/2',
      'Bok Kontrol 20 x 40 MM',
      'Accessories',
      'Free Tes Grounding',
      'Gratis jasa instalasi',
      'Garansi',
    ],
  },
  {
    title: 'Elektrostatis Thomas R 125',
    price: 15950000,
    image: '/images/layanan/elektrostatis-thomas-r125.jpg',
    items: [
      'Head Terminal Thomas R 125 Meter',
      'Connecting Sleeve',
      '15 Meter Kabel BC 50',
      'Tiang Penyangga Galvanis 3 Meter',
      'As Grounding 5/8" 1,5 Meter',
      'Grounding (Pembumian) Max 8 Meter',
      '3 Buah Pipa PVC 1/2',
      'Bok Kontrol 20 x 30 MM',
      'Accessories',
      'Free Tes Grounding',
      'Gratis jasa instalasi',
      'Garansi',
    ],
  },
  {
    title: 'Elektrostatis Viking R 100',
    price: 17750000,
    image: '/images/layanan/elektrostatis-viking-r100.jpg',
    items: [
      'Head Terminal Viking R 100 Meter',
      'Connecting Sleeve',
      '15 Meter Kabel BC 50',
      'Tiang Penyangga Galvanis 3 Meter',
      'As Grounding 5/8" 1,5 Meter',
      'Grounding (Pembumian) Max 8 Meter',
      '3 Buah Pipa PVC 1/2',
      'Bok Kontrol 20 x 30 MM',
      'Accessories',
      'Free Tes Grounding',
      'Gratis jasa instalasi',
      'Garansi',
    ],
  },
  {
    title: 'Elektrostatis Strom SS R 100',
    price: 27550000,
    image: '/images/layanan/elektrostatis-strom-ss-r100.jpg',
    items: [
      'Head Terminal Stormaster R 100 Meter',
      'Connecting Sleeve',
      '15 Meter Kabel BC 50',
      'Tiang Penyangga Galvanis 3 Meter',
      'As Grounding 5/8" 1,5 Meter',
      'Grounding (Pembumian) Max 8 Meter',
      '3 Buah Pipa PVC 1/2',
      'Bok Kontrol 20 x 30 MM',
      'Accessories',
      'Free Tes Grounding',
      'Gratis jasa instalasi',
      'Garansi',
    ],
  },
];

const arresterPackages = [
  {
    title: 'Arrester 60 KA / 3 Phase',
    price: 9500000,
    image: '/images/layanan/arrester-60ka.jpg',
    items: [
      'Arrester 60 KA / 3 Phase',
      '3 Meter Kabel Jembo 4 x 16',
      '3 Meter Kabel NYA 1 x 16',
      'As Grounding 5/8" 1,5 Meter',
      'Grounding (Pembumian) Max 8 Meter',
      'Bok Kontrol 20 x 30 MM',
      'Accessories',
      'Free Tes Grounding',
      'Gratis jasa instalasi',
      'Garansi',
    ],
  },
];

const konvensionalPoin = [
  'Membutuhkan banyak kabel',
  'Daerah perlindungan terbatas, hanya sebatas air terminal yang melekat pada bangunan',
  'Lebih mahal bila diterapkan untuk area perlindungan yang luas',
  'Membutuhkan banyak arde',
  'Membutuhkan banyak air terminal di atap',
  'Ada kecenderungan mengganggu estetika bangunan rumah Anda',
  'Bentuk ujung terminal yang runcing dalam jumlah banyak cukup berisiko bagi petugas pemeliharaan gedung',
];

const elektrostatisPoin = [
  'Tidak banyak membutuhkan komponen maupun kabel',
  'Area perlindungan lebih luas, antara 40–150 meter',
  'Lebih murah untuk area perlindungan yang luas',
  'Pada umumnya hanya membutuhkan 1 arde',
  'Hanya membutuhkan 1 terminal untuk radius tertentu',
  'Perawatan dan pemasangan pada bangunan lebih mudah',
  'Pilihan yang tepat dan tidak mengganggu estetika bangunan Anda',
  'Bertindak sebagai pencegah interferensi perangkat komunikasi Anda',
  'Lebih aman bagi pekerja yang akan melakukan perawatan',
];

function PackageCard({ pkg }) {
  return (
    <div className="bg-surface border border-primary/20 hover:border-secondary hover:shadow-md rounded-2xl overflow-hidden flex flex-col transition-all duration-300 h-full">
      <div className="w-full aspect-square overflow-hidden">
        {pkg.image ? (
          <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
        ) : (
          <PhotoPlaceholder />
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-lg font-bold text-primary mb-1 leading-snug">{pkg.title}</h3>
      <p className="text-secondary font-display font-bold text-2xl mb-4">{formatPrice(pkg.price)}</p>
      <p className="text-xs font-semibold text-neutral-text/50 uppercase tracking-wide mb-2">Perangkat yang didapat:</p>
      <ul className="space-y-1.5 mb-6 text-sm text-neutral-text/80 flex-grow">
        {pkg.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-secondary font-bold shrink-0">✅</span> {item}
          </li>
        ))}
      </ul>
      <a
        href={waLink(pkg.title, pkg.price)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-slide bg-primary text-white text-center px-6 py-3 font-semibold text-sm"
      >
        Pesan via WhatsApp
      </a>
      </div>
    </div>
  );
}

export default function LayananContent({ showIntro = true }) {
  return (
    <>
      {/* Intro */}
      {showIntro && (
        <section className="container mx-auto max-w-5xl px-4 md:px-8 mt-16">
          <div className="bg-surface p-8 md:p-12 border border-primary/20 rounded-3xl">
            <h2 className="text-3xl font-bold text-primary mb-6 leading-tight">
              Konvensional, Elektrostatis &amp; <span className="text-secondary">Surge Arrester</span>
            </h2>
            <div className="space-y-4 text-neutral-text/70 leading-relaxed">
              <p>
                Kami menyediakan penjualan dan pemasangan penangkal petir <strong className="text-primary">konvensional</strong> untuk rumah dan bangunan kecil, <strong className="text-primary">elektrostatis</strong> dengan radius perlindungan lebih luas untuk gedung dan area komersial, serta <strong className="text-primary">surge arrester</strong> untuk proteksi panel listrik.
              </p>
              <p>
                Setiap paket sudah termasuk gratis jasa instalasi dan garansi resmi, dikerjakan oleh mekanik berpengalaman dan profesional, dengan operator siap melayani konsultasi 24 jam.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              {['Konvensional', 'Elektrostatis', 'Surge Arrester'].map((tag) => (
                <span key={tag} className="border border-primary/15 text-primary text-xs font-semibold px-4 py-2 tracking-wide rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Konvensional */}
      <section id="konvensional" className="container mx-auto max-w-6xl px-4 md:px-8 mt-20 scroll-mt-24">
        <ScrollReveal direction="up">
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-primary text-secondary w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
              <HomeIcon size={22} />
            </div>
            <div>
              <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase">01 · Untuk Rumah &amp; Bangunan Kecil</p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Paket Penangkal Petir Konvensional</h2>
            </div>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {konvensionalPackages.map((pkg, i) => (
            <ScrollReveal direction="up" delay={i * 0.1} key={pkg.title}>
              <PackageCard pkg={pkg} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Elektrostatis */}
      <section id="elektrostatis" className="container mx-auto max-w-6xl px-4 md:px-8 mt-20 scroll-mt-24">
        <ScrollReveal direction="up">
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-primary text-secondary w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
              <Building2 size={22} />
            </div>
            <div>
              <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase">02 · Untuk Gedung &amp; Area Luas</p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Paket Penangkal Petir Elektrostatis</h2>
            </div>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {elektrostatisPackages.map((pkg, i) => (
            <ScrollReveal direction="up" delay={i * 0.08} key={pkg.title}>
              <PackageCard pkg={pkg} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Arrester */}
      <section id="arrester" className="container mx-auto max-w-6xl px-4 md:px-8 mt-20 scroll-mt-24">
        <ScrollReveal direction="up">
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-primary text-secondary w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
              <Zap size={22} />
            </div>
            <div>
              <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase">03 · Proteksi Panel Listrik</p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Surge Arrester</h2>
            </div>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {arresterPackages.map((pkg, i) => (
            <ScrollReveal direction="up" delay={i * 0.1} key={pkg.title}>
              <PackageCard pkg={pkg} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Skema Perbandingan */}
      <section className="container mx-auto max-w-6xl px-4 md:px-8 mt-20">
        <ScrollReveal direction="up">
          <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-center">Panduan Memilih</p>
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">Skema Sistem Pemasangan Penangkal Petir</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ScrollReveal direction="left">
            <div className="bg-surface border border-primary/20 hover:shadow-md rounded-3xl p-8 md:p-10 h-full transition-shadow duration-300">
              <div className="w-full bg-neutral-bg rounded-2xl overflow-hidden mb-6 border border-primary/20">
                <img src="/images/layanan/skema-konvensional.png" alt="Skema instalasi penangkal petir konvensional" className="w-full h-auto" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">Konvensional / Rumah</h3>
              <div className="h-1 w-12 bg-secondary mb-6"></div>
              <ul className="space-y-3 text-sm text-neutral-text/80">
                {konvensionalPoin.map((text, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-secondary font-bold shrink-0">✅</span> {text}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="bg-primary text-white rounded-3xl p-8 md:p-10 h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-lines" />
              <div className="relative z-10">
                <div className="w-full bg-surface rounded-2xl overflow-hidden mb-6">
                  <img src="/images/layanan/skema-elektrostatis.png" alt="Skema instalasi penangkal petir elektrostatis" className="w-full h-auto" />
                </div>
                <h3 className="text-xl font-bold mb-1">Elektrostatis / Gedung</h3>
                <div className="h-1 w-12 bg-secondary mb-6"></div>
                <ul className="space-y-3 text-sm text-white/70">
                  {elektrostatisPoin.map((text, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-secondary font-bold shrink-0">✅</span> {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto max-w-5xl px-4 md:px-8 mt-20">
        <ScrollReveal direction="up">
          <div className="p-8 md:p-10 bg-primary rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-lines" />
            <div className="relative z-10">
              <h4 className="text-white font-bold text-xl">Butuh Konsultasi Paket yang Tepat?</h4>
              <p className="text-sm text-white/50">Chat admin untuk survei dan penawaran harga terbaik.</p>
            </div>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-slide bg-secondary text-primary-dark px-8 py-3 font-semibold whitespace-nowrap text-center relative z-10"
            >
              Hubungi Admin
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
