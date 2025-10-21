import React from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/" className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-6 transition-all hover:gap-3 gap-2">
            <ArrowLeft className="w-5 h-5" />
            Back to home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-up">
            Contact <span className="text-transparent bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text">Us</span>
          </h1>
          <p className="text-stone-200 text-lg mt-4 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            We'd love to hear from you. Whether you have a question about our menu, hours,
            or want to book a table, we're here to help.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Information */}
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-3xl font-bold mb-8">
              Get In <span className="gradient-text">Touch</span>
            </h2>

            <div className="card-modern p-8 space-y-6">
              <div className="flex items-start group">
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Address</h3>
                  <p className="text-stone-600 leading-relaxed">
                    123 Urban Street<br />
                    Downtown District<br />
                    City, State 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-stone-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-stone-600 hover:text-amber-600 transition-colors cursor-pointer">hello@urbancafe.com</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Hours</h3>
                  <div className="text-stone-600 space-y-1">
                    <div className="flex justify-between gap-4">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">6:30 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Saturday:</span>
                      <span className="font-medium">7:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Sunday:</span>
                      <span className="font-medium">8:00 AM - 7:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-xl">
              <div className="relative z-10">
                <h3 className="font-bold text-xl mb-3">Reservations</h3>
                <p className="mb-6 text-amber-50">
                  For larger groups or special events, we recommend making a reservation.
                </p>
                <button className="w-full bg-white text-amber-700 hover:bg-amber-50 py-3 px-6 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg">
                  Book a Table
                </button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold mb-8">
              Send Us a <span className="gradient-text">Message</span>
            </h2>

            <form className="card-modern p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-5 py-3 border-2 border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-5 py-3 border-2 border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-semibold text-stone-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-5 py-3 border-2 border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-5 py-3 border-2 border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center"
              >
                Send Message
              </button>
            </form>

            {/* Map */}
            <div className="mt-10">
              <h2 className="text-3xl font-bold mb-6">
                Find <span className="gradient-text">Us</span>
              </h2>
              <div className="card-modern overflow-hidden h-80 flex items-center justify-center bg-gradient-to-br from-stone-200 to-stone-300">
                <p className="text-stone-600 font-medium">Interactive Map Coming Soon</p>
              </div>
              <p className="text-stone-600 mt-6 text-lg leading-relaxed">
                We're conveniently located in the heart of the downtown district, just a short walk from
                public transportation and with plenty of parking nearby.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-12 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-stone-300">
            &copy; {new Date().getFullYear()} UrbanCafe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
