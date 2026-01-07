import React from 'react';
import Container from '../../Shared/Container/Container';


const HowITWork = () => {
    return (
        <Container>
             <section className={`py-20 `}>
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6 rounded-2xl shadow-sm dark:shadow-white/30">
                    <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                    <h3 className="text-xl font-bold mb-3">Create a Habit</h3>
                    <p className="opacity-70">Choose from templates or create your own custom habit to track.</p>
                </div>
                <div className="p-6 rounded-2xl shadow-sm dark:shadow-white/30">
                    <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                    <h3 className="text-xl font-bold mb-3">Track Daily</h3>
                    <p className="opacity-70">Check in every day to mark your progress and build your streak.</p>
                </div>
                <div className="p-6 rounded-2xl shadow-sm dark:shadow-white/30">
                    <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                    <h3 className="text-xl font-bold mb-3">Earn Rewards</h3>
                    <p className="opacity-70">Unlock badges and visualize your success as you grow.</p>
                </div>
            </div>
        </div>
      </section>
        </Container>
    );
};

export default HowITWork;