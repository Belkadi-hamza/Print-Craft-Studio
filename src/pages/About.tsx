import React from 'react';
import { motion } from 'framer-motion';
import { Check, Users, Award, Clock } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'David Miller',
      role: 'Founder & Creative Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'With over 15 years in the design industry, David brings creativity and strategic thinking to every project.'
    },
    {
      name: 'Emily Chen',
      role: 'Lead Designer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Emily specializes in logo design and brand identity, helping clients communicate their unique value through visuals.'
    },
    {
      name: 'Marcus Johnson',
      role: 'Production Manager',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Marcus ensures that every print job meets our high standards for quality and timely delivery.'
    },
    {
      name: 'Sophia Rodriguez',
      role: 'Client Relations',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Sophia is dedicated to providing exceptional service and building strong relationships with our clients.'
    }
  ];

  return (
    <>
      <div className="pt-24 pb-10 bg-gray-100">
        <div className="container-custom">
          <SectionHeader 
            title="About PrintCraft Studio" 
            subtitle="We're a team of passionate designers and print specialists committed to bringing your brand to life."
          />
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, PrintCraft Studio began as a small t-shirt printing operation in a tiny workshop. Our founder, David Miller, had a vision to create a design and print studio that would help businesses of all sizes develop strong visual identities.
              </p>
              <p className="text-gray-700 mb-4">
                As demand for our services grew, so did our team and capabilities. Today, we're proud to offer comprehensive design and printing solutions from our state-of-the-art facility, while maintaining the personalized service and attention to detail that has been our hallmark from day one.
              </p>
              <p className="text-gray-700">
                We've grown from a team of two to a diverse group of creative professionals, each bringing unique skills and perspectives to the table. What hasn't changed is our commitment to quality, creativity, and customer satisfaction.
              </p>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our team at work" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Mission
            </motion.h2>
            <motion.p 
              className="text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              At PrintCraft Studio, our mission is to empower businesses and individuals to make a lasting impression through exceptional design and high-quality printing. We believe that great design has the power to transform brands and create meaningful connections with audiences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeader 
            title="Our Values" 
            subtitle="These core principles guide everything we do at PrintCraft Studio."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">
                We're committed to excellence in everything we create. From concept to final product, we never compromise on quality.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-secondary-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-100 text-secondary-600">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe the best results come from working closely with our clients, understanding their vision and bringing it to life together.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-accent-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-100 text-accent-500">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reliability</h3>
              <p className="text-gray-600">
                We deliver on our promises. Our clients count on us for consistent results and on-time delivery, every time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeader 
            title="Meet Our Team" 
            subtitle="The talented individuals behind PrintCraft's success. Our diverse team brings creativity, expertise, and passion to every project."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose PrintCraft Studio?</h2>
              <ul className="space-y-4">
                {[
                  'Experienced team of creative professionals',
                  'Commitment to quality and attention to detail',
                  'Personalized service tailored to your needs',
                  'Quick turnaround times without compromising quality',
                  'Competitive pricing with value-added services',
                  'State-of-the-art equipment and printing techniques',
                  'Eco-friendly options for sustainable printing'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/6177748/pexels-photo-6177748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Printing process" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;