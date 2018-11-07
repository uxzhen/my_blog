import koa from 'koa'
import cors from "koa-cors"
import bodyParser from "koa-bodyparser"
//路由文件
import router from './routes/index'

const app = new koa()

app.use(cors())
app.use(bodyParser())
app.use(router.routes())
app.listen(3000,()=>{
    console.log('node isg OK')
})
console.log('服务器运行在3000端口')