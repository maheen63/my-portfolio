import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  desc: string; // If desc contains HTML, ensure it's sanitized
  img: string;
  tags: string[];
}

const Card: React.FC<CardProps> = ({ title, desc, img, tags }) => {
  return (
    <div className="border border-accent w-[300px] sm:w-[350px]" data-aos="zoom-out-right">
      <div>
        <Image
          className='w-full h-auto'
          src={img}
          alt={title}
          width={350}
          height={350}
        />
      </div>
      
      <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>{title}</div>
        <div dangerouslySetInnerHTML={{ __html: desc }} />
        <div className='flex flex-wrap space-x-2'>
          {tags.map((el) => (
            <div key={el} className='tags'>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;