// 拦截器
import axios from 'axios'

// 全局post发送头部为conten——type类型，定义类型为json类型，字符格式utf-8
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 1 创建一个axios实例，进行请求配置
const servive = axios.create({
    baseURL:'http://localhost:3000/api',
    timeout: 5000
})
// 请求发送前拦截器
// servive.interceptors.request.use(
//     config => {        
//     }
// )
export default servive