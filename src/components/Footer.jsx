import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Twitter", url: "https://twitter.com", icon: Twitter },
    { name: "Facebook", url: "https://facebook.com", icon: Facebook },
    { name: "Instagram", url: "https://instagram.com", icon: Instagram },
    { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  ];

  const quickLinks = [
    { name: "Dashboard", url: "/" },
    { name: "Tentang Kami", url: "/about" },
    { name: "Proyek", url: "/portfolio" },
    { name: "Layanan Kami", url: "/services" },
    { name: "Kontak", url: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                BUDITAMA CREATIVE
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Kami adalah perusahaan pengadaan barang dan jasa yang berdedikasi
              memberikan pelayanan dengan sepenuh hati.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="w-5 h-5 text-slate-300 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Tautan Cepat
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-slate-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Hubungi Kami
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start text-slate-300">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-violet-500/20 mr-3">
                  <Phone className="w-5 h-5 text-violet-400" />
                </div>
                <span>0819-9769-0650</span>
              </li>
              <li className="flex items-start text-slate-300">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-violet-500/20 mr-3">
                  <Mail className="w-5 h-5 text-violet-400" />
                </div>
                <span>Priatamaindiansyah@gmail.com</span>
              </li>
              <li className="flex items-start text-slate-300">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-violet-500/20 mr-3 mt-1">
                  <MapPin className="w-5 h-5 text-violet-400" />
                </div>
                <span className="leading-relaxed">
                  Ruko Perumahan Metland Cileungsi, Blok AA 14 NO. 11A, Cipenjo,
                  Cileungsi, Bogor, Jawa Barat.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} BuditamaCreativeCompany. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="/privacy"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
