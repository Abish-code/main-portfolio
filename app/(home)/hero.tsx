'use client';

import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import Container from '@/components/shared/container';
import FlipWords from '@/components/shared/flip-words';
import Link from '@/components/shared/link';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants';
import { cn } from '@/lib/utils';

import CurrentTechStack from './current-tech-stack';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={cn('bg-grid relative overflow-hidden py-16', 'lg:py-20')}>
      {/* Subtle background elements */}
      <div className="bg-primary/3 absolute top-0 right-0 h-1/3 w-1/3 rounded-full blur-3xl"></div>
      <div className="bg-primary/3 absolute bottom-0 left-0 h-1/4 w-1/4 rounded-full blur-3xl"></div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Left content area */}
          <div className={cn('font-cal lg:col-span-7')}>
            {/* Clean badge without dot/line */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-primary/5 text-foreground/80 mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium"
            >
              Exploring new technologies
            </motion.div>

            <motion.h1
              className={cn(
                'from-foreground via-foreground/90 to-foreground/70 mb-6 flex flex-col justify-center gap-1 bg-gradient-to-b to-90% bg-clip-text pb-2 text-4xl font-bold text-transparent',
                'sm:text-5xl',
                'lg:text-6xl',
              )}
              initial={{ x: -32, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span>
                Hi, I'm <span className={cn('text-primary')}>Abish!!</span>
              </span>
              <span>Web Developer</span>
            </motion.h1>

            <motion.div
              className={cn(
                'from-foreground via-foreground/90 to-foreground/70 bg-gradient-to-b to-90% bg-clip-text text-lg font-bold text-transparent',
                'md:text-xl',
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              I like to build{' '}
              <FlipWords
                words={['interactive', 'amazing', 'fantastic', 'beautiful']}
                className={cn('text-primary font-black')}
              />{' '}
              things with code. I enjoy learning about new technologies.
            </motion.div>

            {/* Enhanced action buttons */}
            <motion.div
              className={cn('mt-8 flex flex-wrap gap-4')}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button
                variant="default"
                asChild
                className={cn(
                  'group bg-primary/90 hover:bg-primary relative overflow-hidden transition-all duration-300',
                )}
              >
                <Link href={ROUTES.about}>
                  <span className="relative z-10 flex items-center">
                    Explore more{' '}
                    <ChevronRight
                      className={cn(
                        'ml-1 transition-transform duration-200 group-hover:translate-x-1',
                      )}
                    />
                  </span>
                  <span className="bg-foreground/10 absolute inset-0 translate-y-[101%] transition-transform duration-300 group-hover:translate-y-0"></span>
                </Link>
              </Button>

              <Button
                variant="outline"
                asChild
                className={cn(
                  'group border-primary/20 hover:border-primary/50 transition-all duration-300',
                )}
              >
                <Link href={ROUTES.projects || '#'}>
                  View Projects{' '}
                  <ExternalLink
                    className={cn(
                      'ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-[2px] group-hover:translate-y-[-2px]',
                    )}
                  />
                </Link>
              </Button>

              <Button
                variant="ghost"
                asChild
                className={cn(
                  'group hover:bg-primary/5 transition-all duration-300',
                )}
              >
                <Link
                  href="https://github.com/Abish-code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-1 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right image area with clean circular frame */}
          <motion.div
            className="relative flex justify-center lg:col-span-5 lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Clean circular frame */}
              <div
                className={cn(
                  'relative h-[220px] w-[220px] overflow-hidden rounded-full transition-all duration-500 sm:h-[240px] sm:w-[240px]',
                  'before:border-primary/20 before:absolute before:inset-0 before:rounded-full before:border before:transition-all before:duration-500',
                  isHovered && 'before:border-primary/30 before:scale-105',
                )}
              >
                {/* Image container */}
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/media/bonabrian/bonabrian.jpg"
                    alt="Abish - Web Developer"
                    fill
                    className={cn(
                      'object-cover transition-all duration-700 ease-in-out',
                      isHovered && 'scale-110 rotate-3',
                    )}
                  />

                  {/* Simple overlay */}
                  <div
                    className={cn(
                      'from-background/60 absolute inset-0 bg-gradient-to-t to-transparent transition-opacity duration-500',
                      isHovered ? 'opacity-30' : 'opacity-50',
                    )}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech stack section */}
        <motion.div
          className={cn('mt-16', 'lg:mt-20')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="mb-6 flex items-center">
            <h2 className="text-2xl font-bold">My Tech Stack</h2>
            <div className="from-border ml-4 h-px flex-grow bg-gradient-to-r to-transparent"></div>
          </div>

          <div className="bg-background/40 border-border/30 hover:border-primary/20 rounded-lg border p-6 backdrop-blur-sm transition-all duration-300">
            <CurrentTechStack />
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;
