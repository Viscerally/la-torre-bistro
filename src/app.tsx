/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Menu, MapPin, ChevronRight, Utensils } from "lucide-react";

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* TopAppBar */}
      <header className="bg-stone-50/95 backdrop-blur-md fixed top-0 w-full z-50 border-b border-stone-200">
        <div className="flex justify-between items-center h-20 px-6 md:px-12 max-w-container-max mx-auto">
          {/* Mobile Menu Toggle */}
          <button aria-label="menu" className="md:hidden text-stone-900 p-2">
            <Menu className="w-6 h-6" />
          </button>

          {/* Brand */}
          <div className="font-display font-bold tracking-[0.2em] text-xl text-stone-900">
            LA TORRE
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#" className="text-primary font-semibold border-b-2 border-primary pb-1 font-body">Home</a>
            <a href="#menu" className="text-stone-600 font-medium hover:text-primary transition-colors duration-300 font-body">Menu</a>
            <a href="#story" className="text-stone-600 font-medium hover:text-primary transition-colors duration-300 font-body">Our Story</a>
            <a href="#location" className="text-stone-600 font-medium hover:text-primary transition-colors duration-300 font-body">Find Us</a>
          </nav>

          {/* Action Button */}
          <button className="bg-primary-container text-white font-label tracking-widest text-sm py-2.5 px-7 rounded shadow-sm hover:brightness-95 transition-all">
            RESERVE
          </button>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              alt="Artisanal Italian pasta dish" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe6izSehnV4H5umMkRfRC1NP-Q076xZACWQ0ndm-vg_u5jrpVkch5gjYAQY6ABGrnWVyStBHxMb82vLLwS7JsMMBlekfYgixQ6mUQzVrlCzGuZiRRFet8sDPeuthIxX-r6SBKSHb5SJdoBGvfq7kWmthBkOKpaiyDuH1AArjVrkbJR0sbXM0SqqCDpYkrzChyC5BPw0MHsbFwUgxL5_CoedMo8WX6-ZuxKt25whM8VdXCGO3s3cq27KtXG0bxa9Y1h5qhLtwA8kxLY" 
            />
            <div className="absolute inset-0 bg-stone-900/40"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center"
          >
            <h1 className="text-display-lg text-white mb-6 drop-shadow-lg">
              Authentic Italian Flavors <br /> in Every Bite.
            </h1>
            <p className="text-body-lg text-stone-200 mb-10 max-w-2xl font-light">
              Experience the craft of artisanal cooking, where heritage meets contemporary gastronomy in an elegant, welcoming atmosphere.
            </p>
            <button className="bg-primary-container text-white font-label text-sm py-4 px-10 rounded shadow-xl hover:bg-primary transition-all flex items-center gap-2 group">
              Explore Menu
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </section>

        {/* Our Story Section */}
        <section className="py-section-gap px-6 md:px-margin-desktop max-w-container-max mx-auto" id="story">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <motion.div 
              {...fadeIn}
              className="lg:col-span-5 lg:col-start-2 flex flex-col items-start"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[1px] bg-primary"></div>
                <span className="text-label-md text-primary tracking-widest uppercase">Our Heritage</span>
              </div>
              <h2 className="text-headline-lg text-on-background mb-8 leading-tight">
                A Legacy of <span className="italic font-normal">Taste</span>
              </h2>
              <div className="space-y-6 text-on-surface-variant font-body leading-relaxed">
                <p className="text-lg">
                  La Torre Bistro was born from a desire to strip away rustic clichés and focus on the pure, polished craft of Italian cuisine. We source the finest ingredients and present them with a modern, editorial flair.
                </p>
                <p className="opacity-80">
                  Our space is a silent, elegant frame for the culinary artistry on every plate, offering a sophisticated yet welcoming environment for those who appreciate understated luxury.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-8 divide-x divide-stone-200">
                <div>
                  <h4 className="font-display text-2xl font-bold mb-1">20+</h4>
                  <p className="text-sm font-label uppercase opacity-50">Local Farms</p>
                </div>
                <div className="pl-8">
                  <h4 className="font-display text-2xl font-bold mb-1">Since</h4>
                  <p className="text-sm font-label uppercase opacity-50">1984</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-6 lg:col-start-7 mt-12 lg:mt-0"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-2xl">
                <img 
                  alt="Chef preparing food" 
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBZG1kRT3JxdsDhMI0TXPRb7SXJBbkWGSGsQ4Ob1YmUUX2kKYjFsPkYN-Sz8Q7sGzSGwq0PTahJ5xZ_EiSgnkemeLPbA3OcS0-2GoMH046M-EwyF_18a7vC7-08HXit0g90VL2h1HcHhe1h51ipva9B1Ngpt8X1as4-5vdP9VQG5JTrVmeIV4GzrYG6EJHazMXK4Oey45AJSA-QNJmgLcL04AdGv5Wv4ybICS49ns1NSda3Fbd-OFvJwvqAAiwa_HZbNzBEGZfPStY" 
                />
                <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md p-6 border border-white/20 rounded-lg">
                  <Utensils className="text-white w-8 h-8 mb-4" />
                  <p className="text-white font-label text-xs tracking-tighter max-w-[120px]">Hand-picked ingredients sourced daily.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Location / Find Us Section */}
        <section className="bg-stone-900 py-section-gap text-white overflow-hidden" id="location">
          <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <motion.div 
                {...fadeIn}
                className="flex-1"
              >
                <span className="text-label-md text-primary-container tracking-widest uppercase mb-4 block">Visit Us</span>
                <h2 className="text-headline-lg mb-8">In the heart of the historic district.</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary-container shrink-0 mt-1" />
                    <div>
                      <p className="font-display text-xl mb-1 text-stone-100">123 Via della Vite</p>
                      <p className="text-stone-400 font-body">Milano, Italy 20121</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full border border-primary-container flex items-center justify-center shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 bg-primary-container rounded-full" />
                    </div>
                    <div>
                      <p className="font-display text-xl mb-1 text-stone-100">Hours of Operation</p>
                      <p className="text-stone-400 font-body italic mb-1">Tue – Sun: 12:00 – 23:00</p>
                      <p className="text-stone-400 font-body opacity-60">Closed on Mondays</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 w-full"
              >
                <div className="aspect-video bg-stone-800 rounded-xl flex items-center justify-center border border-stone-700/50 backdrop-blur-sm overflow-hidden group">
                  <div className="text-center group-hover:scale-110 transition-transform duration-700">
                    <MapPin className="w-12 h-12 text-primary-container mx-auto mb-4 opacity-50" />
                    <button className="text-stone-400 font-label text-sm uppercase tracking-widest hover:text-primary-container transition-colors">
                      Open in Maps
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-stone-50 border-t border-stone-200">
          <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-stone-900 font-display italic font-semibold text-lg">
                LA TORRE BISTRO
              </div>
              
              <div className="flex flex-wrap justify-center gap-8 text-stone-400 font-label text-xs tracking-widest uppercase">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Press Kit</a>
              </div>
              
              <div className="text-stone-300 font-body text-sm">
                © 2024 Artisanal Italian Heritage.
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

