import React from 'react';

const BenefitCard = ({icon,title,desc}) => {
    return (
         <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
        <div className="text-teal-600 w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-teal-50 rounded-full">{icon}</div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
    </div>
    );
};

export default BenefitCard;