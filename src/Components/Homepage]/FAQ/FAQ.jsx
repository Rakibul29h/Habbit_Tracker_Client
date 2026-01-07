import React from 'react';
import Container from '../../Shared/Container/Container';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {

    const question = [
                    { q: "Is HabitForge free to use?", a: "Yes! The core features are completely free for all users." },
                    { q: "Can I track habits on mobile?", a: "Absolutely. Our website is fully responsive for all devices." },
                    { q: "How do streaks work?", a: "Complete a habit daily to increase your streak. Miss a day, and it resets!" },
                ]
    return (
       <Container>
         <section className={`py-16 `}>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {question.map((item, i) => (
                    <div key={i} className={`p-4 rounded-lg border `}>
                        <h4 className="font-bold flex items-center gap-2"><HelpCircle size={16} className="text-teal-500"/> {item.q}</h4>
                        <p className="mt-2 text-sm opacity-70 ml-6">{item.a}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
       </Container>
    );
};

export default FAQ;