import React from "react";

interface Dish {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface CartProps {
  cart: { [key: number]: number };
  setCart: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
  menuItems: Dish[];
}

export const CheckoutPage: React.FC<CartProps> = ({ cart, setCart, menuItems }) => {
  const increaseQuantity = (id: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  const decreaseQuantity = (id: number) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[id] > 1) {
        updatedCart[id] -= 1;
      } else {
        delete updatedCart[id];
      }
      return updatedCart;
    });
  };

  const getTotalPrice = () => {
    return menuItems.reduce((total, item) => {
      return total + (cart[item.id] ? item.price * cart[item.id] : 0);
    }, 0);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="bg-white w-full max-w-2xl p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold text-center">CHECKOUT PAGE</h2>

        <div className="mt-6 bg-gray-100 p-4 rounded-md">
          {Object.keys(cart).length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            menuItems
              .filter((item) => cart[item.id])
              .map((item) => (
                <div key={item.id} className="flex justify-between items-center py-2 border-b last:border-none">
                  <p className="text-lg">{item.name}</p>
                  <div className="flex items-center space-x-3">
                    <button onClick={() => increaseQuantity(item.id)} className="text-lg font-bold text-gray-700">➕</button>
                    <input type="text" value={cart[item.id]} readOnly className="w-10 h-8 text-center border rounded-md bg-white" />
                    <button onClick={() => decreaseQuantity(item.id)} className="text-lg font-bold text-red-500">❌</button>
                  </div>
                </div>
              ))
          )}
        </div>

        {Object.keys(cart).length > 0 && (
          <div className="mt-4 text-right">
            <h3 className="text-lg font-semibold">Total: ₹{getTotalPrice()}</h3>
            <button className="mt-3 px-6 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600">
              Proceed to Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
