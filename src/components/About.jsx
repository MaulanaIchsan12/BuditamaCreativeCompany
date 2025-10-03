import React from "react";
import { Rocket, Eye, ArrowUpRight } from "lucide-react";

const About = () => {
  const features = [
    {
      title: "Visi",
      description:
        "Menjadi Event Organizer yang inovatif dan terpercaya, menciptakan pengalaman tak terlupakan bagi setiap klien dan audiens.",
      icon: Rocket,
      gradient: "from-violet-600 to-indigo-600",
    },
    {
      title: "Misi",
      description: `• Menghadirkan konsep yang kreatif dan relevan dengan kebutuhan klien.\n
                    • Memberi layanan profesional dari perencanaan hingga pelaksanaan.\n
                    • Membangun kemitraan jangka panjang dengan klien dan rekan.\n
                    • Mendorong pertumbuhan industri kreatif dari event berkualitas.`,
      icon: Eye,
      gradient: "from-indigo-600 to-blue-600",
    },
  ];

  return (
    <section className="relative py-32 bg-slate-50">
      {/* Background gradasi */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] aspect-[1/0.7] bg-gradient-to-b from-white via-slate-50/20 to-transparent rounded-[50%] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            Tentang Buditama
            <span className="block mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Creative Company
            </span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Buditama Creative adalah brand Event Organizer dan Creative
            Production yang bernaung di bawah PT Karya Buditama Wisata. Kami
            hadir sebagai solusi bagi perusahaan, instansi pemerintahan,
            komunitas maupun brand untuk mewujudkan event kreatif, berkesan, dan
            profesional.
          </p>
        </div>

        {/* Judul VISI & MISI */}
        <div className="text-center mt-20">
          <h3 className="ttext-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            Visi & Misi
            <span className="block mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Buditama Creative Company
            </span>
          </h3>
          <p className="mt-2 text-lg text-slate-600">
            Landasan dan arah pengembangan Buditama Creative
          </p>
        </div>

        {/* Feature cards (Visi & Misi) */}
        <div className="mt-12 flex justify-center gap-12 flex-wrap">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition-all duration-300 max-w-md w-full text-center"
            >
              <div
                className={`mx-auto flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white shadow-lg`}
              >
                <feature.icon size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed whitespace-pre-line">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
