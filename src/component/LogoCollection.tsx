// src/components/LogoCollection.tsx

import React from 'react';

const LogoCollection: React.FC = () => {
  // Array of image sources
  const logoImages = [
    'https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/1.png',
    'https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/2.png',
    'https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/3.png',
    'https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/4.png',
    'https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/5.png',
  ];

  return (
    <div className="flex justify-between items-center  px-4 bg-white  py-[12vh] md:mx-[10vw] border-t-[1px]" >
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {logoImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Logo ${index + 1}`}
              className="w-full h-[10vh] object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCollection;
