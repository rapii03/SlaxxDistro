'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../../Components/dashboard/Sidebar'

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase-config";

function addProduct() {

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        stock: '',
        image: null,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const [imageUpload, setImageUpload] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        if (imageUpload) {
            const imageRef = ref(storage, `pwl-slaxx/images/${imageUpload.name}`);
            await uploadBytes(imageRef, imageUpload);
            const imageUrl = await getDownloadURL(imageRef);

            setFormData({
                ...formData,
                image: imageUrl,
            });

            console.log('FormData before sending:', {
                ...formData,
                image: imageUrl,
            });
        }

        const response = await axios.post('YOUR_BACKEND_API_ENDPOINT', {
            image: formData.image,
        });

        console.log('Response from server:', response.data);

        localStorage.setItem('savedImage', formData.image);

    } catch (error) {
        console.error('Error adding product:', error);
    }
};

    return (
        <>
            <Sidebar>
                <div className="flex flex-col p-4">
                    <p className="text-4xl text-[#739072] font-bold">Add Product</p>
                    <form onSubmit={handleSubmit}>
                        <div className="wrap mt-[100px] w-full">
                            <div className="flex w-full flex-col  justify-center h-72 border-2 border-[#739072] p-8 rounded-lg">
                                <div className=''>
                                    <div className=" flex gap-x-4">
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
                                            <label htmlFor="price">Price</label>
                                            <input
                                                type="text"
                                                id="price"
                                                value={formData.price}
                                                onChange={handleChange}
                                                className="border border-[#739072] text-gray-900 text-sm rounded-md focus:ring-[#739072] focus:border-[#739072] h-9 px-2 w-96"
                                                placeholder="Price Product"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className=" flex gap-x-4">
                                        <div className="flex flex-col mb-4">
                                            <label htmlFor="stock">Stock</label>
                                            <input
                                                type="text"
                                                id="stock"
                                                value={formData.stock}
                                                onChange={handleChange}
                                                className="border border-[#739072] text-gray-900 text-sm rounded-md focus:ring-[#739072] focus:border-[#739072] h-9 px-2 w-96"
                                                placeholder="Stock Product"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col mb-4">
                                            <label htmlFor="image">Add Image</label>
                                            <div className="App">
                                                <input
                                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-transparent dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                    aria-describedby="user_avatar_help"
                                                    id="image"
                                                    type="file"
                                                    onChange={(event) => {
                                                        setImageUpload(event.target.files[0]);
                                                        setFormData({
                                                            ...formData,
                                                            image: {
                                                                file: event.target.files[0],
                                                                preview: URL.createObjectURL(event.target.files[0]),
                                                            },
                                                        });
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end mt-4">
                                    <button
                                        type="submit"
                                        className="flex justify-center py-2 items-center w-40 h-9 bg-[#739072] hover:bg-[#455744] focus:ring-4 focus:ring-[#739072] text-white rounded-lg text-sm"
                                    >
                                        Add Product
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

export default addProduct
