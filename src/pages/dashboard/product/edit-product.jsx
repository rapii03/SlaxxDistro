'use client';
import { Button, Modal,  } from 'flowbite-react';
import { Alert } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../../utils/useAxios';
import axios from 'axios';
import Sidebar from '../../../Components/dashboard/Sidebar'
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';

// Simulasi API endpoint

function editProduct() {
    const navigate = useNavigate();
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        price: 0,
        stock: 0,
        image: '',
    });

    const [initialProductData, setInitialProductData] = useState({
        name: '',
        price: 0,
        stock: 0,
        image: '', // Ganti dengan URL yang sebenarnya
    });

    const { id } = useParams(); // Dapatkan ID produk dari parameter URL

    const { data, error, isLoading } = useSWR(`/product/?id=${id}`, (url) =>
        axiosInstance
        .get(url, {
            headers: {
            "ngrok-skip-browser-warning": "69420",
            },
        })
        .then((res) => {
            setInitialProductData({
                name: res.data.name,
                price: res.data.price,
                stock: res.data.stock,
                image: res.data.image,
            })
            return res.data;
        })
    );

    
    useEffect(() => {
    
        // Simulasikan pengambilan data produk dari backend berdasarkan id
        // Untuk tujuan demonstrasi, kita akan menggunakan initialProductData sebagai data yang diambil
        setFormData({
            name: initialProductData.name,
            price: initialProductData.price,
            stock: initialProductData.stock,
            image: initialProductData.image,
        });
    }, [initialProductData, id]);
    
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

            const data = {
                id: id,
                name: formData.name,
                price: formData.price,
                stock: formData.stock,
                image: formData.image,
            }

            const response = await axiosInstance.put('/product', data, {
                headers: {
                    "ngrok-skip-browser-warning": "69420",
                }
            })

            if (response.status === 200) {
                console.log('Registration successful');
                setAlertSuccess(true);
                setTimeout(() => {
                    navigate('/Product');
                }, 3000);
            } else {
                console.error('Registration failed');
                setAlertVisible(true);
                setTimeout(() => {
                    setAlertVisible(false);
                }, 3000);
            }
        } catch (error) {
            console.error('Kesalahan mengedit produk:', error);
        }
    };

    return (
        <>

            <Sidebar>
                <div className="flex flex-col p-4">
                    <p className="text-4xl text-primary font-bold">Edit Product {id}</p>
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
                                        {formData?.image && (
                                            <img
                                                src={formData.image}
                                                alt="Image Preview"
                                                className="mt-2 rounded-lg max-h-36"
                                            />
                                        )}
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
                                                    Product Updated Successfully
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
