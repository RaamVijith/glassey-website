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
            <img className="h-12 w-auto pr-20" src="https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/plugins/templatemela-theme-glassey/layouts/default/img/logo.svg" />

            <a
              href="#"
              className="px-3 py-2 flex font-semibold items-center text-red-600 hover:text-gray-300"
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
                className="px-3 py-2 flex items-center font-semibold hover:text-gray-300"
              >
                Shop
                <ChevronDown size={16} className="ml-1" />

              </a>
              {activeDropdown === "Shop" && (
                <div className="absolute -left-[43vw] mt-6 z-10 border-t-2 w-[95vw] px-[10vw] py-[3vw] bg-white shadow-xl grid grid-cols-4 gap-6 animate-fade-slide">
                  {/* Categories Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Appliances
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Scan Printers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Mini Cameras
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Chargers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Tablets
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Wireless Mouse
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Phones
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Apple Phones
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Ear Buds
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Android Phones
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Smart Phones
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Wired Earbuds
                        </a>
                      </li>
                    </ul>
                  </div>

                  

                  {/* Promotional Cards */}
                  <div className="col-span-2 flex flex-row gap-10 space-y-4">
                    {/* First Offer Card */}
                    <div className="bg-gray-100 rounded-lg p-4 flex items-center">
                        <img
                          src="https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2023/10/shop-banner.jpg"
                          alt="Offer Image 1"
                          className=" object-contain"
                        />
                     
                    </div>

                 
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
                className="px-3 py-2 flex items-center font-semibold hover:text-gray-300"
              >
                Categories
             
                <ChevronDown size={16} className="ml-1" />
              </a>
              {activeDropdown === "Categories" && (
                <div className="absolute -left-[50vw] mt-6 z-10 border-t-2 w-[110vw] px-[10vw] py-[3vw] bg-white shadow-xl flex flex-row justify-between gap-10 animate-fade-slide">
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
              onMouseEnter={() => handleMouseEnter("Products")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="px-3 py-2 flex items-center font-semibold hover:text-gray-300"
              >
                Products
                <ChevronDown size={16} className="ml-1" />

              </a>

              {activeDropdown === "Products" && (
                <div className="absolute -left-[60vw] mt-6 z-10 border-t-2 w-[110vw] px-[10vw] py-[3vw] bg-white shadow-xl animate-fade-slide">
                  <div className="  ">
                   <Products1/>
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
                className="px-3 py-2 flex items-center font-semibold hover:text-gray-300"
              >
                Top Deals
             
                <ChevronDown size={16} className="ml-1" />
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
                className="px-3 py-2 flex items-center font-semibold hover:text-gray-300"
              >
                Elements <ChevronDown size={16} className="ml-1" />
              </a>
              {activeDropdown === "Elements" && (
                <div className="absolute left-0 z-10 border-t-2 w-[10vw] p-[1vw] mt-2 rounded-sm bg-white shadow-xl flex animate-fade-slide">
                  <div>
                    <ul className="space-y-3 text-gray-800 text-lg">
                      <li>About</li>
                      <li>Services</li>
                      <li>Team</li>
                      <li>Contact</li>
                      <li>Compare</li>
                      <li>Services</li>
                      <li>Team</li>
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
