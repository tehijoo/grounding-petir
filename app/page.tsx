"use client";
import ScrollReveal from "@/components/ScrollReveal";
import Counter from "@/components/Counter";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Home as HomeIcon, Building2 } from "lucide-react";

const tickerItems = [
  "Penangkal Petir Konvensional",
  "Penangkal Petir Elektrostatis",
  "Garansi Produk 2 Tahun",
  "Operator Ready 24 Jam",
  "Melayani Se-Indonesia",
];

const heroImages = [
  "/images/gallery/7.jpg",
  "/images/gallery/11.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/12.jpg",
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="w-full bg-neutral-bg overflow-x-hidden">

      {/* --- HERO --- */}
      <section className="relative w-full max-w-[1440px] mx-auto mt-4 md:mt-6 px-4 md:px-6 text-white overflow-hidden rounded-3xl h-[calc(100svh-104px)] min-h-[560px] max-h-[880px] flex flex-col">

        {/* Latar foto bergantian */}
        <div className="absolute inset-0">
          <AnimatePresence>
            <motion.div
              key={heroImages[heroIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${heroImages[heroIndex]}')` }}
            />
          </AnimatePresence>
        </div>

        {/* Overlay transparan supaya foto latar tetap terlihat */}
        <div className="absolute inset-0 bg-primary-dark/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary-dark/40 to-transparent" />

        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative z-10 flex-1 min-h-0 max-w-7xl w-full mx-auto px-0 md:px-8 flex flex-col justify-center">

          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] mb-3 md:mb-6 [text-shadow:0_2px_20px_rgba(0,0,0,0.35)]"
            >
              Penangkal Petir<br />
              <span className="text-brand-gradient">terpasang aman,</span><br />
              bergaransi resmi.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-white/60 text-sm md:text-lg max-w-xl mb-4 md:mb-8 leading-relaxed"
            >
              Kami melayani penjualan &amp; pemasangan penangkal petir konvensional maupun elektrostatis untuk rumah, gedung, hingga area komersial, dikerjakan langsung oleh mekanik berpengalaman dan profesional.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-10"
            >
              <a
                href="https://wa.me/6285694549518"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-slide bg-secondary text-primary-dark px-6 py-3 md:px-7 md:py-3.5 font-semibold text-sm tracking-wide inline-flex items-center gap-2"
              >
                Konsultasi Gratis
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
              <Link
                href="/layanan"
                className="border border-white/25 hover:border-secondary text-white rounded-full px-6 py-3 md:px-7 md:py-3.5 font-semibold text-sm tracking-wide transition-colors duration-300"
              >
                Lihat Layanan
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 md:gap-6 max-w-md border-t border-white/10 pt-4 md:pt-8"
            >
              <div>
                <p className="font-display text-2xl md:text-4xl font-bold text-secondary">
                  <Counter to={10} suffix="+" />
                </p>
                <p className="text-white/50 text-[11px] md:text-xs mt-1 leading-snug">Paket Tersedia</p>
              </div>
              <div>
                <p className="font-display text-2xl md:text-4xl font-bold text-secondary">
                  <Counter to={2} suffix=" Thn" />
                </p>
                <p className="text-white/50 text-[11px] md:text-xs mt-1 leading-snug">Garansi Produk</p>
              </div>
              <div>
                <p className="font-display text-2xl md:text-4xl font-bold text-secondary">
                  <Counter to={24} suffix=" Jam" />
                </p>
                <p className="text-white/50 text-[11px] md:text-xs mt-1 leading-snug">Operator Siaga</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Badge mengambang */}
        <div className="absolute bottom-20 md:bottom-24 right-4 md:right-8 z-10 bg-secondary text-primary-dark px-4 py-2.5 text-xs font-bold tracking-wide shadow-xl rounded-full">
          Bergaransi Resmi
        </div>

        {/* Marquee ticker */}
        <div className="relative z-10 bg-primary-dark/40 backdrop-blur-sm border-t border-white/10 py-2 md:py-3 overflow-hidden shrink-0">
          <div className="flex whitespace-nowrap animate-marquee w-max">
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="flex items-center text-white/40 text-sm font-medium tracking-wide">
                {item}
                <span className="mx-6 text-secondary">&#9670;</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- AHLINYA PENANGKAL PETIR --- */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <ScrollReveal direction="up">
            <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-4">Tentang Kami</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-6">
              Ahlinya penangkal petir konvensional &amp; elektrostatis se-Indonesia
            </h2>
            <p className="text-neutral-text/70 leading-relaxed mb-8">
              Tema Grounding Petir adalah penyedia jasa penjualan dan pemasangan penangkal petir terpercaya se-Indonesia. Kami mengerjakan instalasi sistem konvensional maupun elektrostatis untuk rumah, gedung, hingga area komersial, lengkap dengan garansi produk resmi.
            </p>
            <Link
              href="/tentang-kami"
              className="btn-slide border border-primary/15 hover:border-secondary text-primary px-6 py-3 font-semibold text-sm inline-flex items-center gap-2 transition-colors duration-300"
            >
              Selengkapnya Tentang Kami
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-7">
          <ScrollReveal direction="scale">
            <div className="grid grid-cols-2 gap-4">
              {[
                "Mekanik Berpengalaman & Profesional",
                "Pekerjaan Rapi, Baik & Aman",
                "Garansi Produk 2 Tahun",
                "Layanan Operator Ready 24 Jam",
              ].map((text, i) => (
                <div key={i} className="border border-primary/20 hover:border-secondary hover:shadow-md rounded-2xl p-6 transition-all duration-300 group">
                  <span className="text-secondary font-display font-bold text-xl">0{i + 1}</span>
                  <p className="text-primary font-medium text-sm mt-3 leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- KEUNGGULAN --- */}
      <section className="bg-primary text-white py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-lines" />
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal direction="up">
            <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-center">Kenapa Kami</p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Kenapa Pilih Kami</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Terpercaya", desc: "Penjual & agen penangkal petir terpercaya se-Indonesia." },
              { title: "Harga Terbaik", desc: "Dapatkan penawaran harga terbaik untuk setiap paket." },
              { title: "Dua Sistem Pilihan", desc: "Tersedia sistem konvensional untuk rumah dan elektrostatis untuk gedung." },
              { title: "Free Tes Grounding", desc: "Pengujian sistem pembumian gratis untuk hasil instalasi maksimal." },
            ].map((item, i) => (
              <ScrollReveal direction="up" delay={i * 0.08} key={i}>
                <div className="bg-primary-light/20 border border-white/10 rounded-2xl p-8 h-full">
                  <span className="text-secondary font-display font-bold text-2xl">0{i + 1}</span>
                  <h4 className="font-semibold text-lg mt-4 mb-2">{item.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- LAYANAN (2 Kartu) --- */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-3">Layanan Kami</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Penangkal Petir Konvensional &amp; Elektrostatis</h2>
            </div>
            <Link href="/layanan" className="link-underline text-primary font-semibold text-sm flex items-center gap-2 w-fit">
              Semua Layanan
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              tag: "01 · Untuk Rumah & Bangunan Kecil",
              title: "Penangkal Petir Konvensional",
              desc: "Sistem air terminal (splitzen) dengan kabel dan grounding, mulai dari paket 2 AIP. Solusi hemat untuk perlindungan area terbatas.",
              points: ["Cocok untuk rumah tinggal, ruko, bangunan kecil", "Paket mulai dari Rp 2.000.000, gratis instalasi & garansi"],
              icon: HomeIcon,
              image: "/images/gallery/10.jpg",
              href: "/layanan#konvensional",
            },
            {
              tag: "02 · Untuk Gedung & Area Luas",
              title: "Penangkal Petir Elektrostatis",
              desc: "Radius perlindungan lebih luas (40–150 meter) hanya dengan 1 titik terminal, lebih efisien untuk bangunan bertingkat dan area komersial.",
              points: ["Cocok untuk gedung, pabrik, dan area komersial", "Free tes grounding, gratis instalasi & garansi"],
              icon: Building2,
              image: "/images/gallery/8.jpg",
              href: "/layanan#elektrostatis",
            },
          ].map((service, index) => (
            <ScrollReveal direction="up" delay={index * 0.12} key={index}>
              <Link href={service.href} className="group block border border-primary/20 hover:border-secondary hover:shadow-md rounded-2xl overflow-hidden transition-all duration-300 h-full">
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-primary-dark/0 to-transparent" />
                  <div className="absolute bottom-4 left-4 z-10 bg-secondary text-primary-dark w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110">
                    <service.icon size={26} />
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-secondary font-semibold text-[11px] tracking-widest uppercase mb-3">{service.tag}</p>
                  <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-neutral-text/70 text-sm leading-relaxed mb-5">{service.desc}</p>
                  <ul className="space-y-2 mb-6 text-sm text-neutral-text/80">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-secondary font-bold">＋</span> {point}</li>
                    ))}
                  </ul>
                  <span className="text-primary group-hover:text-secondary font-semibold text-sm inline-flex items-center gap-2 transition-colors">
                    Lihat Detail Layanan
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* --- KENALI 4 HAL --- */}
      <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <div className="bg-primary text-white relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-grid-lines" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <p className="text-white/50 text-xs tracking-[0.25em] uppercase mb-3">Panduan Singkat</p>
                <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 text-secondary">4 Hal</h2>
                <p className="text-white/70 max-w-xs leading-snug">yang wajib diperhatikan sebelum memasang penangkal petir</p>
              </div>
              <div className="p-10 md:p-14 border-t md:border-t-0 md:border-l border-white/10">
                <ul className="space-y-6">
                  {[
                    "Kenali kebutuhan bangunan: rumah cocok dengan sistem konvensional, gedung/area luas lebih efisien dengan elektrostatis",
                    "Pastikan sistem grounding (pembumian) diuji dan diukur dengan benar",
                    "Perhatikan radius perlindungan yang dibutuhkan; elektrostatis mampu melindungi hingga 150 meter dengan 1 terminal",
                    "Pilih produk yang bergaransi resmi dan dipasang oleh mekanik berpengalaman",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-secondary font-display font-bold shrink-0">0{i + 1}</span>
                      <p className="text-white/70 text-sm leading-relaxed">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- KEUNTUNGAN & AREA LAYANAN --- */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ScrollReveal direction="up" className="lg:col-span-2">
          <div className="border border-primary/20 hover:shadow-md rounded-2xl h-full p-8 md:p-10 transition-shadow duration-300">
            <h3 className="text-primary font-bold text-xl mb-2">Keuntungan Memesan di Tema Grounding Petir</h3>
            <p className="text-neutral-text/60 text-sm mb-8">Harga terbaik tanpa mengorbankan kualitas material dan keamanan pemasangan.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "Gratis jasa instalasi di setiap paket",
                "Free tes grounding untuk hasil maksimal",
                "Bergaransi resmi hingga 2 tahun",
                "Operator siap melayani 24 jam",
                "Mekanik berpengalaman & profesional",
                "Melayani proyek rumah hingga gedung skala besar",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-secondary mt-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></span>
                  <p className="text-sm text-neutral-text/80">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-primary text-white rounded-2xl h-full p-8 md:p-10 flex flex-col">
            <h3 className="font-bold text-xl mb-3">Area Layanan</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Melayani se-Indonesia, dengan fokus wilayah Jakarta, Bogor, Depok, Bekasi, Banten, dan Jawa Barat.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* --- FITUR BAWAH --- */}
      <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Tim Profesional", desc: "Mekanik handal dan berpengalaman di bidang instalasi penangkal petir.", icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.027-.396.05-.6.075m-.6-0.075a48.667 48.667 0 00-3.282-.38m-10.966 0c1.053-.146 2.12-.257 3.204-.33M6.75 14.15a48.667 48.667 0 01-3.282.38m-1.218-0.075c-.204-.025-.406-.048-.6-.075m0 0a2.18 2.18 0 01-.75-1.661V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0010.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" },
            { title: "Tepat Waktu", desc: "Pengerjaan tepat dan singkat waktu, jangan diragukan lagi.", icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
            { title: "Hasil Maksimal", desc: "Hasil pemasangan penangkal petir yang rapi, aman, dan presisi.", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
          ].map((item, i) => (
            <ScrollReveal direction="up" delay={i * 0.08} key={i}>
              <div className="bg-surface border border-primary/20 hover:shadow-md rounded-2xl p-8 h-full flex items-start gap-4 transition-shadow duration-300">
                <div className="w-10 h-10 text-secondary shrink-0">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={item.icon} /></svg>
                </div>
                <div>
                  <h4 className="text-primary font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-neutral-text/60 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* --- SPESIALIS & GALERI --- */}
      <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto pb-24 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/3">
          <ScrollReveal direction="up">
            <div className="bg-primary text-white rounded-3xl p-10 h-full flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-lines" />
              <div className="relative z-10">
                <p className="text-white/50 text-xs tracking-[0.25em] uppercase mb-2">Spesialis</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary">Penangkal Petir</h2>
                <p className="text-sm leading-relaxed text-white/60">
                  Penangkal petir konvensional dan elektrostatis dengan garansi resmi, memberi perlindungan maksimal untuk rumah, gedung, dan area komersial Anda.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col">
          <ScrollReveal direction="left">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Galeri Portofolio</h2>
              <Link href="/galeri" className="link-underline text-primary font-semibold text-sm flex items-center gap-2">
                Lihat Semua
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'].map((filename, index) => (
                <div key={index} className="w-full aspect-[4/3] bg-neutral-bg cursor-pointer overflow-hidden rounded-2xl group relative">
                  <img
                    src={`/images/gallery/${filename}`}
                    alt="Dokumentasi pemasangan penangkal petir"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="max-w-7xl mx-4 md:mx-8 xl:mx-auto bg-primary py-16 relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-grid-lines" />
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="text-white text-center md:text-left w-full md:w-3/5">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">Siap lindungi properti Anda dari petir?</h3>
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              Hubungi Tema Grounding Petir hari ini untuk konsultasi gratis dan penawaran harga terbaik.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <span className="text-secondary font-display font-bold text-2xl tracking-wide">0856 9454 9518</span>
            <Link
              href="/kontak"
              className="btn-slide bg-secondary text-primary-dark px-7 py-3.5 font-semibold text-sm w-full sm:w-auto text-center"
            >
              Chat Admin
            </Link>
          </div>
        </div>
      </section>

      {/* --- BLOG & ARTIKEL --- */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-3">Blog &amp; Artikel</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Recent Post</h2>
            </div>
            <Link href="/artikel" className="link-underline text-primary font-semibold text-sm flex items-center gap-2 w-fit">
              View More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Perbedaan Penangkal Petir Konvensional & Elektrostatis", date: "20 Agustus 2026", slug: "perbedaan-penangkal-petir-konvensional-elektrostatis", image: "/images/gallery/10.jpg" },
              { title: "Tips Memilih Jasa Pasang Penangkal Petir yang Tepat", date: "10 Juli 2026", slug: "tips-memilih-jasa-pasang-penangkal-petir", image: "/images/gallery/4.jpg" },
              { title: "Pentingnya Tes Grounding (Sistem Pembumian) yang Benar", date: "25 Juni 2026", slug: "pentingnya-tes-grounding-sistem-pembumian", image: "/images/gallery/9.jpg" },
            ].map((article, index) => (
              <Link key={index} href={`/artikel/${article.slug}`} className="group block border border-primary/20 hover:border-secondary hover:shadow-md rounded-2xl overflow-hidden transition-all duration-300">
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-neutral-text/40 mb-2 font-medium">{article.date}</p>
                  <h3 className="font-bold text-primary text-base leading-snug mb-4 group-hover:text-secondary transition-colors duration-300">
                    {article.title}
                  </h3>
                  <span className="text-primary group-hover:text-secondary font-semibold text-sm inline-flex items-center gap-2 transition-colors">
                    Read More
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>

    </main>
  );
}
