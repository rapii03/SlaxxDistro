import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { TbBrandShopee } from "react-icons/tb";
import { TbReportMoney } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { LuUser2 } from "react-icons/lu";

const Sidebar = ({ children }) => {
    const currentPath = window.location.pathname;
    return (
        <>
            <aside id="default-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
                aria-label="Sidebar">
                <div className="h-full px-4 py-4 overflow-y-auto bg-[#739072]">
                    <div className="flex items-center justify-center text-5xl text-white p-2">
                        Slaxx
                        Store
                    </div>
                    <div className="flex items-center justify-center m-auto -mt-5 text-white">
                        <ul className='flex-col gap-10'>
                            <li className={`absolute flex items-center justify-center inset-x-0 mt-[65px] ml-1 ${currentPath === "/Product" || currentPath === "/add-product" || currentPath.startsWith("/edit-product") ? 'active' : ''}`}>
                                <a href="/Product" type="button" className={`group w-[80%] p-3 flex gap-6 text-start justify-start items-center text-lg font-medium ${currentPath === "/Product" || currentPath === "/add-product" || currentPath.startsWith("/edit-product") ? 'text-[#739072] rounded-lg  bg-white hover:text-[#739072] focus:z-10 focus:ring-2 focus:ring-white focus:text-[#739072] dark:text-[#739072] dark:hover:text-white dark:hover:bg-white' : 'text-white rounded-lg bg-[#739072] hover:bg-white hover:text-[#739072] focus:z-10 focus:ring-2 focus:ring-white focus:text-white dark:text-white dark:hover:text-white dark:hover:bg-white'}`}>
                                    <BsBoxSeam className={`${currentPath === "/Product" || currentPath === "/add-product" || currentPath.startsWith("/edit-product") ? 'text-[#739072]' : 'text-white'} w-[20px] h-[20px] group-hover:text-[#739072]`} />
                                    Product
                                </a>
                            </li>
                            <li className={`absolute flex items-center justify-center inset-x-0 mt-[135px] ${currentPath === "/Order" || currentPath.startsWith("/detail-order") ? 'active' : ''}`}>
                                <a href="/Order" type="button" className={`group w-[80%] p-3 flex gap-4 text-start justify-start items-center text-lg font-medium ${currentPath === "/Order" || currentPath.startsWith("/detail-order") ? 'text-[#739072] rounded-lg  bg-white hover:text-[#739072] focus:z-10 focus:ring-2 focus:ring-white focus:text-[#739072] dark:text-[#739072] dark:hover:text-white dark:hover:bg-white' : 'text-white rounded-lg bg-[#739072] hover:bg-white hover:text-[#739072] focus:z-10 focus:ring-2 focus:ring-white focus:text-white dark:text-white dark:hover:text-white dark:hover:bg-white'}`}>
                                    <TbBrandShopee className={`${currentPath === "/Order" || currentPath.startsWith("/detail-order") ? 'text-[#739072]' : 'text-white'} w-[32px] h-[32px] pr-2 group-hover:text-[#739072]`} />
                                    Order
                                </a>
                            </li>
                            <li className={`absolute flex items-center justify-center inset-x-0 mt-[205px] ${currentPath === "/Report-pay" ? 'active' : ''}`}>
                                <a href="/Report-pay" type="button" className={`group w-[80%] p-3 flex gap-4 text-start justify-start items-center text-lg font-medium ${currentPath === "/Report-pay" ? 'text-[#739072] rounded-lg  bg-white hover:text-[#739072] focus:z-10 focus:ring-2 focus:ring-white focus:text-[#739072] dark:text-[#739072] dark:hover:text-white dark:hover:bg-white' : 'text-white rounded-lg bg-[#739072] hover:bg-white hover:text-[#739072] focus:z-10 focus:ring-2 focus:ring-white focus:text-white dark:text-white dark:hover:text-white dark:hover:bg-white'}`}>
                                    <TbReportMoney className={`${currentPath === "/Report-pay" ? 'text-[#739072]' : 'text-white'} w-[32px] h-[32px] pr-2 group-hover:text-[#739072]`} />
                                    Report Pay
                                </a>
                            </li>
                            <li className={`absolute flex items-center justify-center inset-x-0 mt-[275px] ${currentPath === "/Shipment" ? 'active' : ''}`}>
                                <a href="/Shipment" type="button" className={`group w-[80%] p-3 flex gap-4 text-start justify-start items-center text-lg font-medium ${currentPath === "/Shipment" ? 'text-[#739072] rounded-lg  bg-white hover:text-[#739072] focus:z-10 focus:ring-2 focus:ring-white focus:text-[#739072] dark:text-[#739072] dark:hover:text-white dark:hover:bg-white' : 'text-white rounded-lg bg-[#739072] hover:bg-white hover:text-[#739072] focus:z-10 focus:ring-2 focus:ring-white focus:text-white dark:text-white dark:hover:text-white dark:hover:bg-white'}`}>
                                    <TbTruckDelivery className={`${currentPath === "/Shipment" ? 'text-[#739072]' : 'text-white'} w-[32px] h-[32px] pr-2 group-hover:text-[#739072]`} />
                                    Shipment
                                </a>
                            </li>
                            <li className={`absolute flex items-center justify-center inset-x-0 mt-[345px] ${currentPath === "/User" || currentPath === "/add-user" || currentPath.startsWith("/edit-user") ? 'active' : ''}`}>
                                <a href="/User" type="button" className={`group w-[80%] p-3 flex gap-4 text-start justify-start items-center text-lg font-medium ${currentPath === "/User" || currentPath === "/add-user" || currentPath.startsWith("/edit-user") ? 'text-[#739072] rounded-lg  bg-white hover:text-[#739072] focus:z-10 focus:ring-2 focus:ring-white focus:text-[#739072] dark:text-[#739072] dark:hover:text-white dark:hover:bg-white' : 'text-white rounded-lg bg-[#739072] hover:bg-white hover:text-[#739072] focus:z-10 focus:ring-2 focus:ring-white focus:text-white dark:text-white dark:hover:text-white dark:hover:bg-white'}`}>
                                    <LuUser2 className={`${currentPath === "/User" || currentPath === "/add-user" || currentPath.startsWith("/edit-user") ? 'text-[#739072]' : 'text-white'} w-[28px] h-[28px] group-hover:text-[#739072]`} />
                                    User
                                </a>
                            </li>

                            <li className="absolute w-full -inset-x-1 bottom-0">
                                <a type="button" id="logOut" href="/login"
                                    className="gap-3 w-52 py-1 mb-5 flex items-center justify-center m-auto rounded-md bg-[#4F6F52] hover:bg-[#2e3a2f] text-white p-2 pt-2 pb-2">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </aside>
            <div className=" pl-[280px] h-screen p-5">
                <div className="bg-slate-50 rounded shadow-lg h-full">{children}</div>
            </div>
        </>
    );
};

export default Sidebar;
