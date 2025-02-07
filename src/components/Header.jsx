import React, { useContext, useState } from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { FaGripLines } from "react-icons/fa6";
import sideContext from '../context/index';
import chatContext from '../context/chats'
import { useNavigate } from 'react-router-dom';
import { PiChats } from "react-icons/pi";


const Header = () => {
const navigate = useNavigate()

const {side,setSide}=useContext(sideContext);
const {chats,setChats}=useContext(chatContext);
console.log("Sid eis " , chats);

const handelnav=(e)=>{
    console.log("create room");
    navigate('/')
}

  return (
    <div className='flex justify-between bg-blue-950 h-16 shadow-lg fixed w-full top-0  z-30'>
       <div className="nav--list p-3 cursor-pointer h-full overflow-hidden">
            <div className='flex'>
                <button className='px-4  sm:block text-white font-semibold text-xl' onClick={()=>setSide(!side)} >
                <FaGripLines />
                </button>
                
                <h3 id="logo" className='h-fit w-10 '>
                    <img src={logo} alt="Site Logo" className='h-fit '/>
                </h3>
            </div>
       </div>

        <div id="nav__links" className=' flex w-1/2 justify-around items-center'>
            <a className="nav__link text-white font-semibold text-lg hidden" href="/ ">
                Lobby
                <svg className='hidden' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ede0e0" viewBox="0 0 24 24"><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z"/></svg>
            </a>
            <button className="nav__link bg-blue-400 px-5 lg:py-2 h-fit py-2  mx-3 rounded-full text-white font-semibold text-base lg:text-lg" id="create__room__btn" onClick={()=>{handelnav()}}>
                Create Room
               <svg className='hidden' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ede0e0" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
            </button>
            <button className='px-4  sm:block text-white font-semibold text-4xl' onClick={()=>setChats(!chats)}>
            <PiChats />
            </button>
        </div>
    </div>
  )
}

export default Header
