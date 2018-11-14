<template>
    
</template>

<script>
import request from '@/utils/request'
export default {
    name:'ArticleList',
    data(){
        return{
            articleList:[]
        }
    },
    //创建该组件创建的时候，自动执行里面的请求
    created(){
        request({
            method:'get',
            url:'articles'
        }).then(res=>{
            this.articleList.push(...res)
        }).catch(err=>{
            console.log(err)
        })
    }
}
</script>

<style>

</style>
