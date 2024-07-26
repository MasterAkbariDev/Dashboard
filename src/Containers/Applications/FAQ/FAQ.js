import React from 'react';
import FAQCard from '../../../Components/Cards/FAQCard/FAQCard';
import { useTranslation } from 'react-i18next';

const FAQSection = () => {

    const [t] = useTranslation('global')

    const numbers = []

    for (let i = 1; i <= 6; i++) {
        numbers.push(<li key={i}>{i}</li>);
    }

    return (
        <div className='pt-30px px-30px'>
            <h4>{t('FAQ')}</h4>
            <div className="space-y-4 mt-6">
                {numbers.map((item, index) => {
                    return <FAQCard key={index} question={`${t("Example")} ${index + 1}`} answer={t("Lorem")} />
                })}
            </div>
        </div>
    );
};

export default FAQSection;