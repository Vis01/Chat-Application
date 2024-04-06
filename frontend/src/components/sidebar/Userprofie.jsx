import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { useAuthContext } from "../../context/AuthContext";

import LogoutButton from "./LogoutButton";
const Userprofie = ({settoggelprofile}) => {
	const { authUser } = useAuthContext();
  return (
	    <div className='w-full h-screen  flex-col items-center justify-between text-gray-800 '>
		           <div className='w-full  h-24 flex  items-end py-3' >
					     <div onClick={()=>settoggelprofile(false)} className='flex justify-center items-center h-10 w-10 rounded-full cursor-pointer text-2xl ml-5 hover:bg-slate-100' > <FaArrowLeft /> </div>
						 <h1 className='text-2xl mx-auto'> Profile</h1>
					</div>
					<div className='flex justify-center items-center m-10' ><img src={authUser?.profilePic}  className='w-40 h-40 rounded-full' /></div>
					<div className='ml-8'>

						<h3 className='text-xl text-zinc-600'>Your name</h3>
						<h3 className='text-2xl'>{authUser ?.fullName}</h3>
						<h3 className='text-xl text-zinc-600'>Your username</h3>
						<h3 className='text-2xl'>{authUser ?.username}</h3>
					</div>
					<div className='flex justify-center m-10' >
					     <LogoutButton />
					</div>
   </div>

  )
}

export default Userprofie;

