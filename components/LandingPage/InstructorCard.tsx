import React from 'react';
import { Star, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import manPraying from '@/assets/man-praying.jpeg'

const InstructorCard = () => {
    return (
      <div className="rounded-xl overflow-hidden bg-white shadow-lg">
        <div className="h-[260px] w-[249px] relative">
        <Image
          src={manPraying}
          alt={'man paraying'}
          layout="fill"
          objectFit="cover"          />   
        </div>
        
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            Quadri Usman
          </h2>
          
          <p className="text-gray-600 text-sm mb-3">
            Experienced Tajweed instructor with a passion for proper Quranic recitation.
          </p>
          
          <div className="flex items-center space-x-1 mb-2">
            <Star 
              className="w-4 h-4 text-yellow-400 fill-current" 
              aria-hidden="true"
            />
            <span className="text-gray-700">4.8</span>
            <span className="text-gray-500 text-sm">(120 students)</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-600">
            <GraduationCap 
              className="w-4 h-4" 
              aria-hidden="true"
            />
            <span className="text-sm">10 years teaching</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default InstructorCard;