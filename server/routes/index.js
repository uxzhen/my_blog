import Router from "koa-router"
import {base_API} from '../config'
const router = new Router()
//前端所有发过来的时候都是http://......
router.get('/',async ctx=>{
    ctx.body = "hello! 欢迎使用vue——blog接口服务器"
})
//所有的路由都这样写
router.prefix(`${base_API}`);
router.get('/index',async ctx=>{
    ctx.body = '我是首页'
})
export default router