
import React from 'react';
import Container from '../../Shared/Container/Container';


const WhatUserSay = () => {
    const data=[
                    { text: "HabitForge completely changed my morning routine. I'm finally consistent!", author: "Alex R." },
                    { text: "The streak feature keeps me motivated even on my laziest days.", author: "Jamie L." },
                    { text: "Simple, beautiful, and effective. Highly recommended for students.", author: "Sam K." },
                ]
    return (
       <Container>
         <section className={`py-20 `}>
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">What Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.map((t, i) => (
                    <div key={i} className={`p-6 rounded-xl shadow-sm relative `}>
                        <div className="text-teal-500 text-4xl absolute top-4 left-4 opacity-30">"</div>
                        <p className="mb-4 mt-4 italic opacity-80">{t.text}</p>
                        <div className="font-bold text-teal-600">- {t.author}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>
       </Container>
    );
};

export default WhatUserSay;