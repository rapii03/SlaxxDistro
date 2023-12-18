'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../../Components/dashboard/Sidebar'

import { Pagination } from 'flowbite-react';
import { Link } from 'react-router-dom';

import { Button, Modal } from 'flowbite-react';

import { BsFillBox2HeartFill } from "react-icons/bs";

function DetailOrder() {
    const [originalProducts, setOriginalProducts] = useState([
        { id: 1, name: 'Gitar Akustik 1', items: '5', price: '55000000' },
        { id: 2, name: 'Gitar Akustik 2', items: '5', price: '55000000' },
        { id: 3, name: 'Gitar Akustik 3', items: '5', price: '55000000' },
        { id: 4, name: 'Gitar Akustik 4', items: '5', price: '55000000' },
        { id: 5, name: 'Gitar Akustik 5', items: '5', price: '55000000' },
        { id: 6, name: 'Gitar Akustik 6', items: '5', price: '55000000' },
    ]);

    const [products, setProducts] = useState(originalProducts);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('YOUR_BACKEND_API_ENDPOINT')
            .then(response => {
                setOriginalProducts(response.data);
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page) => setCurrentPage(page);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedProducts = products.slice(startIndex, endIndex);

    const handleSearch = () => {
        const filteredProducts = originalProducts.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setProducts(filteredProducts);
    };

    useEffect(() => {
        handleSearch();
    }, [searchTerm]);

    const [openModal, setOpenModal] = useState(false);

    const [customerInfo, setCustomerInfo] = useState({
        name: 'John Doe',
        time: '16.00',
    });

    return (
        <>
            <Sidebar>
                <div className="flex flex-col p-4 rounded shadow-lg h-full">
                    <p className="text-4xl text-[#739072] font-bold">Order</p>
                    <div className="justify-start mt-5 mb-6">
                        <div className='text-[16px] text-black'>Name Customer: {customerInfo.name}</div>
                        <div className='text-[16px] text-black'>Time: {customerInfo.time}</div>
                    </div>
                    <div className=''>
                        <input
                            className="shadow appearance-none border rounded w-64 py-2 px-3 text-[#739072] leading-tight focus:outline-none focus:shadow-outline focus:ring-[#937af9] mb-5"
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <table className="overflow-hidden rounded text-sm text-center text-black w-[70%] m-auto">
                        <thead className="text-xs text-[#739072] uppercase bg-[#D2D2D2]">
                            <tr className="">
                                <th scope="col" className="px-4 py-3">
                                    No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name Costumer
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total Items
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedProducts.map((order, index) => (
                                <tr key={index} className="bg-white border-b">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                    >
                                        {startIndex + index + 1}
                                    </th>
                                    <td className="px-6 py-4">{order.name}</td>
                                    <td className="px-6 py-4">{order.items}</td>
                                    <td className="px-6 py-4">Rp. {order.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='flex justify-between'>
                        <div className="ml-36">
                            <Pagination currentPage={currentPage} totalPages={Math.ceil(products.length / itemsPerPage)} onPageChange={onPageChange} showIcons className='text-[#739072]' />
                        </div>
                        <div className='relative'>
                            <Button className='absolute right-0 flex justify-end items-end m-auto bg-[#4F6F52] mr-36 mt-2' onClick={() => setOpenModal(true)}>Confirm</Button>
                            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                                <Modal.Header />
                                <Modal.Body>
                                    <div className="text-center">
                                        <BsFillBox2HeartFill className="mx-auto mb-4 h-32 w-32 text-[#739072] dark:text-[#739072]" />
                                        <h3 className="mb-5 text-lg font-normal text-[#739072] dark:text-[#739072]">
                                            Order is processed
                                        </h3>
                                        <div className="flex justify-center gap-4">
                                            <Button className='bg-[#739072]' onClick={() => setOpenModal(false)}>
                                                {"Done"}
                                            </Button>
                                        </div>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default DetailOrder;
