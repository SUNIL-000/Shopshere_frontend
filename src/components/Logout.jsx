import React from 'react'
import { IoMdLogOut } from "react-icons/io";
const Logout = () => {
    return (
        <button type='button' className='flex items-center gap-1 bg-[#000000df] hover:bg-[#000000c8] 
        rounded-[20px] text-[white] px-3 py-1 font-semibold uppercase '><IoMdLogOut /> Logout</button>
    )
}

export default Logout