import React, { useState } from 'react'
import SidebarButton from '../../Components/Sidebar/SidebarButton'
import SearchInput from '../../Components/Inputs/SearchInput/SearchInput'
import { ChatText, Bell } from 'react-bootstrap-icons'
import ClientImage from '../../Components/Client/ClientImage'
import Client_Icon from '../../Data/Images/client_img.png'
import ClientDropdownButton from '../../Components/DropdownButtons/ClientDropdownButton'
import LanguageDropdown from '../../Components/DropdownButtons/LanguageDropdon'

const Header = () => {

    const [clientDropdownIsOpen, setClientDropdown] = useState(false)

    const toggleDropdown = (state) => {
        setClientDropdown(state);
    }

    return (
        <div className='p-30px mx-30px my-[27px] flex justify-between items-center'>
            <div className='flex'>
                <SidebarButton />
                <SearchInput />
            </div>
            <div className='flex'>
                <div className='m-l25px-r35px flex'>
                    <LanguageDropdown languages={[{name:"English", code:'en' },{name:"فارسی" , code:"fa"}]} />
                    <button className='text-nav ltr:mr-[29px] rtl:ml-[29px]'><Bell size={25} /></button>
                    <button className='text-nav'><ChatText size={25} /></button>
                </div>
                <div className='relative'>
                    <ClientImage img={Client_Icon} setOpen={setClientDropdown} />
                    <ClientDropdownButton isOpen={clientDropdownIsOpen} setOpen={toggleDropdown} />
                </div>
            </div>
        </div>
    )
}

export default Header