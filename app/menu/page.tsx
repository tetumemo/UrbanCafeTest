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
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-stone-800 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Our Menu</h1>
          <p className="text-stone-300 mt-4 max-w-2xl">
            We take pride in sourcing the finest ingredients and crafting each item with care. 
            Our menu changes seasonally to ensure freshness and quality.
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-0 z-10 bg-white border-b border-stone-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 space-x-6 no-scrollbar">
            {categories.map(category => (
              <div
                key={category.id}
                className={`flex flex-col items-center px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-amber-100 text-amber-800' 
                    : 'hover:bg-stone-100'
                }`}
              >
                <span className="text-2xl mb-1">{category.icon}</span>
                <span className={`font-medium ${activeCategory === category.id ? 'text-amber-800' : 'text-stone-700'}`}>
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems[activeCategory]?.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-stone-100 flex justify-between">
              <div>
                <div className="flex items-center">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  {item.popular && (
                    <span className="ml-2 px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-stone-600 mt-2">{item.description}</p>
              </div>
              <span className="text-amber-600 font-bold">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-stone-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            Visit us in person or order ahead for pickup. We also cater for events and meetings.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md transition-colors">
              Order Online
            </button>
            <button className="bg-stone-700 hover:bg-stone-800 text-white px-6 py-3 rounded-md transition-colors">
              Book a Table
            </button>
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
