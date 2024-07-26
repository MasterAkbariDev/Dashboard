import React from 'react';
import InfoCard from '../../../Components/Cards/InfoCard/InfoCard';
import MixedChart from '../../../Components/Charts/MixedChart/MixedChart';
import DoughnutChart from '../../../Components/Charts/DoughnutChart/DoughnutChart';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const infoCards = [{
    title: 'TotalIncome',
    price: 579000,
    saved: '25',
    bg: '#3b76ef'
}, {
    title: 'TotalExpenses',
    price: 79000,
    saved: '25',
    bg: '#63c7ff'
}, {
    title: 'CashOnHand',
    price: 92000,
    saved: '25',
    bg: '#a66dd4'
}, {
    title: 'NetProfitMargin',
    price: 179000,
    saved: '25',
    bg: '#6dd4b1'
}];

const Minimal = () => {

    const [t] = useTranslation('global')

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[15px] mb-[30px]'>
                {infoCards.map((item, index) => {
                    return <InfoCard key={index} title={item.title} price={item.price} saved={item.saved} bg={item.bg} />
                })}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4">
                <div className="bg-white p-4 shadow-md rounded-lg border border-[#CACED5]">
                    <MixedChart
                        title={t("APAndARBalance")}
                        barData={[200, 400, 300, 600, 400]}
                        lineData={[20, 40, 30, 50, 40]}
                        labels={['Jan 01', 'Jan 04', 'Jan 07', 'Jan 10', 'Jan 13']}
                    />
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center justify-center border border-[#CACED5]">
                        <div className='mb-[25px]'>
                            <h3 className='font-bold text-[20px] text-primary'>{t("ofIncomeBudget")}</h3>
                        </div>
                        <DoughnutChart percentage={67} label="Income Budget" />
                        <div className='flex justify-between items-center w-4/5'>
                            <div className='mb-20px'>
                                <div>
                                    <h5 className='text-[13px] text-[#43425d] font-medium'>{t("Balance")}</h5>
                                    <p className='text-[#4d4f5c] text-[12px] opacity-50 font-normal'>-$18,570</p>
                                </div>
                            </div>
                            <div className='mb-20px'>
                                <div>
                                    <h5 className='text-[13px] text-[#43425d] font-medium'>{t("Balance")}</h5>
                                    <p className='text-[#4d4f5c] text-[12px] opacity-50 font-normal'>$31,430</p>
                                </div>
                            </div>
                        </div>
                        <div className='pt-[1px] mt-[4px]'>
                            <p className='leading-[24px] text-[14px] font-light'>
                                <Link className='text-[12px] text-[#3b86ff] font-semibold' to='/'>{t('ViewFullReport')}</Link>
                            </p>
                        </div>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center justify-center border border-[#CACED5]">
                        <div className='mb-[25px]'>
                            <h3 className='font-bold text-[20px] text-primary'>{t("ofExpensesBudget")}</h3>
                        </div>
                        <DoughnutChart percentage={48} label="Expenses Budget" />
                        <div className='flex justify-between items-center w-4/5'>
                            <div className='mb-20px'>
                                <div>
                                    <h5 className='text-[13px] text-[#43425d] font-medium'>{t("Balance")}</h5>
                                    <p className='text-[#4d4f5c] text-[12px] opacity-50 font-normal'>-$18,570</p>
                                </div>
                            </div>
                            <div className='mb-20px'>
                                <div>
                                    <h5 className='text-[13px] text-[#43425d] font-medium'>{t("Balance")}</h5>
                                    <p className='text-[#4d4f5c] text-[12px] opacity-50 font-normal'>$31,430</p>
                                </div>
                            </div>
                        </div>
                        <div className='pt-[1px] mt-[4px]'>
                            <p className='leading-[24px] text-[14px] font-light'>
                                <Link className='text-[12px] text-[#3b86ff] font-semibold' to='/'>{t('ViewFullReport')}</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 shadow-md rounded-lg border border-[#CACED5]">
                    <MixedChart
                        title={t("EBIT")}
                        barData={[20, 30, 40, 50, 60]}
                        lineData={[30, 40, 35, 60, 50]}
                        labels={['2019 Q1', '2019 Q2', '2019 Q3', '2019 Q4', '2020 Q1']}
                    />
                </div>
                <div className="bg-white p-4 shadow-md rounded-lg border border-[#CACED5]">
                    <MixedChart
                        title={t("CostOfGoodServices")}
                        barData={[30, 40, 50, 60, 70]}
                        lineData={[20, 30, 25, 50, 45]}
                        labels={['2019 Q1', '2019 Q2', '2019 Q3', '2019 Q4', '2020 Q1']}
                    />
                </div>
            </div>
        </div>
    );
}

export default Minimal;
