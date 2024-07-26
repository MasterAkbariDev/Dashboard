import React, { useState } from 'react'
import { Search } from 'react-bootstrap-icons'
import { useTranslation } from 'react-i18next'

const SearchInput = () => {

  const [value,setValue] = useState('')
  const [t] = useTranslation('global')

  return (
    <div className='hidden sm:block ltr:ml-11 lg:rtl:mr-11'>
      <button className='text-nav p-2'><Search size={20} /></button>
      <input value={value} onChange={(e) => setValue(e.target.value)} className='rounded outline-none border-0 pl-2' placeholder={t("Search")} />
    </div>
  )
}

export default SearchInput