import React, { useState } from 'react';
import User_Icon from '../../../Data/Images/client_img.png'
import { useTranslation } from 'react-i18next';

const data = [
    { id: 1, name: 'Mark Wyns', status: 'MoneyReceipt', message: 'Paymentreceived', date: '2024-07-26' },
    { id: 2, name: 'Mark Wyns', status: 'MoneyReceipt', message: 'Paymentreceived', date: '2024-07-25' },
    { id: 3, name: 'Mark Wyns', status: 'MoneyReceipt', message: 'Paymentreceived', date: '2024-07-24' },
    { id: 4, name: 'Mark Wyns', status: 'MoneyReceipt', message: 'Paymentreceived', date: '2024-07-23' },
    { id: 5, name: 'Mark Wyns', status: 'MoneyReceipt', message: 'Paymentreceived', date: '2024-07-22' },
    { id: 6, name: 'Mark Wyns', status: 'MoneyReceipt', message: 'Paymentreceived', date: '2024-07-21' },
    { id: 7, name: 'Mark Wyns', status: 'MoneyReceipt', message: 'Paymentreceived', date: '2024-07-20' },
    { id: 8, name: 'Mark Wyns', status: 'MoneyReceipt', message: 'Paymentreceived', date: '2024-07-19' },
    { id: 9, name: 'Mark Wyns', status: 'MoneyReceipt', message: 'Paymentreceived', date: '2024-07-18' },
    { id: 10, name: 'Ali', status: 'Money Receipt', message: 'Payment received', date: '2024-07-17' },
];

const MailBox = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedRow, setExpandedRow] = useState(null);
    const [t] = useTranslation('global')

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleRowClick = (id) => {
        setExpandedRow(expandedRow === id ? null : id);
    };

    return (
        <div className="p-4">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder={t('Search')}
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="rtl:text-right p-2 border-b w-1/12 text-left">#</th>
                            <th className="rtl:text-right p-2 border-b w-5/12 text-left">{t("Name")}</th>
                            <th className="rtl:text-right p-2 border-b w-6/12 text-left">{t("Status")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <React.Fragment key={item.id}>
                                <tr
                                    onClick={() => handleRowClick(item.id)}
                                    className="cursor-pointer hover:bg-gray-50"
                                >
                                    <td className="p-2 border-b">{index + 1}</td>
                                    <td className="p-2 border-b flex"><img className='w-9 ltr:mr-4 rtl:ml-4' alt='user' src={User_Icon} />{item.name}</td>
                                    <td className="p-2 border-b">{t(item.status)}</td>
                                </tr>
                                {expandedRow === item.id && (
                                    <tr>
                                        <td colSpan="3" className="p-4 border-b bg-gray-100">
                                            <div className="flex flex-col">
                                                <div className="font-semibold">{t('Message')}:</div>
                                                <div>{item.message}</div>
                                                <div className="mt-2 font-semibold">{t("Date")}:</div>
                                                <div>{item.date}</div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 flex justify-between">
                <div>{t("Showing")} {filteredData.length} {t("Of")} {data.length} {t("Entries")}</div>
                <div className="flex space-x-2">
                    <button className="px-3 py-1 border rounded">1</button>
                </div>
            </div>
        </div>
    );
}

export default MailBox;
