const ProductCard = ({ product, handleAddToCart }) => {
    const { product_name, image, price, description, badge, features } = product;

    return (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col relative transition-all hover:shadow-md">
            
            
            {badge && (
                <div className="absolute top-4 right-4 bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">
                    {badge}
                </div>
            )}

            {/* Product Image */}
            <div className="">
                <img 
                    src={image} 
                    alt={product_name} 
                    className="max-h-full object-contain"
                />
            </div>

            {/* Title & Description */}
            <h2 className="text-xl font-bold text-gray-800 mb-2">{product_name}</h2>
            <p className="text-gray-500 text-sm mb-4 flex-grow">
                {description}
            </p>

            {/* Price */}
            <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">${price}</span>
                <span className="text-gray-400 text-sm font-medium">/mo</span>
            </div>

            {/* Features List */}
            <ul className="space-y-2 mb-6">
                {features && features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Buy Now Button */}
            <button 
                onClick={() => handleAddToCart(product)}
                className="w-full bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold py-3 rounded-xl transition-colors"
            >
                Buy Now
            </button>
        </div>
    );
};

export default ProductCard;