import React from 'react';
import { motion } from 'framer-motion';

interface FeatureSectionProps {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    reverse?: boolean;
    badge?: string;
}

export default function FeatureSection({ title, description, image, imageAlt, reverse = false, badge }: FeatureSectionProps) {
  return (
    <div className="overflow-hidden bg-background-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={reverse ? 'lg:order-2' : 'lg:order-1'}
          >
            <div className="lg:max-w-lg">
              {badge && (
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
                  {badge}
                </span>
              )}
              <h2 className="font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl">
                {title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-text-light font-body">
                {description}
              </p>
              <div className="mt-8">
                <button className="text-base font-semibold leading-7 text-primary hover:text-primary-hover transition-colors group flex items-center gap-2">
                  Learn more{' '}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`${reverse ? 'lg:order-1' : 'lg:order-2'} flex items-start justify-center lg:justify-center`}
          >
            <div className="relative w-full max-w-xl rounded-2xl bg-background-alt/50 p-2 ring-1 ring-border shadow-xl">
               <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto rounded-xl shadow-sm object-cover bg-white [filter:hue-rotate(120deg)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
