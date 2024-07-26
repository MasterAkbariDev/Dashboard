import React, { useEffect, useState } from 'react'
import { useSidebar } from '../../Context/SidebarContext';
import navItems from '../../Data/NavItems.json'
import { Boxes, GraphUp, HouseFill, Newspaper, Palette, PersonLinesFill, X } from 'react-bootstrap-icons';
import NavDropdownButton from '../DropdownButtons/NavDropdownButton.js';
import Logo_img from '../../Data/Images/logo.png'
import { useLocation } from 'react-router';

const iconMap = {
    Dashboard: <HouseFill size={20} />,
    Pages: <Newspaper size={20} />,
    Applications: <Boxes size={20} />,
    UIComponent: <Palette size={20} />,
    Widgets: <Palette size={20} />,
    Forms: <PersonLinesFill size={20} />,
    Charts: <GraphUp size={20} />,
};

const Sidebar = () => {
    const { isSidebarOpen, toggleSidebar } = useSidebar();
    const [openDropdown, setOpenDropdown] = useState(null);
    const location = useLocation()

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    useEffect(() => {
        toggleSidebar(false)
    }, [location.pathname])

    return (
        <nav className={`z-[9] w-[270px] h-screen fixed rtl:right-0 left-0 top-0 bg-white ${isSidebarOpen ? 'translate-x-0 shadow-sidebar' : '-translate-x-full rtl:translate-x-full'} lg:shadow-none lg:rtl:translate-x-0 lg:translate-x-0 lg:visible transition-transform duration-300 ease-in-out`}>
            <div className='flex justify-between p-30px m-30px relative'>
                <div className='flex justify-between items-center'>
                    <img src={Logo_img} alt='Logo' />
                </div>
                <button className='lg:hidden absolute rtl:-left-4 ltr:-right-4 -top-2 text-nav' onClick={toggleSidebar}><X size={40} /></button>
            </div>
            <ul className="mt-4">
                {navItems.map((item, index) => (
                    <NavDropdownButton
                        key={index}
                        name={item.name}
                        subButtons={item.subButtons}
                        isOpen={openDropdown === index}
                        onClick={() => toggleDropdown(index)}
                        icon={iconMap[item.name]}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar