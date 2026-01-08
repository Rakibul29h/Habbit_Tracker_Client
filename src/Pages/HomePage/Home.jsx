import React from 'react';


import HabitSection from '../../Components/Homepage]/HabitSection/HabitSection';
import WhyBuildHabit from '../../Components/Homepage]/WhyBuildHabit/WhyBuildHabit';
import Stats from '../../Components/Homepage]/Stats/Stats';
import Newsletter from '../../Components/Homepage]/Newsletter/Newsletter';
import Banner from './../../Components/Homepage]/Banner';
import HowITWork from '../../Components/Homepage]/HowItWork/HowITWork';
import WhatUserSay from '../../Components/Homepage]/WhatUserSay/WhatUserSay';
import FAQ from '../../Components/Homepage]/FAQ/FAQ';
import ReadyToForge from '../../Components/Homepage]/ReadyToForge/ReadyToForge';
import About from '../../Components/Homepage]/About/About';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HabitSection></HabitSection>
            <WhyBuildHabit></WhyBuildHabit>
            <Stats></Stats>
            <HowITWork></HowITWork>
            <WhatUserSay></WhatUserSay>
            <FAQ></FAQ>
            <About></About>
            <ReadyToForge></ReadyToForge>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;