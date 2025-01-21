import React from 'react';

const SunglassesOffers: React.FC = () => {
  const offers = [
    {
      title: "Trending Girls Sunglasses",
      discount: "25% Discount",
      imageUrl: "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/sub-banner-1.jpg", // Replace with your image URL
      link: "#",
    },
    {
      title: "Blue Polarized Sunglasses",
      discount: "20% Discount",
      imageUrl: "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/sub-banner-2.jpg", // Replace with your image URL
      link: "#",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:mx-[10vw] mb-[15vh] gap-10">
      {offers.map((offer, index) => (
        <a
          key={index}
          href={offer.link}
          className="relative group overflow-hidden rounded-sm shadow-lg h-[30vh]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${offer.imageUrl})` }}
          ></div>
          <div className="relative z-10 p-6 w-[50%] left-[60%] top-10 text-left">
            <h3 className="text-xl text-gray-800">{offer.discount}</h3>
            <p className="mt-2 font-semibold text-4xl text-gray-800">{offer.title}</p>
            <span className="inline-block mt-4 py-2 text-xl underline text-red-700  rounded ">
              SHOP NOW
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default SunglassesOffers;
