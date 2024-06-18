import React from 'react'
import './sidebar.scss'
import briefcase from '../../assets/icon/briefcase.png'
import down from '../../assets/icon/downarr.png'
import home from '../../assets/icon/dashboard.png'
import SidebarOptions from './SidebarOptions'
import { customerData, businessData, settings } from './SidebarData'

const Sidebar = () => {

  return (
    <div className='sidebar'>
        <div  className='sidebar-switch'>
            <img src={briefcase} alt='switch organization' />
            <span>Switch Organization</span>
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
  )
}

export default Sidebar