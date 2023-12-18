import { useState, useEffect } from "react";
/* eslint-disable react/no-unescaped-entities */
import Footer2 from "../../Components/user/Footer";
import Navbar2 from "../../Components/user/Navbar";
import { Toast } from "flowbite-react";
import { HiCheck} from "react-icons/hi";

const products = [
  {
    id: "1",
    name: "Celana Jeans",
    price: 175000,
    stock: "36",
    image: "/Images/product1.png",
  },
  {
    id: "2",
    name: "Celana Jeans",
    price: 175000,
    stock: "36",
    image: "/Images/product1.png",
  },
  {
    id: "3",
    name: "Celana Jeans",
    price: 175000,
    stock: "36",
    image: "/Images/product1.png",
  },
  {
    id: "4",
    name: "Celana Jeans",
    price: 175000,
    stock: "36",
    image: "/Images/product1.png",
  },
  {
    id: "5",
    name: "Celana Jeans",
    price: 175000,
    stock: "36",
    image: "/Images/product1.png",
  },
  {
    id: "6",
    name: "Celana Jeans",
    price: 175000,
    stock: "36",
    image: "/Images/product1.png",
  },
  {
    id: "7",
    name: "Celana Jeans",
    price: 175000,
    stock: "36",
    image: "/Images/product1.png",
  },
  {
    id: "8",
    name: "Celana Jeans",
    price: 175000,
    stock: "36",
    image: "/Images/product1.png",
  },
  {
    id: "9",
    name: "Celana Jeans",
    price: 175000,
    stock: "36",
    image: "/Images/product1.png",
  },
  {
    id: "10",
    name: "Celana Jeans",
    price: 175000,
    stock: "36",
    image: "/Images/product1.png",
  },
];

const Home = () => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timeoutId = setTimeout(() => {
        setShowToast(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showToast]);
  const handleProduk = (event, product) => {
    event.preventDefault();

    // Get existing cart items from localStorage or initialize an empty array
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the product is already in the cart
    const existingProductIndex = existingCartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Increment the quantity of the existing product in the cart
      existingCartItems[existingProductIndex].quantity += 1;
    } else {
      // Add the selected product to the cart with quantity 1
      existingCartItems.push({ ...product, quantity: 1 });
    }

    // Save the updated cart to localStorage
    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));

    // Show the toast
    setShowToast(true);
  };

  return (
    <div className="scroll-smooth">
      <Navbar2 />
      {/* home */}
      <div className="home w-full h-screen bg-secondary ">
        <div className="wrap-hom  mx-auto container h-full items-center flex ">
          <div className="left  md:w-1/2 w-full md:p-0 px-3">
            <div className="wrap flex flex-col gap-3">
              <div className="head text-[73px] font-bold leading-[80px]">
                LET'S <br />
                EXPLORE <br />{" "}
                <span className="text-white pr-6 bg-primary">UNIQUE</span>{" "}
                <br /> CLOTHES.
              </div>
              <div className="subhead text-[26px]">
                Discover Now latest collection
              </div>
              <div className="btn">
                <a href="#arrival" className="bg-primary inline-block py-2 px-4 rounded text-[20px] text-white">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block right md:w-1/2 w-full bg-red-500">
            <img
              src="/Images/home.png"
              alt="banner home"
              className="absolute bottom-0"
            />
          </div>
        </div>
      </div>
      {/* home */}

      {/* product */}
      <div className="wrap-product bg-[#FBFBFB]">
        <div className="banner container mx-auto flex flex-wrap gap-2 justify-evenly py-11">
          <img src="/Images/banner1.png" alt="banner" />
          <img src="/Images/banner2.png" alt="banner" />
          <img src="/Images/banner3.png" alt="banner" />
        </div>
        {/* product card */}
        <div id="arrival" className="card container mx-auto px-2 lg:px-0 ">
          <div className="heading text-[45px] font-bold text-center pb-10 pt-5">
            New Arrival
          </div>
          <div className="wrap-card gap-5 grid grid-cols-10">
            {products.map((product) => (
              <form
                key={product.id} onSubmit={(event) => handleProduk(event, product)}
                className="card bg-white flex flex-col gap-2 col-span-5 lg:col-span-2 rounded-[5px] overflow-hidden p-3 shadow-lg"
              >
                <div className="img h-[150px]  rounded-[3px] overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={product.image}
                    alt=""
                  />
                </div>
                <div className="teks flex flex-col gap-2">
                  <div className="text-[14px] font-bold">{product.name}</div>
                  <div className="flex text-[12px] justify-between font-semibold">
                    <div className="price text-primary">
                      Rp. {product.price.toLocaleString("id-ID")}
                    </div>
                    <div className="stok">{product.stock} Pcs</div>
                  </div>
                  <button type="submit" className="btn w-full p-2 bg-primary rounded text-[11px] text-white font-semibold text-center hover:bg-[#1B471F]">
                    Add to Cart
                  </button>
                </div>
              </form>
            ))}
          </div>
          <div className="btn  w-full flex justify-center mt-10">
            <a href="/all-product" className="bg-primary hover:bg-[#1B471F] py-2 px-4 rounded text-[14px] text-white">
              View More
            </a>
          </div>
        </div>
      </div>
      {/* product */}
      {/* footer */}
      <div className="">
        <Footer2 />
      </div>
      {/* footer */}
      <div className="toast fixed right-0 top-[80%]">
        {showToast && (
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <HiCheck className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">Product added to cart</div>
            <Toast.Toggle />
          </Toast>
        )}
      </div>
    </div>
  );
};

export default Home;
