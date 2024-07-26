import React, { useState } from 'react';
import User_Icon from '../../../Data/Images/client_img.png'
import Input from '../../../Components/Inputs/Input';
import { useTranslation } from 'react-i18next';

const Chat = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [message, setMessage] = useState('')
    const [t] = useTranslation('global')
    
    return (
        <div className="flex lg:flex-row flex-col justify-between h-screen">

            <div className="lg:w-2/4 bg-white p-4 ">
                <h2 className="text-2xl font-semibold mb-4">{t("ChatList")}</h2>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={t("Search")}
                    className="w-full p-2 border border-gray-300 rounded mb-4 outline-none"
                />
                <div className="space-y-4 mt-6">
                    {Array(6).fill().map((_, index) => (
                        <div key={index} className="flex items-center space-x-2 cursor-pointer transition duration-300 hover:translate-x-[15px]">
                            <img
                                src={User_Icon}
                                alt="User"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">Travor James</h3>
                                <p className="text-gray-500">I know you are doing great in the course.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:w-2/4 mt-24 lg:mt-0 bg-white p-4 flex flex-col">
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <img
                            src={User_Icon}
                            alt="User"
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">Travor James</h3>
                            <p className="text-gray-500">{t("Yesterday")} {t("At")} 6:33 pm</p>
                        </div>
                    </div>
                    <div className="border border-[#1e50ec] p-30px rounded-lg mb-4 text-[#676b84] leading-[26px]">
                        <p>Dear KK,</p>
                        <p>Thank you for your update.</p>
                        <p>We do not sell or share your details without your permission...</p>
                        <p className="mt-2">Regards,</p>
                    </div>

                    <div className='mt-12'>
                        <div dir='rtl' className="flex items-center space-x-2 mb-4">
                            <img
                                src={User_Icon}
                                alt="User"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">Agatha Kristy</h3>
                                <p className="text-gray-500">{t("Yesterday")} {t("At")} 6:33 pm</p>
                            </div>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg mb-4 text-[#676b84]">
                            <p>Dear KK,</p>
                            <p>Thank you for your update.</p>
                            <p>We do not sell or share your details without your permission...</p>
                            <p className="mt-2">Regards,</p>
                        </div>
                    </div>

                    <div className="mt-auto flex">
                        <Input value={message} setValue={setMessage} placeholder={t("WriteMessage")} />
                        <button className="py-2 px-5 bg-blue-500 text-white rounded-lg">{t("Send")}</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Chat;
