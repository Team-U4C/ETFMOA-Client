import { config, API } from '../config'

export async function getDetailInfo(name) {
  const res = await fetch(
    config.DEV_URL + API.GET_DETAIL + `?name=${encodeURIComponent(name)}`,
    config.FETCH_HEADER_CONFIG
  )
  const resJSon = await res.json()
  if (resJSon.code === 200) return resJSon.data
}
