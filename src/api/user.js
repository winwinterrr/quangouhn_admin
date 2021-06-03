import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/qghn/admin/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/qghn/admin/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/qghn/admin/logout',
    method: 'post'
  })
}
