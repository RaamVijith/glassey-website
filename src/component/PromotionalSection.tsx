import React from "react";

interface PromotionalBanner {
  id: number;
  title: string;
  subtitle?: string;
  discount: string;
  imageUrl: string;
  buttonText: string;
  size: "large" | "small";
}

const promotionalBanners: PromotionalBanner[] = [
  {
    id: 1,
    title: "The Roadstar Black Wayfarer Sunglasses",
    subtitle: "Lifestyle Unisex Sunglasses",
    discount: "Flat 30% Discount",
    imageUrl:
      "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/cms-banner-1.jpg",
    buttonText: "SHOP NOW",
    size: "large",
  },
  {
    id: 2,
    title: "Black Wayfarer Sunglasses",
    discount: "25% Discount",
    imageUrl:
      "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/cms-banner-2.jpg",
    buttonText: "SHOP NOW",
    size: "small",
  },
  {
    id: 3,
    title: "Summer Sale",
    discount: "NOW ON!",
    imageUrl:
      "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/cms-banner-3.jpg",
    buttonText: "SHOP NOW",
    size: "small",
  },
];

const PromotionalSection: React.FC = () => {
  return (
    <div className="  py-8 w-full md:mx-[10vw] mb-[10vh]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Large banner */}
        <div
          className="relative h-[600px]  overflow-hidden bg-cover bg-center  "
          style={{
            backgroundImage: `url(${promotionalBanners[0].imageUrl})`,
          }}
        >
          <div className="absolute inset-0 left-[20%]">
            <div className="h-full  flex items-center justify-end pr-8 md:pr-12">
              <div className="w-1/2">
                <p className="text-gray-800 text-2xl font-medium mb-2">
                  {promotionalBanners[0].discount}
                </p>
                <h2 className="text-3xl md:text-5xl py-5 font-semibold text-gray-800 mb-2">
                  {promotionalBanners[0].title}
                </h2>

                <button className="bg-red-500 text-white px-6 py-3  hover:bg-red-600 transition-colors">
                  {promotionalBanners[0].buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Smaller banners */}
        <div className="flex flex-col gap-6 w-full lg:w-[60%]">
          {promotionalBanners.slice(1).map((banner) => (
            <div
              key={banner.id}
              className="relative h-[290px]  overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: `url(${banner.imageUrl})`,
              }}
            >
              <div
                className={`absolute inset-0 `}
              >
                <div className={`relative z-10 p-6 w-[50%] left-[50%] top-10 text-left  ${banner.id === 2
                    ? "flex flex-col"
                    : "hidden"
                }`}>
                  <h3 className="text-xl text-gray-800">{banner.discount}</h3>
                  <p className="mt-2 font-semibold text-3xl text-gray-800">
                    {banner.title}
                  </p>
                  <span className="inline-block mt-4 py-2 text-xl underline text-red-700  rounded ">
                    SHOP NOW
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionalSection;
