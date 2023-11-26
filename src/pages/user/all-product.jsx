import Footer2 from "../../Components/user/Footer";
import Navbar2 from "../../Components/user/Navbar";
import Search from "../../Components/user/Search";

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
  {
    id: "10",
    name: "Celana Jeans",
    price: 175000,
    stock: "36",
    image: "/Images/product1.png",
  },
];

const AllProduct = () => {
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
              <Search />
            </div>
          </div>
          <div className="wrap-card gap-5 grid grid-cols-10  h-[800px] overflow-y-auto">
            {products.map((product) => (
              <form
                key={product.id} onSubmit={(event) => handleProduk(event, product)}
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
                  <button type="submit" className="btn w-full p-2 bg-primary rounded text-[11px] text-white font-semibold text-center hover:bg-[#1B471F]">
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
    </div>
  );
};

export default AllProduct;
