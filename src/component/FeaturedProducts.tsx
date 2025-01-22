import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  hoverImageUrl: string; // New image for hover effect
  discount: number;
  oldPrice: number;
  newPrice: number;
  rating: number;
  countdown: number; // Countdown in seconds
}

const products: Product[] = [
  {
    id: 5,
    name: "Vincent Chase Gold Yellow Full Rim Geometric",
    imageUrl:
      "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-3-600x543.jpg", // Replace with your main image URL
    hoverImageUrl:
      "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-5-600x543.jpg", // Replace with hover image URL
    discount: 8,
    oldPrice: 13,
    newPrice: 12,
    rating: 5,
    countdown: 604800, // 7 days in seconds
  },
  {
    id: 6,
    name: "Black Blue Full Rim Round Vincent Chase",
    imageUrl:
      "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-5-600x543.jpg", // Replace with your main image URL
    hoverImageUrl:
      "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-3-600x543.jpg", // Replace with hover image URL
    discount: 0,
    oldPrice: 15,
    newPrice: 15,
    rating: 4.5,
    countdown: 86400, // 1 day in seconds
  },
  {
    id: 7,
    name: "Vincent Chase Gold Yellow Full Rim Geometric",
    imageUrl:
      "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-7-600x543.jpg", // Replace with your main image URL
    hoverImageUrl:
      "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-10-600x543.jpg", // Replace with hover image URL
    discount: 8,
    oldPrice: 13,
    newPrice: 12,
    rating: 5,
    countdown: 604800, // 7 days in seconds
  },
  {
    id: 8,
    name: "Black Blue Full Rim Round Vincent Chase",
    imageUrl:
      "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-10-600x543.jpg", // Replace with your main image URL
    hoverImageUrl:
      "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-7-600x543.jpg", // Replace with hover image URL
    discount: 0,
    oldPrice: 15,
    newPrice: 15,
    rating: 4.5,
    countdown: 86400, // 1 day in seconds
  },
];

const FeaturedProducts: React.FC = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const handleMouseEnter = (productId: number) => {
    setHoveredProduct(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  return (
    <div className="p-4 mb-[15vh] md:mx-[10vw]">
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="font-semibold text-gray-800 text-5xl mb-14">
          Featured Products
        </h1>
      </div>
      <div className="grid  grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6  overflow-hidden">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group h-[500px]"
            onMouseEnter={() => handleMouseEnter(product.id)}
            onMouseLeave={handleMouseLeave}
          >
            {product.discount > 0 && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                -{product.discount}%
              </span>
            )}
            <img
              src={
                hoveredProduct === product.id
                  ? product.hoverImageUrl
                  : product.imageUrl
              }
              alt={product.name}
              className={`w-full object-cover rounded-md mb-4 transition-all duration-700 ease-in-out h-80 group-hover:h-60`}
              style={{ transitionProperty: "height" }}
            />

            <div className="text-center px-5">
              <h3 className="text-xl text-gray-700">{product.name}</h3>
              <div className="flex justify-center items-center text-yellow-400 text-2xl my-2">
                {Array.from({ length: 5 }, (_, i) =>
                  i < Math.floor(product.rating) ? (
                    <span key={i}>&#9733;</span>
                  ) : (
                    <span key={i}>&#9734;</span>
                  )
                )}
              </div>
              <div className="flex flex-col justify-center items-center space-x-2">
                {product.oldPrice !== product.newPrice && (
                  <span className="line-through text-gray-500 text-lg">
                    ${product.oldPrice}
                  </span>
                )}
                <span className="text-red-500 text-lg font-bold">
                  ${product.newPrice}
                </span>

                {hoveredProduct === product.id && (
                  <button className=" truncate bg-red-600 text-white uppercase text-xl px-6 py-3  transition-all duration-1000 ease-in-out ">
                    Select Option
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
