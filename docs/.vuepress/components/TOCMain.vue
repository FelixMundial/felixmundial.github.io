<template>
	<div class="toc-container">
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
					<div>
						<img :src="item.frontmatter.image" class="toc-section-image" alt="" />
						<el-card shadow="hover" class="toc-section-container">
							<div v-if="item.frontmatter.desc" class="toc-section">
								<div class="toc-section-contents">{{ item.frontmatter.title }} ...</div>

								<div class="toc-section-info">
									<el-button type="primary" size="mini" plain>
										<i class="el-icon-folder-opened"></i>
										{{ item.frontmatter.category }}
									</el-button>
									<!--                                    <el-tag v-for="(tag, tagIndex)-->
									<!--                                                                                            in getTags(item.frontmatter.tags)"-->
									<!--                                            :key="tagIndex">-->
									<!--                                        <i class="el-icon-collection-tag"></i> {{ tag }}-->
									<!--                                    </el-tag>-->
								</div>
							</div>
							<!--                            excerpt属性自动生成文章摘要-->
							<!--                            <div v-html="item.excerpt" v-else></div>-->
						</el-card>
					</div>
				</a>
			</el-timeline-item>
		</el-timeline>
	</div>
</template>

<script>
export default {
	name: 'TOC_Main',

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
	justify-content: space-around;
}

.toc-section-contents, .toc-section-info {
	display: block
}

.toc-section-contents {
	width: 80%
}

.toc-section-info {
	display: flex;
	align-self: center
	margin: .5rem 0
}

//    修改时间戳默认样式
.toc-container /deep/ .el-timeline-item__timestamp {
	font-family "American Typewriter", serif
	color: #343099;
	line-height: 1.5rem;
	font-size: 20px;
}

@media (max-width: $MQMobile)
	.toc-container /deep/ .el-card__body {
		padding: 0
	}
</style>
