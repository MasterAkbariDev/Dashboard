import React, { useEffect, useState } from 'react'
import { GlobeAmericas } from 'react-bootstrap-icons'
import { useTranslation } from 'react-i18next'

const LanguageDropdown = ({ languages }) => {

  const [isOpen, setOpen] = useState(false)

  const [currentLanguage, setCurrentLanguage] = useState(null)

  const { i18n } = useTranslation();

  useEffect(() => {
    setCurrentLanguage(i18n.language)
    setOpen(false)
  }, [i18n.language]);

  return (
    <div className='flex justify-center items-center ltr:mr-[29px] rtl:ml-[29px] relative'>
      <button onClick={() => setOpen((prev) => !prev)}><GlobeAmericas className='text-nav' size={25} /></button>
      <ul className={`shadow-md w-max h-fit absolute border rounded-xl z-10 top-[70px] text-center transition duration-300 bg-white overflow-hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        {languages.map((item, index) => {
          return <li key={index} onClick={() => i18n.changeLanguage(item.code)} className={`cursor-pointer w-full py-10px px-4 ${currentLanguage === item.code ? "bg-gray-200" : ""}`}>{item.name}</li>
        })}
      </ul>
    </div>
  )
}

export default LanguageDropdown