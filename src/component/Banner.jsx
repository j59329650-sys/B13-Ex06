import bannerImage from '../assets/banner.png';

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 gap-10">
      {/* বাম পাশের টেক্সট কন্টেন্ট */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full border border-purple-100">
          <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
          <p className="text-xs font-bold uppercase tracking-wider">New: AI-Powered Tools Available</p>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black leading-tight">
          Supercharge Your <br /> 
          <span className="text-purple-600">Digital Workflow</span>
        </h1>
        
        <p className="text-gray-500 text-lg max-w-lg">
          Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition">
            Explore Products
          </button>
          <button className="flex items-center gap-2 border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition">
            <span className="text-purple-600 text-xl">▶</span> Watch Demo
          </button>
        </div>
      </div>

      {/* ডান পাশের ইমেজ */}
      <div className="w-full h-auto max-w-lg mx-auto">
      <img src={bannerImage} alt="" />

      </div>



       
    </section>
  );
};

export default Banner;