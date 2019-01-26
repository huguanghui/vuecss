import axios from 'axios'
import qs from 'qs'
import * as Tool from 'UTIL/tool'

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  let URL = config.url.split(config.baseURL)
  Tool.open(URL[1])
  return config
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
  console.log(res)
  Tool.close()
  return res
}, (error) => {
  Tool.close()
  return Promise.reject(error)
})

export const oGet = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.get(url, params).then(res => {
      resolve(res.data)
    }, err => {
      reject(err)
    }).catch(err => {
      reject(err)
    })
  })
}

export default {
  List () {
    return oGet(`https://www.easy-mock.com/mock/5c4ab13cf95a5262232c9d96/test01/echo`)
  },
  Get (link) {
    return oGet(link)
  }
}
