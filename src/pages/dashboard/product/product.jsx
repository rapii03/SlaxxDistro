'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { axiosInstance } from '../../../utils/useAxios';
import Sidebar from '../../../Components/dashboard/Sidebar'

import { Pagination } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import useSWR, { mutate } from 'swr';

function product() {

    let products = [];

    const { data, error, isLoading } = useSWR(`/product`, (url) =>
        axiosInstance
        .get(url, {
            headers: {
            "ngrok-skip-browser-warning": "69420",
            },
        })
        .then((res) => res.data)
    );

    data?.map((item) => {
        products.push(item);
    });
    
    const [targetId, setTargetId] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    
    const [openModal, setOpenModal] = useState(false);
    const [search, setSearch] = useState("");

    const filteredItems = products.filter(
        (item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const totalFilteredPages = Math.ceil(filteredItems.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = filteredItems.slice(startIndex, endIndex);

    const onPageChange = (page) => setCurrentPage(page);

    const handleDelete = async () => {
        console.log(targetId);
        await axiosInstance.delete(`/product?id=${targetId}`, {id: targetId},{
            headers: {
                "ngrok-skip-browser-warning": "69420",
            },
        });
        mutate("/product");
        setOpenModal(false);
    };

    return (
        <>
            <Sidebar>
                <div className="flex flex-col p-4 rounded shadow-lg h-full">
                    <p className="text-4xl text-[#739072] font-bold">Product</p>
                    <div className='flex justify-between mt-20 mb-6'>
                        <div className=''>
                            <input
                                className="shadow appearance-none border rounded w-64 py-2 px-3 text-[#739072] leading-tight focus:outline-none focus:shadow-outline focus:ring-[#937af9]"
                                type="text"
                                placeholder="Search..."
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value),
                                    setCurrentPage(1)
                                }}
                            />
                        </div>
                        <div className="">
                            <button className="">
                                <a
                                    className="flex justify-center py-2 item-center w-40 h-9 bg-[#739072] hover:bg-[#394939] focus:ring-4 focus:ring-[#937af9] text-white rounded-lg  text-sm"
                                    href="/add-product"
                                >
                                    Add Product
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
                                    Name Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Stock
                                </th>
                                <th scope="col" className="px-8 py-3">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedItems.map((product, index) => (
                                <tr key={index} className="bg-white border-b">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                    >
                                        {startIndex + index + 1}
                                    </th>
                                    <td className="px-6 py-4">{product.name}</td>
                                    <td className="px-6 py-4">Rp. {product.price}</td>
                                    <td className="px-6 py-4">{product.stock}</td>
                                    <td className="px-6 py-4">
                                        <Link to={`/edit-product/${product.id}`} className="font-medium text-[#FFA724]">
                                            Edit
                                        </Link>
                                        <Link to="#" onClick={() => {setOpenModal(true); setTargetId(product.id)}} className="font-medium text-black ml-6">
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex overflow-x-auto sm:justify-center mt-5">
                        <Pagination currentPage={currentPage} totalPages={totalFilteredPages} onPageChange={onPageChange} showIcons className='text-[#739072]' />
                    </div>
                    <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup >
                        <Modal.Header />
                        <Modal.Body>
                            <div className="text-center">
                                <HiOutlineExclamationCircle className="mx-auto mb-4 h-[125px] w-[125px] text-[#739072] dark:text-[#739072]" />
                                <h3 className="mb-5 text-lg font-normal text-[#739072] dark:text-[#739072]">
                                    Are you sure you want to delete this item?
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

export default product
