import Container from '@/components/shared/container';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

const Loading = () => {
  return (
    <Container>
      <div className={cn('py-16', 'lg:py-20')}>
        <div className={cn('flex flex-col gap-y-4')}>
          <Skeleton className={cn('h-16 w-1/4')} />
          <Skeleton className={cn('h-8 w-full')} />
        </div>
      </div>
      <div className={cn('grid grid-cols-1 gap-4', 'md:grid-cols-2')}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className={cn('h-[435px] w-full rounded-xl')} />
        ))}
      </div>
    </Container>
  );
};

export default Loading;
