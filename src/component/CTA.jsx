import React from 'react';

const CTA = () => {
  return (
    <section className="bg-[#8B5CF6] py-20 px-6 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-purple-100 mb-10 text-lg opacity-90">
          Join thousands of professionals using DigiTools to simplify their daily tasks 
          and boost productivity.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-purple-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
            Explore Products
          </button>
          <button className="border border-white/40 bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full font-bold hover:bg-white/20 transition">
            View Pricing
          </button>
        </div>
        <p>14-day free trial • No credit card required • Cancel anytime</p>
          
      </div>
    </section>
  );
};

export default CTA;