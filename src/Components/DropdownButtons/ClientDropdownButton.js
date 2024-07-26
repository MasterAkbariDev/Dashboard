import React from 'react'
import { ChevronBarLeft, Gear, Person } from 'react-bootstrap-icons'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const ClientDropdownButton = ({isOpen , setOpen}) => {

  const [t] = useTranslation('global')

  return (
    <div  onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className={`${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} z-10 transition-all duration-1000 bg-[#4d4f5c] w-[215px] p-[30px_30px_20px] absolute top-[77px] ltr:right-0 rtl:left-0 text-right rounded-lg`}>
        <p className='text-[#828bb2] font-light text-[12px] lg:text-[14px]'>{t("WelcomeAdmin")}</p>
        <h5 className='text-[12px] text-white mt-1'>AliAkbar Akbari</h5>
        <div className='mt-20px pt-10px text-white text-[14px] text-right border-t border-[#79838b]'>
            <Link className='flex items-center py-10px' to='/'><span className='w-full'>{t("MyProfile")}</span><Person size={22} className='ml-20px' /></Link>
            <Link className='flex items-center py-10px' to='/'><span className='w-full'>{t("Settings")}</span><Gear size={22} className='ml-20px' /></Link>
            <Link className='flex items-center py-10px' to='/'><span className='w-full'>{t("LogOut")}</span><ChevronBarLeft size={22} className='ml-20px' /></Link>
        </div>
    </div>
  )
}

export default ClientDropdownButton