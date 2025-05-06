import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shirt as TShirt, PenTool, Image, Truck, Printer, Package, MessageSquare } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import ServiceCard from '../components/ui/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: TShirt,
      title: "Textile Printing",
      description: "High-quality custom prints on t-shirts, hoodies, caps, and more. Perfect for businesses, events, and promotions.",
      features: [
        "Screen printing for vibrant, durable designs",
        "DTG (Direct to Garment) printing for detailed artwork",
        "Heat transfer for small batches and specialty items",
        "Embroidery services for a premium look",
        "Wide range of garment options and sizes"
      ],
      image: "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: PenTool,
      title: "Logo Design",
      description: "Professional logo design services that capture your brand's essence. Stand out with a distinctive visual identity.",
      features: [
        "Custom logo design with multiple concept options",
        "Brand identity development",
        "Style guides and brand documentation",
        "Logo variations for different applications",
        "Vector formats for scalability across all media"
      ],
      image: "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: Image,
      title: "Visual Advertising",
      description: "Eye-catching banners, posters, and advertising materials that deliver your message with impact and clarity.",
      features: [
        "Large format printing for banners and posters",
        "Trade show displays and exhibition materials",
        "Point-of-sale displays and retail signage",
        "Indoor and outdoor signage solutions",
        "Durable materials for long-lasting results"
      ],
      image: "https://images.pexels.com/photos/7256421/pexels-photo-7256421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: Truck,
      title: "Vehicle Branding",
      description: "Transform your vehicles into mobile advertisements with our durable and high-quality vehicle wraps and graphics.",
      features: [
        "Full vehicle wraps for maximum impact",
        "Partial wraps and vinyl lettering options",
        "Weather-resistant materials for durability",
        "Professional installation services",
        "Design services optimized for vehicle surfaces"
      ],
      image: "https://images.pexels.com/photos/4217/vehicle-marketing-car-automobile.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: Printer,
      title: "Promotional Items",
      description: "Branded merchandise that keeps your company top-of-mind. From pens to custom gadgets, we print on nearly anything.",
      features: [
        "Wide selection of promotional products",
        "Quality printing that withstands daily use",
        "Bulk ordering discounts available",
        "Seasonal promotional item recommendations",
        "Custom packaging options"
      ],
      image: "https://images.pexels.com/photos/3747139/pexels-photo-3747139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: Package,
      title: "Custom Solutions",
      description: "Have a unique project in mind? Our team is ready to tackle custom printing and design challenges of any scale.",
      features: [
        "Consultation services for unique projects",
        "Custom material sourcing",
        "Prototyping and sample production",
        "Project management from concept to delivery",
        "Innovative solutions for challenging requirements"
      ],
      image: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <>
      <div className="pt-24 pb-10 bg-gradient-to-r from-primary-900 to-secondary-800 text-white">
        <div className="container-custom">
          <SectionHeader 
            title="Our Services" 
            subtitle="We provide comprehensive design and printing solutions to help your brand stand out. From apparel to advertising, we've got you covered."
            light
          />
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section key={index} id={service.title.toLowerCase().replace(/\s+/g, '-')} className={`py-16 ${index % 2 !== 0 ? 'bg-gray-50' : ''}`}>
          <div className="container-custom">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}>
              <motion.div
                className={`order-2 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div
                className={`order-1 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-600">
                  <service.icon className="w-7 h-7" />
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <h3 className="text-xl font-semibold mb-4">What We Offer:</h3>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary">
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom">
          <SectionHeader 
            title="Our Process" 
            subtitle="We follow a streamlined process to ensure your project is completed efficiently and to your satisfaction."
            light
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", description: "We discuss your needs, timeline, and budget to understand your project goals." },
              { step: "2", title: "Design", description: "Our designers create concepts based on your requirements and brand guidelines." },
              { step: "3", title: "Production", description: "Once approved, we move to production using high-quality materials and techniques." },
              { step: "4", title: "Delivery", description: "The finished product is delivered on time and ready to make an impact." }
            ].map((process, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                  <div className="absolute -top-5 -left-5 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 mt-3">{process.title}</h3>
                  <p className="text-gray-200">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30 0L40 10L30 20V0Z" fill="white" fillOpacity="0.5" />
                      <path d="M0 9H30V11H0V9Z" fill="white" fillOpacity="0.5" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                <p className="text-gray-600 mb-6">
                  Contact us today for a free consultation. Our team is ready to help bring your vision to life with our professional design and printing services.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MessageSquare className="w-5 h-5 text-primary-600 mr-3" />
                    <span>Get a personalized quote for your project</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="w-5 h-5 text-primary-600 mr-3" />
                    <span>Discuss your ideas with our design experts</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="w-5 h-5 text-primary-600 mr-3" />
                    <span>No obligation, just helpful advice</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/contact" className="btn btn-primary">
                    Contact Us Now
                  </Link>
                </div>
              </div>
              <div className="h-full">
                <img 
                  src="https://images.pexels.com/photos/7262394/pexels-photo-7262394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Design consultation" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;