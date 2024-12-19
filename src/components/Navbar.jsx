import React from 'react'
import logo from "../../src/assets/logo.png"
import Container from './Layouts/Container'

const Navbar = () => {
  return (
    <nav>
        <Container>
            <div className='flex justify-between items-center py-8'>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <ul className='flex gap-x-10 mr-[608px] font-primary font-bold text-base text-[#767676] '>
                        <li className='text-primary hover:text-primary cursor-pointer'>Home</li>
                        <li className='text-[#767676] hover:text-primary cursor-pointer'>Shop</li>
                        <li className='text-[#767676] hover:text-primary cursor-pointer'>About</li>
                        <li className='text-[#767676] hover:text-primary cursor-pointer'>Contacts</li>
                        <li className='text-[#767676] hover:text-primary cursor-pointer'>Journal</li>
                    </ul>
                </div>
            </div>
        </Container>
    </nav>
  )
}

export default Navbar