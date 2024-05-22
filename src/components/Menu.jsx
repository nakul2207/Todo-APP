import React from 'react';
import img from '../assets/Ai.png';
import { RiCalendarScheduleLine } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineTaskAlt } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export const Menu = () => {
  const navigate = useNavigate();


  return (
    <div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img src={img} alt="Man image" className="w-full h-full object-cover" />
          </div>
          <div className='flex flex-col text-center '>
            <h2 className='text-zinc-500 font-semibold text-sm '>Do-it</h2>
            <h1 className='text-[#51287f] font-semibold text-xl '>Guest</h1>
          </div>
          
        </div>
        <div className="line my-2 font-bold bg-[#A18AFF] rounded-xl ml-1 mr-3 h-1"></div>
        <div className='ml-4'>
            <div className='flex   mt-10' onClick={()=>{navigate("/")}}>
              <IoMdAddCircleOutline size={26}/>
              <h1 className='ml-2 text-zinc-500 cursor-pointer'>Add tasks</h1>
            </div>
            <div className='flex   mt-10 ' onClick={()=>{navigate("/gettodos")}}>
              <RiCalendarScheduleLine size={26}/>
              <h1 className='ml-2 text-zinc-500 cursor-pointer'>Scheduled tasks</h1>
            </div>
            <div className='flex   mt-10 ' onClick={()=>{navigate("/completedtodo")}}>
              <MdOutlineTaskAlt size={26}/>
              <h1 className='ml-2 text-zinc-500 cursor-pointer'>Completed tasks</h1>
            </div>
            <div className='flex mt-10 ' onClick={()=>{navigate("/settings")}}>
              <IoSettingsOutline size={26} />
              <h1 className='ml-2 text-zinc-500 cursor-pointer'>Settings</h1>
            </div>
        </div>


    </div>

  );
};


