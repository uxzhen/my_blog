<template>
    <div style="heiht:100%;background:#f4f4f4c2;overflow: hidden;  text-align: center;">
        <Banner></Banner>
          
            <main>
                <h2>留言板</h2>
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <h2>留言</h2>
            <el-form-item label="昵称" prop="username">
                <el-input placeholder="请输入昵称" type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item  label="留言内容"  prop="checkPass">
                <el-input type="textarea" placeholder="请输入留言" v-model="ruleForm2.checkPass" autocomplete="off" :rows="2"></el-input>
            </el-form-item>
            <el-form-item label="联系方式"  prop="age">
                <el-input placeholder="联系方式可不填写或QQ号手机号，不会对外公布" v-model.number="ruleForm2.age"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">留言</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
            </el-form>
                <div v-for="({username,message,time},index) in message" :key="index">
                    <div>
                        <span>{{username}}</span>
                        <p>{{message}}</p>{{time}}
                    </div>
                  
                    
                </div>
            </main>


    </div>
</template>

<script>
import Banner from '@/components/common/Banner'
import moment from 'moment'
import request from '@/utils/request'
export default {
    name:"books",
     components:{
    Banner
  },data() {
      var checkAge = (rule, value, callback) => {
        setTimeout(() => {
            if(value === ''){
                callback()
            }else if(!Number.isInteger(value)){
            callback(new Error('您好，请输入数字值'));
          } else{
              callback()
          }
        }, 100);
      };
      return {
          form:false,
          message:[],
        ruleForm2: {
          username: '',
          checkPass: '',
          age: '',
          
        },
        rules2: {
          username: [
            { required: true, message: '您好，请输入昵称', trigger: 'blur' },
            { min: 2, max: 8, message: '您好，长度在 3 到 8 个字符', trigger: 'blur' }
          ],
          checkPass: [
            { required: true, message: '您好，请输入评论内容', trigger: 'blur' },
            { min: 3, max: 150, message: '长度在 3 到 150 个字符', trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    computed:{}
    ,
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm2)
            request({
                url:'/message/upmessage',
                method:'post',
                data:this.ruleForm2
            }).then(res=>{
                // console.log(this.message)
                this.ruleForm2.message = this.ruleForm2.checkPass 
                this.message.unshift(this.ruleForm2)
                this.message[0].time = new Date()
                this.message[0].time = moment(this.message[0].time).format('YYYY-MM-DD HH:mm:ss')
                // for(let i=0;i<this.message.length;i++){
                //     this.message[i].time = moment(this.message[i].time).format('YYYY-MM-DD HH:mm:ss')
                // }
            }).catch(err=>{
                console.log(err)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      
    },
      created(){
        request({
            url:"/message/getmessage",
            method:"post",
        }).then(res=>{
                // console.log(res)
                this.message = res.data
                for(let i=0;i<this.message.length;i++){
                    this.message[i].time = moment(this.message[i].time).format('YYYY-MM-DD HH:mm:ss')
                }
                // console.log(this.message)
            }).catch(err=>{
                console.log(err)
            })
    }
  }

</script>

<style scoped>
    main{
        width: 1250px;
        margin: 0 auto;
    }
    .demo-ruleForm{
        width: 550px;
        height: 300px;
        border: 1px solid rgb(170, 136, 136);
        border-radius: 10px;
        margin: 0 auto;
    }
</style>
