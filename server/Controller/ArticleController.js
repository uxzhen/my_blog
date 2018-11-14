import Article from '../models/ArticleModel'
class ArticleController {
    async getArticle(ctx){
        ctx.body = await Article.getAllArticles()
    }
}
export default new ArticleController()