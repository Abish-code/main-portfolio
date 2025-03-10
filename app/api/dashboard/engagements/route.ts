import { countAllReactions } from '@/actions/reactions';
import { countAllViews } from '@/actions/views';
import { response } from '@/lib/server';
import type { APIErrorResponse, APISingleResponse } from '@/types/server';
import type { EngagementStats } from '@/types/stats';

export const dynamic = 'force-dynamic';

export const GET = async () => {
  try {
    const [views, reactions] = await Promise.all([
      countAllViews(),
      countAllReactions(),
    ]);

    return response<APISingleResponse<EngagementStats>>({
      data: {
        views,
        reactions,
      },
    });
  } catch (error) {
    return response<APIErrorResponse>({
      message: error instanceof Error ? error.message : 'Internal Server Error',
    });
  }
};
