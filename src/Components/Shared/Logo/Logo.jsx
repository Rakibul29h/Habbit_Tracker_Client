import React from 'react';
import { Flame } from 'lucide-react';
import { Link } from 'react-router';
const Logo = () => {
    return (
        <Link to={"/"} className='flex items-center gap-2'>
            <div>
                <Flame className='h-5 w-5 md:h-8 md:w-8 text-teal-500'></Flame>
            </div>
            <div className='text-lg md:text-2xl font-bold'>
                <span>Habit</span>
                <span className='text-teal-600'>Tracker</span>
            </div>
        </Link>
    );
};

export default Logo;