<template>
<div style="heiht:100%;background:#f4f4f470;overflow: hidden;">
  <Banner></Banner>
  
  <main>
    <Carousel class="Carousel"></Carousel>
    <div class="aboutme">
      <div class="aboutme1">
        <h3>关于博主</h3>
        <p>个人资料:男,九零后,IT男,天秤座,IT界最菜的程序员;爱好:听音乐,看书,宅</p>
      </div>
      <div class="aboutme1">
        <h3>关于博主</h3>
        <p>个人资料:男,九零后,IT男,天秤座,IT界最菜的程序员;爱好:听音乐,看书,宅</p>
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
export default {
  name: 'index',
  data () {
    return {
    }
  },
  components:{
    Banner,
    Carousel,
    RightList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right{
  display: inline-block;
  width: 38%;
  border: 1px solid red;
  height: 280px;
}
main{
  width: 1000px;
  margin: 0 auto;
}
.Carousel{
  display: inline-block;
  width: 45%;
  float: left;
  
}
.aboutme{
  float: left;
  display: inline-block;
  width: 15%;
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
</style>
