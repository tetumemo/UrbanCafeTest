import React from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-stone-800 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-stone-300 mt-4 max-w-2xl">
            We'd love to hear from you. Whether you have a question about our menu, hours, 
            or want to book a table, we're here to help.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            
            <div className="bg-white rounded-lg shadow-sm border border-stone-100 p-6 mb-6">
              <div className="flex items-start mb-4">
                <MapPin className="w-5 h-5 text-amber-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-stone-600">
                    123 Urban Street<br />
                    Downtown District<br />
                    City, State 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <Phone className="w-5 h-5 text-amber-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-stone-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <Mail className="w-5 h-5 text-amber-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-stone-600">hello@urbancafe.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-amber-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-bold">Hours</h3>
                  <div className="text-stone-600">
                    <div className="flex justify-between gap-4">
                      <span>Monday - Friday:</span>
                      <span>6:30 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Saturday:</span>
                      <span>7:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Sunday:</span>
                      <span>8:00 AM - 7:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-100">
              <h3 className="font-bold text-amber-800 mb-2">Reservations</h3>
              <p className="text-amber-700 mb-4">
                For larger groups or special events, we recommend making a reservation.
              </p>
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded transition-colors">
                Book a Table
              </button>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            <form className="bg-white rounded-lg shadow-sm border border-stone-100 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center"
              >
                Send Message
              </button>
            </form>
            
            {/* Map */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">Find Us</h2>
              <div className="bg-stone-300 h-64 rounded-lg flex items-center justify-center">
                {/* In a real application, this would be a Google Maps or similar map component */}
                <p className="text-stone-600">Interactive Map Coming Soon</p>
              </div>
              <p className="text-stone-600 mt-4">
                We're conveniently located in the heart of the downtown district, just a short walk from 
                public transportation and with plenty of parking nearby.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-stone-300">
            &copy; {new Date().getFullYear()} UrbanCafe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
