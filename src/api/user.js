import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: '/v1/user/login',
    method: 'post',
    data
  })
}

// 获取用户信息
export function getInfo(token) {
  return request({
    url: '/v1/user/info',
    method: 'get',
    params: { token }
  })
}

// 登出
export function logout() {
  return request({
    url: '/v1/user/logout',
    method: 'post'
  })
}
