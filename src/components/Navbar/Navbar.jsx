import React from 'react'
import { FaHome } from 'react-icons/fa';
import { AiFillProduct } from 'react-icons/ai';
import { BiSolidContact } from 'react-icons/bi';
import NavbarStyle from "./Navbar.module.scss"

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="/public/assets/logo.png" alt="" />
        </div>
        <div className={NavbarStyle.icons}> 
            <div>
                <FaHome className={NavbarStyle.icon}/>
                <p>Home</p>
            </div>
            <div>
                <AiFillProduct className={NavbarStyle.icon}/>
                <p>Productos</p>
            </div>
            <div>
                <BiSolidContact className={NavbarStyle.icon} />
                <p>Contacto</p>
            </div>
        </div>
    </nav>

  )
}

export default Navbar
