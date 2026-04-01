

const StepsSection = () => {
 const steps = [
  {
    id: 1,
    number: "01",
    title: "Create Account",
    description: "Sign up for free in seconds.",
    icon: "/assets/products/user.png"
  },
  {
    id: 2,
    number: "02",
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
    icon: "/assets/products/package.png"
  },
  {
    id: 3,
    number: "03",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    icon: "/assets/products/rocket.png"
  }
];

 return (
  <section className="bg-gray-50 py-20 px-4 rounded-3xl my-10">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Get Started In 3 Steps</h2>
      <p className="text-gray-500 mb-12">Start using premium digital tools in minutes.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="relative p-8 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
            
            {/* স্টেপ নাম্বার সার্কেল */}
            <div className="absolute -top-4 right-6 bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">
              {step.number}
            </div>

            {/* ইমেজ কন্টেইনার */}
            <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
             <img 
             src={step.icon} alt={step.title} 
             className="w-10 h-10 object-contain" 
/>
            </div>
  
  
  

            {/* টাইটেল এবং ডেসক্রিপশন */}
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

export default StepsSection;