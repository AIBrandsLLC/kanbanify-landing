import React from 'react'

interface FeatureSectionProps {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    reverse?: boolean;
}

export default function FeatureSection({ title, description, image, imageAlt, reverse = false }: FeatureSectionProps) {
  return (
    <div className="overflow-hidden bg-white dark:bg-transparent py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className={reverse ? 'lg:order-2' : 'lg:order-1'}>
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">Key Capability</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{title}</p>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                {description}
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <button className="text-sm font-semibold leading-6 text-slate-900 dark:text-white group">
                  Learn more <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          </div>
          <div className={`${reverse ? 'lg:order-1' : 'lg:order-2'} flex items-start justify-center lg:justify-center`}>
            <div className="w-full max-w-xl">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
