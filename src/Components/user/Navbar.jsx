"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";

const Navbar2 = () => {
  return (
    <div className="z-40 bg-primary fixed w-full">
      <Navbar className="text-white bg-primary container mx-auto" fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Slaxx Distro
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
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
              <span className="block text-sm">Alexander</span>
            </Dropdown.Header>
            <Dropdown.Item>
              <a className="w-full" href="/profile">Profile</a>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
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
