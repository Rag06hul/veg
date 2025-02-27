import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/Food Del/assets/assets'

const Navbar = () => {

  
  const [menu,setMenu] = useState("menu")
  return (
    <div className='Navbar'>
      <img src = {assets.logo} alt=""/>
      <ul className="Navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact-us</li>
        
        </ul>
        <div className="Navbar-right">
          <img src={assets.search_icon} alt=""/>
          <div className="Navbar-search-icon">
            <img src = {assets.basket_icon} alt=""/>
            <div className="dot"></div>
          </div>
          <button>sign in</button>
          </div>



         </div>
  )
}

export default Navbar
