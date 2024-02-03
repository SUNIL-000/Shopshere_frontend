import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavItem from './NavItem'
import Login from './Login';
import Logout from './Logout';
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
    const user = 0;
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className='py-3 '>
            <nav className='flex justify-between bg-white  sticky items-center w-[95vw] md:w-[80vw] px-4  py-2 mx-auto  shadow-lg rounded-[50px] '>
                <Link to={''} className=' font-bold uppercase flex justify-center gap-2 drop-shadow-md text-lg md:text-xl items-center  '>
                    <span><img src="/trolley.png" alt="" height={28} width={28} /></span>
                    <span>Shopshere</span>
                </Link>

                <div>
                    <NavItem />
                </div>


                <div>
                    {user == 3 ? <Login /> :
                        <div className=' relative '>

                            <button onClick={() => { setIsOpen(!isOpen), console.log(isOpen) }} className='flex items-center py-2 gap-1 md:gap-3
                         text-[#4a4848] hover:text-[#D98880] font-bold transition text-md md:text-lg'>
                                <FaUserAlt style={{ fontSize: "25px" }} />
                            </button>
                            {/* <dialog open={isOpen} className=' left-[-30px] bg-white py-3 px-1 rounded-md flex flex-col gap-2 shadow-sm '> */}

                            <dialog open={isOpen} className=' inset-x-0 z-20  bg-white  px-1 rounded-md shadow-sm '>


                                <div className="flex items-center justify-center w-auto  absolute -left-[100px]   md:-left-20 ">
                                    <div
                                        className="w-full max-w-sm rounded-lg bg-white p-3 drop-shadow-xl divide-y "
                                    >
                                        <div aria-label="header" className="flex space-x-4 items-center p-4">
                                            <div aria-label="avatar" className="flex mr-auto items-center space-x-4">

                                                <div className=" flex flex-col flex-1 ">
                                                    <div className="font-medium relative text-xl leading-tight text-gray-900">

                                                        <span className="truncate l- uppercase text-lg text-[#D98880] relative pr-2">
                                                            Sunil kumar sahoo

                                                        </span>

                                                    </div>
                                                    <p className="font-normal text-base leading-tight text-gray-500 truncate">
                                                        sunilxyz@gmail.com
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                        <div aria-label="navigation" className="py-1">
                                            <nav className="grid gap-1">
                                                <Link
                                                    href="/"
                                                    className="flex items-center leading-6 space-x-3 py-2 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
                                                >
                                                  
                                                    <span>Settings</span>
                                                </Link>


                                            </nav>
                                        </div>

                                        <div aria-label="footer" className="pt-1">
                                            <button
                                                type="button"
                                                className="flex items-center space-x-3 py-2 px-4 w-full leading-6 text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
                                            >
                                                
                                                <span>Logout</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </dialog>

                        </div>}


                </div>

            </nav>
        </header>
    )
}

export default Header