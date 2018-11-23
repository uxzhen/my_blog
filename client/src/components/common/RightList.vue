<template>
    <div>
        <h2>最新动态</h2>
        <div></div>
        <div v-for="{title,createTime,content},index in news" :key="index">
            <ul class="">
                <router-link to="/lists" class="link"><li>{{title}}</li></router-link>
            </ul>
           
           
            {{content}}
             <!-- {{createTime}} -->
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import request from '@/utils/request'
export default {
    name:"RightList",
    data(){
        return{
            news:[]
        }
    },
    created(){
        request({
            url:"/read/aaa",
            method:"post",
        }).then(res=>{
                // console.log(res)
                this.news = res.data
                for(let i=0;i<3;i++){
                    this.news[i].createTime = moment(this.news[i].createTime).format('YYYY-MM-DD HH:mm:ss')
                }
                console.log(this.news[0].createTime)
                
            }).catch(err=>{
                console.log(err)
            })
    }
}
</script>

<style>

</style>
