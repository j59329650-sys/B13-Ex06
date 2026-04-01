const Cart = ({ cartItems, handleRemoveFromCart, handleCheckout }) => {
  return (
    <div className="my-10 p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Selected Tools</h2>
      
      {/* যদি কার্ট খালি থাকে */}
      {cartItems.length === 0 ? (
        <p className="text-gray-400 text-center py-10">Your cart is currently empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center p-4 border-b border-gray-50">
              <div className="flex items-center gap-4">
                <img src={item.icon} alt={item.name} className="w-10 h-10 object-contain" />
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
              </div>
              <button 
                onClick={() => handleRemoveFromCart(item.id)}
                className="text-red-500 hover:text-red-700 text-sm font-medium"
              >
                Remove
              </button>
            </div>
          ))}
          
          <div className="mt-8 flex flex-col items-center">
            <button 
              onClick={handleCheckout}
              className="bg-purple-600 text-white px-10 py-3 rounded-xl font-bold hover:bg-purple-700 transition w-full md:w-auto"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;