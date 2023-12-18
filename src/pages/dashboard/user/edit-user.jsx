'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../../Components/dashboard/Sidebar'
import { useParams } from 'react-router-dom';

// Simulasi API endpoint
const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';

function editUser() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [initialProductData, setInitialProductData] = useState({
        name: 'Nama User Awal',
        email: 'nama@gmail.com',
        password: '2224455',
    });

    const { userId } = useParams();

    useEffect(() => {
        setFormData({
            name: initialProductData.name,
            email: initialProductData.email,
            password: initialProductData.password,
        });
    }, [initialProductData, userId]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Data yang diinputkan:', formData);
        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('email', formData.email);
            data.append('password', formData.password);

            const response = await axios.put(`${API_ENDPOINT}/produk/${userId}`, data);

            console.log('Data yang diinputkan:', formData);
            console.log('Respons dari server:', response.data);

            localStorage.setItem('savedImage', formData.image.preview);

        } catch (error) {
            console.error('Kesalahan mengedit produk:', error);
        }
    };

    return (
        <>
            <Sidebar>
                <div className="flex flex-col p-4">
                    <p className="text-4xl text-primary font-bold">Edit User {userId}</p>
                    <form onSubmit={handleSubmit}>
                        <div className="wrap mt-[100px] w-full">
                            <div className="flex w-full flex-col  justify-center h-72 border-2 border-[#739072] p-8 rounded-lg">
                                <div>
                                    <div className="flex gap-x-4">
                                        <div className="flex flex-col mb-4">
                                            <label htmlFor="name">Name Product</label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="border border-[#739072] text-gray-900 text-sm rounded-md focus:ring-[#739072] focus:border-[#739072] h-9 px-2 w-96"
                                                placeholder="Name Product"
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
                                                placeholder="email"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-x-4">
                                    <div className="flex flex-col mb-4">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="border border-[#739072] text-gray-900 text-sm rounded-md focus:ring-[#739072] focus:border-[#739072] h-9 px-2 w-96"
                                            placeholder="Password"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end mt-4">
                                    <button
                                        type="submit"
                                        className="flex justify-center py-2 item-center w-40 h-9 bg-[#739072] hover:bg-[#324131] focus:ring-4 focus:ring-[#937af9] text-white rounded-lg text-sm"
                                    >
                                        Edit User
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

export default editUser
