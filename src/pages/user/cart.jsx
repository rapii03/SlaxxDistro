/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import DeleteIcon from "../../Components/user/DeleteIcon";
import Navbar2 from "../../Components/user/Navbar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from localStorage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleRemoveItem = (productId) => {
    // Remove the selected product from the cart
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    updateCart(updatedCart);
  };

  const handleClearCart = () => {
    // Clear cart items from localStorage and state
    localStorage.removeItem("cartItems");
    setCartItems([]);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    // Update the quantity of the selected product in the cart
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    updateCart(updatedCart);
  };

  const handleIncrement = (productId) => {
    // Increment the quantity of the selected product in the cart
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
  };

  const handleDecrement = (productId) => {
    // Decrement the quantity of the selected product in the cart, with a minimum of 1
    const updatedCart = cartItems.map((item) =>
      item.id === productId
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    );
    updateCart(updatedCart);
  };

  const updateCart = (updatedCart) => {
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  // Calculate total items and total price
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  // checkout
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const handleCheckout = () => {
    // Perform any additional checkout logic here
    // For now, log the cart items to the console
    console.log("Checkout successful:", cartItems);

    // Open the checkout modal
    setIsCheckoutModalOpen(true);

    // Clear the cart after successful checkout (you can modify this based on your logic)
    localStorage.removeItem("cartItems");
    setCartItems([]);
  };

  const closeCheckoutModal = () => {
    // Close the checkout modal
    setIsCheckoutModalOpen(false);
  };

  return (
    <div className="bg-[#FBFBFB]">
      <Navbar2 />
      <div className="cart container  mx-auto pt-[90px]">
        <div className="head p-2 lg:p-0">
          <div className="heading text-[18px]  pb-5 font-semibold">My Cart</div>
          <div className="heading h-[2px] rounded bg-gray-300"></div>
        </div>
        <div className="qt lg:pt-5 lg:pb-5 p-2">
          You have {totalItems} item in your cart
        </div>
        <div className="cartProduk p-2 lg:p-0 flex  lg:flex-row flex-col h-full gap-5">
          <div className="left wrap-cart flex h-[400px] overflow-y-auto flex-col gap-3 w-full lg:w-[60%] p-4 rounded-[20px] border border-primary">
            {/* LEFT cart PRODUCT */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="Cart flex justify-between bg-white p-2 rounded-md shadow-lg"
              >
                <div className="left flex gap-5 items-center">
                  <div className="img rounded-md overflow-hidden w-[50px] h-[42px] lg:w-[70px] lg:h-[62px]">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="detail">
                    <div className="k text-[12px] lg:text-[18px] font-medium">
                      {item.name}
                    </div>
                    <div className="text-[10px] lg:text-[14px]">
                      Rp. {item.price.toLocaleString("id-ID")}
                    </div>
                  </div>
                </div>
                <div className="right flex gap-9 items-center">
                  <div className="quantity">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          item.id,
                          parseInt(e.target.value, 10)
                        )
                      }
                      className="w-10 lg:w-16 p-1 text-center rounded focus:ring-primary focus:border-primary border-primary  text-[12px] lg:text-[16px]"
                    />
                  </div>

                  <div className="price w-[80px] lg:w-[120px] text-[12px]  lg:text-[16px] flex justify-end">
                    Rp. {item.quantity * item.price}
                  </div>
                  <div
                    onClick={() => handleRemoveItem(item.id)}
                    className="delete cursor-pointer"
                  >
                    <DeleteIcon />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* RIGHT CART TOTAL */}
          <div className="right flex flex-col justify-between bg-white p-4 rounded-[20px] border border-primary w-full lg:w-[40%]">
            <div className="text-center font-bold">Cart Total</div>
            <div className="detail">
              <div className="wrap mt-2">
                <div className="flex justify-between items-center">
                  <div className="text font-semibold text-[16px]">
                    Subtotal :
                  </div>
                  <div className="price">
                    Rp. {totalPrice.toLocaleString("id-ID")}
                  </div>
                </div>
                <div className="mt-2 h-[1px] rounded bg-gray-300"></div>
              </div>
              <div className="wrap mt-2">
                <div className="flex justify-between items-center">
                  <div className="text font-semibold text-[16px]">
                    Shipping :
                  </div>
                  <div className="price">Free</div>
                </div>
                <div className="mt-2 h-[1px] rounded bg-gray-300"></div>
              </div>
              <div className="wrap mt-2">
                <div className="flex flex-col">
                  <div className="text font-semibold text-[16px]">Name :</div>
                  <div className="name">Alexander</div>
                </div>
                <div className="mt-2 h-[1px] rounded bg-gray-300"></div>
              </div>
              <div className="wrap mt-2">
                <div className="flex flex-col">
                  <div className="text font-semibold text-[16px]">
                    Address :
                  </div>
                  <div className="address">
                    Jl. Perjuangan, Bandar Lampung, Lampung
                  </div>
                </div>
                <div className="mt-2 h-[1px] rounded bg-gray-300"></div>
              </div>
              <div className="wrap mt-2">
                <div className="flex justify-between items-center">
                  <div className="text font-semibold text-[16px]">Total :</div>
                  <div className="price">
                    Rp. {totalPrice.toLocaleString("id-ID")}
                  </div>
                </div>
              </div>
            </div>
            <div className="wrap mt-5">
              <div className="flex justify-center">
                <button
                  onClick={handleCheckout}
                  className="w-full bg-primary text-white p-2 px-4 rounded hover:bg-[#1B471F]"
                >
                  Procees to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Checkout Modal */}
      {isCheckoutModalOpen && (
        <div className="overlay h-screen w-full fixed bg-modal flex justify-center items-center top-0 left-0 z-50 p-2 lg:p-0 overflow-hidden">
          <div className="modal flex flex-col gap-4 bg-white p-5 rounded-[20px] border-2 border-primary">
            <div className="ic flex justify-center">
              <svg
                width="130"
                height="98"
                viewBox="0 0 130 98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 49L18.125 33.375L49.375 64.625L111.875 2.125L127.5 17.75L49.375 95.875L2.5 49Z"
                  stroke="#739072"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-center  text-[14px]">
              The purchase has been successfully made, <br /> then the delivery
              process will go through
            </p>
            <div className="btn flex justify-center">
              <button
                className="rounded bg-primary px-4 text-white hover:bg-[#1B471F] p-2"
                onClick={closeCheckoutModal}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
