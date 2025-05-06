import React from 'react';
import { motion } from 'framer-motion';

interface PortfolioItemProps {
  image: string;
  title: string;
  category: string;
  delay?: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ 
  image, 
  title, 
  category,
  delay = 0
}) => {
  return (
    <motion.div 
      className="group overflow-hidden rounded-lg relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="aspect-w-4 aspect-h-3 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-gray-300">{category}</p>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;