<template>
<div style="heiht:100%">
  <img src="../../assets/img/b2.jpg" style="width:100%">
   <div class="dd">
     
        <ul>
          
            <router-link to="/lists" class="link"><li>首页</li></router-link>
            <router-link to="/lists" class="link"><li>心情随笔</li></router-link>
            <router-link to="/lists" class="link"><li>韵华追忆</li></router-link>
            <router-link to="/lists" class="link"><li>技术分享</li></router-link>
            <router-link to="/lists" class="link"><li>个人归档</li></router-link>
        </ul>
    </div>
</div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul li{
    list-style: none;
    display: inline-block;
    width: 170px;
    margin: 0;
    padding: 0;
    line-height: 50px;
    text-align: center;
    color: #000;
  }
  ul li:hover{
    background: rgb(94, 157, 120);
  }
  ul{
    list-style: none;
    width: 888px;
    margin: 0 auto;
    background: rgb(94, 157, 190);
    padding: 0px;
    /* height: 50px; */
  }
  .dd{
    /* height: 50px; */
    min-width: 888px;
    margin-top: -5px;
    padding: 0;
    background: rgb(94, 157, 190);
    }
</style>
