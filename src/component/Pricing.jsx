import { useState } from 'react';

const Pricing = () => {
  // ডিফল্টভাবে 'Pro' কার্ডটি সিলেক্ট করা থাকবে
  const [selectedPlan, setSelectedPlan] = useState('Pro');

  const plans = [
    { name: 'Starter', price: '0', features: ['Access to free tools', 'Basic Support', 'Community Access'] },
    { name: 'Pro', price: '29', features: ['Everything in Starter', 'Advanced Analytics', 'Priority Support', 'Custom Templates'] },
    { name: 'Enterprise', price: '99', features: ['Everything in Pro', 'Dedicated Support', 'Custom Integrations'] }
  ];

  return (
    <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Choose the best plan that fits your business needs and start growing today.
        </p>
      </div>



      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {plans.map((plan) => (
          <div
            key={plan.name}
            onClick={() => setSelectedPlan(plan.name)} // ক্লিক করলে স্টেট আপডেট হবে
            className={`cursor-pointer transition-all duration-300 rounded-2xl p-8 shadow-md border-2 
              ${selectedPlan === plan.name 
                ? 'bg-[#8B5CF6] text-white border-[#8B5CF6] scale-105 shadow-xl' // সিলেক্ট করা থাকলে বেগুনি
                : 'bg-white text-gray-900 border-gray-100 hover:border-purple-200' // না থাকলে সাদা
              }`}
          >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className={`${selectedPlan === plan.name ? 'text-purple-100' : 'text-gray-500'} ml-1`}>/Month</span>
            </div>
            
            <ul className="space-y-4 mb-8 text-sm">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span>✅</span> {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 rounded-lg font-bold transition 
              ${selectedPlan === plan.name 
                ? 'bg-white text-purple-700 hover:bg-gray-100' 
                : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
              }`}>
              {plan.name === 'Pro' ? 'Start Pro Trial' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;