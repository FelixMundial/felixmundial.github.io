<template>
	<div class="vcomment-container">
		<div id="vcomments" ref="vcomments"></div>
	</div>
</template>

<script>
export default {
	name: 'Comments',

	computed: {
		data() {
			return this.$page.frontmatter;
		}
	}
};
</script>

<style scoped>
.vcomment-container {
	margin: 4%;
}
</style>
