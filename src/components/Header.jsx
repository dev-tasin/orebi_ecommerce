import React from 'react'
import Container from './Layouts/Container'
import { HiBars3BottomLeft } from "react-icons/hi2";
import Search from './Layouts/Search';
import { IoSearchSharp } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";
import { IoMdPerson } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";




const Header = () => {
  return (
    <section className='bg-[#F5F5F3]'> 
        <Container>
            <div className='flex justify-between py-[25px]'>
                <div className='flex items-center gap-x-2.5 text-primary font-primary text-base'>
                    <HiBars3BottomLeft className='text-xl'/>
                    Shop by Category
                </div>
                <div className='relative'>
                    <Search className='w-[601px] py-4 px-5 bg-white text-primary placeholder:text-[#C4C4C4] font-primary text-xl rounded' placeholder='Search Products'/>
                    <IoSearchSharp className='absolute top-5 right-5 text-2xl cursor-pointer'/>
                </div>
                <div className='flex items-center gap-x-10'> 
                    <div className='flex items-center cursor-pointer'>
                        <IoMdPerson className='text-2xl'/>
                        <GoTriangleDown className='text-xl'/>
                    </div>
                    <FaShoppingCart className='text-2xl cursor-pointer'/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Header