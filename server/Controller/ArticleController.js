import Article from '../model/ArticleModel'

class ArticleController {
    async getArticles(ctx){
        ctx.body = await Article.getAllArticles()
    }
    async addArticle(ctx){
        const res = await Article.addArticle()
        ctx.body = res
    }
    async getOneArticle(ctx){
        const res = await Article.getOneArticle(ctx.params.id)
        ctx.body = res
    }
    async updateArticle(ctx){
        const id = ctx.params.id
        const res = await Article.updateArticle(id,ctx.request.body)
        ctx.body = res
    }
    async deleteArticle(ctx){
        const id = ctx.params.id
        const res = await Article.deleteArticle(id)
        ctx.body = res
    }
    async publishArticle(ctx){
        const id = ctx.params.id
        const res = await Article.publishArticle(id)
        ctx.body = res
    }
    async about(ctx){
        const res = await Article.about()
        ctx.body = res
    }
    async updataAbout(ctx){
        const content = await ctx.request.body.content
        const res = await Article.updataAbout(content)
        ctx.body = res
    }
    async addRead(ctx){
        // console.log(ctx)
        const {name,author} = await ctx.request.body
        // console.log(name)
        // const author = await ctx.request.body.author
        const res = await Article.addRead(name,author)
        ctx.body = res
    }
}
export default new ArticleController()