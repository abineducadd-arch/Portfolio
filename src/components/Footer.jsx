// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-black mt-32">
      <div className="flex flex-col md:flex-row justify-between items-center px-16 py-20 w-full max-w-[1440px] mx-auto">
        <p className="font-inter text-[9px] tracking-[0.2em] uppercase font-medium text-white/20">
          © 2024 CURATED BY THE VOID
        </p>
        <div className="flex gap-12 mt-8 md:mt-0">
          <a href="#" className="font-inter text-[9px] tracking-[0.2em] uppercase font-medium text-white/20 hover:text-white transition-colors duration-500">
            Archive
          </a>
          <a href="#" className="font-inter text-[9px] tracking-[0.2em] uppercase font-medium text-white/20 hover:text-white transition-colors duration-500">
            Philosophy
          </a>
          <a href="#" className="font-inter text-[9px] tracking-[0.2em] uppercase font-medium text-white/20 hover:text-white transition-colors duration-500">
            Social
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;