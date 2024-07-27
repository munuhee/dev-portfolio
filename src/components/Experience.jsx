import React from 'react';
import Section from './Section';
import Heading from './Heading';
import { BackgroundCircles } from './design/Hero';

const Experience = () => {
  return (
    <Section id="experience" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Work Experience"
        />
        <div className="flex flex-wrap gap-12">
          <div className="flex-1 bg-n-8 p-8 rounded-xl shadow-lg border">
            <h3 className="text-2xl font-semibold mb-2">
              Freelance Software Developer
            </h3>
            <p className="mb-4">
              January 2023 - Present
            </p>
            <p className="">
              Designed and developed websites and web applications for various clients utilizing Python, JavaScript, Django, Flask, and WordPress.
              Implemented robust security measures, performed regular security audits, and provided comprehensive training sessions.
              Delivered tailored solutions and ongoing support, ensuring client satisfaction and engagement.
            </p>
          </div>
          <div className="flex-1 bg-n-8 p-8 rounded-xl shadow-lg border">
            <h3 className="text-2xl font-semibold mb-2">
              Sacco Clerk
            </h3>
            <p className="mb-4">
              Unison Sacco Ltd, Nanyuki Branch | January 2022 - April 2022
            </p>
            <p className="">
              Streamlined data analysis processes and assessed credit risk. Provided exceptional customer service, assisted in financial report preparation,
              supported audit processes, and managed member records. Enhanced the efficiency of daily operations and contributed to a seamless financial management system.
            </p>
          </div>
        </div>
      </div>
      <BackgroundCircles/>
    </Section>
  );
};

export default Experience;
