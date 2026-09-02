import React from 'react';
import { ShieldCheck, Award, Users2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Tentang Kami – Tema Grounding Petir',
  description: 'Tema Grounding Petir adalah penyedia jasa penjualan dan pemasangan penangkal petir konvensional & elektrostatis, terpercaya se-Indonesia.',
};

export default function TentangKamiPage() {
  return (
    <main className="bg-neutral-bg">

      {/* Banner Section */}
      <section className="bg-primary text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-lines" />
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-4">Tentang Kami</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Tema Grounding Petir</h1>
          <p className="text-white/60 text-lg font-medium">
            Penjualan &amp; Pemasangan Penangkal Petir Terpercaya Se-Indonesia
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20 max-w-6xl">
        {/* Main Story Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mb-24">
          <ScrollReveal direction="left" className="order-2 md:order-1">
            <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-4">Siapa Kami?</p>
            <h2 className="text-3xl font-bold text-primary mb-6">Penyedia Jasa Penangkal Petir Terpercaya</h2>

            <div className="space-y-4 text-neutral-text/70 leading-relaxed">
              <p>
                <strong className="text-primary">Tema Grounding Petir</strong> adalah penyedia jasa penjualan dan pemasangan penangkal petir yang melayani pelanggan di seluruh Indonesia. Pemasangan dikerjakan langsung oleh mekanik yang berpengalaman dan profesional.
              </p>
              <p>
                Kami menyediakan dua sistem utama: <strong className="text-primary">Penangkal Petir Konvensional</strong>, solusi hemat dengan air terminal dan grounding untuk rumah dan bangunan kecil; serta <strong className="text-primary">Penangkal Petir Elektrostatis</strong>, dengan radius perlindungan lebih luas (40–150 meter) yang efisien untuk gedung dan area komersial. Kami juga menyediakan <strong className="text-primary">surge arrester</strong> untuk proteksi panel listrik.
              </p>
              <p>
                Setiap paket dikerjakan lengkap dengan tes grounding, gratis jasa instalasi, dan bergaransi resmi hingga 2 tahun, ditunjang operator yang siap melayani konsultasi 24 jam.
              </p>
            </div>

            {/* Badge Kategori Produk */}
            <div className="flex flex-wrap gap-3 mt-8">
              {['Konvensional', 'Elektrostatis', 'Surge Arrester'].map((brand) => (
                <span key={brand} className="border border-primary/15 text-primary text-xs font-semibold px-4 py-2 tracking-wide rounded-full">
                  {brand}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Foto Dokumentasi */}
          <ScrollReveal direction="scale" className="order-1 md:order-2">
            <div className="relative overflow-hidden bg-neutral-bg aspect-video md:aspect-square rounded-3xl">
              <img src="/images/gallery/3.jpg" alt="Dokumentasi pemasangan penangkal petir" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 border-4 border-secondary/0 hover:border-secondary/60 transition-colors duration-500" />
            </div>
          </ScrollReveal>
        </section>

        {/* Yang Kami Punya Section */}
        <section className="mb-24">
          <ScrollReveal direction="up">
            <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-center">Nilai Kami</p>
            <h3 className="text-3xl font-bold text-center text-primary mb-14">Yang Kami Punya</h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Integrity", desc: "Kami mempunyai integritas yang tinggi dalam bekerja.", icon: ShieldCheck },
              { title: "Excellence", desc: "Kami mempunyai tenaga kerja yang mempunyai keterampilan dalam bidangnya.", icon: Award },
              { title: "Collaboration", desc: "Berkolaborasi untuk mendapatkan hasil yang maksimal.", icon: Users2 }
            ].map((item, idx) => (
              <ScrollReveal direction="up" delay={idx * 0.1} key={idx}>
                <div className="bg-surface border border-primary/20 hover:shadow-md rounded-2xl p-8 text-center h-full transition-shadow duration-300">
                  <div className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 text-secondary">
                    <item.icon size={26} />
                  </div>
                  <h4 className="font-bold text-primary mb-3 text-lg">{item.title}</h4>
                  <p className="text-neutral-text/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Visi & Misi Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ScrollReveal direction="left">
            <div className="bg-primary p-10 text-white flex flex-col h-full relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-grid-lines" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-secondary text-primary-dark w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-display font-bold text-lg">
                    01
                  </div>
                  <h3 className="text-2xl font-bold">Visi</h3>
                </div>
                <ol className="space-y-4 text-white/60 text-sm leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold font-display shrink-0">01</span>
                    Menjadi toko dan jasa instalasi terbesar dan terbaik.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold font-display shrink-0">02</span>
                    Terus berkembang dan maju bersama Indonesia, berkomitmen kuat serta konsisten berperan aktif dalam memenuhi kebutuhan instalasi penangkal petir.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold font-display shrink-0">03</span>
                    Menjadi toko dan jasa instalasi penangkal petir terpercaya yang dikenal akan integritas tinggi, selalu berinovasi, dan memusatkan pelayanan pada kepuasan klien.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold font-display shrink-0">04</span>
                    Membanggakan bangsa dan negara Indonesia.
                  </li>
                </ol>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-surface border border-primary/20 hover:shadow-md rounded-3xl p-10 flex flex-col h-full transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="border border-primary/15 text-primary w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-display font-bold text-lg">
                  02
                </div>
                <h3 className="text-2xl font-bold text-primary">Misi</h3>
              </div>
              <ol className="space-y-4 text-neutral-text/70 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold font-display shrink-0">01</span>
                  Selalu menawarkan jasa instalasi penangkal petir terbaik dengan memperhatikan apa yang diinginkan serta dibutuhkan oleh klien dan memberikan rasa aman dan nyaman yaitu ketepatan waktu, kualitas pengerjaan, dan transparansi harga.
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold font-display shrink-0">02</span>
                  Memberdayakan masyarakat Indonesia melalui pemanfaatan teknologi dan tenaga kerja yang tersedia.
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold font-display shrink-0">03</span>
                  Menciptakan lapangan kerja dalam bidang instalasi penangkal petir yang bermanfaat untuk menjaga keamanan dari sambaran petir di lokasi hunian masyarakat Indonesia.
                </li>
              </ol>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </main>
  );
}
