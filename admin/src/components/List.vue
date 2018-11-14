<template>
<div style="height:100%">
    <!-- 头部导航栏组件 -->
    <head-nav></head-nav>
    <!-- 左侧侧边栏组件 -->
    <side-nav></side-nav>
    <div class="list-container main">
        <h2>文章列表 /
            <span>ARTICLE LIST</span>
        </h2>
        <hr>
        <main>
            <div class="article-list">
                <section class="btn-container">
                    <button id="add" class="not-del">新文章</button>
                </section>
                <!-- 文章列表的组件 -->
                <article-list ref="articleList"></article-list>
            </div>
            <!-- 编辑器的组件 -->
            <editor></editor>
        </main>
    </div>
    </div>
</template>

<script>
import ArticleList from "@/components/common/ArticleList";
import Editor from "@/components/common/Editor";
import SideNav from "@/components/common/SideNav";
import HeadNav from "@/components/common/HeadNav";
export default {
  name: "List",
  data() {
    return {
      ArticleList: []
    };
  },
  components: {
    ArticleList,
    Editor,
    SideNav,
    HeadNav
  },
  methods: {
    //发表文章的方法
    posttArticle() {}
  }
};
</script>

<style lang="scss" scoped>
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
    // margin: 0;
    padding: 0;
    list-style: none;
  }
}

.editor {
  width: 58%;
  height: 100%;
  padding: 0 0.8em 0.5em 0;
  overflow: auto;
}
</style>

