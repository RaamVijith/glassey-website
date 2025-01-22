import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiPiapro } from 'react-icons/si';
import { PiGoogleLogoBold } from 'react-icons/pi';
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#223340] text-gray-300 py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-[7vh]">
          {/* Contact Us Section */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-10">Our Information</h3>
            <div className="space-y-5 text-white text-xl">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>99 New Theme St. XY, USA 12345, Beside the Sun point land.</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <p>+00 123-456-789</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <p>demo@example.com</p>
              </div>
              <div className='flex flex-row items-center gap-2 mt-2'>
                <FaFacebookF className="text-[#223340] bg-white hover:bg-red-600 hover:text-white rounded-full p-3 h-12 w-12" />
                <FaXTwitter className="text-[#223340] bg-white hover:bg-red-600 hover:text-white rounded-full p-3 h-12 w-12" />
                <FaInstagram className="text-[#223340] bg-white hover:bg-red-600 hover:text-white rounded-full p-3 h-12 w-12" />
                <SiPiapro className="text-[#223340] bg-white hover:bg-red-600 hover:text-white rounded-full p-3 h-12 w-12" />
                <PiGoogleLogoBold className="text-[#223340] bg-white hover:bg-red-600 hover:text-white rounded-full p-3 h-12 w-12" />

              </div>
            </div>
          </div>

          {/* Info Section */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-10">Our Information</h3>
            <ul className="space-y-5 text-white  text-xl">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wholesale Policy</a></li>

            </ul>
          </div>

          {/* Policy Section */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-10">Quick Links</h3>
            <ul className="space-y-5 text-white  text-xl">
              <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms Of Use</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Locality</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-10">Our NewsLetter</h3>
            <p className="mb-4 space-y-5 text-white  text-xl">Subscribe To Our Newsletter And Latest Update.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter Your Email address"
                className="w-full px-6 py-4 text-lg bg-white text-gray-900 pr-12"
              />
            </div>
            <div className='px-6 py-4 w-[50%] mt-5 bg-red-600 text-white text-xl'>SUBSCRIBE</div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 py-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-lg font-semibold">© 2025 Glassey - Sunglasses Store - WordPress Theme by Avanam</p>


          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <img src="https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2024/08/payment.png" alt="Visa" className="h-6" />
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;