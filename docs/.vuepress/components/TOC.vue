<template>
	<div class="toc-container">
		<GuideLayout />

		<el-timeline reverse="reverse">
			<el-timeline-item
				v-for="(item, index) in articles"
				:key="index"
				size="large"
				type="primary"
				:timestamp="getLocalizedDate(item.frontmatter.date)"
				icon="el-icon-bicycle"
				placement="top"
			>
				<a :href="item.path">
					<el-card shadow="hover" class="toc-section-container">
						<div v-if="item.frontmatter.title" class="toc-section">
							<div class="toc-section-contents">
								{{ item.frontmatter.title }}
							</div>
							<div class="toc-section-info">
								<el-button type="primary" size="mini" plain>
									<i class="el-icon-folder-opened"></i>
									{{ item.frontmatter.category }}
								</el-button>
								<!--                                   <el-tag v-for="(tag, tagIndex)-->
								<!--                                                                                           in getTags(item.frontmatter.tags)"-->
								<!--                                           :key="tagIndex">-->
								<!--                                       <i class="el-icon-collection-tag"></i> {{ tag }}-->
								<!--                                   </el-tag>-->
							</div>
						</div>
						<!--                           excerpt属性自动生成文章摘要-->
						<!--                           <div v-html="item.excerpt" v-else></div>-->
					</el-card>
				</a>
			</el-timeline-item>
		</el-timeline>
	</div>
</template>

<script>
import GuideLayout from '../theme/layouts/GuideLayout';

export default {
	name: 'TOC',
	components: { GuideLayout },

	data() {
		return {
			articles: []
		};
	},

	mounted() {
		//只统计页面frontmatter中有tags字段的文章，并按日期排序
		this.articles = this.$site.pages
			.filter(item => {
				return item.frontmatter.tags;
			})
			.sort((article1, article2) => {
				return article1.frontmatter.date > article2.frontmatter.date ? 1 : -1;
			});
	},

	methods: {
		getLocalizedDate(date) {
			if (date.length > 10) {
				return date.substr(0, 10);
			}
		},
		getTags(tags) {
			return tags.split(', ').filter(i => i !== '');
		}
	}
};
</script>

<style lang="stylus" scoped>
.toc-container {
	width: 80%;
	margin: 0 auto;

	a:hover {
		text-decoration: none
	}
}

.toc-section-image {
	border-radius: 5px
	width: 100%
	margin: .5px 0
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

.toc-section-contents, .toc-section-info {
	display: block
	/*margin: 5px 0*/
}
</style>
