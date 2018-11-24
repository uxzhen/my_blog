<template>
<div style="heiht:100%">
  <img src="../../assets/img/2.jpg" style="width:100%">
   <div class="dd">
        <ul>
            <router-link to="/index"><li>首页</li></router-link>
            <router-link to="/moon"><li>心情随笔</li></router-link>
            <router-link to="/share"><li>技术分享</li></router-link>
            <router-link to="/message"><li>小留言板</li></router-link>
            <router-link to="/books"><li>书籍推荐</li></router-link>
            <router-link to="/about"><li>个人归档</li></router-link>
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
  },
  components:{

  },
  methods: {

  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul li{
    list-style: none;
    display: inline-block;
    width: 150px;
    margin: 0;
    padding: 0;
    line-height: 50px;
    text-align: center;
    color: rgb(163, 154, 154);
  }
  ul li:hover{
    background:#00000083;
    color: rgb(224, 224, 217);
    border-top: 2px solid rgb(83, 84, 180);
    margin-top: -2px;
  }
  .router-link-active li{
     background:#00000083;
    color: rgb(224, 224, 217);
    border-top: 2px solid rgb(83, 84, 180);
    margin-top: -2px;
  }
  ul{
    list-style: none;
    width: 1000px;
    margin: 0 auto;
    /* background: rgb(94, 157, 190); */
    background: rgb(51, 51, 51);
    padding: 0px;
    /* height: 50px; */
  }
  .dd{
    /* height: 50px; */
    min-width: 888px;
    margin-top: -5px;
    padding: 0;
    background: rgb(51, 51, 51);
    }
</style>
