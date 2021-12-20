export const config = {
  BASE_URL: 'http://justabook.iptime.org:3000/',
  DEV_URL: 'http://localhost:3000/',
  FETCH_HEADER_CONFIG: {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
  },
}

export const API = {
  GET_ETF_LIST: 'etf/list',
  GET_STOCK_LIST: 'etf/stock',
}
