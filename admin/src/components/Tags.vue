<template>
    <div style="height:100%">
        <head-nav></head-nav>
        <Aside></Aside>
        <div class="tag-container main">
        <h2>标签筛选 /
            <span>CHOOSE BY TAG</span>
        </h2>
        <hr>
        <main>
            <div class="tag-list">
                <section class="tag">
                    <h5>标签</h5>
                    <ul class="tags" @click="chooseTag($event)">
                        <li class="tag" :class="{chosen: chosenTags.indexOf(tag) > -1}" v-for="tag,index in tags" :key="tag">{{ tag }}</li>
                    </ul>
                </section>
                <section class="chosen-tag" v-show="chosenTags.length">
                    <h5>修改标签</h5>
                    <ul class="tags">
                        <li class="tag-edit" v-for="tag,index in chosenTags">
                            <input type="text" :value="tag" @change="changeTag($event, index)" class="tag-input">
                            <sup @click="deleteTag(tag, index)">x</sup>
                        </li>
                    </ul>
                </section>
                <article-list v-on:tags="getTags" ref="articleList"></article-list>
            </div>
            <editor></editor>
        </main>
       </div>
    </div>
</template>

<script>
import ArticleList from '@/components/common/ArticleList'
import Editor from '@/components/common/Editor'
import request from '@/utils/request'
import HeadNav from "@/components/common/HeadNav";
import Aside from "@/components/common/Aside";
export default {
    name:"tags",
    components:{
        Editor,
        ArticleList,
        HeadNav,
        Aside
    },
    data(){
        return{
            tags:[],
            chosenTags:[123,1231],

        }
    },
    methods:{
        getTags(){

        },
        chooseTag(evt) {
            if (evt.target.tagName === 'LI') {
                const value = evt.target.innerHTML
                if (!evt.target.classList.contains('chosen')) {
                    this.chosenTags.push(value)
                }
                else {
                    this.chosenTags = this.chosenTags.filter(val => val !== value)
                }
                this.$refs.articleList.updateListByTags(this.chosenTags)
            }},
        getTags(tags) {
            this.tags.push(...tags)
        },
        changeTag(evt, i) {
            const oldVal = this.chosenTags[i]
            const newVal = evt.target.value
            if (!newVal) {
                alert('请直接删除Tag!')
                evt.target.value = oldVal
                return
            }
            const tagIndex = this.tags.indexOf(oldVal)
            // 获取tags中的index, 使用未修改的tag值
            if (this.tags.indexOf(newVal) !== -1) {
                this.chosenTags.splice(i, 1)
                this.tags.splice(tagIndex, 1)
            }
            else {
                this.chosenTags.splice(i, 1, newVal)
                this.tags.splice(tagIndex, 1, newVal)
            }
            this.$refs.articleList.updateArticleTag(oldVal, newVal, this.chosenTags)
        },
        deleteTag(tag, i) {
            const tagIndex = this.tags.indexOf(tag)
            // 不再显示该tag
            this.chosenTags.splice(i, 1)
            this.tags.splice(tagIndex, 1)
            this.$refs.articleList.updateListByTags(this.chosenTags)
            // 删除文章中的tag
            this.$refs.articleList.deleteArticleTag(tag)
        }
    }
}
</script>

<style type="text/scss" lang="scss" scoped>
@import "../assets/style/variable";
main {
    @include flex($justify: space-between);
    height: calc(100% - 48px);
    padding: 0.5em 0;
}

.tag-list {
    width: 40%;
    height: 100%;
    overflow: auto;
    padding: 0 0.8em 0.5em 0;
    .tags {
        @include flex($justify: flex-start);
        list-style: none;
        margin-bottom: 2em;
        padding: 0;
        .tag {
            margin: 0 1em 1em 0;
            padding: 0.3em;
            color: $base;
            border-radius: 2px;
            border: 1px solid $base;
            cursor: pointer;
        }
        .chosen {
            color: $white;
            background: $base;
        }

        .tag-edit {
            margin-right: 3px;
        }
    }
    .list {
        margin: 0;
        list-style: none;
        padding: 0;
    }
}

.editor {
    width: 58%;
    height: 100%;
    padding: 0 0.8em 0.5em 0;
    overflow: auto;
}
.operate-bar{
    display: none
}
</style>
