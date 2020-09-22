<template>
	<div class="ui centered grid">
		<div class="center aligned column">
			<h2 class="ui header">
				<img
					class="ui centered mini image"
					alt="Vue logo"
					src="@/assets/logo.png"
				>
				<div class="content">
					<slot />
				</div>
			</h2>
		</div>
	</div>
</template>

<script>
export default {
	name: 'LayoutHeader'
}
</script>

<style scoped>
.ui.header {
	color: #34495E;
	padding-top: 20px;
	padding-bottom: 10px;
}
</style>
