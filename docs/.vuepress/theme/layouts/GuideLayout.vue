<template>
	<div class="guide-container">
		<!--        <div class="home-link-container">-->
		<!--            <router-link to="/">-->
		<!--                <el-card class="home-link" shadow="hover">-->
		<!--                    <i class="el-icon-s-home"></i> 返回主页-->
		<!--                </el-card>-->
		<!--            </router-link>-->
		<!--        </div>-->
		<!--        <div class="guide-title">-->
		<!--            {{ guideTitle }}-->
		<!--        </div>-->
		<div class="tags-cloud">
			<!--            <blockquote><h3>-->
			<!--                <i class="el-icon-cloudy"></i> 标签云-->
			<!--            </h3></blockquote>-->
			<el-tag
				v-for="item in tagsPool"
				class="tag-individual"
				@click="onTagClicked(item)"
				effect="plain"
				hit="true"
			>
				<el-link type="primary" icon="el-icon-paperclip" :underline="false" disabled>
					{{ item }}
				</el-link>
			</el-tag>
		</div>
	</div>
</template>

<script>
export default {
	name: 'GuideLayout',

	data() {
		return {
			guideTitle: 'We will guide you through this blog~',
			tagsPool: []
		};
	},
	methods: {
		onTagClicked(tag) {
			this.$emit('tag clicked', tag);
		}
	},

	mounted() {
		const tags = this.$site.pages.map(item => {
			return (item.frontmatter && item.frontmatter.tags) || '';
		});
		const tagsArr = tags
			.join(', ')
			.split(', ')
			.filter(i => i !== '');
		this.tagsPool = [...new Set(tagsArr)];
	}
};
</script>

<style lang="stylus" scoped>
.guide-container {
    text-align: center;
    margin: 2rem;
}
.guide-title  {
    width: 50%;
    margin: 0 auto;
    font-size: 200%;
    font-family: "American Typewriter", serif;
}
.tags-cloud {
    /*padding: 1rem;*/
}
.tag-individual {
    /*display inline-block*/
    /*border: 1px solid green;*/
    /*border-radius: 4px;*/
    /*padding: 5px;*/
    /*margin: .5rem;*/
    margin: 5px
    &:hover {
        cursor pointer
    }
}
.home-link-container {
    padding-bottom 4rem
    margin 0 auto
    width 20%
}
@media (max-width: $MQMobile)
    .home-link-container {
        padding-bottom 4rem
        margin 0 auto
        width 40%
    }
</style>
