<template>
	<div class="footer">
		<div class="ui divider" />

		<slot />
	</div>
</template>

<script>
export default {
	name: 'LayoutFooter'
}
</script>

<style scoped>
	.ui.dividing.header {
		padding-top: 20px;
		padding-bottom: 20px;
	}
</style>
