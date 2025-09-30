import React from 'react'
import { FaHome } from 'react-icons/fa';
import { AiFillProduct } from 'react-icons/ai';
import { BiSolidContact } from 'react-icons/bi';
import NavbarStyle from "./Navbar.module.scss"

const Navbar = () => {
  return (
    <nav>
        <section className={NavbarStyle.mainNav}>
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
        </section>
        <section className={NavbarStyle.categories}>
            <ul>
                <li>
                    <p>Traumatologia</p>
                </li>
                <li>
                    <p>Neurocirugia</p>
                </li>
                <li>
                    <p>Maxilofacial</p>
                </li>
                <li>
                    <p>Instrumental</p>
                </li>
                <li>
                    <p>Rehabilitacion</p>
                </li>

            </ul>
        </section>
        
    </nav>

  )
}

export default Navbar
