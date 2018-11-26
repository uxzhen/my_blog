<template>
    <div style="heiht:100%;background:#f4f4f4c2;overflow: hidden;">
        <Banner></Banner>
        <main>
              <table class="rd-list">
                <tr>
                    <th>书名</th>
                    <th>作者</th>
                    <th>评分</th>
                </tr>
                <tr v-for="({ name, author, score },index) in books" :key="index">
                    <td class="col-1">{{ name }}</td>
                    <td class="col-2">{{ author }}</td>
                    <td class="col-3">
                        <star :score="score"></star>
                    </td>
                </tr>
            </table>
        </main>
      
    </div>
</template>

<script>
import Banner from "@/components/common/Banner";
import Star from "@/components/common/Star";
import request from "@/utils/request";
export default {
  name: "books",
  data() {
    return {
      books: [],
      score: 0
    };
  },
  components: {
    Banner,
    Star
  },
  created() {
    request({
      url: "/read/getbook",
      method: "post"
    })
      .then(res => {
        // console.log(res)
        this.books = res.data;
        console.log(this.books);
        // console.log(this.books)
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
main{
    width: 1000px;
    margin:  0 auto;
}
.rd-list {
  width: 100%;
  border-collapse: collapse;
}
th {
  height: 3em;
  font-size: 1.6rem;
  border-bottom: 1px solid olivedrab;
}
td {
  text-align: center;
  height: 4em;
  border-bottom: 1px dotted olivedrab;
}
.col-1,
.col-2,
.col-4 {
  width: 20%;
  border-left: 1px dotted olivedrab;
  border-right: 1px dotted olivedrab;
}

.col-2,
.col-3 {
  border-left: 1px dotted olivedrab;
  border-right: 1px dotted olivedrab;
}
</style>
