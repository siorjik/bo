export type EntityType<T> = {
  list: {
    items: T[],
    pageNumber: number,
    count: number,
  },
  listFetchStart: boolean,
  listFetchFinished: boolean,
  data?: T,
}

export type  ResultListType<T> = {
  items: T[],
  count: number,
  pageNumber: number,
}

export type RequestErrType = { message: string }
