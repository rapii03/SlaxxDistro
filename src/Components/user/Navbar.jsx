"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setIsLoading(false);
  }, [isLoading])

  function handleLogout () {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/home");
  }

  return (
    <div className="z-40 bg-primary fixed w-full">
      <Navbar className="text-white bg-primary container mx-auto" fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Slaxx Distro
          </span>
        </Navbar.Brand>
        {/* login profile */}
        <div className="flex md:order-2">
          {/* sudah login */}
          {!isLoading && user && (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user.name}</span>
              </Dropdown.Header>
              <Dropdown.Item>
                <a className="w-full" href="/profile">Profile</a>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <button onClick={handleLogout}>Sign out</button>
              </Dropdown.Item>
            </Dropdown>
          )}
          {/* btn login */}
          {!isLoading && !user && (
            <a href="/login" className="p-2 px-6 hover:bg-gray-300 hover:text-white rounded bg-white text-primary">Login</a>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            className={`md:text-white text-white md:hover:text-secondary hover:text-srBlack hover:bg-secondary ${
              location.pathname === "/home" ? "font-bold" : ""
            }`}
            href="/home"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            className={`md:text-white text-white md:hover:text-secondary hover:text-srBlack hover:bg-secondary ${
              location.pathname === "/all-product" ? "font-bold" : ""
            }`}
            href="/all-product"
          >
            All Product
          </Navbar.Link>
          <Navbar.Link
            className={`md:text-white text-white md:hover:text-secondary hover:text-srBlack hover:bg-secondary ${
              location.pathname === "/cart" ? "font-bold" : ""
            }`}
            href="/cart"
          >
            Cart
          </Navbar.Link>
          <Navbar.Link
            className={`md:text-white text-white md:hover:text-secondary hover:text-srBlack hover:bg-secondary ${
              location.pathname === "/shipping" ? "font-bold" : ""
            }`}
            href="/shipping"
          >
            Shipping
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbar2;
