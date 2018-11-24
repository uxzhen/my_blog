<template>
<div class="main-top" style="heiht:100%;overflow: hidden;">
  <Banner></Banner>
  
  <main>
    <div class="Carousel">

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
.Carousel-a{
  -moz-box-shadow:0px 0px 5px #333333; -webkit-box-shadow:0px 0px 5px #333333; box-shadow:0px 0px 5px #333333;
  border-radius: 5px;
}
.main-top{
background:#ffffff52;

}
.lists{
  background: #ffffff;
  margin-top: 5px;
  height: 150px;
  border-bottom: 2px solid rgb(18, 141, 163);
  position: relative;
  -moz-box-shadow:0px 0px 5px #333333; -webkit-box-shadow:0px 0px 5px #333333; box-shadow:0px 0px 5px #333333;
  border-radius: 5px;
}
.main-a{
    /* height:50px; */
}
.right{
  display: inline-block;
  width: 25%;
  /* border: 1px solid red; */
  height: 520px;
  overflow: hidden;
  margin-left: 1%;
  /* position: fixed; */
   -moz-box-shadow:0px 0px 5px #333333; -webkit-box-shadow:0px 0px 5px #333333; box-shadow:0px 0px 5px #333333;
  border-radius: 5px;
  margin-top: 50px;
}
.left{
  display: inline-block;
  float: left;
  width: 100%;
  padding: 15px;
  padding-left: 5px;
  background: #fffff700;
  height: 1290px;
}
main{
  width: 1000px;
  margin: 0 auto;
}
.Carousel{
  
  display: inline-block;
  width: 70%;
  float: left;
}
.aboutme{
  float: left;
  display: inline-block;
  width: 19%;
  height: 250px;
  background: #fffff7;
  /* margin: 5px 5px; */
  border-radius: 5px;
  
}
.aboutme1{
 height: 120px;
 border: 1px #cad84e solid;
 padding: 8px 8px;
 margin-left: 5px;
 background: #fffff7;
 -moz-box-shadow:0px 0px 5px #333333; -webkit-box-shadow:0px 0px 5px #333333; box-shadow:0px 0px 5px #333333;
  border-radius: 5px;
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
  margin-top: 4px;
  -moz-box-shadow:0px 0px 5px #333333; -webkit-box-shadow:0px 0px 5px #333333; box-shadow:0px 0px 5px #333333;
  border-radius: 5px;
}
.aboutme h3{
  font-size: 25px;
  color: #333
}
.aboutme p{
  font-size: 12px;
  color: rgb(144, 115, 115)
}
li{
  display: inline-block;
  list-style: none;
  color: rgb(65, 71, 109);
  color: #444444;
  font-weight: 800;
}
.lists-p{
  font-size: 14px;
    line-height: 2;
    color: #555;
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
  position: absolute;
  bottom: 0px;
}
.lists-h1{
  font-size: 25px;
  color: #444444;
  font-weight: 500;
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
