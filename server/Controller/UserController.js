import User from '../models/UserModel'
import md5 from 'md5'
import createToken from '../utils/createToken'
class UserContorller{
    //登录的处理逻辑
    async login(ctx){
        //验证用户名密码是否合法
        // console.log(ctx.request.body)
        //检查用户名是否存在
        let user = ctx.request.body.user;
        let password = ctx.request.body.password;
        //生成token
        //所有的对于数据库的操作，我们不在控制器完成，我们在数据库直接封装成一个方法
        const res = (await User.getUserByName(user))[0];
        console.log(res)
        if(res){
            //如果存在
            //检查密码是否正确
            if(res.password === md5(password)){
                //生成token
                let token = createToken(res.user);
                ctx.body = {
                    success:true,
                    message:'登录成功...',
                    token:token
                }
            }else{
                ctx.body={
                    succsee:false,
                    message:'密码错误，请重新填写...'
                }
            }
        }else{
           
        ctx.body={
            success:false,
            message:'用户名不存在请重新填写'
        }
        }
    }
    async logout(ctx){
        ctx.body = {
            success:true,
            message:'退出成功'
        }
    }
}
export default new UserContorller()