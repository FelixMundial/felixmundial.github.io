<template>
	<div class="post-header" v-if="post.frontmatter.sidebar !== false">
		<h2 class="post-title">
			<a :href="post.path">
				<span v-if="top" class="top">[置顶]</span>
				{{ post.title }}
			</a>
		</h2>
		<div class="post-meta">
			<div class="author post-meta-item">
				<i class="el-icon-bicycle"></i>
				<span class="">{{ post.frontmatter.author || 'FelixMundial' }}</span>
			</div>

			<div class="time post-meta-item" v-if="post.frontmatter.date">
				<i class="el-icon-time"></i>
				<time>{{ getLocalizedDate(post.frontmatter.date) }}</time>
			</div>

			<div class="category post-meta-item" v-if="post.frontmatter.category">
				<i class="el-icon-collection"></i>
				<router-link class="category-item" :to="{ path: '/category/' + post.frontmatter.category }">
					{{ post.frontmatter.category }}
				</router-link>
			</div>

			<div class="tags post-meta-item" v-if="post.frontmatter.tags && post.frontmatter.tags.length > 0">
				<i class="el-icon-price-tag"></i>
				<el-tag class="tag-item" v-for="item in getTags(post.frontmatter.tags)">
					{{ item }}
				</el-tag>
			</div>

			<!-- Valine利用 id 查询博文浏览量 -->
			<div :id="post.path" class="leancloud-visitors post-meta-item" :data-flag-title="post.title">
				<i class="el-icon-reading"></i>
				<span class="leancloud-visitors-count">{{ readersCount }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PostMeta',
	props: ['post', 'top'],
	data() {
		return {
			readersCount: 0
		};
	},
	methods: {
		getLocalizedDate(date) {
			if (date.length > 10) {
				return date.substr(0, 10);
			}
		},
		getTags(tagString) {
			if (tagString) {
				return tagString.split(', ').filter(i => i !== '');
			}
		}
	}
};
</script>

<style lang="stylus" scoped>
.post-header
	margin $navbarHeight + 2rem 1rem 0 2rem

	.post-title
		font-family American Typewriter, sans-serif
		font-weight normal
		line-height 1.4;
		font-size 2rem

		a
			color $accentColor
			transition color ease 0.2s

			&:hover
				text-decoration none
				color $textColor

	.post-meta
		font-family "8-bit Operator+", sans-serif
		color: #999

		.post-meta-item
			margin .8rem

			&:first-child
				margin 0

		.category-item, .tag-item
			margin-right .4rem

		.category
			.category-item
				color $accentColor
				transition color ease 0.2s

				&:hover
					text-decoration none
					color $textColor
					border-bottom 1px dashed #ddd

		.tags
			.tag-item
				font-style inherit
				margin 2.5px

		.leancloud-visitors
			.leancloud-visitors-count
				font-style inherit
</style>
