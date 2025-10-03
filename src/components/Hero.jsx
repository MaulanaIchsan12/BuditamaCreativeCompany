import React from "react";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#fafafa] overflow-hidden">
      {/* Background animasi */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" />
      </div>

      {/* Konten utama */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        {/* Bagian kiri teks & kanan gambar */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12">
          {/* Kiri: Teks */}
          <div className="flex-1 space-y-6">
            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-slate-900 lg:text-5xl">
              BUDITAMA CREATIVE
              <span className="block mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                COMPANY PROFILE
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              Kami adalah perusahaan pengadaan barang dan jasa yang berdedikasi
              memberikan pelayanan dengan sepenuh hati. Berbekal pengalaman dan
              komitmen tinggi, kami hadir sebagai solusi terpercaya bagi
              kebutuhan Anda, baik dalam skala kecil maupun besar.
            </p>
          </div>

          {/* Kanan: Gambar */}
          <div className="flex-1 flex justify-center">
            <img
              src="/src/assets/Cafe.jpeg"
              alt="Company Profile"
              className="w-full max-w-md rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Tombol CTA pindah ke bawah */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-12">
          <button className="px-8 py-4 rounded-full bg-slate-900 text-white font-medium hover:shadow-lg hover:shadow-slate-900/10 transition-all duration-300 transform hover:-translate-y-0.5 group inline-flex items-center">
            <a href="https://wa.me/6281997690650">Hubungi Kami</a>
            <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button className="px-8 py-4 rounded-full border-2 border-slate-700 text-slate-900 font-medium hover:bg-slate-50 transition-all duration-300 group inline-flex items-center">
            Profil
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
