<template>
    <div class="toc-container">
        <el-card shadow="hover" v-for="(item, index) in articles" :key="index" class="toc-section">
            <div v-if="item.frontmatter.desc">
                {{item.frontmatter.desc}} ...
                <el-link class="toc-section-more" :href="item.path" type="success" :underline="false">
                阅读原文<i class="el-icon-video-play"></i>
                </el-link>
            </div>
            <div v-html="item.excerpt" v-else></div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "TOC",

        data () {
            return {
                articles: []
            }
        },

        mounted () {
            this.articles = this.$site.pages.filter(item => {
                return item.frontmatter.tags
            })
        }
    }
</script>

<style scoped>
    .toc-section a:hover {
        text-decoration: none;
    }
    .toc-container {
        width: 80%;
        margin: 0 auto;
    }
    .toc-section {
        padding: .6rem;
        margin: 1rem;
    }
    .toc-section-more {
        position: relative;
        float: right;
        margin-right: 1rem;
    }
</style>
