import React from 'react'
import { List } from 'react-bootstrap-icons'
import { useSidebar } from '../../Context/SidebarContext';

const SidebarButton = () => {
    const { toggleSidebar } = useSidebar();

    return (
        <button className='lg:hidden' onClick={toggleSidebar} ><List className='text-black' size={25} /></button>
    )
}

export default SidebarButton