import React, { useState } from 'react'
import Input from '../../../Components/Inputs/Input'
import { useTranslation } from 'react-i18next'

const ForgetPassword = () => {
    const [email, setEmail] = useState('')
    const [t] = useTranslation('global')

    return (
        <div className='flex justify-center items-center w-full h-full p-30px mb-30px'>
            <div className='w-full lg:w-1/2 border border-[#CACED5] rounded'>
                <div className='px-[23px] py-30px'>
                    <h5 className='text-[22px] font-semibold'>{t("ForgetPassword")}</h5>
                </div>
                <div className='px-30px py-[35px] text-center'>
                    <div className='mb-[21px]'>
                        <Input value={email} setValue={setEmail} placeholder={t("EnterYourEmail")} />
                    </div>
                    <button className='mt-[25px] bg-[#3b76ef] text-white hover:bg-white hover:text-[#3b76ef] w-full h-10 rounded border border-[#3b76ef] transition duration-500'>{t("Send")}</button>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword