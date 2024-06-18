import React, { useState } from 'react'
import './sidebar.scss'
import logo from '../../assets/icon/logo.svg'
import briefcase from '../../assets/icon/briefcase.png'
import down from '../../assets/icon/downarr.png'
import home from '../../assets/icon/dashboard.png'
import SidebarOptions from './SidebarOptions'
import { customerData, businessData, settings } from './SidebarData'
import { Link } from 'react-router-dom'

const MobileSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <div className='sidebars'>
             <div className='logo'>
                <Link to='/login'><img src={logo} alt='logo' /></Link>
            </div>
            <button className='sidebars-bars' onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div>
        <div className={`sidebars-menu ${isOpen ? 'open' : 'closed'}`}>
            <div className='sidebars-menu-close'>
                <button onClick={() => setIsOpen(!isOpen)}>✕</button>
            </div>
            <div>
                <div  className='sidebar-switch'>
                    <img src={briefcase} alt='switch organization' />
                    <p>Switch Organization</p>
                    <img src={down} alt='down arrow' /> 
                </div>

                <div className={`not-active`}>
                    <SidebarOptions src={home} alt='dashboard' text='Dashboard' />
                </div>


                <h2>Customers</h2>
                {customerData.map((item, index) => (
                    <div key={index} className={`not-active ${index === 0 && " active "}`}>
                        <SidebarOptions src={item.img} alt={item.alt} text={item.text} />
                    </div>
                ))}

                <h2>Businesses</h2>
                {businessData.map((item, index) => (
                    <div key={index} className={`not-active`}>
                        <SidebarOptions src={item.img} alt={item.alt} text={item.text} />
                    </div>
                ))}

                <h2>Settings</h2>
                {settings.map((item, index) => (
                    <div key={index} className='not-active'>
                        <SidebarOptions src={item.img} alt={item.alt} text={item.text} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MobileSidebar