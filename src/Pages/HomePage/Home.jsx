import React from 'react';


import HabitSection from '../../Components/Homepage]/HabitSection/HabitSection';
import WhyBuildHabit from '../../Components/Homepage]/WhyBuildHabit/WhyBuildHabit';
import Stats from '../../Components/Homepage]/Stats/Stats';
import Newsletter from '../../Components/Homepage]/Newsletter/Newsletter';
import Banner from './../../Components/Homepage]/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HabitSection></HabitSection>
            <WhyBuildHabit></WhyBuildHabit>
            <Stats></Stats>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;