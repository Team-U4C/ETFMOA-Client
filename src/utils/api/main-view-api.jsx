import { config, API } from '../config'

export function getETFList() {
  fetch(config.DEV_URL + API.GET_ETF_LIST, config.FETCH_HEADER_CONFIG)
    .then(
      (res) => res.json(),
      (err) => console.log(err)
    )

    .then((res) => {
      console.log(res)
      if (res.code === '200') {
        console.log(res)
      }
    })
}
