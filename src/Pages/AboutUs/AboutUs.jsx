import React from 'react';
import Container from '../../Components/Shared/Container/Container';
import { useNavigate } from 'react-router';
import Logo from '../../Components/Shared/Logo/Logo';

const AboutUs = () => {

    const navigate=useNavigate();
    return (
        <Container>
            <div className="animate-fade-in max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">About Habit Tracker</h1>
        <div className={`p-8 rounded-lg dark:bg-gray-800 shadow-md `}>
            <p className="text-lg mb-6 leading-relaxed opacity-80">
                HabitForge was born from a simple idea: <strong>Consistency is the key to success.</strong> 
                We believe that small, daily actions compound into massive results over time. Our mission is to provide 
                a simple, beautiful, and effective tool to help you build the habits that shape your future.
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
            <ul className="list-disc pl-6 space-y-2 opacity-80 mb-8">
                <li>Simplicity in design and function.</li>
                <li>Community support and shared growth.</li>
                <li>Data-driven progress tracking.</li>
                <li>Privacy and user-first development.</li>
            </ul>
            <div className="text-center">
                <button onClick={() => navigate("/")} className="text-teal-600 font-bold hover:underline">Back to Home</button>
            </div>
        </div>
    </div>
        </Container>
    );
};

export default AboutUs;