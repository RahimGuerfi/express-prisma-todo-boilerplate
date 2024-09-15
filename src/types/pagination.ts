export type TPaginationMeta = {
  hasMore: boolean;
  totalCount: number;
  pageCount: number;
  from: number;
  to: number;
};

export type TPaginatedData<T> = {
  data: T[];
  paginationMeta: TPaginationMeta;
};
