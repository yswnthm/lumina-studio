import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's discuss your project. We are currently booking for the upcoming season."
        />

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-stone-500">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-stone-50 border border-stone-200 p-3 text-stone-800 focus:outline-none focus:border-stone-800 transition-colors rounded-none"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-stone-500">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-stone-50 border border-stone-200 p-3 text-stone-800 focus:outline-none focus:border-stone-800 transition-colors rounded-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-stone-500">
              Subject (Optional)
            </label>
            <input
              type="text"
              id="subject"
              className="w-full bg-stone-50 border border-stone-200 p-3 text-stone-800 focus:outline-none focus:border-stone-800 transition-colors rounded-none"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-stone-500">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full bg-stone-50 border border-stone-200 p-3 text-stone-800 focus:outline-none focus:border-stone-800 transition-colors rounded-none resize-y"
            ></textarea>
          </div>

          <div className="pt-4 text-center">
            <Button type="submit">Send Message</Button>
          </div>
        </form>

        <div className="mt-16 pt-10 border-t border-stone-100 flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-center text-stone-500 text-sm">
          <div>
            <h5 className="font-bold text-stone-900 uppercase tracking-widest mb-2">Location</h5>
            <p>Rajpur Road, Mumbai<br />Maharashtra, India</p>
          </div>
          <div>
            <h5 className="font-bold text-stone-900 uppercase tracking-widest mb-2">Contact</h5>
            <p>hello@luminastudio.com<br />+91 90326 90321</p>
          </div>
        </div>
      </div>
    </section>
  );
};