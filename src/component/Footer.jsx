import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-[#020617] text-gray-400 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        
        {/* DigiTools Logo & Info */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-4">DigiTools</h2>
          <p className="max-w-xs leading-relaxed text-sm">
            Premium digital tools for creators, professionals, and businesses. 
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-white font-semibold mb-6">Product</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">Features</li>
            <li className="hover:text-white cursor-pointer transition">Pricing</li>
            <li className="hover:text-white cursor-pointer transition">Templates</li>
            <li className="hover:text-white cursor-pointer transition">Integrations</li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-6">Company</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">About</li>
            <li className="hover:text-white cursor-pointer transition">Blog</li>
            <li className="hover:text-white cursor-pointer transition">Careers</li>
            <li className="hover:text-white cursor-pointer transition">Press</li>
          </ul>
        </div>

        {/* Resources & Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-6">Resources</h3>
          <ul className="space-y-3 text-sm mb-8">
            <li className="hover:text-white cursor-pointer transition">Documentation</li>
            <li className="hover:text-white cursor-pointer transition">Help Center</li>
            <li className="hover:text-white cursor-pointer transition">Community</li>
          </ul>
          
          <h3 className="text-white font-semibold mb-4 text-sm">Social Links</h3>
          <div className="flex gap-3">
             {/* Circular Icons */}
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer text-xs">YT</div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer text-xs">FB</div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer text-xs">X</div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© 2026 DigiTools. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;