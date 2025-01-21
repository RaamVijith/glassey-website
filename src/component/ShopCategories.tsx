import React from "react";

interface CategoryItem {
  id: number;
  title: string;
  productCount: number;
  imageUrl: string;
}

const categories: CategoryItem[] = [
  {
    id: 1,
    title: "Rectangle Glasses",
    productCount: 1,
    imageUrl:
      "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/cat-1.jpg",
  },
  {
    id: 2,
    title: "Square Sunglasses",
    productCount: 4,
    imageUrl:
      "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/cat-2.jpg",
  },
  {
    id: 3,
    title: "Oversized Glasses",
    productCount: 6,
    imageUrl:
      "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/cat-3.jpg",
  },
  {
    id: 4,
    title: "Geometric Glasses",
    productCount: 3,
    imageUrl:
      "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/cat-4.jpg",
  },
  {
    id: 5,
    title: "Cat Eye Glasses",
    productCount: 7,
    imageUrl:
      "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/cat-5.jpg",
  },
  {
    id: 6,
    title: "Geometric Glasses",
    productCount: 3,
    imageUrl:
      "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/cat-6.jpg",
  },
  {
    id: 7,
    title: "Cat Eye Glasses",
    productCount: 7,
    imageUrl:
      "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/cat-3.jpg",
  },
];

const ShopCategories: React.FC = () => {
  return (
    <div className="w-full px-4 py-[15vh] bg-gray-100 mb-[15vh] md:px-[10vw] flex flex-col items-center">
      <h1 className="font-semibold text-gray-800 text-5xl mb-10">
        Shop By Categories
      </h1>

      <div className="relative">
        <div className="overflow-x-hidden pb-4 lg:w-[80vw]">
          <div className="flex space-x-10 min-w-max px-2">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center w-60 cursor-pointer group"
              >
                <div className="relative w-60 h-60 rounded-full overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={category.imageUrl}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {category.title}
                </h3>
                <p className="text-base text-gray-600">
                  {category.productCount}{" "}
                  {category.productCount === 1 ? "Product" : "Products"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCategories;
