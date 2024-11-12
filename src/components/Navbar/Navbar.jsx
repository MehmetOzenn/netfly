import './Style.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profileIMG from '../../assets/profile_img.png'
import caretIcon from '../../assets/caret_icon.svg'
import { useEffect, useRef } from 'react'
import { logOut } from '../../firebase'

const Navbar = () => {


  const navRef = useRef();



  useEffect(()=>{
    window.addEventListener('scroll',()=> {
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <div className="logo-area">
          <img src={logo}/>
        </div>
        <div className="navbar-items">
          <ul>
            <li>Home</li>
            <li>TV shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by languages</li>
          </ul>
        </div>
      </div>
      <div className="navbar-right">
        <div className="search-area">
          <img src={searchIcon} className='icons'/>
          <p>Children</p>
          <img src={bellIcon} className='icons'/>
          <div className="navbar-profile">
            <img src={profileIMG} className='profile'/>
            <img src={caretIcon}/>
            <div className="dropdown">
              <p onClick={()=>{logOut()}}>Sign out of Netflix</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar