<template>
    <div>
        <ul>
            <li v-for="(i,index) in news" :key="index">{{i}}
            </li>
        </ul>
    </div>
</template>

<script>
import request from '@/utils/request'
export default {
    name:'news',
    data(){
        return{
            news:[]
        }
    },
    created(){
        const id = this.$route.params.id
        request.post(`/news/${id}`).then(res=>{
            console.log(res.data)
            for(let item of res.data){
                this.news.push(item.content)
            }
        }).catch(err=>{
            console.log(err)
        })
    }
}
</script>

<style>

</style>
