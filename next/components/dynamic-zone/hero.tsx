'use client';
import React from 'react';
import Link from 'next/link';
import ShootingStars from '../decorations/shooting-star';
import StarBackground from '../decorations/star-background';
import FirstSectionBackground from '../decorations/first-section-background';

import { Heading } from '../elements/heading';
import { Subheading } from '../elements/subheading';
import { Button } from '../elements/button';
import { Cover } from '../decorations/cover';
import { motion } from 'framer-motion';

export const Hero = ({
  heading,
  sub_heading,
  CTAs,
  locale,
}: {
  heading: string;
  sub_heading: string;
  CTAs: any[];
  locale: string;
}) => {
  return (
    <div className="h-screen overflow-hidden relative flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <FirstSectionBackground />
        <ShootingStars />
      </motion.div>

      <Subheading className="font-bold text-center mt-2 md:mt-6 text-base md:text-xl text-muted  max-w-3xl mx-auto relative z-10">
        <div className="rounded-3xl border border-[#3A2416] bg-[#3A2416] shadow-[2px_4px_16px_0px_rgba(58,36,22,0.06)_inset] p-4 ">
          {sub_heading}
        </div>
      </Subheading>
      <div className="flex space-x-2 items-center mt-8">
        {CTAs &&
          CTAs.map((cta) => (
            <Button
              key={cta?.id}
              as={Link}
              href={`/${locale}${cta.URL}`}
              {...(cta.variant && { variant: cta.variant })}
            >
              {cta.text}
            </Button>
          ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-80 w-full bg-gradient-to-t from-[#3A2416] to-transparent" />
    </div>
  );
};
