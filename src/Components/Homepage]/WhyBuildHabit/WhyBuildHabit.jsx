import { Award, ShieldCheck, Target, Zap } from 'lucide-react';
import React from 'react';
import BenefitCard from './BenefitCard';

const WhyBuildHabit = () => {
    return (
        <div>
            <div className="my-20 md:my-30">
            <h2 className="text-3xl font-bold text-center mb-12">Why Build Habits?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <BenefitCard icon={<Target />} title="Better Focus" desc="Clear your mind and concentrate on what matters." />
                <BenefitCard icon={<ShieldCheck />} title="Reduced Stress" desc="Routine reduces cognitive load and anxiety." />
                <BenefitCard icon={<Zap />} title="More Energy" desc="Healthy habits fuel your body and mind." />
                <BenefitCard icon={<Award />} title="Achieve Goals" desc="Consistent action leads to milestone achievement." />
            </div>
        </div>
        </div>
    );
};

export default WhyBuildHabit;