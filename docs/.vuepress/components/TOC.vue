<template>
    <div class="toc-container">
        <el-timeline reverse=true>
            <el-timeline-item v-for="(item, index) in articles" :key="index" size="large" type="primary"
                              :timestamp="getLocalizedDate(item.frontmatter.date)" placement="top">

                <a :href="item.path">
                    <el-card shadow="hover" class="toc-section-container">

                        <div v-if="item.frontmatter.desc" class="toc-section">
                            <div class="toc-section-contents">
                                {{ item.frontmatter.desc }} ...
                            </div>

                            <div class="toc-section-info">
                                <el-button type="primary" size="mini" plain>
                                    <i class="el-icon-folder-opened"></i>
                                    {{ item.frontmatter.category }}
                                </el-button>
<!--                                <el-tag v-for="(tag, tagIndex)-->
<!--                                                        in getTags(item.frontmatter.tags)" :key="tagIndex">-->
<!--                                    <i class="el-icon-collection-tag"></i> {{ tag }}-->
<!--                                </el-tag>-->
                            </div>
                        </div>
<!--                        <div v-html="item.excerpt" v-else></div>-->

                    </el-card>
                </a>

            </el-timeline-item>
        </el-timeline>
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
        },

        methods: {
            getLocalizedDate(date) {
                return date.substr(0, 10)
            },
            getTags(tags) {
                return tags.split(", ").filter(i => i !== "")
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .toc-container {
        width: 80%;
        margin: 0 auto;
        a:hover {
            text-decoration: none
        }
    }
    .toc-section-container {
        padding: .6rem;
        margin: 1rem;
    }
    .toc-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .toc-section-contents {
        display: block
    }
    .toc-section-info {
        display: block
    }
</style>
