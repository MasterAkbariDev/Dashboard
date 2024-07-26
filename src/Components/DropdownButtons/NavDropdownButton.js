import React from 'react';
import { ChevronUp } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NavDropdownButton = ({ name, subButtons, isOpen, onClick, icon }) => {
  const [t] = useTranslation('global');

  return (
    <li className="relative mb-2">
      <button
        className="w-full text-left p-[15px_25px] text-[15px] font-normal flex justify-between items-center text-nav"
        onClick={onClick}
      >
        <span className="mr-2 rtl:ml-2">{icon}</span>
        <div className='w-3/4 flex justify-between items-center'>
          <span>{t(name)}</span>
          <ChevronUp size={20} className={`transition-transform duration-700 ${isOpen ? '-rotate-180' : 'rotate-0'}`} />
        </div>
      </button>
      <div
        className={`transition-all duration-700 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}
        style={{ position: 'relative', zIndex: isOpen ? 10 : 1 }}
      >
        <ul className="pl-[75px] rtl:pr-[75px]">
          {subButtons.map((button, idx) => (
            <li key={idx} className='py-[10px] text-[13px] font-normal text-nav'>
              <Link to={button.path}>{t(button.name)}</Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default NavDropdownButton;
