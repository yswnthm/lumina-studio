import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const FAQS = [
    {
        question: "Do you travel for weddings and shoots?",
        answer: "Absolutely! We love to travel. While we are based in Bangalore, we regularly shoot weddings and projects across India and internationally. Travel fees are calculated based on location."
    },
    {
        question: "How long does it take to receive our photos?",
        answer: "For portrait sessions, the turnaround time is 2-3 weeks. For weddings, you can expect your full gallery within 6-8 weeks. We always send a sneak peek within 48 hours of your event!"
    },
    {
        question: "Do you provide raw files?",
        answer: "We believe in delivering a finished product that represents our artistic vision. Therefore, we do not provide RAW files. We ensure you receive high-resolution, beautifully edited images."
    },
    {
        question: "How do we book you?",
        answer: "To secure your date, we require a signed contract and a 50% retainer. Dates are booked on a first-come, first-served basis. Reach out via our contact form to get started!"
    }
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-stone-50">
            <div className="max-w-3xl mx-auto px-6">
                <SectionHeading
                    title="Common Questions"
                    subtitle="Everything you need to know about working with us."
                />

                <div className="mt-12 text-left space-y-4">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-stone-200 overflow-hidden transition-all duration-300"
                        >
                            <button
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-stone-50 transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-heading font-semibold text-stone-900 pr-8">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-stone-400 flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-stone-400 flex-shrink-0" />
                                )}
                            </button>

                            <div
                                className={`px-6 text-stone-600 font-light leading-relaxed transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
