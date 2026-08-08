import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/services';
import ScrollReveal from '../components/ScrollReveal';

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      className="relative bg-light-pure rounded-t-[40px] md:rounded-t-[50px] lg:rounded-t-[60px] pt-24 pb-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <h2 className="text-display-md text-dark mb-16 lg:mb-24">
            WHAT WE DO
          </h2>
        </ScrollReveal>

        <div ref={containerRef} className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group border-t border-dark/10 py-8 lg:py-12 cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-12">
                {/* Number */}
                <span className="text-dark/40 text-sm font-medium tracking-wider">
                  {service.number}
                </span>

                {/* Title */}
                <h3 className="flex-1 text-heading-lg text-dark group-hover:translate-x-2 transition-transform duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="flex-1 text-body-md text-dark/60 group-hover:opacity-100 opacity-70 transition-opacity duration-300">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="hidden lg:block">
                  <ArrowUpRight className="w-6 h-6 text-dark/40 group-hover:text-dark group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
