import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

const InfoCard = ({ title, price, saved, bg }) => {

    const [displayedPrice, setDisplayedPrice] = useState(1);
    const [t] = useTranslation('global')

    useEffect(() => {
        let start = 1;
        const end = price;
        const duration = 1000;
        const stepTime = 50;

        const increment = (start, end, duration) => {
            const steps = duration / stepTime;
            const stepValue = (end - start) / steps;

            let current = start;
            const interval = setInterval(() => {
                current += stepValue;
                if (current >= end) {
                    clearInterval(interval);
                    setDisplayedPrice(end);
                } else {
                    setDisplayedPrice(Math.round(current));
                }
            }, stepTime);
        };

        increment(start, end, duration);
    }, [price]);

    const formatPrice = (number) => {
        return number.toLocaleString();
    };

    return (
        <div className={`py-[41px] px-30px relative infoCard rounded-lg text-white flex-1 transition-all duration-500`} style={{ backgroundColor: bg }}>
            <h4 className='text-[17px] font-bold mb-[12px]'>{t(title)}</h4>
            <h3 className='text-[30px] leading-[40px] font-black mb-[7px]'>$ <span>{formatPrice(displayedPrice)}</span></h3>
            <p className='text-[13px] font-light]'>{t('Saved')} {saved}%</p>
        </div>
    )
}

export default InfoCard