import koa from 'koa'
const app = new koa()
app.listen(3000,()=>{
    console.log('node is OK')
})
console.log('服务器运行在3000端口')