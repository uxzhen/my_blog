<template>
    <div style="height:100%">
        <head-nav></head-nav>
        <Aside></Aside>
        <div class="list-container main">
            <h2>
                关于我 / 
                <span>ABOUT ME</span>
            </h2>
            <hr>
            <div class="content">
                <textarea></textarea>
            </div>
            <section class="btn-container">
                <button class="not-del" @click="updateAbout">提交修改</button>
            </section>
        </div>
    </div>
</template>

<script>
import request from '@/utils/request'
import HeadNav from "@/components/common/HeadNav";
import Aside from "@/components/common/Aside";
import 'simplemde/dist/simplemde.min.css'
import SimpleMDE from 'simplemde'
export default {
  name: "About",
  data() {
    return {
        simplemde:''
    };
  },
  components: {
    HeadNav,
    Aside
  },
  mounted(){
      this.simplemde = new SimpleMDE({
            spellChecker:false,
            toolbarTips: false,
      })
      request({
          url:'/articles/about',
          method:'post'
      }).then(res=>{
        //   console.log(res[0])
          this.simplemde.value(res[0].content)
      }).catch(err=>{
          console.log(err)
      })
  },
  methods:{
      updateAbout(){
        //   console.log(this.simplemde.value())
          request({
              url:'/articles/updata/about',
              method:'post',
              data:{
               content:this.simplemde.value()   
              }
          })
      }
  }
};
</script>

<style type="text/scss" lang="scss" scoped>
/*记得引入全局变量的文件*/
@import "../assets/style/variable";
main {
  @include flex($justify: space-between);
  height: calc(100% - 48px);
  padding: 0.5em 0;
}
.article-list {
  width: 40%;
  height: 100%;
  overflow: auto;
  padding: 0 0.8em 0.5em 0;
  .list {
    padding: 0;
    list-style: none;
  }
}
.content{
    font-size: 1.6rem;
}
</style>

