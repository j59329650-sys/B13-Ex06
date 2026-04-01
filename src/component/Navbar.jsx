import { BsCart3 } from "react-icons/bs"; // npm install react-icons

const Navbar = ({ cartCount }) => {
  return (
    <nav className="flex justify-between items-center py-5 sticky top-0 bg-white/80 backdrop-blur-md z-50">
      {/* বাম পাশে লোগো */}
      <div className="text-2xl font-black text-purple-700">
        Digi<span className="text-black">Tools</span>
      </div>

      {/* মাঝখানে মেনু (ডেস্কটপের জন্য) */}
      <ul className="hidden md:flex gap-8 font-medium text-gray-600">
        <li className="hover:text-purple-600 cursor-pointer">Products</li>
        <li className="hover:text-purple-600 cursor-pointer">Features</li>
        <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
        <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
        <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
      </ul>

      {/* ডান পাশে কার্ট আইকন ও প্রোফাইল */}
      <div className="flex items-center gap-5">
        <div className="relative cursor-pointer">
          {/* কার্ট আইকন */}
          <BsCart3 className="text-2xl" />
          
          {/* কার্ট কাউন্ট ব্যাজ (Badge) */}
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
              {cartCount}
            </span>
          )}
        </div>
        
        {/* একটি কল-টু-অ্যাকশন বাটন */}
        <button className=" font-bold text-gray-700 hover:text-purple-600 transition">
          Login
        </button>
        <button className="hidden sm:block bg-black text-white px-5 py-2 rounded-lg font-medium hover:bg-purple-700 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;