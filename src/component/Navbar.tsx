import { ChevronDown, ShoppingBag } from "lucide-react";
import React, { useState } from "react";
import { CiUser } from "react-icons/ci";


interface MenuItem {
  title: string;
  isHeader?: boolean;
  hasSubmenu?: boolean;
  items?: { label: string }[];
}

const menuItems: MenuItem[] = [
  {
    title: "Our Store",
    isHeader: true,
  },
  {
    title: "Appliances",
    hasSubmenu: true,
  },
  {
    title: "Watches",
    hasSubmenu: true,
  },
  {
    title: "Ear Buds",
  },
  {
    title: "Headphones",
  },
  {
    title: "Laptops",
    hasSubmenu: true,
  },
  {
    title: "Tablets",
  },
  {
    title: "Smart Phones",
  },
  {
    title: "Television",
    hasSubmenu: true,
  },
  {
    title: "Chargers",
  },
  {
    title: "Mini Cameras",
  },
];

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (category: string) => {
    setActiveDropdown(category);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="text-gray-800 border-t-[1px]">
      <div className="flex-col mx-auto  flex items-center justify-center">
        {/* Main Navbar */}
        <div className="flex px-5 text-[17px]  py-6 items-center justify-center  md:mt-0">
       
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("SHOP")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="px-3 py-3 flex items-center gap-4 space-x-1 bg-gray-100">
              <div className="flex flex-row gap-1 items-center font-semibold text-gray-500">
                <span>Shop Categories</span>
              </div>

              <ChevronDown size={16} />
            </button>

            {activeDropdown === "SHOP" && (
              <div className="absolute left-0 mt-4 transform -translate-x-4 z-10">
                <div className="bg-white shadow-lg w-80">
                  <div className="py-2">
                    {menuItems.map((item, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-100 last:border-b-0"
                      >
                        {item.isHeader ? (
                          <div className="px-6 py-3 text-lg text-gray-900">
                            {item.title}
                          </div>
                        ) : (
                          <div className="px-6 py-2.5 flex items-center justify-between hover:bg-gray-50">
                            <a
                              href="#"
                              className="text-gray-700 hover:text-gray-900"
                            >
                              {item.title}
                            </a>
                            {item.hasSubmenu && (
                              <span className="text-gray-400">+</span>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="relative flex-grow  hidden lg:flex">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 px-10 py-3 w-[25vw] border-l-[1px] border-gray-200 text-gray-900"
            />
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex flex-row gap-2 pl-4 items-center">
              <CiUser className="text-3xl font-extralight" />
          
            </div>
           

            <div className="relative">
              <span className="absolute -top-3 -right-4 bg-red-500 text-white text-base font-bold rounded-full px-2">
                0
              </span>
              <button className="flex flex-row gap-1 text-xl ">
                <ShoppingBag className="text-3xl font-extralight" />
              
              </button>
            </div>
           
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
