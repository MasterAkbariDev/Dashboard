import React, { useState, useRef } from 'react';

const FAQCard = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="overflow-hidden mb-4">
            <div
                className={`transition-all duration-300 rounded-full px-4 py-2 cursor-pointer text-lg font-semibold flex justify-between ${isOpen ? "bg-[#3b76ef] text-white" : "bg-white text-[#415094]"}`}
                onClick={toggleAnswer}
            >
                <div>
                    {question}
                </div>
                <div>
                    {isOpen ? "-" : "+"}
                </div>
            </div>
            <div
                ref={contentRef}
                style={{
                    maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
                    opacity: isOpen ? 1 : 0,
                }}
                className={`transition-all duration-300 ease-out overflow-hidden px-4 mt-5`}
            >
                <p className='ltr:ml-5 rtl:mr-5'>{answer}</p>
            </div>
        </div>
    );
};

export default FAQCard;
