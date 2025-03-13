import { Email, GitHub, LinkedIn } from '@/components/shared/icons';
import Link from '@/components/shared/link';
import { SITE } from '@/constants';
import { cn } from '@/lib/utils';

import TechStacks from './tech-stacks';

const Biography = () => {
  return (
    <>
      <p>Hi there! Thanks for visiting my digital home on the internet.</p>
      <p>
      I’m Abish Karki, a 16-year-old passionate web developer from Itahari, Nepal. While my primary focus is web development, I am currently learning machine learning to expand my skill set. I believe in the power of technology to shape the future, and I’m always eager to dive into new areas of learning.


      </p>
      <p>
        I’m currently in grade 11 at{' '}
        <Link
          href="https://www.godawari.edu.np/"
          className="text-blue-400 hover:underline"
        >
          Susma Godwari College
        </Link>
        , and when I’m not studying, I’m coding, experimenting, and learning
        something new. I’m particularly fond of working with tools like{' '}
        <Link href="https://reactjs.org/">React.js</Link>,{' '}
        <Link href="https://nextjs.org/">Next.js</Link>,{' '}
        <Link href="https://www.typescriptlang.org/">TypeScript</Link>, and{' '}
        <Link href="https://tailwindcss.com/">Tailwind CSS</Link>, but I also
        have a growing interest in areas like artificial intelligence and game
        development.
      </p>
      <p>
        Whether it’s building websites, learning new programming languages, or
        exploring different technologies, I’m always looking for ways to improve
        and expand my skills. I love the challenge of solving complex problems
        and bringing ideas to life with code.
      </p>
      <p>
        Outside of coding, I enjoy reading, gaming, and listening to music.
        These activities help me stay balanced and inspire my creativity. I
        believe in having a healthy work-life balance, which helps me stay
        energized and motivated for my projects.
      </p>

      <h2 className={cn('font-cal text-2xl', 'lg:text-3xl')}>Tech Stack</h2>
      <TechStacks />

      <h2 className={cn('font-cal text-2xl', 'lg:text-3xl')}>Let's Connect</h2>
      <p>
        I’m always open to new ideas, collaborations, or even just a chat about
        tech! Feel free to reach out to me via email at{' '}
        <Link
          href={`mailto:${SITE.author.email}?subject=k xa Abish!`}
          className={cn('underline')}
        >
          {SITE.author.email}
        </Link>{' '}
        or connect with me on social media.
      </p>
      <div className={cn('my-2 flex items-center gap-4')}>
        <Link
          href={SITE.author.github.url}
          className={cn(
            'text-muted-foreground transition-colors duration-200',
            'hover:text-foreground',
          )}
        >
          <GitHub className={cn('size-5')} />
        </Link>
        <Link
          href={SITE.author.linkedIn}
          className={cn(
            'text-muted-foreground transition-colors duration-200',
            'hover:text-foreground',
          )}
        >
          <LinkedIn className={cn('size-5')} />
        </Link>
        <Link
          href={`mailto:${SITE.author.email}?subject=Hi Abish!`}
          className={cn(
            'text-muted-foreground transition-colors duration-200',
            'hover:text-foreground',
          )}
        >
          <Email className={cn('size-5')} />
        </Link>
      </div>

      <h2 className={cn('font-cal mt-8 text-2xl', 'lg:text-3xl')}>
        Acknowledgements
      </h2>
      <p>
        A huge thanks to all the amazing websites and people who have inspired
        me to keep learning and building. Some of the sites that inspired this
        one are:
      </p>
      <ul className="mt-2 list-disc space-y-2 pl-5">
        <li>
          <a
            href="https://manishtamang.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text font-medium text-transparent decoration-pink-500 decoration-wavy hover:underline"
          >
            manishtamang.com
          </a>
          , one of the first portfolios that inspired me to also build one
        </li>
        <li>
          <a
            href="https://leerob.io"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 decoration-blue-600 decoration-dotted hover:underline"
          >
            Lee Rob's website
          </a>
          , back when I was learning how to build a blog
        </li>
        <li>
          <a
            href="https://anishde.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-emerald-600 decoration-emerald-600 decoration-dashed hover:underline"
          >
            anishde.dev
          </a>
          , portfolio
        </li>
        <li>
          <a
            href="https://www.joshwcomeau.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-amber-600 decoration-amber-600 decoration-solid hover:underline"
          >
            Josh W. Comeau's blog
          </a>
          , and micro-interactions
        </li>
      </ul>
    </>
  );
};

export default Biography;
