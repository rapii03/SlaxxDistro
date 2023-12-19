'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../../Components/dashboard/Sidebar'
import { axiosInstance } from '../../../utils/useAxios';

import { Pagination } from 'flowbite-react';
import { Link } from 'react-router-dom';
import useSWR, { mutate } from 'swr';

function order() {
    let orders = [];

    const { data, error, isLoading } = useSWR(`/order`, (url) =>
        axiosInstance
        .get(url, {
            headers: {
            "ngrok-skip-browser-warning": "69420",
            },
        })
        .then((res) => res.data)
    );

    data?.map((item) => {
        if (item.status === "order") {
            orders.push(item);
        }
    });
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    
    const [search, setSearch] = useState("");

    const filteredItems = orders.filter(
        (item) =>
        item.customer.name.toLowerCase().includes(search.toLowerCase())
    );

    const totalFilteredPages = Math.ceil(filteredItems.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = filteredItems.slice(startIndex, endIndex);

    const onPageChange = (page) => setCurrentPage(page);

    useEffect(() => {
        mutate("/order");

    }, [isLoading]);

    return (
        <>
            <Sidebar>
                <div className="flex flex-col p-4 rounded shadow-lg h-full">
                    <p className="text-4xl text-[#739072] font-bold">Order</p>
                    <div className='flex justify-between mt-20'>
                        <div className=''>
                            <input
                                className="shadow appearance-none border rounded w-64 py-2 px-3 text-[#739072] leading-tight focus:outline-none focus:shadow-outline focus:ring-[#937af9]"
                                type="text"
                                placeholder="Search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                    <table className="overflow-hidden rounded text-sm text-left text-black w-full mt-5">
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
                            {paginatedItems.map((order, index) => (
                                <tr key={index} className="bg-white border-b">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                    >
                                        {startIndex + index + 1}
                                    </th>
                                    <td className="px-6 py-4">{order.customer.name}</td>
                                    <td className="px-6 py-4">{order.item_count}</td>
                                    <td className="px-6 py-4">Rp. {order.price_count}</td>
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
                        <Pagination currentPage={currentPage} totalPages={totalFilteredPages} onPageChange={onPageChange} showIcons className='text-[#739072]' />
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default order;
