import React from 'react'
import NavbarStyle from "./Footer.module.scss"
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillMail } from 'react-icons/ai';
import { FaClock } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer>
        <section>
             <div className={NavbarStyle.left_footer}>
                <ul>
                    <li><IoLogoWhatsapp/> +58 412 680 0717 / +58 269 4161537</li>
                    <li><AiFillMail/> medicardonca@gmail.com</li>
                    <li><FaClock/> Lunes a Viernes de 8:00am a 12:00pm y 2:00pm a 6:00pm</li>
                    <li><FaLocationDot/> Callejon Comercio, entre Av. Jacinto Lara y Jofre Paul, 
                    Edificio Medicardon C.A.</li>
                </ul>

            </div>
            <div className={NavbarStyle.rigth_footer}>
                <img src="/public/assets/mini_logo.png" alt=""/>
                <h3>Medicardon C.A.</h3>
                <p>RIF J-31728068-7</p>
            </div>
        </section>
        <div className={NavbarStyle.creatorCredits}>
            <p>© 2025 Desarollada por Carlos Colmenares</p>
        </div>
    
    </footer>
  )
}

export default Footer
