'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../../Components/dashboard/Sidebar'
import { useParams } from 'react-router-dom';

// Simulasi API endpoint
const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';

function editProduct() {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        stock: '',
        image: null,
    });

    const [initialProductData, setInitialProductData] = useState({
        name: 'Nama Produk Awal',
        price: 'Harga Awal',
        stock: 'Stok Awal',
        image_url: 'https://contoh.com/gambar-awal.jpg', // Ganti dengan URL yang sebenarnya
    });

    const { productId } = useParams(); // Dapatkan ID produk dari parameter URL

    useEffect(() => {
        // Simulasikan pengambilan data produk dari backend berdasarkan productId
        // Untuk tujuan demonstrasi, kita akan menggunakan initialProductData sebagai data yang diambil
        setFormData({
            name: initialProductData.name,
            price: initialProductData.price,
            stock: initialProductData.stock,
            image: {
                file: null, // Anda mungkin perlu mengubah ini berdasarkan cara backend mengembalikan data gambar
                preview: initialProductData.image_url,
            },
        });
    }, [initialProductData, productId]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData({
                ...formData,
                image: {
                    file: file,
                    preview: reader.result,
                },
            });
            console.log('Data Gambar:', reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Data yang diinputkan:', formData);
        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('price', formData.price);
            data.append('stock', formData.stock);
            data.append('image', formData.image.file);

            // Perbarui URL permintaan ke endpoint edit pada backend
            const response = await axios.put(`${API_ENDPOINT}/produk/${productId}`, data);

            // Tampilkan respons ke konsol
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
                    <p className="text-4xl text-primary font-bold">Edit Product {productId}</p>
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
                                            <label htmlFor="price">Price</label>
                                            <input
                                                type="text"
                                                id="price"
                                                value={formData.price}
                                                onChange={handleChange}
                                                className="border border-[#739072] text-gray-900 text-sm rounded-md focus:ring-[#739072] focus:border-[#739072] h-9 px-2 w-96"
                                                placeholder="Price"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-x-4">
                                    <div className="flex flex-col mb-4">
                                        <label htmlFor="stock">Stock</label>
                                        <input
                                            type="text"
                                            id="stock"
                                            value={formData.stock}
                                            onChange={handleChange}
                                            className="border border-[#739072] text-gray-900 text-sm rounded-md focus:ring-[#739072] focus:border-[#739072] h-9 px-2 w-96"
                                            placeholder="Stock"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col mb-4">
                                        <label htmlFor="user_avatar">Add Image</label>
                                        <input
                                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-transparent dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                            aria-describedby="user_avatar_help"
                                            id="user_avatar"
                                            type="file"
                                            onChange={handleImageChange}
                                        />
                                        {formData.image && (
                                            <img
                                                src={formData.image.preview}
                                                alt="Image Preview"
                                                className="mt-2 rounded-lg max-h-36"
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-end mt-4">
                                    <button
                                        type="submit"
                                        className="flex justify-center py-2 item-center w-40 h-9 bg-[#739072] hover:bg-[#324131] focus:ring-4 focus:ring-[#937af9] text-white rounded-lg text-sm"
                                    >
                                        Save Product
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

export default editProduct
