import Router from 'koa-router'
import { base_API } from "../config"
//引入我们的登录注册控制器
import UserController from '../Controller/UserController'
import checktoken from '../utils/checktoken'
import ArticleController from '../Controller/ArticleController'
const router = new Router()
router.get('/',async ctx=>{
    ctx.body = '欢迎使用vue-blog接口测试服务器!!!!!'
})
//所有的路由都写在这里就可以了
//前端所有的请求发过来的时候都是http://localhost:3000/api/.....
router.prefix(`${base_API}`)

//登录
router.post('/login',UserController.login)
//登出
router.get('/logout',checktoken,UserController.logout)
//获取所有文章
// router.get('/articles',checktoken,UserController.getArticles)
export default router