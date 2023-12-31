import { useState, useEffect } from "react";
import Footer2 from "../../Components/user/Footer";
import Navbar2 from "../../Components/user/Navbar";
import Search from "../../Components/user/Search";
import { Toast } from "flowbite-react";
import { HiCheck} from "react-icons/hi";

const products = [
  {
    id: "1",
    name: "Celana",
    price: 175000,
    stock: "36",
    image: "/Images/product1.png",
  },
  {
    id: "2",
    name: "Kaos",
    price: 175000,
    stock: "36",
    image: "/Images/product1.png",
  },
  {
    id: "3",
    name: "Topi",
    price: 175000,
    stock: "36",
    image: "/Images/product1.png",
  },
  {
    id: "4",
    name: "Sepatu",
    price: 175000,
    stock: "36",
    image: "/Images/product1.png",
  },
];

const AllProduct = () => {
  const [searchQuery, setSearchQuery] = useState("");
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

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
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

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Navbar2 />
      {/* product */}
      <div className="wrap-product bg-[#FBFBFB] pt-[60px]">
        {/* product card */}
        <div className="card container mx-auto px-2 lg:px-0 ">
          <div className="heading text-[45px] font-bold text-center pb-10 pt-5">
            New Arrival
          </div>
          <div className="search flex justify-end mb-4">
            <div className=" w-full lg:w-[400px]">
              <Search onSearchChange={handleSearchChange} />
            </div>
          </div>
          <div className="wrap-card gap-5 grid grid-cols-10  h-[800px] overflow-y-auto">
            {filteredProducts.map((product) => (
              <form
                key={product.id}
                onSubmit={(event) => handleProduk(event, product)}
                className="card bg-white flex flex-col gap-2 col-span-5 lg:col-span-2 h-[260px] rounded-[5px] overflow-hidden p-3 shadow-lg"
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
                  <button
                    type="submit"
                    className="btn w-full p-2 bg-primary rounded text-[11px] text-white font-semibold text-center hover:bg-[#1B471F]"
                  >
                    Add to Cart
                  </button>
                </div>
              </form>
            ))}
          </div>
        </div>
      </div>
      {/* product */}
      <Footer2 />
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

export default AllProduct;
