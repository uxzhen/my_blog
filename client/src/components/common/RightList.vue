<template>
    <div class="main">
        <h2>最新动态</h2>
        <div class="main-list"></div>
        <div  v-for="({title,createTime,content,id},index) in news" :key="index">
            <ul   class="main-a">
                <router-link :to="'/news/' +id" >{{title}}</router-link>
                <p>{{content}}</p>
                <span> {{createTime}}</span>
            </ul>
            
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
            news:[],
        }
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
    },
}
</script>

<style scoped>
span{
    font-size: 5px;
    color: #ccc;
}
h2{
    color: #222;
}
.main{
    background: #ffffff;
    padding: 10px;
}
.main-a{
    height:80px;
}
.main-list{
    height: 2px;
     width: 95%;
     margin: 2px 0;

/* height: 200px; */

background: -webkit-linear-gradient(left bottom,rgb(153, 128, 128),rgb(90, 90, 161));

background: -o-linear-gradient(left bottom,rgb(104, 72, 72),rgb(71, 71, 141));

background: -mos-linear-gradient(left bottom,rgb(128, 105, 105),rgb(74, 74, 141));

background: -moz-linear-gradient(left bottom,rgb(114, 94, 94),rgb(60, 60, 92));

background: linear-gradient(left bottom,rgb(117, 80, 80),rgb(36, 137, 150));
}
ul{
    list-style: none;
    text-decoration: none;
}
li{
    display: inline-block;
    list-style: none;
    text-decoration: none;
    color: #333388;
    font-size: 13px;
}
p{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 15px;
    color: #666;
}
router-link{
    list-style: none;
    text-decoration: none;
}
</style>
