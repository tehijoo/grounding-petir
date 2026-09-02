"use client";

import React, { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    phone: '',
    pesan: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendToWhatsApp = () => {
    if(!formData.nama || !formData.phone) {
      alert("Nama dan Nomor HP/WhatsApp wajib diisi!");
      return;
    }

    const targetWA = "6285694549518";

    const textMessage = `Halo Tema Grounding Petir,%0A%0ASaya ingin bertanya mengenai pemasangan penangkal petir. Berikut data diri saya:%0A%0A*Nama:* ${formData.nama}%0A*Email:* ${formData.email || '-' }%0A*No HP:* ${formData.phone}%0A*Pesan:* ${formData.pesan}%0A%0ATerima kasih.`;

    const waLink = `https://wa.me/${targetWA}?text=${textMessage}`;

    window.open(waLink, '_blank');
  };

  return (
    <main className="min-h-screen bg-neutral-bg pb-24">

      {/* Banner Header */}
      <section className="bg-primary py-24 text-center text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-lines" />
        <div className="relative z-10">
          <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-4">Kontak</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontak Kami</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Percayakan kebutuhan penangkal petir Anda kepada ahlinya. Keamanan, ketahanan, dan garansi resmi adalah prioritas kami.
          </p>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="container mx-auto max-w-6xl px-4 md:px-8 mt-16">
        <div className="flex flex-col lg:flex-row gap-4">

          {/* Kolom Kiri: Informasi Kontak */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">

            <a href="https://wa.me/6285694549518" target="_blank" rel="noopener noreferrer" className="bg-surface border border-primary/20 rounded-2xl p-8 flex flex-col items-center text-center group hover:bg-primary hover:border-primary hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 text-secondary mb-4">
                <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-primary group-hover:text-white mb-2 transition-colors">WhatsApp / Telepon</h3>
              <p className="text-secondary font-bold text-xl tracking-wide">
                0856 9454 9518
              </p>
              <p className="text-neutral-text/40 group-hover:text-white/40 text-xs mt-1 transition-colors">Klik untuk chat langsung</p>
            </a>

            <div className="bg-surface border border-primary/20 hover:shadow-md rounded-2xl p-8 flex flex-col items-center text-center transition-shadow duration-300">
              <div className="w-12 h-12 text-secondary mb-4">
                <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Operator Ready 24 Jam</h3>
              <p className="text-neutral-text/60 text-sm leading-relaxed">
                Konsultasi dan pemesanan bisa dilayani kapan saja.
              </p>
            </div>

            <div className="bg-surface border border-primary/20 hover:shadow-md rounded-2xl p-8 flex flex-col items-center text-center transition-shadow duration-300">
              <div className="w-12 h-12 text-secondary mb-4">
                <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Area Layanan</h3>
              <p className="text-neutral-text/60 text-sm leading-relaxed">
                Se-Indonesia, fokus Jakarta, Bogor,<br/>Depok, Bekasi &amp; Banten
              </p>
            </div>

          </div>

          {/* Kolom Kanan: Form Kontak ke WA */}
          <div className="w-full lg:w-2/3 bg-surface border border-primary/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-primary mb-2">Tinggalkan Pesan Disini</h2>
            <div className="h-1 w-16 bg-secondary mb-8"></div>

            <form className="flex flex-col gap-6">

              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 flex flex-col gap-2">
                  <label htmlFor="nama" className="text-sm font-semibold text-primary">Nama Anda *</label>
                  <input
                    type="text"
                    id="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    className="w-full bg-neutral-bg border border-primary/20 rounded-xl px-4 py-3 outline-none focus:border-secondary transition-colors duration-300"
                  />
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-primary">Email (Opsional)</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Masukkan alamat email"
                    className="w-full bg-neutral-bg border border-primary/20 rounded-xl px-4 py-3 outline-none focus:border-secondary transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-semibold text-primary">No. HP / WhatsApp *</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contoh: 0812xxxxxx"
                  className="w-full bg-neutral-bg border border-primary/20 rounded-xl px-4 py-3 outline-none focus:border-secondary transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="text-sm font-semibold text-primary">Pesan</label>
                <textarea
                  id="pesan"
                  rows="5"
                  value={formData.pesan}
                  onChange={handleChange}
                  placeholder="Tuliskan kebutuhan atau pertanyaan Anda di sini..."
                  className="w-full bg-neutral-bg border border-primary/20 rounded-xl px-4 py-3 outline-none focus:border-secondary transition-colors duration-300 resize-y"
                ></textarea>
              </div>

              <button
                type="button"
                onClick={sendToWhatsApp}
                className="btn-slide bg-secondary text-primary-dark font-semibold py-3.5 px-8 mt-2 w-full md:w-auto self-start flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                Kirim via WhatsApp
              </button>

            </form>
          </div>

        </div>
      </section>

    </main>
  );
}
