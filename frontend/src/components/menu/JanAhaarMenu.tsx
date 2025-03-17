import React, { useState } from "react";
import CheckoutPage from "./Check-out";

interface Dish {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const menuItems: Dish[] = [
  { id: 1, name: "Aloo Pyaz Amritsari Kulcha", price: 55, description: "Served with Amritsari Naram Choley, Imli Pyaz Ki Chutney", image: "/kulcha.jpg" },
  { id: 2, name: "Rajma Chawal", price: 60, description: "Red kidney beans in onion tomato masala & spices.", image: "/rajma.jpg" },
  { id: 3, name: "Ahaar Thali", price: 70, description: "Dal Makhani + Kadai Paneer + 4 Roti + Jeera Rice + Dahi + Papad", image: "/thali.jpg" },
  { id: 4, name: "Chole Bhature", price: 50, description: "Medium Spicy | Comes with Onions, Pickles, Green chilies & Mint chutney", image: "/chole.jpg" },
];

export const JanAhaarMenu: React.FC = () => {
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const addToCart = (id: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((acc, curr) => acc + curr, 0);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center">
      <div className="bg-white w-full max-w-4xl p-6 rounded-md shadow-md">

        <div className="flex justify-between items-center">
          <img src="/logo.png" alt="Track Ahaar Logo" className="h-12" />
          <div className="relative w-1/2">
            <input type="text" placeholder="Search Dosa/Chole Bhature/..." className="w-full px-4 py-2 border rounded-md" />
            <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
          </div>
        </div>

        <h2 className="mt-6 text-xl font-semibold text-orange-600 italic">Jan Ahaar Menu</h2>

        <div className="flex justify-end">
          <div className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">
            Cart: {getTotalItems()} items
          </div>
        </div>

        <div className="mt-4 space-y-6">
          {menuItems.map((dish) => (
            <div key={dish.id} className="flex justify-between items-center border-b pb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{dish.name}</h3>
                <p className="text-gray-700">₹{dish.price}</p>
                <p className="text-sm text-gray-600">{dish.description}</p>
              </div>

              <img src={dish.image} alt={dish.name} className="w-16 h-16 rounded-md object-cover" />

              <button onClick={() => addToCart(dish.id)} className="ml-4 bg-green-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600 transition">
                ADD
              </button>
            </div>
          ))}
        </div>
      </div>

      <CheckoutPage cart={cart} setCart={setCart} menuItems={menuItems} />
    </div>
  );
};
