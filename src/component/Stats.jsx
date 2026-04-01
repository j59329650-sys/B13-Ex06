const Stats = () => {
  return (
    <div className="bg-purple-600 rounded-3xl p-8 md:p-12 my-10 shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center">
        
        {/* প্রথম স্ট্যাট: Active Users */}
        <div className="border-b md:border-b-0 md:border-r border-purple-400 pb-6 md:pb-0">
          <h2 className="text-4xl md:text-5xl font-black text-white">50K+</h2>
          <p className="text-purple-100 font-medium uppercase tracking-widest text-sm mt-2">
            Active Users
          </p>
        </div>

        {/* দ্বিতীয় স্ট্যাট: Premium Tools */}
        <div className="border-b md:border-b-0 md:border-r border-purple-400 pb-6 md:pb-0">
          <h2 className="text-4xl md:text-5xl font-black text-white">200+</h2>
          <p className="text-purple-100 font-medium uppercase tracking-widest text-sm mt-2">
            Premium Tools
          </p>
        </div>

        {/* তৃতীয় স্ট্যাট: Rating */}
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white">4.9</h2>
          <p className="text-purple-100 font-medium uppercase tracking-widest text-sm mt-2">
            Average Rating
          </p>
        </div>

      </div>
    </div>
  );
};

export default Stats;