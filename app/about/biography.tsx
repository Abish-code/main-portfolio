'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

import { Email, GitHub, LinkedIn } from '@/components/shared/icons';
import Link from '@/components/shared/link';
import { SITE } from '@/constants';
import { cn } from '@/lib/utils';

import TechStacks from './tech-stacks';

const Biography = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="space-y-8"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Introduction Section */}
      <motion.section variants={item}>
        <motion.p variants={item} className="text-lg font-medium">
          Hi there! Thanks for visiting my digital home on the internet.
        </motion.p>

        <motion.p variants={item} className="mt-4">
          I'm <span className="text-primary font-medium">Abish Karki</span>, a
          16-year-old passionate web developer from Itahari, Nepal. While my
          primary focus is web development, I am currently learning machine
          learning to expand my skill set. I believe in the power of technology
          to shape the future, and I'm always eager to dive into new areas of
          learning.
        </motion.p>

        <motion.p variants={item} className="mt-4">
          I'm currently study in grade 11 at{' '}
          <Link
            href="https://www.godawari.edu.np/"
            className="group relative inline-flex cursor-pointer items-center text-blue-400"
            onMouseEnter={() => setHoveredLink('godawari')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Susma Godwari College
            <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-blue-400 transition-transform duration-300 group-hover:scale-x-100"></span>
            <ArrowUpRight
              className={cn(
                'ml-0.5 h-3 w-3 transition-all duration-300',
                hoveredLink === 'godawari'
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-1 opacity-0',
              )}
            />
          </Link>
          , and when I'm not studying, I'm coding, experimenting, and learning
          something new. I'm particularly fond of working with tools like{' '}
          <Link
            href="https://reactjs.org/"
            className="group relative inline-flex cursor-pointer items-center text-[#61DAFB]"
            onMouseEnter={() => setHoveredLink('react')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            React.js
            <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[#61DAFB] transition-transform duration-300 group-hover:scale-x-100"></span>
            <ArrowUpRight
              className={cn(
                'ml-0.5 h-3 w-3 transition-all duration-300',
                hoveredLink === 'react'
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-1 opacity-0',
              )}
            />
          </Link>
          ,{' '}
          <Link
            href="https://nextjs.org/"
            className="group relative inline-flex cursor-pointer items-center text-white"
            onMouseEnter={() => setHoveredLink('next')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Next.js
            <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100"></span>
            <ArrowUpRight
              className={cn(
                'ml-0.5 h-3 w-3 transition-all duration-300',
                hoveredLink === 'next'
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-1 opacity-0',
              )}
            />
          </Link>
          ,{' '}
          <Link
            href="https://www.typescriptlang.org/"
            className="group relative inline-flex cursor-pointer items-center text-[#3178C6]"
            onMouseEnter={() => setHoveredLink('typescript')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            TypeScript
            <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[#3178C6] transition-transform duration-300 group-hover:scale-x-100"></span>
            <ArrowUpRight
              className={cn(
                'ml-0.5 h-3 w-3 transition-all duration-300',
                hoveredLink === 'typescript'
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-1 opacity-0',
              )}
            />
          </Link>
          , and{' '}
          <Link
            href="https://tailwindcss.com/"
            className="group relative inline-flex cursor-pointer items-center text-[#38BDF8]"
            onMouseEnter={() => setHoveredLink('tailwind')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Tailwind CSS
            <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[#38BDF8] transition-transform duration-300 group-hover:scale-x-100"></span>
            <ArrowUpRight
              className={cn(
                'ml-0.5 h-3 w-3 transition-all duration-300',
                hoveredLink === 'tailwind'
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-1 opacity-0',
              )}
            />
          </Link>
          , but I also have a growing interest in areas like artificial
          intelligence and game development.
        </motion.p>
      </motion.section>

      {/* Professional Interests Section */}
      <motion.section variants={item}>
        <motion.p variants={item}>
          Whether it's building websites, learning new programming languages, or
          exploring different technologies, I'm always looking for ways to
          improve and expand my skills. I love the challenge of solving complex
          problems and bringing ideas to life with code.
        </motion.p>
      </motion.section>

      {/* Personal Interests Section */}
      <motion.section variants={item}>
        <motion.p variants={item}>
          Outside of coding, I enjoy reading, gaming, and listening to music.
          These activities help me stay balanced and inspire my creativity. I
          believe in having a healthy work-life balance, which helps me stay
          energized and motivated for my projects.
        </motion.p>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section variants={item}>
        <motion.h2
          variants={item}
          className={cn(
            'font-cal relative inline-block cursor-pointer text-2xl',
            'lg:text-3xl',
          )}
        >
          Tech Stack
          <span className="bg-primary/30 absolute -bottom-1 left-0 h-0.5 w-full rounded-full"></span>
        </motion.h2>

        <motion.div variants={item} className="mt-6">
          <TechStacks />
        </motion.div>
      </motion.section>

      {/* Let's Connect Section */}
      <motion.section variants={item}>
        <motion.h2
          variants={item}
          className={cn(
            'font-cal relative inline-block cursor-pointer text-2xl',
            'lg:text-3xl',
          )}
        >
          Let's Connect
          <span className="bg-primary/30 absolute -bottom-1 left-0 h-0.5 w-full rounded-full"></span>
        </motion.h2>

        <motion.p variants={item} className="mt-4">
          I'm always open to new ideas, collaborations, or even just a chat
          about tech! Feel free to reach out to me via email at{' '}
          <Link
            href={`mailto:${SITE.author.email}?subject=k xa Abish!`}
            className={cn(
              'group relative inline-flex cursor-pointer items-center',
            )}
            onMouseEnter={() => setHoveredLink('email')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {SITE.author.email}
            <span className="bg-primary absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            <ArrowUpRight
              className={cn(
                'ml-0.5 h-3 w-3 transition-all duration-300',
                hoveredLink === 'email'
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-1 opacity-0',
              )}
            />
          </Link>{' '}
          or connect with me on social media.
        </motion.p>

        <motion.div
          variants={item}
          className={cn('my-4 flex items-center gap-4')}
        >
          <Link
            href={SITE.author.github.url}
            className={cn(
              'text-muted-foreground hover:bg-primary/10 cursor-pointer rounded-full p-2 transition-all duration-300',
              'hover:text-foreground group relative',
            )}
          >
            <span className="bg-primary/5 absolute inset-0 scale-0 rounded-full transition-transform duration-300 group-hover:scale-100"></span>
            <GitHub className={cn('relative z-10 size-5')} />
          </Link>
          <Link
            href={SITE.author.linkedIn}
            className={cn(
              'text-muted-foreground hover:bg-primary/10 cursor-pointer rounded-full p-2 transition-all duration-300',
              'hover:text-foreground group relative',
            )}
          >
            <span className="bg-primary/5 absolute inset-0 scale-0 rounded-full transition-transform duration-300 group-hover:scale-100"></span>
            <LinkedIn className={cn('relative z-10 size-5')} />
          </Link>
          <Link
            href={`mailto:${SITE.author.email}?subject=Hi Abish!`}
            className={cn(
              'text-muted-foreground hover:bg-primary/10 cursor-pointer rounded-full p-2 transition-all duration-300',
              'hover:text-foreground group relative',
            )}
          >
            <span className="bg-primary/5 absolute inset-0 scale-0 rounded-full transition-transform duration-300 group-hover:scale-100"></span>
            <Email className={cn('relative z-10 size-5')} />
          </Link>
        </motion.div>
      </motion.section>

      {/* Acknowledgements Section - with boxes and no left dots */}
      <motion.section variants={item}>
        <motion.h2
          variants={item}
          className={cn(
            'font-cal relative inline-block cursor-pointer text-2xl',
            'lg:text-3xl',
          )}
        >
          Acknowledgements
          <span className="bg-primary/30 absolute -bottom-1 left-0 h-0.5 w-full rounded-full"></span>
        </motion.h2>

        <motion.p variants={item} className="mt-4">
          A huge thanks to all the amazing websites and people who have inspired
          me to keep learning and building. Some of the sites that inspired this
          one are:
        </motion.p>

        <motion.ul variants={item} className="mt-6 space-y-3 pl-0">
          <li className="group cursor-pointer rounded-lg border border-pink-500/30 p-3 transition-all duration-300 hover:border-pink-500/50 hover:bg-pink-500/5">
            <a
              href="https://manishtamang.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
              onMouseEnter={() => setHoveredLink('manish')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text font-medium text-transparent decoration-pink-500 decoration-wavy group-hover:underline">
                manishtamang.com
              </span>
              <ArrowUpRight
                className={cn(
                  'ml-1 h-3 w-3 transition-all duration-300',
                  hoveredLink === 'manish' ? 'opacity-100' : 'opacity-0',
                )}
              />
              <span className="text-muted-foreground ml-2 text-sm">
                one of the first portfolios that inspired me to also build one
              </span>
            </a>
          </li>

          <li className="group cursor-pointer rounded-lg border border-blue-600/30 p-3 transition-all duration-300 hover:border-blue-600/50 hover:bg-blue-600/5">
            <a
              href="https://leerob.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
              onMouseEnter={() => setHoveredLink('leerob')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <span className="font-medium text-blue-600 decoration-blue-600 decoration-dotted group-hover:underline">
                Lee Rob's website
              </span>
              <ArrowUpRight
                className={cn(
                  'ml-1 h-3 w-3 transition-all duration-300',
                  hoveredLink === 'leerob' ? 'opacity-100' : 'opacity-0',
                )}
              />
              <span className="text-muted-foreground ml-2 text-sm">
                back when I was learning how to build a blog
              </span>
            </a>
          </li>

          <li className="group cursor-pointer rounded-lg border border-emerald-600/30 p-3 transition-all duration-300 hover:border-emerald-600/50 hover:bg-emerald-600/5">
            <a
              href="https://anishde.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
              onMouseEnter={() => setHoveredLink('anish')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <span className="font-medium text-emerald-600 decoration-emerald-600 decoration-dashed group-hover:underline">
                anishde.dev
              </span>
              <ArrowUpRight
                className={cn(
                  'ml-1 h-3 w-3 transition-all duration-300',
                  hoveredLink === 'anish' ? 'opacity-100' : 'opacity-0',
                )}
              />
              <span className="text-muted-foreground ml-2 text-sm">
                portfolio
              </span>
            </a>
          </li>

          <li className="group cursor-pointer rounded-lg border border-amber-600/30 p-3 transition-all duration-300 hover:border-amber-600/50 hover:bg-amber-600/5">
            <a
              href="https://www.joshwcomeau.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
              onMouseEnter={() => setHoveredLink('josh')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <span className="font-medium text-amber-600 decoration-amber-600 decoration-solid group-hover:underline">
                Josh W. Comeau's blog
              </span>
              <ArrowUpRight
                className={cn(
                  'ml-1 h-3 w-3 transition-all duration-300',
                  hoveredLink === 'josh' ? 'opacity-100' : 'opacity-0',
                )}
              />
              <span className="text-muted-foreground ml-2 text-sm">
                and micro-interactions
              </span>
            </a>
          </li>
        </motion.ul>
      </motion.section>
    </motion.div>
  );
};

export default Biography;
