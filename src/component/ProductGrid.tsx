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
    id: 1,
    name: "Vincent Chase Gold Yellow Full Rim Geometric",
    imageUrl: "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-2-600x543.jpg", // Replace with your main image URL
    hoverImageUrl: "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-4-600x543.jpg", // Replace with hover image URL
    discount: 8,
    oldPrice: 13,
    newPrice: 12,
    rating: 5,
    countdown: 604800, // 7 days in seconds
  },
  {
    id: 2,
    name: "Black Blue Full Rim Round Vincent Chase",
    imageUrl: "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-4-600x543.jpg", // Replace with your main image URL
    hoverImageUrl: "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-2-600x543.jpg", // Replace with hover image URL
    discount: 0,
    oldPrice: 15,
    newPrice: 15,
    rating: 4.5,
    countdown: 86400, // 1 day in seconds
  },
  {
    id: 3,
    name: "Vincent Chase Gold Yellow Full Rim Geometric",
    imageUrl: "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-6-600x543.jpg", // Replace with your main image URL
    hoverImageUrl: "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-9-600x543.jpg", // Replace with hover image URL
    discount: 8,
    oldPrice: 13,
    newPrice: 12,
    rating: 5,
    countdown: 604800, // 7 days in seconds
  },
  {
    id: 2,
    name: "Black Blue Full Rim Round Vincent Chase",
    imageUrl: "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-9-600x543.jpg", // Replace with your main image URL
    hoverImageUrl: "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-6-600x543.jpg", // Replace with hover image URL
    discount: 0,
    oldPrice: 15,
    newPrice: 15,
    rating: 4.5,
    countdown: 86400, // 1 day in seconds
  },
  {
    id: 5,
    name: "Vincent Chase Gold Yellow Full Rim Geometric",
    imageUrl: "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-3-600x543.jpg", // Replace with your main image URL
    hoverImageUrl: "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-5-600x543.jpg", // Replace with hover image URL
    discount: 8,
    oldPrice: 13,
    newPrice: 12,
    rating: 5,
    countdown: 604800, // 7 days in seconds
  },
  {
    id: 6,
    name: "Black Blue Full Rim Round Vincent Chase",
    imageUrl: "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-5-600x543.jpg", // Replace with your main image URL
    hoverImageUrl: "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-3-600x543.jpg", // Replace with hover image URL
    discount: 0,
    oldPrice: 15,
    newPrice: 15,
    rating: 4.5,
    countdown: 86400, // 1 day in seconds
  },
  {
    id: 7,
    name: "Vincent Chase Gold Yellow Full Rim Geometric",
    imageUrl: "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-7-600x543.jpg", // Replace with your main image URL
    hoverImageUrl: "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-10-600x543.jpg", // Replace with hover image URL
    discount: 8,
    oldPrice: 13,
    newPrice: 12,
    rating: 5,
    countdown: 604800, // 7 days in seconds
  },
  {
    id: 8,
    name: "Black Blue Full Rim Round Vincent Chase",
    imageUrl: "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-10-600x543.jpg", // Replace with your main image URL
    hoverImageUrl: "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/01-7-600x543.jpg", // Replace with hover image URL
    discount: 0,
    oldPrice: 15,
    newPrice: 15,
    rating: 4.5,
    countdown: 86400, // 1 day in seconds
  },
];

const ProductGrid: React.FC = () => {
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
            <h1 className="font-semibold text-gray-800 text-5xl mb-10">Trending Products</h1>
            <div className="flex flex-row gap-6 mb-10">
                <h2 className="text-xl text-white hover:text-gray-800 bg-gray-800 hover:bg-gray-200 py-3 px-5 ">SUNGLASSES</h2>
                <h2 className="text-xl text-gray-800 hover:text-white bg-gray-200 hover:bg-gray-800 py-3 px-5 ">ROUND</h2>
                <h2 className="text-xl text-gray-800 hover:text-white bg-gray-200 hover:bg-gray-800 py-3 px-5 ">EYEGLASSES</h2>

            </div>
        </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group "
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
              className={`w-full h-auto object-cover rounded-md mb-4 transition-all duration-700 ease-in-out group-hover:h-60`}   
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
              <div className="flex justify-center items-center space-x-2">
                {product.oldPrice !== product.newPrice && (
                  <span className="line-through text-gray-500 text-lg">
                    ${product.oldPrice}
                  </span>
                )}
                <span className="text-red-500 text-lg font-bold">
                  ${product.newPrice}
                </span>
                {hoveredProduct === product.id && (
              <button className="absolute bottom-4 truncate bg-red-600 text-white uppercase text-xl px-6 py-3   ">
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

export default ProductGrid;
