'use client';
import React, { useEffect, useState } from 'react';
import { Button, Modal,  } from 'flowbite-react';
import { Alert } from 'flowbite-react';
import axios from 'axios';
import Sidebar from '../../../Components/dashboard/Sidebar'
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../../utils/useAxios';

function addUser() {
    const navigate = useNavigate();
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        phone_number: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Response dari data yang diinputkan:', formData);
        try {
            const response = await axiosInstance.post('/user', formData, {
                headers: {
                    "ngrok-skip-browser-warning": "69420",
                }
            })

            if (response.status === 200) {
                console.log('Registration successful');
                setAlertSuccess(true);
                setTimeout(() => {
                    navigate('/User');
                }, 3000);
            } else {
                console.error('Registration failed');
                setAlertVisible(true);
                setTimeout(() => {
                    setAlertVisible(false);
                }, 3000);
            }
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };


    return (
        <>
            <Sidebar>
                <div className="flex flex-col p-4">
                    <p className="text-4xl text-[#739072] font-bold">Add user</p>
                    <form onSubmit={handleSubmit}>
                        <div className="wrap mt-[100px] w-full">
                            <div className="flex w-full flex-col  justify-center h-72 border-2 border-[#739072] p-8 rounded-lg">
                                <div className=''>
                                    <div className=" flex gap-x-4">
                                        <div className="flex flex-col mb-4">
                                            <label htmlFor="name">Name user</label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="border border-[#739072] text-gray-900 text-sm rounded-md focus:ring-[#739072] focus:border-[#739072] h-9 px-2 w-96"
                                                placeholder="Name user"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col mb-4">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="text"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="border border-[#739072] text-gray-900 text-sm rounded-md focus:ring-[#739072] focus:border-[#739072] h-9 px-2 w-96"
                                                placeholder="Email user"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className=" flex gap-x-4">
                                        <div className="flex flex-col mb-4">
                                            <label htmlFor="password">Password</label>
                                            <input
                                                type="password"
                                                id="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                className="border border-[#739072] text-gray-900 text-sm rounded-md focus:ring-[#739072] focus:border-[#739072] h-9 px-2 w-96"
                                                placeholder="Password user"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                {alertVisible && (
                                    <Alert color="failure" icon={HiInformationCircle}>
                                        <span className="font-medium">Info SlaxxDistro!</span> Masukkan Data Yang Dibutuhkan!!!
                                    </Alert>
                                )}
                                {alertSuccess && (
                                    <Modal show={alertSuccess} size="md" onClose={() => setAlertSuccess(false)} popup>
                                        <Modal.Header />
                                        <Modal.Body>
                                            <div className="text-center">
                                                {/* <FaCheck className="mx-auto mb-4 h-14 w-14 text-[#4F6F52] dark:text-gray-200" /> */}
                                                <h3 className="mb-5 text-lg font-normal text-[#4F6F52] dark:text-gray-400">
                                                    Product Created Successfully
                                                </h3>
                                                <div className="flex justify-center">
                                                    <Button color="success" onClick={() => setAlertSuccess(false)}>
                                                        Okay
                                                    </Button>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                )}
                                <div className="flex justify-end mt-4">
                                    <button
                                        type="submit"
                                        className="flex justify-center py-2 items-center w-40 h-9 bg-[#739072] hover:bg-[#455744] focus:ring-4 focus:ring-[#739072] text-white rounded-lg text-sm"
                                    >
                                        Add user
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Sidebar>
        </>
    )
}

export default addUser
