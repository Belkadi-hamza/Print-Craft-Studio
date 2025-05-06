import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Printer, PenTool, Image, Shirt as TShirt, Truck } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import ServiceCard from '../components/ui/ServiceCard';
import PortfolioItem from '../components/ui/PortfolioItem';
import TestimonialCard from '../components/ui/TestimonialCard';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-r from-primary-900 to-secondary-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img 
            src="https://images.pexels.com/photos/5372559/pexels-photo-5372559.jpeg?auto=compress&cs=tinysrgb&w=1500" 
            alt="Printing workshop" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-white mb-6 leading-tight">
                  Transform Your Ideas Into <span className="text-accent-400">Vibrant Designs</span>
                </h1>
                <p className="text-gray-200 text-lg mb-8 max-w-lg">
                  Professional apparel printing, logo design, and visual advertising services. We bring your brand to life with quality and creativity.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/services" className="btn btn-accent">
                    Explore Services
                  </Link>
                  <Link to="/portfolio" className="btn bg-white text-gray-800 hover:bg-gray-100">
                    View Our Work
                  </Link>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="relative hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/7262407/pexels-photo-7262407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="T-shirt design" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 p-4 bg-white rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="bg-success-500 rounded-full w-3 h-3"></div>
                  <span className="font-medium">10+ Years Experience</span>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 p-4 bg-white rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="bg-accent-500 rounded-full w-3 h-3"></div>
                  <span className="font-medium">100% Quality Guaranteed</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeader 
            title="Our Services" 
            subtitle="We provide comprehensive design and printing solutions to help your brand stand out. From apparel to advertising, we've got you covered."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={TShirt}
              title="Textile Printing"
              description="High-quality custom prints on t-shirts, hoodies, caps, and more. Perfect for businesses, events, and promotions."
              delay={0.1}
            />
            <ServiceCard
              icon={PenTool}
              title="Logo Design"
              description="Professional logo design services that capture your brand's essence. Stand out with a distinctive visual identity."
              delay={0.2}
            />
            <ServiceCard
              icon={Image}
              title="Visual Advertising"
              description="Eye-catching banners, posters, and advertising materials that deliver your message with impact and clarity."
              delay={0.3}
            />
            <ServiceCard
              icon={Truck}
              title="Vehicle Branding"
              description="Transform your vehicles into mobile advertisements with our durable and high-quality vehicle wraps and graphics."
              delay={0.4}
            />
            <ServiceCard
              icon={Printer}
              title="Promotional Items"
              description="Branded merchandise that keeps your company top-of-mind. From pens to custom gadgets, we print on nearly anything."
              delay={0.5}
            />
            <ServiceCard
              icon={ArrowRight}
              title="Custom Solutions"
              description="Have a unique project in mind? Our team is ready to tackle custom printing and design challenges of any scale."
              delay={0.6}
            />
          </div>

          <div className="mt-16 text-center">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeader 
            title="Our Recent Work" 
            subtitle="Browse through some of our latest projects and see the quality and creativity we bring to every design."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PortfolioItem
              image="https://images.pexels.com/photos/5698849/pexels-photo-5698849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Urban Streetwear Collection"
              category="Apparel Design"
              delay={0.1}
            />
            <PortfolioItem
              image="https://images.pexels.com/photos/5699397/pexels-photo-5699397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Cafe Branding Package"
              category="Logo Design"
              delay={0.2}
            />
            <PortfolioItem
              image="https://images.pexels.com/photos/5699410/pexels-photo-5699410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Sports Team Uniforms"
              category="Textile Printing"
              delay={0.3}
            />
          </div>

          <div className="mt-12 text-center">
            <Link to="/portfolio" className="btn btn-secondary">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gradient-to-r from-primary-800 to-secondary-900 text-white">
        <div className="container-custom">
          <SectionHeader 
            title="What Our Clients Say" 
            subtitle="Don't just take our word for it. Here's what our satisfied clients have to say about our work."
            light
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              company="Fitness First Gym"
              content="The team at PrintCraft created amazing uniforms for our entire staff. The quality of the printing is outstanding and has held up through countless washes."
              rating={5}
            />
            <TestimonialCard
              name="Michael Rodriguez"
              company="Espresso Bean Café"
              content="Not only did they design a beautiful logo for our café, but they also created all our branded materials. The consistency across all items is perfect!"
              rating={5}
            />
            <TestimonialCard
              name="Jennifer Williams"
              company="Williams Real Estate"
              content="The vehicle wraps they designed for our company cars look phenomenal. We've received so many compliments and new business inquiries as a result."
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-500 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Bring Your Ideas to Life?</h2>
            <p className="text-xl mb-8">
              Contact us today for a free consultation and quote. Let's create something amazing together.
            </p>
            <Link to="/contact" className="btn bg-white text-accent-600 hover:bg-gray-100 hover:text-accent-700 text-lg px-8 py-4">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;