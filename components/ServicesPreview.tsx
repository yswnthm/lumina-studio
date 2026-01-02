import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';

export const ServicesPreview: React.FC = () => {
    const navigate = useNavigate();
    // We only want to show the first 3 services on the preview
    const featuredServices = SERVICES.slice(0, 3);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading
                    title="Our Expertise"
                    subtitle="Curated photography for life's defining moments."
                />

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {featuredServices.map((service) => (
                        <div
                            key={service.id}
                            className="group p-8 border border-stone-100 bg-stone-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <h3 className="font-heading font-bold text-xl text-stone-900 mb-4 group-hover:text-stone-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-stone-600 mb-6 font-light leading-relaxed">
                                {service.description}
                            </p>
                            <div className="w-12 h-0.5 bg-stone-200 group-hover:w-full group-hover:bg-stone-300 transition-all duration-500" />
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button onClick={() => navigate('/services')} variant="outline">
                        View All Services <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
};
