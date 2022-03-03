import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'https://api.github.com',
  withCredentials: false,
})
axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => Promise.reject(error.response)
)
// axios.interceptors.response.use((res) => {
//   if (typeof res.data !== 'object') {
//     ElMessage.error('server exception')
//     return Promise.reject(res)
//   }
//   if (res.data.resultCode != 200) {
//     if (res.data.message) ElMessage.error(res.data.message)
//     if (res.data.resultCode == 419) {
//       router.push({ path: '/' })
//     }
//     return Promise.reject(res.data)
//   }

//   return res.data.data
// })

export default axios
