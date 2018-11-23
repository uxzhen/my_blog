import query from '../utils/query'
import eacape from '../utils/eacape'
class ArticleModel {
    async getAllArticles(){
        return await query("SELECT * FROM ARTICLE ORDER BY createTime DESC")
    }
    async addArticle(){
        return await query("INSERT INTO ARTICLE SET title='新文章',tags='',createTime=NOW(),publishTime=NOW(),content=''")
    }
    async getOneArticle(id){
        return await query(`SELECT * FROM ARTICLE WHERE id=${id}`)
    }
    async updateArticle(id,{title,tags,content,isPublished}){
        return await query(eacape`UPDATE ARTICLE SET title=${title}, tags=${tags},content=${content} WHERE id=${id}`)
    }
    async deleteArticle(id){
        return await query(eacape`DELETE FROM ARTICLE WHERE id=${id}`)
    }
    async publishArticle(id){
        return await query(eacape`UPDATE ARTICLE SET publishTime=NOW(), isPublished=1 WHERE id=${id}`)
    }
    async about(){
        return await query(eacape`SELECT * FROM ABOUT`)
    }
    async updataAbout(content){
        return await query(eacape`UPDATE ABOUT SET content=${content}`)
    }
    async addRead(name,author,score){
        return await query(eacape`INSERT INTO RD_LIST SET name=${name}, author=${author},score=${score}`)
    }
    async getRead(){
        return await query(eacape`SELECT * FROM RD_LIST`)
    }
    async updateRead(id,name,author,score){
        return await query(eacape`UPDATE RD_LIST SET name=${name}, author=${author}, score=${score} WHERE id=${id}`)
    }
    async delRead(id){
        return await query(eacape`DELETE FROM RD_LIST WHERE id=${id}`)
    }
    async getMessage(){
        return await query(eacape`SELECT * FROM MESSAGE ORDER BY time DESC`)
    }
    async upmessage(username,checkPass,age,date){
        return await query(eacape`INSERT INTO MESSAGE SET username=${username},message=${checkPass},qq=${age},time=${date}`)
    }
}
export default new ArticleModel()