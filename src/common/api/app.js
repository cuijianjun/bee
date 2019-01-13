import {api} from './api'
// 获取app相关信息的函数
export function getApp(version) {
  return api.get('/api/v1/app/?version=' + version)
}

export function getAppVersion() {
  return api.get('/version_1_1_3.json')
}
