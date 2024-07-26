import React from 'react'

const Input = ({value, setValue, placeholder}) => {
    return (
        <input value={value} onChange={(e) => setValue(e.target.value)} className='w-full rounded outline-none border-0 py-10px px-20px' placeholder={placeholder} />
    )
}

export default Input