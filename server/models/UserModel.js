import query from '../utils/query'

class UserModel{
    async getUserByName(user){
        //query执行mysql语句
        return await query(`SELECT * FROM USER WHERE USER='${user}'`)
    }
}
export default new UserModel()