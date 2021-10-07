import {request} from "./request";

export function getHomeMiltidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params:{
      type,
      page
    }
  })
}
