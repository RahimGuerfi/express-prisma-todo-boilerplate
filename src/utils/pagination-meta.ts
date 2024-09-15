import { TPaginationMeta } from '@/types';

export const paginationMeta = (
  totalCount: number,
  skip: number,
  take: number
) => {
  const meta: TPaginationMeta = {
    totalCount,
    from: totalCount > 0 ? skip + 1 : 0,
    to: Math.min(skip + take, totalCount),
    pageCount: take === 0 ? 0 : Math.ceil(totalCount / take),
    hasMore: skip + take < totalCount
  };

  return meta;
};
