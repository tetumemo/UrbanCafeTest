import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Coffee, Clock, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen text-stone-800 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass animate-fade-in">
        <div className="container mx-auto px-4 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">UrbanCafe</div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-amber-600 transition-all duration-300 font-medium hover:scale-110 inline-block">Home</Link>
            <Link href="#menu" className="hover:text-amber-600 transition-all duration-300 font-medium hover:scale-110 inline-block">Menu</Link>
            <Link href="#about" className="hover:text-amber-600 transition-all duration-300 font-medium hover:scale-110 inline-block">About</Link>
            <Link href="#location" className="hover:text-amber-600 transition-all duration-300 font-medium hover:scale-110 inline-block">Location</Link>
            <Link href="/contact" className="hover:text-amber-600 transition-all duration-300 font-medium hover:scale-110 inline-block">Contact</Link>
          </div>
          <div className="md:hidden">
            <button className="p-2 hover:bg-amber-100 rounded-lg transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-amber-900/30 to-black/50 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center transform scale-105 animate-pulse" style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?cafe,coffee')", animationDuration: '10s' }}></div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-slide-up text-shadow leading-tight">
            Where Urban Meets <br />
            <span className="text-transparent bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text">Coffee</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl animate-slide-up text-shadow" style={{ animationDelay: '0.2s' }}>
            Experience the perfect blend of artisanal coffee in a modern, urban setting. Every cup tells a story.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button className="btn-primary">View Menu</button>
            <button className="btn-secondary">Book a Table</button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/80 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-modern p-10 group">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-stone-800">Premium Coffee</h3>
              <p className="text-stone-600 leading-relaxed">Our beans are sourced from ethical farms and roasted to perfection in-house.</p>
            </div>
            <div className="card-modern p-10 group" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-stone-800">Extended Hours</h3>
              <p className="text-stone-600 leading-relaxed">Open early and closing late to accommodate your schedule, seven days a week.</p>
            </div>
            <div className="card-modern p-10 group" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-stone-800">Prime Location</h3>
              <p className="text-stone-600 leading-relaxed">Conveniently located in the heart of downtown, easily accessible by public transit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-amber-100/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Menu <span className="gradient-text">Highlights</span>
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Discover our carefully crafted selection of premium coffee and delicious food
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="card-modern p-8 group">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-600 transition-colors">Signature Espresso</h3>
                  <p className="text-stone-600">Our house blend with notes of chocolate and caramel</p>
                </div>
                <span className="text-2xl font-bold gradient-text ml-4">$4.50</span>
              </div>
            </div>
            <div className="card-modern p-8 group">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-600 transition-colors">Urban Latte</h3>
                  <p className="text-stone-600">Double shot with steamed milk and house-made vanilla</p>
                </div>
                <span className="text-2xl font-bold gradient-text ml-4">$5.75</span>
              </div>
            </div>
            <div className="card-modern p-8 group">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-600 transition-colors">Artisan Croissant</h3>
                  <p className="text-stone-600">Buttery, flaky, and baked fresh every morning</p>
                </div>
                <span className="text-2xl font-bold gradient-text ml-4">$3.95</span>
              </div>
            </div>
            <div className="card-modern p-8 group">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-600 transition-colors">Avocado Toast</h3>
                  <p className="text-stone-600">Sourdough with avocado, poached egg, and microgreens</p>
                </div>
                <span className="text-2xl font-bold gradient-text ml-4">$9.50</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/menu" className="btn-primary inline-block">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-stone-100 via-white to-amber-50/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2">
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://source.unsplash.com/random/600x400/?cafe,interior"
                  alt="Cafe interior"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-5 text-lg text-stone-600 leading-relaxed">
                <p>
                  UrbanCafe was founded in 2018 with a simple mission: to create a space where quality coffee meets community and culture. What started as a small pop-up has grown into a beloved fixture of the downtown scene.
                </p>
                <p>
                  Our team of passionate baristas are not just coffee experts, but artists who craft each drink with precision and care. We believe that coffee is more than just a beverage – it's an experience that brings people together.
                </p>
                <p>
                  As we've grown, we've remained committed to our core values: quality, community, and sustainability. Every bean we source, every cup we serve, and every space we create is a reflection of these principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
            <div className="md:w-1/3">
              <h3 className="text-3xl font-bold gradient-text mb-4">UrbanCafe</h3>
              <p className="text-stone-300 leading-relaxed">Where urban aesthetics meet artisanal coffee in a space designed for connection and inspiration.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
              <div>
                <h4 className="text-lg font-bold mb-4 text-amber-400">Links</h4>
                <ul className="space-y-3">
                  <li><Link href="/" className="text-stone-300 hover:text-amber-400 transition-all hover:translate-x-1 inline-block">Home</Link></li>
                  <li><Link href="/menu" className="text-stone-300 hover:text-amber-400 transition-all hover:translate-x-1 inline-block">Menu</Link></li>
                  <li><Link href="/#about" className="text-stone-300 hover:text-amber-400 transition-all hover:translate-x-1 inline-block">About</Link></li>
                  <li><Link href="/#location" className="text-stone-300 hover:text-amber-400 transition-all hover:translate-x-1 inline-block">Location</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4 text-amber-400">Contact</h4>
                <ul className="space-y-3 text-stone-300">
                  <li>123 Urban Street</li>
                  <li>(555) 123-4567</li>
                  <li className="hover:text-amber-400 transition-colors cursor-pointer">hello@urbancafe.com</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4 text-amber-400">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-stone-300 hover:text-amber-400 hover:scale-125 transition-all duration-300">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-stone-300 hover:text-amber-400 hover:scale-125 transition-all duration-300">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-stone-300 hover:text-amber-400 hover:scale-125 transition-all duration-300">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-400 text-sm">&copy; {new Date().getFullYear()} UrbanCafe. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
