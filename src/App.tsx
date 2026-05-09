/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Truck, 
  ShieldCheck, 
  Globe, 
  ArrowRight,
  Menu,
  X,
  Instagram,
  Linkedin,
  Facebook,
  ArrowUp
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Shared Components ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className,
  ...props 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'; 
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const variants = {
    primary: 'bg-brand-olive text-white hover:bg-opacity-90',
    secondary: 'bg-brand-text text-white hover:bg-opacity-90',
    outline: 'border border-brand-text hover:bg-brand-text hover:text-white',
    ghost: 'hover:bg-brand-border'
  };

  return (
    <button 
      className={cn(
        "px-6 py-3 rounded-2xl transition-all duration-300 font-medium active:scale-95 disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// --- Sections ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "sticky top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 bg-brand-bg/95 backdrop-blur-md",
      isScrolled ? "border-b border-brand-border py-3 shadow-sm" : ""
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 lg:w-48 shrink-0">
          <img src="/Media/Logo.png" alt="Omega Food Importers Logo" className="h-12 w-auto object-contain" />
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-8 text-sm font-medium text-brand-text">
          <a href="#" className="hover:text-brand-olive transition-colors relative group py-2">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all group-hover:w-full" />
          </a>
          <a href="#about" className="hover:text-brand-olive transition-colors relative group py-2">
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all group-hover:w-full" />
          </a>
          <a href="#services" className="hover:text-brand-olive transition-colors relative group py-2">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all group-hover:w-full" />
          </a>
          <a href="#brands" className="hover:text-brand-olive transition-colors relative group py-2">
            Our Brands
            <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all group-hover:w-full" />
          </a>
          <a href="#distribution" className="hover:text-brand-olive transition-colors relative group py-2">
            Distribution
            <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all group-hover:w-full" />
          </a>
          <a href="#products" className="hover:text-brand-olive transition-colors relative group py-2">
            Our Products
            <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all group-hover:w-full" />
          </a>
          <a href="#contact" className="hover:text-brand-olive transition-colors relative group py-2">
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all group-hover:w-full" />
          </a>
        </div>

        <div className="hidden lg:flex lg:w-48 justify-end shrink-0">
          <Button variant="secondary" className="py-2.5 px-6 text-sm rounded-full">
            Partner With Us →
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-brand-text" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-brand-border p-8 flex flex-col gap-6 lg:hidden shadow-2xl rounded-b-3xl"
        >
          <a href="#" onClick={() => setIsMenuOpen(false)} className="text-xl font-light">Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-xl font-light">About Us</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-xl font-light">Services</a>
          <a href="#brands" onClick={() => setIsMenuOpen(false)} className="text-xl font-light">Our Brands</a>
          <a href="#distribution" onClick={() => setIsMenuOpen(false)} className="text-xl font-light">Distribution</a>
          <a href="#products" onClick={() => setIsMenuOpen(false)} className="text-xl font-light">Our Products</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-xl font-light">Contact Us</a>
          <Button variant="secondary" className="w-full py-4 text-lg rounded-2xl">Partner With Us</Button>
        </motion.div>
      )}
    </nav>
  );
};

