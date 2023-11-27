'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../../Components/dashboard/Sidebar'

import { Pagination } from 'flowbite-react';
import { Link } from 'react-router-dom';

import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

function order() {
    const [orders, setorders] = useState([
        { id: 1, name: 'Gitar Akustik', items: '5', price:'55000000'},
        { id: 2, name: 'Gitar Akustik', items: '5', price:'55000000'},
        { id: 3, name: 'Gitar Akustik', items: '5', price:'55000000'},
        { id: 4, name: 'Gitar Akustik', items: '5', price:'55000000'},
        { id: 5, name: 'Gitar Akustik', items: '5', price:'55000000'},
        { id: 6, name: 'Gitar Akustik', items: '5', price:'55000000'},
    ]);

    useEffect(() => {
        axios.get('YOUR_BACKEND_API_ENDPOINT')
            .then(response => {
                setorders(response.data);
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

    const displayedorders = orders.slice(startIndex, endIndex);

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Sidebar>
                <div className="flex flex-col p-4 rounded shadow-lg h-full">
                    <p className="text-4xl text-[#739072] font-bold">Order</p>
                    <table className="overflow-hidden rounded text-sm text-left text-black w-full mt-20">
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
                                <th scope="col" className="px-8 py-3">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedorders.map((order, index) => (
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
                                    <td className="px-6 py-4">
                                        <Link to={`/detail-order/${order.id}`} className="font-medium text-[#FF5724]">
                                            Detail
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex overflow-x-auto sm:justify-center mt-5">
                        <Pagination currentPage={currentPage} totalPages={Math.ceil(orders.length / itemsPerPage)} onPageChange={onPageChange} showIcons className='text-[#739072]' />
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default order;
