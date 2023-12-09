import Navbar2 from "../../Components/user/Navbar";
import { useState } from "react";
("use client");
import axios from 'axios';

import { Label, TextInput } from "flowbite-react";
import Footer2 from "../../Components/user/Footer";
const Profile = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true); // Track password matching

  const handleProfile = async (event) => {
    event.preventDefault();

    if (checkPasswordsMatch()) {
      const name = document.getElementById("name").value;
      const telepon = document.getElementById("telepon").value;
      const email = document.getElementById("email1").value;
      const address = document.getElementById("address").value;
      const currentPassword = document.getElementById("password").value;
      const newPassword = document.getElementById("newPassword").value;
      console.log("Data to be sent to backend:", {
        name,
        telepon,
        email,
        address,
        currentPassword,
        newPassword,
      });
      try {
        const response = await axios.post('/api/profile', {
          name,
          telepon,
          email,
          address,
          currentPassword,
          newPassword,
        });

        if (response.data.success) {
          setIsProfileModalOpen(true);

          document.getElementById("name").value = "";
          document.getElementById("telepon").value = "";
          document.getElementById("email1").value = "";
          document.getElementById("address").value = "";
          document.getElementById("password").value = "";
          document.getElementById("newPassword").value = "";
          document.getElementById("confirmPassword").value = "";

          setPasswordsMatch(true);
        } else {
          console.error(response.data.error);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      setPasswordsMatch(false);
    }
  };

  const checkPasswordsMatch = () => {
    // Compare the values of new password and confirm password
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    return newPassword === confirmPassword;
  };

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
    setPasswordsMatch(true); // Reset password matching status when closing modal
  };
  return (
    <div className="bg-white">
      <Navbar2 />
      <div className="profile container  mx-auto pt-[90px]">
        <div className="head p-2 lg:p-0 lg:pb-5">
          <div className="heading text-[18px]  pb-5 font-semibold">
            Edit Profile
          </div>
          <div className="heading h-[2px] rounded bg-gray-300"></div>
        </div>
        {/* form */}
        <div className="wrap flex gap-3 flex-col lg:flex-row items-center">
          <div className="left w-full lg:w-[40%] hidden lg:block">
            <img src="/Images/edit.png" alt="" />
          </div>
          <div className="right px-2 w-full lg:w-[60%] ">
            <div className="form">
              <form className="flex w-full flex-col gap-2">
                {/*  */}
                <div className="form-item w-full flex gap-2 ">
                  <div className="w-1/2">
                    <div className="mb-2 block">
                      <Label htmlFor="name" value="Fullname" />
                    </div>
                    <TextInput
                      id="name"
                      type="text"
                      placeholder="Fullname"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <div className="mb-2 block">
                      <Label htmlFor="telepon" value="No telephone" />
                    </div>
                    <TextInput
                      id="telepon"
                      type="text"
                      placeholder="No. telephone"
                      required
                    />
                  </div>
                </div>
                {/*  */}
                <div className="form-item w-full flex gap-2 ">
                  <div className="w-1/2">
                    <div className="mb-2 block">
                      <Label htmlFor="email1" value="Email" />
                    </div>
                    <TextInput
                      id="email1"
                      type="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <div className="mb-2 block">
                      <Label htmlFor="address" value="Address" />
                    </div>
                    <TextInput
                      id="address"
                      type="text"
                      placeholder="Address"
                      required
                    />
                  </div>
                </div>
                {/*  */}
                <div className="form-item w-full flex flex-col gap-2 ">
                  <div className="w-full">
                    <div className="mb-2 block">
                      <Label htmlFor="password" value="Password Change" />
                    </div>
                    <TextInput
                      id="password"
                      type="text"
                      placeholder="Current Password"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <TextInput
                      id="newPassword"
                      type="password"
                      placeholder="New Password"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <TextInput
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      required
                    />
                    {!passwordsMatch && (
                      <p className="text-red-500 text-sm mt-1">
                        Password and Confirm Password do not match
                      </p>
                    )}
                  </div>
                </div>
                <button
                  className="bg-primary text-white p-2 px-4 rounded mt-3 hover:bg-[#1B471F]"
                  type="submit"
                  onClick={(event) => handleProfile(event)}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
      {/* Profile Modal */}
      {isProfileModalOpen && (
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
              Changes saved successfully

            </p>
            <div className="btn flex justify-center">
              <button
                className="rounded bg-primary px-4 text-white hover:bg-[#1B471F] p-2"
                onClick={closeProfileModal}
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

export default Profile;