const HeroSection = () => (
  <section className="relative pt-20 pb-12 flex items-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src="/hero image/HERO.jpg" 
        alt="Omega Food Importers Hero" 
        className="w-full h-full object-cover scale-105"
      />
      {/* Sophisticated multi-layered overlay */}
      <div className="absolute inset-0 bg-brand-text/20" />
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-text/80 via-brand-text/20 to-transparent opacity-80" />
    </div>

    {/* Decorative Organic Shapes */}
    <div className="absolute top-1/4 -right-20 w-[40rem] h-[40rem] bg-brand-olive/10 blur-[120px] organic-radius animate-pulse pointer-events-none" />
    <div className="absolute -bottom-20 -left-20 w-[30rem] h-[30rem] bg-brand-olive/5 blur-[100px] organic-radius-alt pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-4">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl"
      >
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-3 px-5 py-2 bg-brand-olive/20 backdrop-blur-md border border-brand-olive/30 text-brand-olive rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6 shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-brand-olive animate-ping" />
          Canada’s #1 European Distributor
        </motion.span>
        
        <h1 className="text-4xl md:text-6xl font-light leading-[1.1] mb-4 text-white tracking-tighter drop-shadow-lg">
          The Strategic Gateway for <br />
          <span className="italic font-serif text-brand-olive">European Excellence</span> <br />
          in the Canadian Market.
        </h1>
        
        <p className="text-base md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed font-light drop-shadow-sm">
          For over three decades, Omega Food Importers has served as the definitive institutional partner for premium European food producers and major Canadian retail networks. We provide sophisticated supply chain solutions built on reliability and operational integrity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button variant="primary" className="group flex items-center justify-center gap-3 min-w-[260px] py-5 rounded-full text-lg shadow-2xl shadow-brand-olive/40 hover:scale-[1.02] active:scale-[0.98]">
            Establish Partnership 
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="flex items-center justify-center gap-3 min-w-[260px] py-5 rounded-full text-lg border-white/40 text-white hover:bg-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]">
            Explore Our Brands
          </Button>
        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10">
          {[
            { label: "Experience", value: "30+ Years" },
            { label: "Premium Brands", value: "36" },
            { label: "Source Countries", value: "16" },
            { label: "Provinces Covered", value: "All 10" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (i * 0.1) }}
            >
              <p className="text-4xl font-light text-white mb-1">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const WhoWeAre = () => (
  <section id="about" className="py-32 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
       <div className="relative">
        <div className="aspect-[4/5] organic-radius overflow-hidden shadow-2xl group">
           <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop" 
            alt="European Heritage" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-bg rounded-full p-8 shadow-2xl flex flex-col justify-center items-center text-center border-4 border-white">
           <span className="text-4xl font-serif italic text-brand-olive mb-2">1990s</span>
           <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Our Beginnings</p>
        </div>
      </div>

      <div>
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-olive mb-6 inline-block">Since 1990</span>
        <h2 className="text-5xl font-light mb-8 leading-[1.1] tracking-tight">
          A Proven Legacy of <br />
          <span className="font-serif italic text-brand-olive">Operational Integrity.</span>
        </h2>
        <p className="text-lg text-gray-500 mb-8 leading-relaxed font-light">
          Established in the early 1990s, our organization has evolved from a specialized niche importer into a primary pillar of North American distribution. While our scale has expanded to encompass 16 countries and 36 premium brand partners, our core mandate remains unchanged: providing uncompromising quality to the Canadian market.
        </p>
        <p className="text-lg text-gray-500 mb-10 leading-relaxed font-light">
          Our operational footprint leverages exclusive import rights and a localized national sales force to ensure comprehensive market penetration and meticulous account management across all 10 provinces.
        </p>
        
        <div className="space-y-6">
          {[
            "Exclusive Canadian import rights on major brands",
            "National distribution across all 10 provinces",
            "Dedicated regional sales reps in every major city",
            "Personal account management — no call centres"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="w-6 h-6 rounded-full bg-brand-olive/10 flex items-center justify-center text-brand-olive group-hover:bg-brand-olive group-hover:text-white transition-colors">
                <ShieldCheck size={14} />
              </div>
              <span className="text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const BigStats = () => (
  <section className="py-32 bg-brand-text relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.05]">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]" />
    </div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 lg:gap-20">
        {[
          { value: "30", label: "Years of Market Leadership" },
          { value: "2,000", label: "Institutional Retail Touchpoints" },
          { value: "4,000", label: "Managed Stock Keeping Units" },
          { value: "55,000", label: "Logistics Infrastructure (Sq. Ft.)" },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="flex flex-col items-center lg:items-start group"
          >
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-6xl md:text-7xl font-light text-white tracking-tighter group-hover:text-brand-olive transition-colors duration-500">
                {stat.value}
              </span>
              {stat.value === "55,000" && <span className="text-xl text-brand-olive font-serif italic ml-2">ft²</span>}
            </div>
            <div className="h-[2px] w-12 bg-brand-olive mb-6 group-hover:w-20 transition-all duration-700" />
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 leading-relaxed text-center lg:text-left max-w-[200px]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProductCategories = () => (
  <section id="products" className="py-32 bg-brand-bg">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24 max-w-3xl mx-auto">
        <h2 className="text-5xl font-light mb-8 tracking-tighter">Diversified Portfolio</h2>
        <p className="text-lg text-gray-500 font-light">
          Our selection processes are governed by strict quality appraisal and market fit analysis. We manage a portfolio of products designed to meet the sophisticated demands of the modern retailer.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {[
          { title: "Sweets & Confectionary", desc: "Chocolate Bars, Hard Candies, Gummies, Bulk Candies & Chocolates, General Sweets, etc.", image: "/Products/Sweet & Confectionary.jpg" },
          { title: "Preserved Vegetables and Fruit", desc: "Jams, Pickles, Salads, Fruit Compotes, etc.", image: "/Products/preserved vegetables and fruits.jpg" },
          { title: "Meat & Fish Preserves", desc: "Meat: Canned Pork | Fish: Canned Herring, Mackerel, Sprouts, Sardines, Preserved Herring", image: "/Products/Meta & Fish Preserves.jpg" },
          { title: "Non-alcoholic Beverages", desc: "Juice, Soda, Tea, Coffee, Syrups, Water, etc.", image: "/Products/Non Alcoholic Beverages.jpg" },
          { title: "Snacks & Crackers", desc: "Cookies, Salted Snacks, Crackers, Rice Cakes, etc.", image: "/Products/Snacks and crackers.jpg" },
          { title: "Condiments", desc: "Ketchup, Mustard, Oil, Vinegar, Spreads, etc.", image: "/Products/Condiments.jpg" },
          { title: "Baking Goods & Meal Makers", desc: "Pasta, Soups, Spices, Marinates, Rice, Dry Beans, etc.", image: "/Products/Baking Goods & Meal Makers.jpg" },
          { title: "Other Products", desc: "Full Line Of Non-Perishable Grocery Items, Washing Detergents", image: "/Products/Other Products..jpg" },
        ].map((cat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
          >
            <div className="aspect-square organic-radius overflow-hidden mb-6 shadow-xl relative">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <Button variant="ghost" className="text-white border-white/50 border rounded-full px-8">View Catalog</Button>
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2 tracking-tight">{cat.title}</h3>
            <p className="text-sm text-gray-500 font-light">{cat.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const BrandStrip = () => (
  <section id="brands" className="py-24 bg-white border-y border-brand-border overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 mb-16">
      <h2 className="text-3xl font-light text-center">Partnered with <span className="font-serif italic text-brand-olive">36 Premium Brands</span></h2>
    </div>
    
    <div className="flex flex-col gap-12">
      <div className="flex animate-[scroll_40s_linear_infinite] w-max hover:[animation-play-state:paused]">
        <div className="flex gap-16 items-center pr-16">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <img key={i} src={`/Media/${i}.png`} alt={`Brand ${i}`} className="h-20 w-auto max-w-[200px] object-contain transition-all duration-500 hover:scale-105 cursor-pointer mix-blend-multiply" />
          ))}
        </div>
        <div className="flex gap-16 items-center pr-16" aria-hidden="true">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <img key={i + 'rep'} src={`/Media/${i}.png`} alt={`Brand ${i}`} className="h-20 w-auto max-w-[200px] object-contain transition-all duration-500 hover:scale-105 cursor-pointer mix-blend-multiply" />
          ))}
        </div>
      </div>
      <div className="flex animate-[scroll-reverse_35s_linear_infinite] w-max hover:[animation-play-state:paused]">
        <div className="flex gap-16 items-center pr-16">
          {[11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((i) => (
            <img key={i} src={`/Media/${i}.png`} alt={`Brand ${i}`} className="h-20 w-auto max-w-[200px] object-contain transition-all duration-500 hover:scale-105 cursor-pointer mix-blend-multiply" />
          ))}
        </div>
        <div className="flex gap-16 items-center pr-16" aria-hidden="true">
          {[11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((i) => (
            <img key={i + 'rep2'} src={`/Media/${i}.png`} alt={`Brand ${i}`} className="h-20 w-auto max-w-[200px] object-contain transition-all duration-500 hover:scale-105 cursor-pointer mix-blend-multiply" />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const GlobalNetwork = () => {
  return (
    <section id="distribution" className="py-32 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-olive mb-6 inline-block">Strategic Footprint</span>
          <h2 className="text-5xl font-light mb-8 leading-[1.1] tracking-tighter">Global Acquisition. National Distribution.</h2>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            Omega Food Importers facilitates an integrated supply chain that spans from the historical production centers of Europe to every major commercial hub in Canada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Europe Map Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full bg-white/40 backdrop-blur-sm rounded-[3rem] border border-white p-10 shadow-sm"
          >
            <div className="relative w-full mb-10 overflow-hidden bg-white rounded-2xl flex items-center justify-center p-4 min-h-[300px]">
              <img src="/Maps/europe.jpg" alt="Europe Map" className="w-full h-auto object-contain opacity-80" />
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-olive border border-brand-border/50 shadow-sm z-30">
                <Globe size={14} /> European Sourcing Network
              </div>
            </div>
            
            <h3 className="text-2xl font-light mb-6 text-brand-text">Continental Procurement</h3>
            <p className="text-gray-500 font-light leading-relaxed mb-6 italic border-l-2 border-brand-olive/30 pl-6">
              "Originally importing exclusively from Poland, our current network has greatly expanded to cover most of Eastern and Central Europe. Each year, our network grows to include more countries, based on the best products these regions have to offer and the relationships we’ve cultivated with those manufacturers."
            </p>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              Our network now covers: <span className="font-medium text-brand-text">Poland, Germany, Austria, Ukraine, Belarus, Moldova, Latvia, Bulgaria, Denmark, Greece, Romania, Italy, France, Belgium, Macedonia, and Serbia.</span>
            </p>
          </motion.div>

          {/* Canada Map Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col h-full bg-white/40 backdrop-blur-sm rounded-[3rem] border border-white p-10 shadow-sm"
          >
            <div className="relative w-full mb-10 overflow-hidden bg-white rounded-2xl flex items-center justify-center p-4 min-h-[300px]">
              <img src="/Maps/canada.png" alt="Canada Map" className="w-full h-auto object-contain opacity-80" />
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-olive border border-brand-border/50 shadow-sm z-30">
                <Truck size={14} /> National Distribution Infrastructure
              </div>
            </div>

            <h3 className="text-2xl font-light mb-6 text-brand-text">Domestic Market Coverage</h3>
            <p className="text-gray-500 font-light leading-relaxed mb-6 italic border-l-2 border-brand-olive/30 pl-6">
              "With our head office and warehouse located in Ontario’s Greater Toronto Area, we have expanded our Canadian food distribution network to span throughout all of the Canadian provinces. Our sales representatives can be found in every major Canadian city."
            </p>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              Present in: <span className="font-medium text-brand-text">Toronto, Vancouver, Halifax, Edmonton, Ottawa, Quebec City, Montreal, Calgary, Winnipeg, Kitchener and Hamilton.</span> This expansive network enables us to access more independent markets, allowing consumers to find our products on the shelves of their favorite local stores throughout Canada.
            </p>
          </motion.div>
        </div>

        {/* Retailers Strip */}
        <div className="mt-20 bg-white p-10 rounded-[3rem] shadow-sm border border-brand-border inline-block w-full">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-gray-400 shrink-0">Institutional Partners</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-8 items-center">
              {[
                "Costco_Logo-1.png",
                "FORTINOS_logo_red_grey.jpg",
                "Highland-farms-1.jpg",
                "Longos.jpg",
                "No_Frills_Logo.png",
                "Oceans.jpg",
                "yummy_logo-1.jpg"
              ].map((img, i) => (
                <img 
                  key={i}
                  src={`/partners/${img}`}
                  alt="Institutional Partner Logo"
                  className="h-8 w-auto object-contain transition-all duration-300 mix-blend-multiply hover:scale-105"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);
  
  const faqs = [
    { q: "Which European brands are currently under Omega's distribution mandate?", a: "We manage a portfolio of 36 premium brands, including Milka, Wedel, Krakus, Tymbark, Lowicz, and Kamis. Many of these partnerships are governed by exclusive Canadian distribution rights." },
    { q: "What is the geographic scope of Omega's distribution network?", a: "We maintain a comprehensive national presence, serving all 10 provinces from our centralized logistics hub in Mississauga, Ontario." },
    { q: "What is the protocol for establishing a retail partnership?", a: "Strategic partnership inquiries may be submitted via our official channel or directed to info@omega-foods.com. Our regional administrative teams typically respond within 48 business hours." },
    { q: "How does Omega Food Importers ensure product freshness and quality?", a: "We maintain a rigorously climate-controlled supply chain and work directly with European producers. Our logistics team utilizes state-of-the-art tracking to monitor shelf life and ensure that all premium imports arrive in peak condition." },
    { q: "Does Omega facilitate custom sourcing for specific European products?", a: "Yes. We leverage our deep-rooted relationships across 16 European countries to help our retail partners source specific, high-demand, or specialty culinary products tailored to their unique demographic needs." }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light tracking-tight mb-4">Frequently Asked Questions</h2>
          <div className="h-0.5 w-12 bg-brand-olive mx-auto" />
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-brand-border rounded-3xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                className="w-full px-8 py-6 flex justify-between items-center bg-white hover:bg-brand-bg transition-colors"
              >
                <span className="font-medium text-left">{faq.q}</span>
                <ChevronRight size={20} className={cn("transition-transform duration-300", activeIdx === i ? "rotate-90" : "")} />
              </button>
              <motion.div 
                initial={false}
                animate={{ height: activeIdx === i ? 'auto' : 0 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 text-gray-500 font-light leading-relaxed">
                  {faq.a}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="py-32 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start relative z-10">
      {/* Left Side: Contact Info */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-olive mb-6 inline-block">Contact Us</span>
        <h2 className="text-5xl font-light mb-10 leading-[1.1] tracking-tight">
          Establish a <br />
          <span className="font-serif italic text-brand-olive">Strategic Partnership.</span>
        </h2>
        
        <div className="space-y-12">
          {/* Address */}
          <div className="flex gap-6 group">
            <div className="w-12 h-12 shrink-0 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-olive group-hover:bg-brand-olive group-hover:text-white transition-all duration-300">
              <Globe size={20} />
            </div>
            <div>
              <h4 className="font-bold text-[10px] uppercase tracking-widest text-gray-400 mb-2">Corporate Headquarters</h4>
              <p className="text-lg text-brand-text font-light leading-relaxed">
                Omega Food Importers Co. Ltd.<br />
                395 Pendant Drive, Unit 2, Mississauga,<br />
                ON, L5T 2W9, Canada
              </p>
            </div>
          </div>

          {/* Phones */}
          <div className="flex gap-6 group">
            <div className="w-12 h-12 shrink-0 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-olive group-hover:bg-brand-olive group-hover:text-white transition-all duration-300">
              <Instagram size={20} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-widest text-gray-400 mb-2">Toll-Free</h4>
                <p className="text-lg text-brand-text font-light">1-877-690-2827</p>
              </div>
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-widest text-gray-400 mb-2">Direct</h4>
                <p className="text-lg text-brand-text font-light">905-212-9252</p>
              </div>
            </div>
          </div>

          {/* Emails */}
          <div className="flex gap-6 group">
            <div className="w-12 h-12 shrink-0 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-olive group-hover:bg-brand-olive group-hover:text-white transition-all duration-300">
              <ArrowRight size={20} />
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-widest text-gray-400 mb-1">General Inquiries</h4>
                <p className="text-brand-olive hover:underline cursor-pointer">info@omega-foods.com</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-[9px] uppercase tracking-widest text-gray-400 mb-1">Central Sales</h4>
                  <p className="text-sm text-brand-text/70 break-all leading-tight">centralsales@omega-foods.com</p>
                </div>
                <div>
                  <h4 className="font-bold text-[9px] uppercase tracking-widest text-gray-400 mb-1">East Sales</h4>
                  <p className="text-sm text-brand-text/70 break-all leading-tight">eastsales@omega-foods.com</p>
                </div>
                <div>
                  <h4 className="font-bold text-[9px] uppercase tracking-widest text-gray-400 mb-1">West Sales</h4>
                  <p className="text-sm text-brand-text/70 break-all leading-tight">westsales@omega-foods.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Side: Contact Form */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-brand-bg/50 backdrop-blur-sm p-10 md:p-12 rounded-[3.5rem] border border-brand-border shadow-sm"
      >
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
              <input 
                type="text" 
                placeholder="Omega Food Importers"
                className="w-full bg-white border border-brand-border rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-olive/20 focus:border-brand-olive transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
              <input 
                type="email" 
                placeholder="info@omega-foods.com"
                className="w-full bg-white border border-brand-border rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-olive/20 focus:border-brand-olive transition-all"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">I am a...</label>
            <select className="w-full bg-white border border-brand-border rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-olive/20 focus:border-brand-olive transition-all appearance-none cursor-pointer">
              <option>Retailer / Buyer</option>
              <option>European Supplier</option>
              <option>Media Inquirer</option>
              <option>Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Message</label>
            <textarea 
              rows={4}
              placeholder="How can we help your business?"
              className="w-full bg-white border border-brand-border rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-olive/20 focus:border-brand-olive transition-all resize-none"
            ></textarea>
          </div>

          <Button variant="secondary" className="w-full py-5 rounded-2xl text-lg shadow-xl shadow-brand-text/10 group">
            Send Inquiry 
            <ArrowRight size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="text-center text-[10px] text-gray-400 font-medium tracking-tight">
            Our specialized team typically responds within 24-48 business hours.
          </p>
        </form>
      </motion.div>
    </div>

    {/* Decorative background circle */}
    <div className="absolute top-1/2 left-0 w-[40rem] h-[40rem] bg-brand-olive/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
  </section>
);


const FinalCTA = () => (
  <section className="py-32 px-6 bg-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto bg-brand-text rounded-[4rem] py-24 px-8 md:px-20 text-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-brand-olive/10 organic-radius blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="relative z-10">
        <h2 className="text-5xl md:text-7xl font-light text-white mb-10 leading-[1.1] tracking-tighter">
          Strategic Portfolio Expansion for <br />
          <span className="italic font-serif text-brand-olive">Retail Partners.</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Three decades of market leadership. Nationwide logistical reach. Thirty-six premium brand mandates. Exclusive import protocols. We provide the stability your retail network demands.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button variant="primary" className="py-4 px-12 rounded-full text-lg shadow-xl shadow-brand-olive/20">Submit Inquiry</Button>
          <Button className="py-4 px-12 rounded-full text-lg bg-white/5 border border-white/20 text-white hover:bg-white/10 transition-all">Contact Sales</Button>
        </div>
        
        <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6 pt-12 border-t border-white/10 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
           <span className="flex items-center gap-2 underline underline-offset-8 decoration-brand-olive">30+ Years Experience</span>
           <span className="flex items-center gap-2 underline underline-offset-8 decoration-brand-olive">All 10 Provinces</span>
           <span className="flex items-center gap-2 underline underline-offset-8 decoration-brand-olive">36 Premium Brands</span>
           <span className="flex items-center gap-2 underline underline-offset-8 decoration-brand-olive">Family-Owned</span>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="pt-32 pb-12 bg-white border-t border-brand-border">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-24">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <img src="/Media/Logo.png" alt="Omega Food Importers Logo" className="h-16 w-auto object-contain" />
          </div>
          <p className="text-gray-500 max-w-md leading-relaxed font-light mb-8">
            Canada's leading European food importer & distributor. We believe in quality, transparency, and the heritage of fine food.
          </p>
          <div className="space-y-4">
             <div className="flex items-center gap-4 text-gray-600">
                <Instagram size={20} className="hover:text-brand-olive transition-colors cursor-pointer" />
                <Linkedin size={20} className="hover:text-brand-olive transition-colors cursor-pointer" />
                <Facebook size={20} className="hover:text-brand-olive transition-colors cursor-pointer" />
             </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-8 text-gray-400">Navigation</h4>
          <ul className="space-y-4 text-gray-600 text-sm font-light">
            <li><a href="#" className="hover:text-brand-olive transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-brand-olive transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-brand-olive transition-colors">Services</a></li>
            <li><a href="#brands" className="hover:text-brand-olive transition-colors">Our Brands</a></li>
            <li><a href="#distribution" className="hover:text-brand-olive transition-colors">Distribution</a></li>
            <li><a href="#products" className="hover:text-brand-olive transition-colors">Our Products</a></li>
            <li><a href="#contact" className="hover:text-brand-olive transition-colors">Contact Us</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-8 text-gray-400">Operations</h4>
          <ul className="space-y-4 text-gray-600 text-sm font-light">
            <li>Toll-Free: 1-877-690-2827</li>
            <li>info@omega-foods.com</li>
            <li>395 Pendant Drive, Unit 2,<br />Mississauga, ON L5T 2W9</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-8 text-gray-400">Regional Sales</h4>
          <ul className="space-y-4 text-gray-600 text-sm font-light">
            <li className="flex flex-col"><span className="font-medium text-brand-text">Central:</span> centralsales@omega-foods.com</li>
            <li className="flex flex-col"><span className="font-medium text-brand-text">East:</span> eastsales@omega-foods.com</li>
            <li className="flex flex-col"><span className="font-medium text-brand-text">West:</span> westsales@omega-foods.com</li>
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
        <span>© 2026 Omega Food Importers Co. Ltd. All rights reserved.</span>
        <div className="flex gap-12">
          <a href="#" className="hover:text-brand-olive transition-colors underline underline-offset-4 decoration-brand-olive/30">Privacy Policy</a>
          <a href="#" className="hover:text-brand-olive transition-colors underline underline-offset-4 decoration-brand-olive/30">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-[60] w-14 h-14 bg-brand-olive text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 border-4 border-white/20 backdrop-blur-md",
        !isVisible && "pointer-events-none"
      )}
    >
      <ArrowUp size={24} />
    </motion.button>
  );
};

// --- Main App Component ---

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-olive/20">
      <div className="grainy-overlay" />
      <Navbar />
      
      <main>
        <HeroSection />
        
        <WhoWeAre />

        <BigStats />
        
        <BrandStrip />

        <ProductCategories />
        
        <GlobalNetwork />

        <FAQSection />
        
        <ContactSection />
        
        <FinalCTA />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
