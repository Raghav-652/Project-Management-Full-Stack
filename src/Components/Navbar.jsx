import React from 'react'
import { MdOutlineSearch } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenSidebar } from '../Redux/Slices/authSlice';
import UserAvatar from './UserAvatar';
import NotificationPanel from './NotificationPanel';
const Navbar = () => {

    const {user} = useSelector ((state) => state.auth);
    const dispatch = useDispatch();
  return (
    <div className='fex justify-between items-center bg-white px-4 py-3 2xl:py-4 sticky z-11 top-0 border-10 border-white shadow-md'>
<div className='flex gap-4'>
<button
onClick={() => dispatch (setOpenSidebar(true))}
className='text-2xl text-gray-500 block md:hidden'>
          ☰

</button>

<div className='w-64 2xl:w-[400px] flex items-center py-3 px-3 gap-3 rounded-lg border-4 border-white shadow-md bg-[#f3f4f6]'>
<MdOutlineSearch className='text-gray-500 text-xl' />

<input type="text"
placeholder='Search....'
className='flex-3 top-6 outline-none bg-transparent placeholder:text-gray-500 text-gray-800'
/>


</div>
</div>

<div className='flex gap-2 items-center mr-9'>
<NotificationPanel />


<UserAvatar />
</div>

    </div>
  )
}

export default Navbar;