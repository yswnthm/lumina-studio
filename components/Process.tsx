import React from 'react';
import { MessageSquare, Camera, Edit3, Heart } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const STEPS = [
    {
        id: 1,
        icon: MessageSquare,
        title: 'Connection',
        description: 'We start with a conversation to understand your vision, style, and expectations.'
    },
    {
        id: 2,
        icon: Edit3,
        title: 'Planning',
        description: 'We curate a mood board and timeline to ensure every detail is perfectly organized.'
    },
    {
        id: 3,
        icon: Camera,
        title: 'Creation',
        description: 'The shoot day. We guide you through poses and moments, making you feel completely at ease.'
    },
    {
        id: 4,
        icon: Heart,
        title: 'Delivery',
        description: 'We carefully edit and curate your gallery, delivering timeless images you will cherish.'
    }
];

export const Process: React.FC = () => {
    return (
        <section className="py-24 bg-stone-900 text-stone-100">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading
                    title="Our Process"
                    subtitle="A seamless experience from start to finish."
                    light
                />

                <div className="grid md:grid-cols-4 gap-8 mt-16">
                    {STEPS.map((step, index) => (
                        <div key={step.id} className="relative">
                            {/* Connector Line */}
                            {index < STEPS.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-stone-700 -z-10" />
                            )}

                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center mb-6 shadow-lg">
                                    <step.icon className="w-6 h-6 text-stone-300" />
                                </div>
                                <h3 className="font-heading font-bold text-lg mb-3 tracking-wide">
                                    {step.title}
                                </h3>
                                <p className="text-stone-400 font-light text-sm leading-relaxed px-4">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
