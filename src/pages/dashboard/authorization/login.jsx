'use client';
import React, { useState } from 'react';
import { Alert } from 'flowbite-react';
import Input from '../../../Components/dashboard/Input';
import { HiInformationCircle } from 'react-icons/hi';
import axios from 'axios';
import useSWR from 'swr';
import { axiosInstance } from '../../../utils/useAxios';
import { useNavigate } from 'react-router-dom';

function login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);

    let users = [];

    const { data, error, isLoading } = useSWR(`/user`, (url) =>
        axiosInstance
        .get(url, {
            headers: {
            "ngrok-skip-browser-warning": "69420",
            },
        })
        .then((res) => res.data)
    );

    data?.map((item) => {
        users.push(item);
    });

    console.log('users:', users);

    const handleLogin = async () => {
        if (!email || !password) {
            setAlertVisible(true);
            setTimeout(() => {
                setAlertVisible(false);
            }, 3000);
            return;
        }
        console.log('Data yang diinputkan:', { email, password });
        try {
            const user = users.find((user) => user.email === email && user.password === password);
            
            console.log('user:', user);

            if (!user) {
                console.error('Login failed');
                setAlertVisible(true);
                setTimeout(() => {
                    setAlertVisible(false);
                }, 3000);
                localStorage.removeItem('user');
                return;
            }

            localStorage.setItem('user', JSON.stringify(user));

            console.log('Login successful');
                setAlertSuccess(true);
                setTimeout(() => {
                    if (user.role) {
                        navigate('/Product');
                    } else {
                        navigate('/home');
                    }
                }, 1000);
                setTimeout(() => {
                    setAlertSuccess(false);
                }, 3000);

        } catch (error) {
            console.error('Error during login:', error);
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
                            <div className="text-[32px] font-medium mb-5">
                                Log in
                            </div>
                            <div className='mb-10'>
                                Enter your details below
                            </div>
                            <div className="text-black mb-5">
                                <div className="mb-[20px]">
                                    <div className='pb-1'>Email</div>
                                    <Input
                                        onChange={(e) => { setEmail(e.target.value); }}
                                        placeholder="Email or Phone Number"
                                        required
                                        type="email"
                                    />
                                </div>
                                <div className="mb-[2px]">
                                    <div className='pb-1'>Password</div>
                                    <Input
                                        onChange={(e) => { setPassword(e.target.value); }}
                                        placeholder="password"
                                        required
                                        type="password"
                                    />
                                </div>
                            </div>
                            <div>
                                <a className='' href='/sign-up'>
                                    Create account?
                                </a>
                            </div>
                            <div className='m-auto items-center justify-center flex text-center'>
                                <button
                                    type="button"
                                    onClick={handleLogin}
                                    className="text-white w-[30%] bg-[#4F6F52] hover:bg-[#38513a] focus:ring-4 focus:ring-[#937af9] font-medium rounded-md text-sm px-5 py-2.5 mb-2 dark:bg-[#4F6F52] dark:hover:bg-[#38513a] focus:outline-none mt-5"
                                >
                                    Log In
                                </button>
                            </div>
                            {alertVisible && (
                                <Alert color="failure" icon={HiInformationCircle}>
                                    <span className="font-medium">Info SlaxxDistro!</span> Masukkan Data Yang Dibutuhkan!!!
                                </Alert>
                            )}

                            {alertSuccess && (
                                <Alert color="success" icon={HiInformationCircle}>
                                    <span className="font-medium">Info SlaxxDistro!</span> Login Successful
                                </Alert>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default login;
