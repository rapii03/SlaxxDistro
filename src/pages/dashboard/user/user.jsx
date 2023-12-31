'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../../Components/dashboard/Sidebar'

import { Pagination } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../../utils/useAxios';
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

function user() {
    const [originalProducts, setOriginalProducts] = useState([
        // { id: 1, name: 'Gitar Akustik 1', price: '55000000' },
        // { id: 2, name: 'Gitar Akustik 2', price: '55000000' },
        // { id: 3, name: 'Gitar Akustik 3', price: '55000000' },
        // { id: 4, name: 'Gitar Akustik 4', price: '55000000' },
        // { id: 5, name: 'Gitar Akustik 5', price: '55000000' },
        // { id: 6, name: 'Gitar Akustik 6', price: '55000000' },
    ]);

    const [products, setProducts] = useState(originalProducts);
    const [searchTerm, setSearchTerm] = useState('');
    const [targetId, setTargetId] = useState(0);

    let loading = true;
    useEffect(() => {
        (async () => {
            const orderRes = await axiosInstance.get('/user', {
                headers: {
                    "ngrok-skip-browser-warning": "69420",
                },
            });
            const newData = orderRes.data;
            setOriginalProducts(newData);
            setProducts(newData);
            loading = false;
        })();
    }, [loading]);

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page) => setCurrentPage(page);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedProducts = products.slice(startIndex, endIndex);

    const [openModal, setOpenModal] = useState(false);

    const handleSearch = () => {
        const filteredProducts = originalProducts.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.email.toLowerCase().includes(searchTerm.toLowerCase()));
        setProducts(filteredProducts);
    };

    useEffect(() => {
        handleSearch();
    }, [searchTerm]);

    async function handleDelete () {
        console.log(targetId);
        await axiosInstance.delete(`/user?id=${targetId}`, {id: targetId},{
            headers: {
                "ngrok-skip-browser-warning": "69420",
            },
        });
        const orderRes = await axiosInstance.get('/user', {
            headers: {
                "ngrok-skip-browser-warning": "69420",
            },
        });
        const newData = orderRes.data;
        setOriginalProducts(newData);
        setProducts(newData);
        setOpenModal(false);
    }

    return (
        <>
            <Sidebar>
                <div className="flex flex-col p-4 rounded shadow-lg h-full">
                    <p className="text-4xl text-[#739072] font-bold">User</p>
                    <div className='flex justify-between mt-20 mb-6'>
                        <div className=''>
                            <input
                                className="shadow appearance-none border rounded w-64 py-2 px-3 text-[#739072] leading-tight focus:outline-none focus:shadow-outline focus:ring-[#937af9]"
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="">
                            <button className="">
                                <a
                                    className="flex justify-center py-2 item-center w-40 h-9 bg-[#739072] hover:bg-[#394939] focus:ring-4 focus:ring-[#937af9] text-white rounded-lg  text-sm"
                                    href="/add-user"
                                >
                                    Add User
                                </a>
                            </button>
                        </div>
                    </div>
                    <table className="overflow-hidden rounded text-sm text-left text-black w-full">
                        <thead className="text-xs text-[#739072] uppercase bg-[#D2D2D2]">
                            <tr className="">
                                <th scope="col" className="px-4 py-3">
                                    No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-8 py-3">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedProducts.map((product, index) => (
                                <tr key={index} className="bg-white border-b">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                    >
                                        {startIndex + index + 1}
                                    </th>
                                    <td className="px-6 py-4">{product.name}</td>
                                    <td className="px-6 py-4">{product.email}</td>
                                    <td className="px-6 py-4">
                                        <Link to={`/edit-user/${product.id}`} className="font-medium text-[#FFA724]">
                                            Edit
                                        </Link>
                                        <Link to="#" onClick={() => {setOpenModal(true); setTargetId(product.id)}} className="font-medium text-[#4F6F52] ml-6">
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex overflow-x-auto sm:justify-center mt-5">
                        <Pagination currentPage={currentPage} totalPages={Math.ceil(products.length / itemsPerPage)} onPageChange={onPageChange} showIcons className='text-[#739072]' />
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
                                    <Button className='bg-[#739072] w-[40%]' style={{ backgroundColor: '#739072' }} onClick={handleDelete}>
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
