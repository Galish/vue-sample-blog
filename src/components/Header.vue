<template>
	<div class="ui centered grid">
		<div class="center aligned column">
			<h2 class="ui dividing header">
				<img
					class="ui centered mini image"
					alt="Vue logo"
					src="@/assets/logo.png"
				>
				<div class="content">
					Vue sample app
				</div>
			</h2>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header'
}
</script>

<style scoped>
	.ui.dividing.header {
		padding-top: 20px;
		padding-bottom: 20px;
	}
</style>
