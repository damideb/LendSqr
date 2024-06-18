import React from 'react'
import './sidebarOptions.scss'

interface Sidebar {
    src: string;
    alt: string;
    text: string;
}
const SidebarOptions = (props: Sidebar) => {
  return (
    <div className='sidebar-options'>
        <div className='sidebar-options-img'>
            <img src={props.src} alt={props.alt} />
        </div>
        <p>{props.text}</p>
    </div>
  )
}

export default SidebarOptions