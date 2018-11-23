<template>
<div style="heiht:100%;background:#f4f4f4c2;overflow: hidden;">
  <Banner></Banner>
  
  <main>
    <div class="Carousel">
       <Carousel ></Carousel>
        <div class="left">
          <p class="lists-h1">最新文章</p>
          <div class="lists-list"></div>
          <div class="lists" v-for="({title,createTime,content},index) in news" :key="index">
            <ul class="main-a">
                <router-link to="/lists" class="link"><li>{{title}}</li></router-link>
                <p class="lists-p">{{content}}</p>
                <span class="lists-span"> {{createTime}}</span>
            </ul>
            
        </div>
        </div>
    </div>
   
    
    <div class="aboutme">
      <div class="aboutme1">
        <h3>关于博主</h3>
        <p>个人资料:男，九零后，IT男，天秤座，IT界最low的程序员;</p>
      </div>
      <div class="aboutme1">
        <h3>爱好</h3>
        <p>学习IT技术，听音乐，看书，宅；</p>
      </div>
    </div>

    <div class="right">
      <Right-list></Right-list>
    </div>
    
  </main>
</div>
</template>

<script>
import Banner from '@/components/common/Banner'
import Carousel from '@/components/common/Carousel'
import RightList from '@/components/common/RightList'
import moment from 'moment'
import request from '@/utils/request'
export default {
  name: 'index',
  data () {
    return {
      news:[]
    }
  },
  components:{
    Banner,
    Carousel,
    RightList
  },
  created(){
        request({
            url:"/read/news",
            method:"post",
        }).then(res=>{
                // console.log(res)
                this.news = res.data
                for(let i=0;i<this.news.length;i++){
                    this.news[i].createTime = moment(this.news[i].createTime).format('YYYY-MM-DD HH:mm:ss')
                }
            }).catch(err=>{
                console.log(err)
            })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lists{
  background: #ecece6;
  margin-top: 5px;
  height: 150px;
  border-bottom: 2px solid rgb(184, 190, 223);
}
.main-a{
    /* height:50px; */
}
.right{
  display: inline-block;
  width: 30%;
  /* border: 1px solid red; */
  height: 520px;
  overflow: hidden;
}
.left{
  display: inline-block;
  float: left;
  width: 138%;
  padding: 15px;
  padding-left: 5px;
  background: #fffff700;
}
main{
  width: 1250px;
  margin: 0 auto;
}
.Carousel{
  display: inline-block;
  width: 50%;
  float: left;
}
.aboutme{
  float: left;
  display: inline-block;
  width: 20%;
  height: 250px;
  background: #fffff7;
  /* margin: 5px 5px; */
}
.aboutme1{
 height: 120px;
 border: 1px #cad84e solid;
 padding: 8px 8px;
 background: #fffff7;
}
.aboutme1 p{
 line-height: 20px;
 margin-top: 10px;
}
.aboutme1:nth-child(2){
  height: 120px;
  background: #fafcfd;
  border: 1px solid #cceff5;
  /* border-top: none; */
  margin-top: 4px
}
.aboutme h3{
  font-size: 25px;
  color: #333
}
.aboutme p{
  font-size: 12px;
  color: #aaa
}
li{
  display: inline-block;
  list-style: none;
  color: rgb(65, 71, 109);
}
.lists-p{
  font-size: 15px;
  color: #000;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  line-height: 22px;
  margin: 8px;
}
.lists-span{
  font-size: 10px;
  color: #666;
  padding: 8px;
}
.lists-h1{
  font-size: 25px;
}
.lists-list{
  height: 2px;
  background: #db6d4c;
}
.main-a li{
  font-size: 18px;
  padding: 8px;
}
</style>
