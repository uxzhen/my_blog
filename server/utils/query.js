// 连接数据库，引入mysql插件
import mysql from 'mysql';
//解构赋值
import {db,dbName} from "../config"
import fs from "fs"
import path from 'path'
let pool
//连接解构赋值的数据库，方便全部数据的跟换
// const pool = mysql.createPool({
//     host:db.host,//数据库主机地址
//     port:db.port,//端口号
//     user:db.username,//用户名
//     password:db.password, //密码
//     database:db.db_name//数据库名称
// })
//需要创建一个数据库，并且能够将sql文件夹下的sql文件执行
const sqlContent = fs.readFileSync(path.resolve(__dirname,'..','./sql/xuzhen_db.sql'),'utf-8')
//第一次连接数据库的时候没有指定数据库名称，这次连接的目的是为了能够创建xuzhen_db书记库
//并且将数据库文件执行，数据库就有对应的表和数据了
const init = mysql.createConnection(db)
init.connect()
init.query("CREATE DATABASE xuzhen_db",err=>{
    Object.assign(db,dbName)
    //第二次连接数据库，这时候，数据库xuzhendb已经创建成功了，这时候，直接连接
    //然后执行sql文件夹下的xuzhen 数据库，对应的表和测试数据已经存在数据库
    pool = mysql.createPool(db)
        if(err){
        console.log("xuzhen_db Datebase create already")
    }else{
        console.log("create xuzhen_db Datebase success//数据库创建成功")
        //将xuzhen_db.sql执行
        query(sqlContent).then(res=>{
            console.log("imort sql is success //数据库连接成功！！")
        }).catch(err=>{
            console.log('import sql  is err')
            console.log(err)
        })
    }
})
init.end()

export default function query(sql,value){
    return new Promise((resolve,reject)=>{
        pool.getConnection(function(err,connection){
            if(err){
               reject(err);
            }else{
                connection.query(sql,value,(err,data)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(data);
                    }
                    connection.release()
                })
            }
        })
    })
}
