import Navbar from "./component/Navbar";
import Banner from "./component/Banner"
import Stats from "./component/Stats"
import { useState, useEffect } from "react";
import ProductCard from "./component/ProductCard";
import Cart from "./component/Cart";
import StepsSection from "./component/StepsSection";
import Pricing from "./component/Pricing";
import CTA from "./component/CTA";
import Footer from "./component/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [activeTab, setActiveTab] = useState("products"); 
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

 // ১. কার্টে আইটেম যোগ করা
const handleAddToCart = (product) => {
    const isExist = cartItems.find((item) => item.id === product.id);
    if (!isExist) {
        setCartItems([...cartItems, product]);
        // alert এর বদলে toast
        toast.success("Product added to cart!");
    } else {
        // alert এর বদলে toast.error বা toast.warn
        toast.error("Already in cart!");
    }
};

// ২. কার্ট থেকে রিমুভ করা
const handleRemoveFromCart = (id) => {
    const remainingItems = cartItems.filter((item) => item.id !== id);
    setCartItems(remainingItems);
    // রিমুভ করার পর টোস্ট মেসেজ
    toast.warn("Product removed from cart!");
};


const handleCheckout = () => {
    setCartItems([]); 
    toast.success("Proceed to checkout successful!");
};
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Stats />
     

      {/* ট্যাব বাটন */}
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
        <p className="text-gray-500 mt-2">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
      </div>
      </div>
      <div className="flex justify-center gap-4 my-8">
        
        <button 
          onClick={() => setActiveTab("products")}
          className={`px-8 py-2 rounded-full font-bold ${activeTab === "products" ? "bg-purple-600 text-white" : "border"}`}
        >
          Products
        </button>
        <button 
          onClick={() => setActiveTab("cart")}
          className={`px-8 py-2 rounded-full font-bold ${activeTab === "cart" ? "bg-purple-600 text-white" : "border"}`}
        >
          Cart ({cartItems.length})
        </button>
      </div>

      {/* কন্ডিশনাল রেন্ডারিং */}
      {activeTab === "products" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid gap-8 p-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      ) : (
        <Cart
          cartItems={cartItems}
          handleRemoveFromCart={handleRemoveFromCart}
          handleCheckout={handleCheckout}
        />
      )}
      
       <StepsSection></StepsSection>
       <Pricing></Pricing>
       <CTA></CTA>
       <Footer></Footer>
       <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}
export default App;
