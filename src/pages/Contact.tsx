import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your server or a form handling service
    console.log('Form data:', formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });

    // Reset submitted state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <div className="pt-24 pb-10 bg-gradient-to-r from-primary-900 to-secondary-800 text-white">
        <div className="container-custom">
          <SectionHeader 
            title="Contact Us" 
            subtitle="Have a project in mind? Get in touch with our team to discuss how we can help bring your vision to life."
            light
          />
        </div>
      </div>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <motion.h2 
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Get In Touch
              </motion.h2>
              <motion.p 
                className="text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                We'd love to hear from you! Whether you have a question about our services, need a quote, or want to discuss a project, our team is ready to assist you.
              </motion.p>

              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="mt-1 mr-4 flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600">123 Print Avenue, Design District, New York, NY 10001</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="mt-1 mr-4 flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="mt-1 mr-4 flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">info@printcraftstudio.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <div className="mt-1 mr-4 flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                    <p className="text-gray-600">Saturday: 10am - 4pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </motion.div>
              </div>

              {/* Map Embed */}
              <motion.div 
                className="mt-10 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2152282521844!2d-73.98823692396693!3d40.7512701710785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1677785221184!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PrintCraft Studio Location"
                ></iframe>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                {submitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <strong className="font-bold">Thank you!</strong>
                    <span className="block sm:inline"> Your message has been sent successfully. We'll get back to you shortly.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Interested In</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="Textile Printing">Textile Printing</option>
                        <option value="Logo Design">Logo Design</option>
                        <option value="Visual Advertising">Visual Advertising</option>
                        <option value="Vehicle Branding">Vehicle Branding</option>
                        <option value="Promotional Items">Promotional Items</option>
                        <option value="Custom Solutions">Custom Solutions</option>
                      </select>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full btn btn-primary flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeader 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our services and process."
          />

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What is the typical turnaround time for printing services?",
                  answer: "Turnaround times vary depending on the complexity and volume of the project. For standard t-shirt printing, we typically deliver within 7-10 business days. For larger orders or custom projects, we'll provide a specific timeline during our initial consultation."
                },
                {
                  question: "Do you provide design services, or should I come with my own designs?",
                  answer: "We offer comprehensive design services! Our creative team can develop designs from scratch based on your ideas or refine existing concepts. Of course, if you already have print-ready designs, we're happy to work with those as well."
                },
                {
                  question: "What file formats do you accept for printing?",
                  answer: "For best results, we prefer vector files (.ai, .eps, .pdf) for logos and designs. For complex images, high-resolution .jpg, .png, or .tif files (at least 300 dpi) are acceptable. If you're unsure about your file format, contact us and we'll guide you through the process."
                },
                {
                  question: "Do you offer bulk pricing or discounts for large orders?",
                  answer: "Yes! We offer tiered pricing based on order quantity. The larger your order, the more cost-effective the per-unit price becomes. Contact us for a custom quote for your specific project needs."
                },
                {
                  question: "Can I request samples before placing a large order?",
                  answer: "Absolutely. For most services, we can provide samples or proofs before proceeding with full production. For apparel, we offer sample printing for a nominal fee, which can be applied to your full order if you proceed."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;