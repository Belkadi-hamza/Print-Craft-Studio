import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  delay = 0 
}) => {
  return (
    <motion.div 
      className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-600 transition-all duration-300 group-hover:bg-primary-600 group-hover:text-white">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;