import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { CiHeart, CiUser } from "react-icons/ci";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { SlRefresh } from "react-icons/sl";
import { TiShoppingCart } from "react-icons/ti";

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
    <header className="bg-gray-900 text-white">
      <div className="flex-col mx-auto  flex items-center justify-between">
       

        {/* Main Navbar */}
        <div className="flex px-5 text-[17px]  py-6 items-center justify-between w-full  md:mt-0">
          <div className="flex items-center">
            <img
              src="https://demo-digitic2.myshopify.com/cdn/shop/files/header-logo.png?v=1721466080&width=206"
              className="h-10"
            />
          </div>
          <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("SHOP")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="px-3 py-2 flex items-center justify-between w-[18vw] space-x-1 hover:text-gray-300">
                <div className="flex flex-row gap-5 items-center">
                  <PiDotsSixVerticalBold size={22} />
                  <span>SHOP CATEGORIES</span>
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
          <div className="relative flex-grow mr-10 ml-36 hidden lg:flex">
            <input
              type="text"
              placeholder="Search"
              className=" w-full px-10 py-3 rounded-xl text-gray-900"
            />
          </div>
          <div className="flex gap-16 items-center">
            <div className="flex flex-row gap-2 items-center">
              <SlRefresh className="text-4xl font-extralight" />
              <button className="hover:text-yellow-500 text-start">
                Compare <br /> Products
              </button>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <CiHeart className="text-5xl font-extralight" />
              <button className="hover:text-yellow-500 text-start">
                Favourite <br />
                Wishlist
              </button>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <CiUser className="text-4xl font-extralight" />

              <button className="hover:text-yellow-500 text-start">
                Log In
                <br /> My Account
              </button>
            </div>
            <div className="relative">
              <span className="absolute -top-3 -right-2 bg-yellow-500 text-black text-xs rounded-full px-2">
                0
              </span>
              <button className="hover:text-yellow-500 flex flex-row gap-1 text-xl "><TiShoppingCart className="text-4xl text-[#febd69] font-extralight" /> $0.00</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
