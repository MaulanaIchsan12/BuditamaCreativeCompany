import React from "react";
import { Monitor, Smartphone, Cloud, Shield, ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Corporate Event",
      description: "Gathering, Meeting, Launching, Anniversary.",
      icon: Monitor,
      gradient: "from-violet-600 to-indigo-600",
    },
    {
      title: "Festival & Concerts",
      description: "Musik, Seni Budaya, Kuliner.",
      icon: Smartphone,
      gradient: "from-indigo-600 to-blue-600",
    },
    {
      title: "Goverment Event",
      description: "Hari Jadi Daerah, Sosialisasi Program, Workshop.",
      icon: Cloud,
      gradient: "from-blue-600 to-sky-600",
    },
    {
      title: "Activation & Branding",
      description: "Roadshow, Exhibition, Grand Opening.",
      icon: Shield,
      gradient: "from-sky-600 to-cyan-600",
    },
  ];

  return (
    <section className="relative py-32 bg-slate-50">
      {/* Background animasi */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            Layanan Kami
          </h2>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Transform your business with our comprehensive suite of digital
            services, carefully crafted to drive innovation and sustainable
            growth.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div
                className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} text-white shadow-lg mb-6 transform group-hover:scale-110 transition-all duration-300`}
              >
                <service.icon size={28} />
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
