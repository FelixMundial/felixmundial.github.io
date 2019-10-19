<template>
    <div class="vcomment-container">
        <el-card class="vcomment" v-if="data.comments === true" shadow="hover">
            <!-- 将 id 作为查询条件 -->
            <el-tag class="visitors-container" data-flag-title="Your Article Title">
                <span class="visitos-count">阅读量 </span>
                <span class="visitors-count-number"></span>
            </el-tag>
            <div ref="vcomments" id="vcomments"></div>
        </el-card>
    </div>
</template>

<script>
    import config from '../config/service_config'

    export default {
        name: "Comments",

        computed: {
            data () {
                return this.$page.frontmatter
            }
        },

        mounted () {
            this.createValine()
        },
        methods: {
            createValine() {
                const Valine = require('valine')
                if (typeof window !== 'undefined') {
                    this.window = window
                    window.AV = require('leancloud-storage')
                }
                this.valine = new Valine()
                this.doInitValine()
            },
            doInitValine() {
                // let path = location.origin + location.pathname
                let path = location.pathname
                // document.getElementsByClassName('visitors-container')[0].id = path
                this.valine.init({
                    el: '#vcomments',
                    appId: config.valine.appId,
                    appKey: config.valine.appKey,
                    notify: false,
                    verify: false,
                    avatar: 'retro',
                    path: path,
                    placeholder: '欢迎留言与我分享您的想法...'
                    // visitor: true // 阅读量统计
                })
            }
        },
        watch: {
            $route (to, from) {
                setTimeout(() => {
                    if (from.path !== to.path) {
                        this.doInitValine()
                    }
                }, 300)
            }
        }
    }
</script>

<style scoped>
    .vcomment-container {
        margin: 4%;
    }
    .visitors-container {
        margin-bottom: 1rem;
    }
    .vcomment {
        display: block;
        margin: 0 auto;
    }
</style>
