import { Glasses, Search, Trash2, Truck } from "lucide-react";
import React from "react";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Search className="h-16 w-auto text-gray-800"/>,
      title: "Search Your Frame",
      description: "There are many variations lorem Ipsum availabl majority.",
    },
    {
        icon: <Glasses className="h-16 w-auto text-gray-800 font-extralight"/>,
        title: "Customize Your Lens",
      description: "There are many variations lorem Ipsum availabl majority.",
    },
    {
        icon: <Trash2 className="h-16 w-auto text-gray-800"/>,
        title: "Quickly Checkout",
      description: "There are many variations lorem Ipsum availabl majority.",
    },
    {
        icon: <Truck className="h-16 w-auto text-gray-800"/>,
      title: "Receive Your Glasses",
      description: "There are many variations lorem Ipsum availabl majority.",
    },
  ];

  return (
    <section className="py-[15vh] ">
      <div className="mx-[10vw] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div
                className={`flex items-center justify-center w-40 h-40 rounded-full border-[1px] border-gray-300 hover:bg-red-500 `}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
