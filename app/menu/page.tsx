import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function MenuPage() {
  const categories = [
    { id: 'coffee', name: 'Coffee', icon: '☕' },
    { id: 'tea', name: 'Tea', icon: '🍵' },
    { id: 'pastries', name: 'Pastries', icon: '🥐' },
    { id: 'breakfast', name: 'Breakfast', icon: '🍳' },
    { id: 'lunch', name: 'Lunch', icon: '🥪' },
  ];

  const menuItems = {
    coffee: [
      { name: 'Espresso', description: 'Pure and intense coffee experience', price: '$3.50', popular: true },
      { name: 'Americano', description: 'Espresso diluted with hot water', price: '$4.00' },
      { name: 'Cappuccino', description: 'Equal parts espresso, steamed milk, and foam', price: '$4.75', popular: true },
      { name: 'Latte', description: 'Espresso with steamed milk and a light layer of foam', price: '$5.00' },
      { name: 'Flat White', description: 'Espresso with steamed milk and minimal foam', price: '$4.75' },
      { name: 'Mocha', description: 'Espresso with chocolate and steamed milk', price: '$5.50', popular: true },
      { name: 'Macchiato', description: 'Espresso "stained" with a touch of milk foam', price: '$4.25' },
    ],
    tea: [
      { name: 'Earl Grey', description: 'Black tea flavored with bergamot oil', price: '$3.50' },
      { name: 'Green Tea', description: 'Traditional Japanese green tea', price: '$3.75' },
      { name: 'Chai Latte', description: 'Spiced tea with steamed milk', price: '$4.75', popular: true },
      { name: 'Herbal Infusion', description: 'Caffeine-free blend of herbs and flowers', price: '$3.75' },
      { name: 'Matcha Latte', description: 'Stone-ground green tea with steamed milk', price: '$5.25', popular: true },
    ],
    pastries: [
      { name: 'Butter Croissant', description: 'Classic flaky French pastry', price: '$3.95', popular: true },
      { name: 'Pain au Chocolat', description: 'Chocolate-filled croissant', price: '$4.25', popular: true },
      { name: 'Almond Croissant', description: 'Croissant filled with almond cream', price: '$4.75' },
      { name: 'Cinnamon Roll', description: 'Soft roll with cinnamon and frosting', price: '$4.50' },
      { name: 'Banana Bread', description: 'Moist banana bread with walnuts', price: '$3.95' },
    ],
    breakfast: [
      { name: 'Avocado Toast', description: 'Sourdough with smashed avocado, poached egg, and microgreens', price: '$9.50', popular: true },
      { name: 'Breakfast Burrito', description: 'Eggs, cheese, potatoes, and bacon wrapped in a tortilla', price: '$8.75' },
      { name: 'Açaí Bowl', description: 'Blended açaí with granola, fresh fruit, and honey', price: '$10.25', popular: true },
      { name: 'Eggs Benedict', description: 'English muffin with poached eggs, ham, and hollandaise', price: '$11.50' },
      { name: 'Overnight Oats', description: 'Oats soaked in yogurt with berries and nuts', price: '$7.25' },
    ],
    lunch: [
      { name: 'Quinoa Salad', description: 'Quinoa with roasted vegetables and feta', price: '$11.25', popular: true },
      { name: 'Chicken Panini', description: 'Grilled chicken with pesto, mozzarella, and tomato', price: '$10.75' },
      { name: 'Veggie Wrap', description: 'Hummus, avocado, and fresh vegetables', price: '$9.50' },
      { name: 'Soup of the Day', description: 'Ask your server for today\'s selection', price: '$6.75' },
      { name: 'Harvest Bowl', description: 'Grains, roasted vegetables, egg, and tahini dressing', price: '$12.50', popular: true },
    ]
  };

  // In a real app, this would use React.useState, but for SSR we'll use a default category
  const activeCategory = 'coffee';

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
            Our <span className="text-transparent bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text">Menu</span>
          </h1>
          <p className="text-stone-200 text-lg mt-4 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            We take pride in sourcing the finest ingredients and crafting each item with care.
            Our menu changes seasonally to ensure freshness and quality.
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-0 z-10 glass shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-5 space-x-4 no-scrollbar">
            {categories.map(category => (
              <div
                key={category.id}
                className={`flex flex-col items-center px-6 py-3 rounded-2xl whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg scale-105'
                    : 'bg-white/50 hover:bg-white hover:shadow-md hover:scale-105'
                }`}
              >
                <span className="text-3xl mb-2">{category.icon}</span>
                <span className={`font-semibold ${activeCategory === category.id ? 'text-white' : 'text-stone-700'}`}>
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {menuItems[activeCategory]?.map((item, index) => (
            <div key={index} className="card-modern p-8 group">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold group-hover:text-amber-600 transition-colors">{item.name}</h3>
                    {item.popular && (
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-semibold rounded-full shadow-md">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-stone-600 leading-relaxed">{item.description}</p>
                </div>
                <span className="text-2xl font-bold gradient-text whitespace-nowrap">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Order?</span>
          </h2>
          <p className="text-stone-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Visit us in person or order ahead for pickup. We also cater for events and meetings.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <button className="btn-primary">
              Order Online
            </button>
            <button className="btn-secondary">
              Book a Table
            </button>
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
