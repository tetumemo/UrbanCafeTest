import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Coffee, Clock, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 backdrop-blur-md bg-stone-50/90 border-b border-stone-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-stone-800">UrbanCafe</div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <Link href="#menu" className="hover:text-amber-600 transition-colors">Menu</Link>
            <Link href="#about" className="hover:text-amber-600 transition-colors">About</Link>
            <Link href="#location" className="hover:text-amber-600 transition-colors">Location</Link>
            <Link href="/contact" className="hover:text-amber-600 transition-colors">Contact</Link>
          </div>
          <div className="md:hidden">
            <button className="p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?cafe,coffee')" }}></div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Where Urban Meets <span className="text-amber-400">Coffee</span></h1>
          <p className="text-xl text-white mb-8 max-w-xl">Experience the perfect blend of artisanal coffee in a modern, urban setting. Every cup tells a story.</p>
          <div className="flex space-x-4">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md transition-colors">View Menu</button>
            <button className="bg-transparent border border-white text-white hover:bg-white hover:text-stone-800 px-6 py-3 rounded-md transition-colors">Book a Table</button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-8 rounded-lg shadow-sm">
              <Coffee className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Premium Coffee</h3>
              <p className="text-stone-600">Our beans are sourced from ethical farms and roasted to perfection in-house.</p>
            </div>
            <div className="bg-stone-50 p-8 rounded-lg shadow-sm">
              <Clock className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Extended Hours</h3>
              <p className="text-stone-600">Open early and closing late to accommodate your schedule, seven days a week.</p>
            </div>
            <div className="bg-stone-50 p-8 rounded-lg shadow-sm">
              <MapPin className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Prime Location</h3>
              <p className="text-stone-600">Conveniently located in the heart of downtown, easily accessible by public transit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Menu Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Signature Espresso</h3>
                  <p className="text-stone-600 mt-2">Our house blend with notes of chocolate and caramel</p>
                </div>
                <span className="text-amber-600 font-bold">$4.50</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Urban Latte</h3>
                  <p className="text-stone-600 mt-2">Double shot with steamed milk and house-made vanilla</p>
                </div>
                <span className="text-amber-600 font-bold">$5.75</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Artisan Croissant</h3>
                  <p className="text-stone-600 mt-2">Buttery, flaky, and baked fresh every morning</p>
                </div>
                <span className="text-amber-600 font-bold">$3.95</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Avocado Toast</h3>
                  <p className="text-stone-600 mt-2">Sourdough with avocado, poached egg, and microgreens</p>
                </div>
                <span className="text-amber-600 font-bold">$9.50</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/menu" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md transition-colors inline-block">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="relative w-full h-80">
                <Image 
                  src="https://source.unsplash.com/random/600x400/?cafe,interior" 
                  alt="Cafe interior" 
                  className="rounded-lg shadow-md object-cover" 
                  fill
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-stone-600 mb-4">
                UrbanCafe was founded in 2018 with a simple mission: to create a space where quality coffee meets community and culture. What started as a small pop-up has grown into a beloved fixture of the downtown scene.
              </p>
              <p className="text-stone-600 mb-4">
                Our team of passionate baristas are not just coffee experts, but artists who craft each drink with precision and care. We believe that coffee is more than just a beverage – it's an experience that brings people together.
              </p>
              <p className="text-stone-600">
                As we've grown, we've remained committed to our core values: quality, community, and sustainability. Every bean we source, every cup we serve, and every space we create is a reflection of these principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">UrbanCafe</h3>
              <p className="text-stone-300 max-w-sm">Where urban aesthetics meet artisanal coffee in a space designed for connection and inspiration.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4">Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-stone-300 hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/menu" className="text-stone-300 hover:text-white transition-colors">Menu</Link></li>
                  <li><Link href="/#about" className="text-stone-300 hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/#location" className="text-stone-300 hover:text-white transition-colors">Location</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-stone-300">123 Urban Street</li>
                  <li className="text-stone-300">(555) 123-4567</li>
                  <li className="text-stone-300">hello@urbancafe.com</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-stone-300 hover:text-white transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-stone-300 hover:text-white transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-stone-300 hover:text-white transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-400">
            <p>&copy; {new Date().getFullYear()} UrbanCafe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
