<template>
    <div style="heiht:100%;background:#f4f4f4c2;overflow: hidden;  text-align: center;">
        <Banner></Banner>
          
            <main>
                
            <el-form v-show="form" :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
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
                <el-button @click="resetForm('ruleForm2')">关闭</el-button>
            </el-form-item>
            </el-form>
            
            
            <center class="center">
                
                <div class="left">
                    <h2>留言板<el-button @click="submessage" size="small" type="primary" icon="el-icon-edit" class="buttom" circle></el-button></h2>
                    
                <div class="message "  v-for="({username,message,time},index) in message" :key="index">
                    <div class="message-d">
                        <span>{{username}}</span><i>“{{time}}”</i>
                        <p>{{message}}</p>
                    </div>
                </div>
                </div>
                <div class="right">
                     <Right-list></Right-list>
                 </div>
                 
            </center>
            </main>


    </div>
</template>

<script>
import Banner from "@/components/common/Banner";
import moment from "moment";
import request from "@/utils/request";
import RightList from "@/components/common/RightList";
export default {
  name: "books",
  components: {
    Banner,
    RightList
  },
  data() {
    var checkAge = (rule, value, callback) => {
      setTimeout(() => {
        if (value === "") {
          callback();
        } else if (!Number.isInteger(value)) {
          callback(new Error("您好，请输入数字值"));
        } else {
          callback();
        }
      }, 100);
    };
    return {
      form: false,
      message: [],
      ruleForm2: {
        username: "",
        checkPass: "",
        age: ""
      },
      rules2: {
        username: [
          { required: true, message: "您好，请输入昵称", trigger: "blur" },
          {
            min: 2,
            max: 8,
            message: "您好，长度在 3 到 8 个字符",
            trigger: "blur"
          }
        ],
        checkPass: [
          { required: true, message: "您好，请输入评论内容", trigger: "blur" },
          {
            min: 3,
            max: 150,
            message: "长度在 3 到 150 个字符",
            trigger: "blur"
          }
        ],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  computed: {},
  methods: {
    submessage(){
        this.form = true
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.ruleForm2);
          request({
            url: "/message/upmessage",
            method: "post",
            data: this.ruleForm2
          })
            .then(res => {
              // console.log(this.message)
              this.ruleForm2.message = this.ruleForm2.checkPass;
                this.form = false;
              this.message.unshift(this.ruleForm2);
              this.message[0].time = new Date();
              this.message[0].time = moment(this.message[0].time).format(
                "YYYY-MM-DD HH:mm:ss"
              );
              // for(let i=0;i<this.message.length;i++){
              //     this.message[i].time = moment(this.message[i].time).format('YYYY-MM-DD HH:mm:ss')
              // }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
        this.form = false
    }
  },
  created() {
    request({
      url: "/message/getmessage",
      method: "post"
    })
      .then(res => {
        // console.log(res)
        this.message = res.data;
        for (let i = 0; i < this.message.length; i++) {
          this.message[i].time = moment(this.message[i].time).format(
            "YYYY-MM-DD HH:mm:ss"
          );
        }
        // console.log(this.message)
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
main {
  width: 1000px;
  margin: 0 auto;
}
.demo-ruleForm {
  width: 550px;
  height: 300px;
  /* border: 1px solid rgb(50, 122, 170); */
  border-radius: 10px;
  margin: 0 auto;
  position: fixed;
  left: 27%;
  background: #fff;
  padding: 20px;
  -moz-box-shadow:0px 0px 5px #333333; -webkit-box-shadow:0px 0px 5px #333333; box-shadow:0px 0px 5px #333333;
  border-radius: 5px;
}
.message {
    width: 100%;
    float: left;
  text-align: left;
  /* padding: 10px */
  
}
.center{
      margin-top: 15px;
}
.message-d {
  /* height: 120px; */
  background: #ffffff;
  padding: 5px 30px;
  padding-bottom: 10px;
}
.message-d span {
  text-decoration: none;
  color: #076dd0;
  font-weight: 800;
  line-height: 1;
  font-size: 14px;
}
.message i {
  font-size: 12px;
  color: #656c7a;
}
.message-d p {
  font-size: 14px;
  line-height: 2;
  color: #555;
}
.right{
  display: inline-block;
  float: left;
  width: 25%;
  /* border: 1px solid red; */
  height: 520px;
  overflow: hidden;
  margin-left: 1%;
  /* position: fixed; */
   -moz-box-shadow:0px 0px 5px #333333; -webkit-box-shadow:0px 0px 5px #333333; box-shadow:0px 0px 5px #333333;
  border-radius: 5px;
}
.left{
    display: inline-block;
    width: 70%;
    float: left;
    background: #fff;
    border-radius: 5px;
       -moz-box-shadow:0px 0px 5px #333333; -webkit-box-shadow:0px 0px 5px #333333; box-shadow:0px 0px 5px #333333;
        border-bottom: 2px solid rgb(18, 141, 163);
}
.left h2{
    display: inline-block;
    width: 100px;
}
</style>
