<template>
    <div>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liebiao"></use>
        </svg>
        <div>
           
        </div>
    </div>
</template>

<script>
import request from "@/utils/request"
export default {
    name:"Login",
    data(){
        return{

        }
    },
    methods:{

    },
    //当组件加载完毕的时候自动执行
    mounted:function(){
        request({
            url:'/index',
            method:"get"
        }).then((res)=>{
            console.log(res.data);
        })
    }
}
</script>

<style>

</style>
