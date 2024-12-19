import React, { useRef, useState } from 'react'
import Container from './Layouts/Container'
import { HiBars3BottomLeft } from "react-icons/hi2";
import Search from './Layouts/Search';
import { IoSearchSharp } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";
import { IoMdPerson } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect } from 'react';
import DropDown from './Layouts/DropDown';
import cartImg from "../../src/assets/cart_img.png"
import { RxCross2 } from "react-icons/rx";



const Header = () => {
    const categoryRef = useRef();
    const userRef = useRef();
    const cartRef = useRef();

    const [categoryShow , setCategoryShow] = useState(false);
    const [userShow , setUserShow] = useState(false);
    const [cartShow , setCartShow] = useState(false);

    useEffect(() =>{
        document.body.addEventListener("click" , (e) =>{
            if (categoryRef.current.contains(e.target)) {
                setCategoryShow(true);
            }else{
                setCategoryShow(false);
            }

            if (userRef.current.contains(e.target)) {
                setUserShow(true);
            }else{
                setUserShow(false);
            }

            if (cartRef.current.contains(e.target)) {
                setCartShow(true);
            }else{
                setCartShow(false);
            }
        });
    },[]);

  return (
    <section className='bg-[#F5F5F3]'> 
        <Container>
            <div className='flex justify-between py-[25px]'>
                <div className='flex items-center gap-x-2.5 text-primary font-primary text-base'>
                  <DropDown dropRef={categoryRef} className='cursor-pointer relative'>
                    <p className='flex items-center gap-x-2.5 text-primary font-primary text-base'>
                        <HiBars3BottomLeft className='text-xl'/>
                        Shop by Category
                    </p>
                    {
                        categoryShow &&
                        <ul className='absolute top-[40px] w-[263px] text-[#BEBEBE] font-primary text-base bg-primary'>
                            <li className='py-4 px-5 border-b border-[#2D2D2D] hover:text-white hover:mx-2.5 hover:font-bold ease-in duration-300'>Accesories</li>
                            <li className='py-4 px-5 border-b border-[#2D2D2D] hover:text-white hover:mx-2.5 hover:font-bold ease-in duration-300'>Furniture</li>
                            <li className='py-4 px-5 border-b border-[#2D2D2D] hover:text-white hover:mx-2.5 hover:font-bold ease-in duration-300'>Electronics</li>
                            <li className='py-4 px-5 border-b border-[#2D2D2D] hover:text-white hover:mx-2.5 hover:font-bold ease-in duration-300'>Clothes</li>
                            <li className='py-4 px-5 border-b border-[#2D2D2D] hover:text-white hover:mx-2.5 hover:font-bold ease-in duration-300'>Bags</li>
                            <li className='py-4 px-5 border-b border-[#2D2D2D] hover:text-white hover:mx-2.5 hover:font-bold ease-in duration-300'>Home appliances</li>
                        </ul>
                    }
                  </DropDown>
                </div>
                <div className='relative'>
                    <Search className='w-[601px] py-4 px-5 bg-white text-primary placeholder:text-[#C4C4C4] font-primary text-xl rounded' placeholder='Search Products'/>
                    <IoSearchSharp className='absolute top-5 right-5 text-2xl cursor-pointer'/>
                </div>
                <div className='flex items-center gap-x-10'> 
                    <DropDown dropRef={userRef} className='cursor-pointer relative'>
                    <div className='flex items-center cursor-pointer'>
                            <IoMdPerson className='text-2xl'/>
                            <GoTriangleDown className='text-xl'/>
                        {
                            userShow &&
                            <div className='absolute right-0 top-[40px] w-[200px] font-primary text-base bg-primary border'>
                                <p className='bg-primary text-white text-base font-primary py-4 text-center font-bold'>My Account</p>
                                <p className='bg-white text-primary text-base font-primary py-4 text-center font-bold'>Log Out</p>
                            </div>
                        }
                    </div>
                    </DropDown>
                    <DropDown  dropRef={cartRef} className='cursor-pointer relative'>
                        <FaShoppingCart className='text-2xl cursor-pointer'/>
                        {
                            cartShow &&
                            <div className='absolute right-0 top-[40px] w-[360px] font-primary text-base'>
                                <div className='flex justify-between items-center bg-[#F5F5F3] px-5 py-5'>
                                    <img src={cartImg} alt="" />
                                    <div className='-ml-6'>
                                        <p className='text-primary font-bold text-base'>Black Smart Watch</p>
                                        <p className='text-primary font-bold text-base'>$44.00</p>
                                    </div>
                                    <div>
                                        <RxCross2 className='text-2xl text-primary'/>
                                    </div>
                                </div>
                                <div className='bg-white px-5 py-5'>
                                    <div>
                                        <p className='text-[#767676] font-primary text-base'>Subtotal: <span className='font-primary text-base font-bold text-primary'>$44.00</span> </p>
                                    </div>
                                    <div className='flex justify-between items-center pt-3 '>
                                        <button className='py-4 px-10 text-primary font-bold text-sm border-2 border-black hover:bg-black hover:text-white ease-in duration-300'>View Cart</button>
                                        <button className='py-4 px-10 text-primary font-bold text-sm border-2 border-black hover:bg-black hover:text-white ease-in duration-300'>Checkout</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </DropDown>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Header