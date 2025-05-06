import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  center = true,
  light = false
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <motion.h2 
        className={`mb-4 ${light ? 'text-white' : 'text-gray-900'}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          className={`text-lg ${light ? 'text-gray-300' : 'text-gray-600'} max-w-3xl ${center ? 'mx-auto' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;