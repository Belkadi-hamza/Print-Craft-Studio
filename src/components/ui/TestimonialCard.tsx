import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  company: string;
  content: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  company, 
  content, 
  rating 
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed">"{content}"</p>
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-gray-600 text-sm">{company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;