import React from 'react'

const ClientImage = ({img , setOpen}) => {
  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <img className='lg:max-w-[77px] max-w-[30px] rounded-full border-2 border-[#a5adc6]' src={img} alt='Client Icon' />
    </div>
  )
}

export default ClientImage