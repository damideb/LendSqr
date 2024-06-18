import React from 'react'
import logo from '../../assets/icon/logo.svg'
import search from '../../assets/icon/search-icon.png'
import alarm from '../../assets/icon/alarm.svg'
import profile from '../../assets/icon/avatar.svg'
import drop from '../../assets/icon/dropdown.png'
import './nav.scss'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='header'>
        <div className='header-left'>
            <div className='header-left-img'>
                <Link to='/login'><img src={logo} alt='logo' /></Link>
            </div>
            <div className='header-left-input'>
                <input type='text' placeholder='Search for anything' />
                <div className='header-left-input-search'>
                    <img src={search} alt='search icon' />
                </div>
            </div>
        </div>
        <div className='nav-profile'>
            <p className='nav-profile-docs'>Docs</p>
            <div>
                <img src={alarm} alt='alarm icon' />
            </div>
            <div className='nav-profile-picture'>
                <img src={profile} alt='profile picture' />
                <div className='nav-profile-picture-user'>
                    <p>Adedeji</p>
                    <img src={drop} alt='dropdown' />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav