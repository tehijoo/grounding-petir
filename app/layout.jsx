import './globals.css'
import { Poppins, Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer' // <-- Import Footer yang baru dibuat

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Tema Grounding Petir | Jasa Penjualan & Pemasangan Penangkal Petir',
  description: 'Penjualan & pemasangan penangkal petir konvensional dan elektrostatis, terpercaya se-Indonesia. Mekanik berpengalaman, garansi produk 2 tahun, operator ready 24 jam.',
  keywords: [
    'penangkal petir', 'pasang penangkal petir', 'jasa penangkal petir', 'jasa pasang penangkal petir',
    'anti petir', 'pasang anti petir', 'toko penangkal petir', 'penangkal petir jakarta',
    'penangkal petir banten', 'penangkal petir bekasi', 'penangkal petir bogor', 'penangkal petir depok',
    'pasang penangkal petir jawa barat', 'harga penangkal petir', 'harga pasang penangkal petir',
    'biaya pasang penangkal petir', 'jasa pasang surge arrester', 'instalasi grounding sistem',
    'jual penangkal petir', 'penangkal petir murah', 'penangkal petir rumah', 'pasang penangkal petir gedung',
    'penangkal petir elektrostatis', 'penangkal petir konvensional',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${poppins.variable} ${inter.variable}`}>
      {/* Tambahan flex flex-col min-h-screen agar layout stabil dan footer selalu di bawah */}
      <body className="bg-neutral-bg text-neutral-text flex flex-col min-h-screen font-body">
        
        {/* Header akan selalu muncul di atas di setiap halaman */}
        <Header /> 

        {/* children adalah isi dari page.jsx (halaman yang berubah-ubah) dibungkus main flex-grow */}
        <main className="flex-grow">
          {children} 
        </main>

        {/* Footer akan selalu muncul di bawah di setiap halaman */}
        <Footer />

      </body>
    </html>
  )
}