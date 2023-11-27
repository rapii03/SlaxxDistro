'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../../Components/dashboard/Sidebar'

import { Pagination } from 'flowbite-react';
import { Link } from 'react-router-dom';

import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

function ReportPay() {
    const [reportPays, setreportPays] = useState([
        { id: 1, name: 'Gitar Akustik', items: '5', price: ' 55000000', status: 'Succes' },
        { id: 2, name: 'Gitar Akustik', items: '5', price: ' 55000000', status: 'Succes' },
        { id: 3, name: 'Gitar Akustik', items: '5', price: ' 55000000', status: 'Succes' },
        { id: 4, name: 'Gitar Akustik', items: '5', price: ' 55000000', status: 'Succes' },
        { id: 5, name: 'Gitar Akustik', items: '5', price: ' 55000000', status: 'Delivery' },
        { id: 6, name: 'Gitar Akustik', items: '5', price: ' 55000000', status: 'Succes' },
    ]);

    useEffect(() => {
        axios.get('YOUR_BACKEND_API_ENDPOINT')
            .then(response => {
                setreportPays(response.data);
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

    const displayedreportPays = reportPays.slice(startIndex, endIndex);

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Sidebar>
                <div className="flex flex-col p-4 rounded shadow-lg h-full">
                    <p className="text-4xl text-[#739072] font-bold">Report Pay</p>
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
                            {displayedreportPays.map((reportPay, index) => (
                                <tr key={index} className="bg-white breportPay-b">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                    >
                                        {startIndex + index + 1}
                                    </th>
                                    <td className="px-6 py-4">{reportPay.name}</td>
                                    <td className="px-6 py-4">{reportPay.items}</td>
                                    <td className="px-6 py-4">Rp. {reportPay.price}</td>
                                    <td className={`px-6 py-4 ${reportPay.status === 'Delivery' ? 'text-[#FF5724]' : 'text-[#00AA63]'}`}>
                                        {reportPay.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex overflow-x-auto sm:justify-center mt-5">
                        <Pagination currentPage={currentPage} totalPages={Math.ceil(reportPays.length / itemsPerPage)} onPageChange={onPageChange} showIcons className='text-[#739072]' />
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default ReportPay;
