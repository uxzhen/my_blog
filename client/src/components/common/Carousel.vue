<template>
    <div>
        <div class="block">
            <el-carousel height="280px">
            <el-carousel-item v-for="(item,index) in test" :key="index">
                <div><img :src="item.t2" alt=""></div>
            </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    name:"Carousel",
    data(){
        return{
            test:[
                {
                    t1:1,
                    t2:require("../../assets/img/7.png")
                },
                {
                    t1:2,
                    t2:require("../../assets/img/7.png")
                }
                ,{
                    t1:3,
                    t2:require("../../assets/img/7.png")
                }
                ,{
                    t1:4,
                    t2:require("../../assets/img/7.png")
                }
            ]
        }
    }
}
</script>

<style scoped>
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  img{
      width: 100%;
      height: 100%;
  }
</style>
