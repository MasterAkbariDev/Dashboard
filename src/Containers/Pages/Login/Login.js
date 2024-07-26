import React, { useState } from 'react'
import { Facebook, Google } from 'react-bootstrap-icons'
import Input from '../../../Components/Inputs/Input'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [t] = useTranslation('global')

    return (
        <div className='flex justify-center items-center w-full h-full p-30px mb-30px'>
            <div className='w-full lg:w-1/2 border border-[#CACED5] rounded'>
                <div className='px-[23px] py-30px'>
                    <h5 className='text-[22px] font-semibold'>{t("Login")}</h5>
                </div>
                <div className='px-30px py-[35px] text-center'>
                    <div className='text-white'>
                        <button className='w-full bg-[#3b5998] rounded-lg flex justify-center items-center h-10 mb-[12px]'><Facebook className='ltr:mr-4 rtl:ml-4' />{t("LoginWithFaceBook")}</button>
                    </div>
                    <div className='text-white'>
                        <button className='w-full bg-[#4285f4] rounded-lg flex justify-center items-center h-10'><Google className='ltr:mr-4 rtl:ml-4' />{t("LoginWithGmail")}</button>
                    </div>
                    <div className='border_style'>
                        <span>{t("Or")}</span>
                    </div>
                    <div className='mb-[21px]'>
                        <Input value={email} setValue={setEmail} placeholder={t("EnterYourEmail")} />
                    </div>
                    <div className='mb-[21px]'>
                        <Input value={password} setValue={setPassword} placeholder={t("Password")} />
                    </div>
                    <button className='bg-[#3b76ef] text-white hover:bg-white hover:text-[#3b76ef] w-full h-10 rounded border border-[#3b76ef] transition duration-500'>{t("Login")}</button>
                    <p className='mt-[25px] text-[16px] font-medium text-[#707070]'>{t("NeedAnAccount")} <Link className='text-[#4d4f5c]' to='/Register'>{t("SignUp")}</Link></p>
                    <div className='mt-[25px] '>
                        <Link className='text-[#4d4f5c]' to='/ForgetPassword'>{t("ForgetPassword")}?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login