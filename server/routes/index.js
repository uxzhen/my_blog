import Router from 'koa-router'
import { base_API } from "../config"
//引入我们的登录注册控制器
import UserController from '../Controller/UserController'
//引入文章相关的控制器
import ArticleController from '../Controller/ArticleController'
//引入验证token合法性的方法
import checkToken from '../utils/checkToken'

const router = new Router()
router.get('/',async ctx=>{
    ctx.body = '欢迎使用vue-blog接口测试服务器!!!!!'
})
//所有的路由都写在这里就可以了
//前端所有的请求发过来的时候都是http://localhost:3000/api/.....
router.prefix(`${base_API}`)

//登录
router.post('/login',UserController.login)
//退出
//只要是登录后才能看到的内容都需要验证一下token的合法性.
router.get('/logout',checkToken,UserController.logout)
//获取所有的文章
router.get('/articles',checkToken,ArticleController.getArticles)
//添加一篇新的文章
router.post('/articles/add',checkToken,ArticleController.addArticle)
//查询一下最新发布的那片文章的详细信息
router.get('/articles/:id',checkToken,ArticleController.getOneArticle)
//更新一篇新的文章
router.post('/articles/update/:id',checkToken,ArticleController.updateArticle)
//删除一篇文章
router.delete('/articles/:id',checkToken,ArticleController.deleteArticle)
//发布文章
router.put('/articles/publish/:id',checkToken,ArticleController.publishArticle)
//查询关于
router.post('/articles/about',checkToken,ArticleController.about)
//更新关于
router.post('/articles/updata/about',checkToken,ArticleController.updataAbout)
//添加书级
router.post('/read/addread',checkToken,ArticleController.addRead)
//获取书籍信息
router.post('/read/getread',checkToken,ArticleController.getRead)
//更新书籍信息
router.post('/read/updateread',checkToken,ArticleController.updateRead)
//删除书籍
router.post('/read/delread',checkToken,ArticleController.delRead)

//前端请求文章
router.post('/read/news',ArticleController.getArticles)
//前端请求留言功能
router.post('/message/getmessage',ArticleController.getMessage)
//前端添加留言功能
router.post('/message/upmessage',ArticleController.upmessage)
//前端获取图书
router.post('/read/getbook',ArticleController.getRead)
//单独查看
router.post('/news/:id',ArticleController.getOneArticle)
export default router