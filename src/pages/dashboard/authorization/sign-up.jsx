'use client';
import React, { useState } from 'react';
import { Alert } from 'flowbite-react';
import Input from '../../../Components/dashboard/Input';
import { HiInformationCircle } from 'react-icons/hi';
import axios from 'axios';

import { Button, Modal,  } from 'flowbite-react';

import { axiosInstance } from '../../../utils/useAxios';
import { useNavigate } from 'react-router-dom';

function login() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);
    const [alertLength, setAlertLength] = useState(false);
    const [alertNotSame, setAlertNotSame] = useState(false);
    const handleRegister = async () => {
        if (!name || !email || !password || !confirmPassword) {
            setAlertVisible(true);
            setTimeout(() => {
                setAlertVisible(false);
            }, 3000);
            return;
        }
        if (name.length > 12 || password.length > 12 || confirmPassword.length > 12) {
            setAlertLength(true);
            setTimeout(() => {
                setAlertLength(false);
            }, 3000);
            return;
        }
        if (password !== confirmPassword) {
            setAlertNotSame(true);
            setTimeout(() => {
                setAlertNotSame(false);
            }, 3000);
            return
        }
        console.log('Data yang diinputkan:', { name, email, password, confirmPassword });
        try {
            const reqData = {
                name,
                email,
                password,
                address: "",
                phone_number: ""
            }
            const response = await axiosInstance.post('user', reqData, {
                headers: {
                    "ngrok-skip-browser-warning": "69420",
                }
            });
            console.log('Response dari server:', response);
            if (response.status === 200) {
                console.log('Registration successful');
                setAlertSuccess(true);
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            } else {
                console.error('Registration failed');
                setAlertVisible(true);
                setTimeout(() => {
                    setAlertVisible(false);
                }, 3000);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            // setAlertSuccess(true);
            setAlertVisible(true);
            setTimeout(() => {
                setAlertVisible(false);
            }, 3000);
        }
    };

    return (
        <>
            <div className="m-0 box-border flex h-screen w-full p-0">
                <div className="left flex w-1/2 items-center justify-center">
                    <img
                        src="/Images/logoProduct.png"
                        alt="banner home"
                        className="absolute"
                    />
                </div>
                <div className="w-1/2">
                    <div className="relative h-screen flex flex-col items-center justify-center">
                        <div className="text-left z-10 w-[60%] rounded-xl drop-shadow-2xl">
                            <div className="text-[32px] font-medium mb-2">
                                Create account
                            </div>
                            <div className='mb-8'>
                                Enter your details below
                            </div>
                            <div className="text-black mb-5">
                                <div className="mb-3">
                                    <div className='pb-1'>Fullname</div>
                                    <Input
                                        onChange={(e) => { setName(e.target.value); }}
                                        placeholder="fullname"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div className="mb-3">
                                    <div className='pb-1'>Email</div>
                                    <Input
                                        onChange={(e) => { setEmail(e.target.value); }}
                                        placeholder="Email or Phone Number"
                                        required
                                        type="email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <div className='pb-1'>Password</div>
                                    <Input
                                        onChange={(e) => { setPassword(e.target.value); }}
                                        placeholder="password"
                                        required
                                        type="password"
                                    />
                                </div>
                                <div className="mb-[2px]">
                                    <div className='pb-1'>Confirm Password</div>
                                    <Input
                                        onChange={(e) => { setConfirmPassword(e.target.value); }}
                                        placeholder="Confirm Password"
                                        required
                                        type="password"
                                    />
                                </div>
                            </div>

                            <div className='m-auto items-center justify-center flex text-center'>
                                <button
                                    type="button"
                                    onClick={handleRegister}
                                    className="text-white w-[50%] bg-[#4F6F52] hover:bg-[#38513a] focus:ring-4 focus:ring-[#937af9] font-medium rounded-md text-sm px-5 py-2.5 mb-2 dark:bg-[#4F6F52] dark:hover:bg-[#38513a] focus:outline-none mt-5"
                                >
                                    Create account
                                </button>
                            </div>
                            {alertVisible && (
                                <Alert color="failure" icon={HiInformationCircle}>
                                    <span className="font-medium">Info SlaxxDistro!</span> Masukkan Data Yang Dibutuhkan!!!
                                </Alert>
                            )}
                            {/* {alertSuccess && (
                                <Alert color="success" icon={HiInformationCircle}>
                                    <span className="font-medium">Info SlaxxDistro!</span> Login Successful
                                </Alert>
                            )} */}
                            {alertLength && (
                                <Alert color="failure" icon={HiInformationCircle}>
                                    <span className="font-medium">Info SlaxxDistro!</span>Tidak Lebih 12 Kata
                                </Alert>
                            )}
                            {alertNotSame && (
                                <Alert color="failure" icon={HiInformationCircle}>
                                    <span className="font-medium">Info SlaxxDistro!</span> Password Harus Sama
                                </Alert>
                            )}
                            {alertSuccess && (
                                <Modal show={alertSuccess} size="md" onClose={() => setAlertSuccess(false)} popup>
                                    <Modal.Header />
                                    <Modal.Body>
                                        <div className="text-center">
                                            {/* <FaCheck className="mx-auto mb-4 h-14 w-14 text-[#4F6F52] dark:text-gray-200" /> */}
                                            <h3 className="mb-5 text-lg font-normal text-[#4F6F52] dark:text-gray-400">
                                                Account Created Successfully
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default login;
