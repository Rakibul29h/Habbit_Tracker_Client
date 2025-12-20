import React from 'react';
import logoImg from '../../../assets/Habit Tracker Logo.png'
const Logo = () => {
    return (
        <div className='flex items-center gap-2'>
            <img className='w-5 md:w-8' src={logoImg} alt="Logo" />
            <div className='text-lg md:text-2xl font-bold'>
                <span>Habit</span>
                <span className='text-teal-600'>Tracker</span>
            </div>
        </div>
    );
};

export default Logo;