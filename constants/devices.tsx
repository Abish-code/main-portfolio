import { Laptop, Smartphone } from '@/components/shared/icons';
import { cn } from '@/lib/utils';

export const PAIR_DEVICES: Record<
  string,
  { icon: React.ReactNode; model: string; id: string }
> = {
  Computer: {
    icon: <Laptop className={cn('size-6')} />,
    model: 'acer aspire 3',
    id: 'abish karki1',
  },
  Smartphone: {
    icon: <Smartphone className={cn('size-6')} />,
    model: 'Realme c55',
    id: 'Abish karki',
  },
};
