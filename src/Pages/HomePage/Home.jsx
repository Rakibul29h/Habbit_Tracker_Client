import React from 'react';
import Banner from '../../Components/Homepage]/Banner';

import HabitSection from '../../Components/Homepage]/HabitSection/HabitSection';
import WhyBuildHabit from '../../Components/Homepage]/WhyBuildHabit/WhyBuildHabit';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HabitSection></HabitSection>
            <WhyBuildHabit></WhyBuildHabit>
        </div>
    );
};

export default Home;