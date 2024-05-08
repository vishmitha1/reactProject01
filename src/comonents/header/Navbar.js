import { FaBeer } from 'react-icons/fa';
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
// import { NavLink } from 'react-router-dom';

const NavbarItem=({name})=>{
  return <p className=' px-6 cursor-pointer hover:text-gray-300 transition-all ease-in-out  ' >{name}</p>
}

function Navbar() {
  return (
    <div className='p-3 text-gray-100  bg-gray-800 sticky flex flex-row gap-3 justify-between items-center' >
        <FaBeer className='' />
        <div className='flex flex-row gap-3'>
          <NavbarItem name='Store' />
          <NavbarItem name='Contact' />
          <NavbarItem name='Help' />
        </div>
        <div className='flex flex-row gap-3'>
          <IoIosSearch />
          <CiShoppingCart />
        </div>
        
    </div>
  )
}

export default Navbar
