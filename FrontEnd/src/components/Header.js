import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
function Header() {
  const navigate=useNavigate()
    const [navBarActive,setNavBarActive]=useState(false)
  return (

        <div className='headerMain'  style={navBarActive?{height:'fit-content',}:{height:'5rem'}}>
        <img src="https://preview.colorlib.com/theme/franclin/assets/img/logo/logo.png.webp" alt="" />
        <a href="/" id='home' className='nav'>Home</a>
        <a  className='nav service' style={{position:'relative'}}>Services
        <div className='serviceDropDown' style={{backgroundColor:'rgba(0,0,0,0.4)',width:'9rem'}}>
          <div><p onClick={()=>navigate('/houseKeeping')}>House Keeping</p> </div>
          <div><p onClick={()=>navigate('/securityGuards')}>Security Guards</p> </div>
        </div>
        </a>
        <a href="/clients" className='nav clients'>Clients</a>
        <a href="/gallery" className='nav'>Gallery</a>
        <a href="/about"  className='nav'>About</a>
        <a href="/contact"  className='nav'>Contact Us</a>
        <span onClick={()=>setNavBarActive(!navBarActive)} className='hamburger'><MenuIcon ></MenuIcon></span> 
    </div>
  )
}

export default Header