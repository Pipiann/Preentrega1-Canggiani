import React from 'react'
import CartWidget from './CartWidget'
// import {CgMenuOreos} from 'react-icons/fa'
import "./styles/NavBar.css"

function NavBar(background) {
 const logo= "http://placekitten.com/g/200/300"
  return (
    <>
    <header className="header_background">
    <div className="header-container">

    </div>

{/* ------------boton de menu ---------------*/}
    {/* <div className='menu-button'>
        {/* <CgMenuOreos/> */}
   
    {/* <small>Menu</small>

    </div> */} 

    {/* /* ------------links de navegacion------------ */}
    <nav>
        <ul className="nav_container">
            <li className="nav_container_list">
                <a  className="nav_container_list_link" href="/">Inicio</a>
            </li>
            <li className="nav_container_list">
                <a  className="nav_container_list_link" href="/"> Productos <span className='arrow'></span></a>
            </li>
            <li className="nav_container_list">
                <a className="nav_container_list_link" href="/">Sobre Mi</a>
            </li>
            <li className="nav_container_list">
                <a  className="nav_container_list_link" href="/">Contacto</a>
            </li>
        </ul>
    </nav>
    {/* logo de la marca */}

    <div className='logo-container'>
        <img src={logo} alt="logo" />

    </div>


    {/* ----------------cart-widget--------------     */}

    <div>
        <CartWidget/>
    </div>

    </header>

    




    </>

   

  )
}



export default NavBar