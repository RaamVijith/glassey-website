import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import Products1 from "./Products";

const NavigationMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (category: string) => {
    setActiveDropdown(category);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white w-[100vw] text-gray-900 relative hidden lg:flex">
      <div className="mx-auto w-full px-4">
        <div className="flex items-center justify-center h-24">
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center w-full justify-center space-x-4 text-lg ">
            {/* LOGO */}
            <img
              className="h-12 w-auto pr-20"
              src="https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/plugins/templatemela-theme-glassey/layouts/default/img/logo.svg"
            />

            <a
              href="#"
              className="px-3 py-2 flex font-semibold items-center text-red-600 text-xl hover:text-gray-300"
            >
              Home
            </a>
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("Shop")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="px-3 py-2 flex items-center font-semibold text-xl text-gray-800 hover:text-red-600"
              >
                Shop
                <ChevronDown size={18} className="ml-1" />
              </a>
              {activeDropdown === "Shop" && (
                <div className="absolute -left-[40vw] mt-6 z-10 border-t-2 w-[95vw] px-[10vw] py-[3vw] bg-white shadow-xl grid grid-cols-4 gap-6 animate-fade-slide">
                  {/* Product Types Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Product Types
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Simple Products
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Grouped Products
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Variable Product{" "}
                          <span className="text-green-500">NEW</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          External/Affiliate Product
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Onsale Products{" "}
                          <span className="text-red-500">SALE</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Upsell Products
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Cross-Sell Product
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* WooCommerce Pages Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      WooCommerce Pages
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Shop Page
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Checkout Page
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Shopping Cart
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          My Account
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Shop Ajax Filter{" "}
                          <span className="text-pink-500">HOT</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Product Category
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Product Features Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Product Features
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Stock Progress Bar
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Color/Image Swatches
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Size Guide Table
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Custom Tab
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Countdown Timer
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Product Video{" "}
                          <span className="text-pink-500">FEATURED</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Product Brand
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Promotional Card Section */}
                  <div className=" flex items-center">
                    <img
                      src="https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2023/10/shop-banner.jpg"
                      alt="Offer Image 1"
                      className=" object-contain"
                    />
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("Categories")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="px-3 py-2 flex items-center font-semibold text-xl text-gray-800 hover:text-red-600"
              >
                Categories
                <ChevronDown size={18} className="ml-1" />
              </a>
              {activeDropdown === "Categories" && (
                <div className="absolute -left-[50vw] mt-6 z-10 border-t-2 w-[110vw] px-[10vw] py-[3vw] bg-white shadow-xl flex flex-row justify-between gap-10 animate-fade-slide">
                  {/* Glasses Categories */}
                  <div className="space-y-4 flex flex-1 flex-col w-[20vw]">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Browline Glasses
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Rectangle Glasses
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Retro Sunglasses
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Riding Glasses
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Rimless Glasses
                        </a>
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 mt-8">
                      Geometric Glasses
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Heart Sunglasses
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Rectangle Sunglasses
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Semi-rimless Glasses
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Wrap Sunglasses
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Additional Categories */}
                  <div className="space-y-4 flex flex-1 flex-col w-[20vw]">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Cat Eye Glasses
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Round Glass
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Square Sunglasses
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Transparent Glasses
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Vintage Goggles
                        </a>
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 mt-8">
                      Oval Glasses
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Butterfly Sunglasses
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Clubmaster Glass
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Hexagonal Sunglasses
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Octagonal Sunglasses
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Eyeglasses Section */}
                  <div className="space-y-4 flex flex-1 flex-col w-[20vw]">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Eyeglasses
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Aviator Sunglasses
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Clubmaster Sunglasses
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Round Sunglasses
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Wayfarer Sunglasses
                        </a>
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 mt-8">
                      Oversized Glasses
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Clip-On Glasses
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Navigator Glasses
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Tortoise Glasses
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Wayfarer Glasses
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Best Selling Products */}
                  <div className="col-span-1 w-[50vw] grid grid-cols-2 space-y-4 gap-4">
                    <div className="bg-gray-100 rounded-lg p-4">
                      <img
                        src="/api/placeholder/80/80"
                        alt="Black Brown Sunglasses"
                        className="w-20 h-20 object-contain mb-4"
                      />
                      <h4 className="font-semibold text-gray-900">
                        Black Brown Solid Full Rim Wayfarer Sunglass
                      </h4>
                      <div className="flex items-center mt-2">
                        <p className="text-lg font-bold text-red-600">$21</p>
                        <p className="text-sm text-gray-500 line-through ml-2">
                          $22
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-4">
                      <img
                        src="/api/placeholder/80/80"
                        alt="Yellow Black Sunglasses"
                        className="w-20 h-20 object-contain mb-4"
                      />
                      <h4 className="font-semibold text-gray-900">
                        Yellow Black Full Rim Cat Eye Vincent Chase Polarized
                      </h4>
                      <div className="flex items-center mt-2">
                        <p className="text-lg font-bold text-red-600">$16</p>
                        <p className="text-sm text-gray-500 line-through ml-2">
                          $17
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-4">
                      <img
                        src="/api/placeholder/80/80"
                        alt="Blue Rim Sunglasses"
                        className="w-20 h-20 object-contain mb-4"
                      />
                      <h4 className="font-semibold text-gray-900">
                        Full Rim Square Branded Latest and Stylish Sunglasses
                      </h4>
                      <p className="text-lg font-bold text-red-600 mt-2">$18</p>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-4">
                      <img
                        src="/api/placeholder/80/80"
                        alt="Pink Rim Sunglasses"
                        className="w-20 h-20 object-contain mb-4"
                      />
                      <h4 className="font-semibold text-gray-900">
                        Pink Full Rim Cat Eye Vincent Chase Polarized
                      </h4>
                      <p className="text-lg font-bold text-red-600 mt-2">$14</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("Products")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="px-3 py-2 flex items-center font-semibold text-xl text-gray-800 hover:text-red-600"
              >
                Products
                <ChevronDown size={18} className="ml-1" />
              </a>

              {activeDropdown === "Products" && (
                <div className="absolute -left-[60vw] mt-6 z-10 border-t-2 w-[110vw] px-[10vw]  bg-white shadow-xl animate-fade-slide">
                  <div className="  ">
                    <Products1 />
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("Deals")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="px-3 py-2 flex items-center font-semibold text-xl text-gray-800 hover:text-red-600"
              >
                Top Deals
                <ChevronDown size={18} className="ml-1" />
              </a>
              {activeDropdown === "Deals" && (
                <div className="absolute -left-[70vw] mt-6 z-10 border-t-2 w-[110vw] px-[10vw] py-[3vw] bg-white shadow-xl flex flex-row justify-between gap-10 animate-fade-slide">
                  {/* Watches Section */}
                  <div className="space-y-4 flex flex-1 flex-col w-[20vw]">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Watches
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Smart Watches
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Rolex Watches
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Omega Watches
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Cartier Watches
                        </a>
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 mt-8">
                      Television
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Panasonic TV
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Samsung TV
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Sony TV
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Hisense TV
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Speakers & Electronics Section */}
                  <div className="space-y-4 flex flex-1 flex-col w-[20vw]">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Speakers
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Yamaha Speakers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Sonos Speakers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          RCF Speakers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Party Speakers
                        </a>
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 mt-8">
                      Electronics
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Appliances
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Watches
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Laptops
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Laptops & Gaming Section */}
                  <div className="space-y-4 flex flex-1 flex-col w-[20vw]">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Laptops
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Apple Laptops
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Dell Laptops
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          HP Laptops
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Lenovo Laptops
                        </a>
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 mt-8">
                      Gaming
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Headphones
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Gaming Boards
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Gaming Mice
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Video Games
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Featured Products Section */}
                  <div className="col-span-1  w-[50vw] grid grid-cols-2 space-y-4 gap-4">
                    <div className="bg-gray-100 rounded-lg p-4">
                      <img
                        src="/api/placeholder/80/80"
                        alt="Vybrix Power Bank"
                        className="w-20 h-20 object-contain mb-4"
                      />
                      <h4 className="font-semibold text-gray-900">
                        Vybrix Magnetic Power Bank Wireless Charging
                      </h4>
                      <p className="text-lg font-bold text-gray-900 mt-2">
                        $32.00
                      </p>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-4">
                      <img
                        src="/api/placeholder/80/80"
                        alt="LG Refrigerator"
                        className="w-20 h-20 object-contain mb-4"
                      />
                      <h4 className="font-semibold text-gray-900">
                        LG 674 litres Side by Side Refrigerator
                      </h4>
                      <div className="flex items-center mt-2">
                        <p className="text-lg font-bold text-gray-900">
                          $60.00
                        </p>
                        <p className="text-sm text-gray-500 line-through ml-2">
                          $68.00
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <img
                        src="/api/placeholder/80/80"
                        alt="Vybrix Power Bank"
                        className="w-20 h-20 object-contain mb-4"
                      />
                      <h4 className="font-semibold text-gray-900">
                        Vybrix Magnetic Power Bank Wireless Charging
                      </h4>
                      <p className="text-lg font-bold text-gray-900 mt-2">
                        $32.00
                      </p>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-4">
                      <img
                        src="/api/placeholder/80/80"
                        alt="LG Refrigerator"
                        className="w-20 h-20 object-contain mb-4"
                      />
                      <h4 className="font-semibold text-gray-900">
                        LG 674 litres Side by Side Refrigerator
                      </h4>
                      <div className="flex items-center mt-2">
                        <p className="text-lg font-bold text-gray-900">
                          $60.00
                        </p>
                        <p className="text-sm text-gray-500 line-through ml-2">
                          $68.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("Elements")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="px-3 py-2 flex items-center font-semibold text-xl text-gray-800 hover:text-red-600"
              >
                Elements <ChevronDown size={18} className="ml-1" />
              </a>
              {activeDropdown === "Elements" && (
                <div className="absolute left-0 z-10 border-t-2 w-[15vw] p-[2vw] mt-2 rounded-sm bg-white shadow-xl flex animate-fade-slide">
                  <div>
                    <ul className="space-y-3 text-gray-800 text-lg">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Accordion
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Icon Box
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          FAQs <span className="text-pink-500">ASK</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Gallery
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Tabs <span className="text-green-500">NEW</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
