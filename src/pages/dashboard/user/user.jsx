'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../../Components/dashboard/Sidebar'

import { Pagination } from 'flowbite-react';
import { Link } from 'react-router-dom';

import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

function user() {
    const [user, setuser] = useState([
        { id: 1, name: 'Gitar Akustik', price: '55000000' },
        { id: 2, name: 'Gitar Akustik', price: '55000000' },
        { id: 3, name: 'Gitar Akustik', price: '55000000' },
        { id: 4, name: 'Gitar Akustik', price: '55000000' },
        { id: 5, name: 'Gitar Akustik', price: '55000000' },
        { id: 6, name: 'Gitar Akustik', price: '55000000' },
    ]);

    useEffect(() => {
        axios.get('YOUR_BACKEND_API_ENDPOINT')
            .then(response => {
                setuser(response.data);
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

    const displayeduser = user.slice(startIndex, endIndex);

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Sidebar>
                <div className="flex flex-col p-4 rounded shadow-lg h-full">
                    <p className="text-4xl text-[#739072] font-bold">Product</p>
                    <div className="flex justify-end mt-20 mb-6">
                        <button className="">
                            <a
                                className="flex justify-center py-2 item-center w-40 h-9 bg-[#739072] hover:bg-[#394939] focus:ring-4 focus:ring-[#937af9] text-white rounded-lg  text-sm"
                                href="/add-user"
                            >
                                Add User
                            </a>
                        </button>
                    </div>
                    <table className="overflow-hidden rounded text-sm text-left text-black w-full">
                        <thead className="text-xs text-[#739072] uppercase bg-[#D2D2D2]">
                            <tr className="">
                                <th scope="col" className="px-4 py-3">
                                    No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-8 py-3">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayeduser.map((product, index) => (
                                <tr key={index} className="bg-white border-b">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                    >
                                        {startIndex + index + 1}
                                    </th>
                                    <td className="px-6 py-4">{product.name}</td>
                                    <td className="px-6 py-4">Rp. {product.price}</td>
                                    <td className="px-6 py-4">
                                        <Link to={`/edit-user/${product.id}`} className="font-medium text-[#FFA724]">
                                            Edit
                                        </Link>
                                        <Link to="#" onClick={() => setOpenModal(true)} className="font-medium text-[#4F6F52] ml-6">
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex overflow-x-auto sm:justify-center mt-5">
                        <Pagination currentPage={currentPage} totalPages={Math.ceil(user.length / itemsPerPage)} onPageChange={onPageChange} showIcons className='text-[#739072]' />
                    </div>
                    <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup >
                        <Modal.Header />
                        <Modal.Body>
                            <div className="text-center">
                                <HiOutlineExclamationCircle className="mx-auto mb-4 h-32 w-32 text-[#739072] dark:text-[#739072]" />
                                <h3 className="mb-5 text-lg font-normal text-[#739072] dark:text-[#739072]">
                                    Are you sure you want to delete this user?
                                </h3>
                                <div className="flex justify-center gap-4">
                                    <Button className='bg-[#E2E8F0] text-black w-[40%]' style={{ backgroundColor: '#E2E8F0' }} onClick={() => setOpenModal(false)}>
                                        Back
                                    </Button>
                                    <Button className='bg-[#739072] w-[40%]' style={{ backgroundColor: '#739072' }} onClick={() => setOpenModal(false)}>
                                        {"Delete"}
                                    </Button>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </Sidebar>
        </>
    )
}

export default user;
