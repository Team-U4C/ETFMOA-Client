import { config, API } from '../config'

export async function getETFList() {
  const res = await fetch(config.DEV_URL + API.GET_ETF_LIST, config.FETCH_HEADER_CONFIG)
  const resJSon = await res.json()
  if (resJSon.code === 200) return resJSon.data
}

export async function getStockList() {
  const res = await fetch(config.DEV_URL + API.GET_STOCK_LIST, config.FETCH_HEADER_CONFIG)
  const resJSon = await res.json()
  if (resJSon.code === 200) return resJSon.data
}

export async function getTop10(country, category) {
  const res = await fetch(
    config.DEV_URL + API.GET_TOP_10 + `?category=${category}&country=${country}`,
    config.FETCH_HEADER_CONFIG
  )
  const resJSon = await res.json()
  if (resJSon.code === 200) return resJSon.data
}

export async function getIndex() {
  const res = await fetch(config.DEV_URL + API.GET_INDEX, config.FETCH_HEADER_CONFIG)
  const resJSon = await res.json()
  if (resJSon.code === 200) return resJSon.data
}
