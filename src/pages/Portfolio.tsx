import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import PortfolioItem from '../components/ui/PortfolioItem';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: "Urban Streetwear Collection",
      category: "apparel",
      image: "https://images.pexels.com/photos/5698849/pexels-photo-5698849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "Cafe Branding Package",
      category: "logo",
      image: "https://images.pexels.com/photos/5699397/pexels-photo-5699397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Sports Team Uniforms",
      category: "apparel",
      image: "https://images.pexels.com/photos/5699410/pexels-photo-5699410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      title: "Tech Startup Brand Identity",
      category: "logo",
      image: "https://images.pexels.com/photos/6283965/pexels-photo-6283965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 5,
      title: "Event Banners and Signage",
      category: "advertising",
      image: "https://images.pexels.com/photos/266143/pexels-photo-266143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 6,
      title: "Fitness Center Vehicle Wrap",
      category: "vehicle",
      image: "https://images.pexels.com/photos/9821468/pexels-photo-9821468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 7,
      title: "Corporate Gift Package",
      category: "promotional",
      image: "https://images.pexels.com/photos/7821879/pexels-photo-7821879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 8,
      title: "Festival Merchandise Collection",
      category: "apparel",
      image: "https://images.pexels.com/photos/5698844/pexels-photo-5698844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 9,
      title: "Real Estate Branding",
      category: "logo",
      image: "https://images.pexels.com/photos/5417639/pexels-photo-5417639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 10,
      title: "Food Truck Branding",
      category: "vehicle",
      image: "https://images.pexels.com/photos/2058131/pexels-photo-2058131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 11,
      title: "Trade Show Display Materials",
      category: "advertising",
      image: "https://images.pexels.com/photos/6150739/pexels-photo-6150739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 12,
      title: "Corporate Branded Stationery",
      category: "promotional",
      image: "https://images.pexels.com/photos/6375/quote-chalk-think-words.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const categories = [
    { id: 'all', name: 'All Works' },
    { id: 'apparel', name: 'Apparel' },
    { id: 'logo', name: 'Logo Design' },
    { id: 'advertising', name: 'Advertising' },
    { id: 'vehicle', name: 'Vehicle Branding' },
    { id: 'promotional', name: 'Promotional Items' }
  ];

  return (
    <>
      <div className="pt-24 pb-10 bg-gradient-to-r from-secondary-900 to-primary-800 text-white">
        <div className="container-custom">
          <SectionHeader 
            title="Our Portfolio" 
            subtitle="Browse through our latest work and see what we can do for your brand. Each project showcases our commitment to quality and creativity."
            light
          />
        </div>
      </div>

      {/* Filter Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filter === category.id 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <PortfolioItem
                key={item.id}
                image={item.image}
                title={item.title}
                category={categories.find(cat => cat.id === item.category)?.name || ""}
                delay={index * 0.1}
              />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-2">No projects found</h3>
              <p className="text-gray-600">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeader 
            title="Featured Case Study" 
            subtitle="An in-depth look at one of our most successful projects, demonstrating our comprehensive approach to branding and design."
          />

          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12">
                <h3 className="text-2xl font-bold mb-4">City Brew Coffee Rebrand</h3>
                <p className="text-gray-700 mb-6">
                  City Brew Coffee approached us with the challenge of refreshing their brand while retaining their loyal customer base. We created a complete rebranding package including a modern logo, packaging design, store signage, and branded merchandise.
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2">The Challenge</h4>
                    <p className="text-gray-700">
                      Update a beloved local brand without alienating existing customers, while attracting a younger demographic and preparing for regional expansion.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Our Approach</h4>
                    <p className="text-gray-700">
                      We conducted market research and customer interviews to understand the brand's strengths, then created a design system that honored their heritage while introducing contemporary elements.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">The Results</h4>
                    <p className="text-gray-700">
                      The rebrand led to a 32% increase in merchandise sales, significant social media engagement, and successful expansion to three new locations within 18 months.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200">
                <img 
                  src="https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="City Brew Coffee Rebrand" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-8 bg-gray-100">
              <h4 className="font-bold text-lg mb-4">Project Deliverables</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Logo Design', 'Packaging', 'Signage', 'Merchandise', 'Menu Design', 'Digital Assets', 'Brand Guidelines', 'Store Collateral'].map((item, index) => (
                  <div key={index} className="bg-white px-4 py-3 rounded shadow text-center">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <svg className="w-16 h-16 mx-auto text-primary-300 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              "PrintCraft Studio transformed our brand identity with their exceptional design work. The team took the time to understand our business and created a cohesive visual system that perfectly represents who we are. The quality of their printing is outstanding, and they delivered everything on time and on budget."
            </p>
            <div>
              <p className="font-bold text-xl">Sarah Thompson</p>
              <p className="text-primary-300">Marketing Director, City Brew Coffee</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;