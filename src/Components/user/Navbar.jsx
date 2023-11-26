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
              location.pathname === "/home" ? "font-bold" : ""
            }`}
            href="#"
          >
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_45_1883)">
                <path
                  d="M9.83333 22.2345C10.4522 22.2345 11.0457 21.9887 11.4832 21.5511C11.9208 21.1135 12.1667 20.52 12.1667 19.9012C12.1667 19.2824 11.9208 18.6889 11.4832 18.2513C11.0457 17.8137 10.4522 17.5679 9.83333 17.5679C9.21449 17.5679 8.621 17.8137 8.18342 18.2513C7.74583 18.6889 7.5 19.2824 7.5 19.9012C7.5 20.52 7.74583 21.1135 8.18342 21.5511C8.621 21.9887 9.21449 22.2345 9.83333 22.2345ZM21.5 22.2345C22.1188 22.2345 22.7123 21.9887 23.1499 21.5511C23.5875 21.1135 23.8333 20.52 23.8333 19.9012C23.8333 19.2824 23.5875 18.6889 23.1499 18.2513C22.7123 17.8137 22.1188 17.5679 21.5 17.5679C20.8812 17.5679 20.2877 17.8137 19.8501 18.2513C19.4125 18.6889 19.1667 19.2824 19.1667 19.9012C19.1667 20.52 19.4125 21.1135 19.8501 21.5511C20.2877 21.9887 20.8812 22.2345 21.5 22.2345Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.2251 19.9012H18.0001V7.76787C18.0001 7.58222 17.9263 7.40417 17.7951 7.2729C17.6638 7.14162 17.4857 7.06787 17.3001 7.06787H1.66675M7.09175 19.9012H4.70008C4.60816 19.9012 4.51713 19.8831 4.4322 19.8479C4.34728 19.8127 4.27011 19.7612 4.20511 19.6962C4.14011 19.6312 4.08854 19.554 4.05337 19.4691C4.01819 19.3842 4.00008 19.2931 4.00008 19.2012V13.4845"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M2.8335 10.5679H7.50016"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 10.5679H24.545C24.6803 10.5679 24.8127 10.6072 24.9262 10.6809C25.0396 10.7546 25.1293 10.8596 25.1843 10.9832L27.2727 15.6825C27.3125 15.7718 27.3331 15.8683 27.3333 15.966V19.2012C27.3333 19.2931 27.3152 19.3842 27.28 19.4691C27.2449 19.554 27.1933 19.6312 27.1283 19.6962C27.0633 19.7612 26.9861 19.8127 26.9012 19.8479C26.8163 19.8831 26.7253 19.9012 26.6333 19.9012H24.4167M18 19.9012H19.1667"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_45_1883">
                  <rect
                    width="28"
                    height="28"
                    fill="white"
                    transform="translate(0.5 0.0678711)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbar2;
