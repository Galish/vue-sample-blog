<template>
	<div class="ui items unstackable">
		<div class="item unstackable">
			<div class="image">
				<div class="ui placeholder">
					<div class="image" />
				</div>
			</div>

			<div class="content">
				<div class="ui placeholder">
					<div class="header">
						<div class="line" />
					</div>

					<div class="paragraph">
						<div class="short line" />
						<div class="medium line" />
						<div class="medium line" />
						<div class="short line" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UserSkeleton'
}
</script>

<style scoped>
.ui.placeholder .image {
	padding-top: 100%;
}

.ui.placeholder .header .line {
	font-size: 22px;
}

.ui.placeholder .paragraph .line {
	font-size: 16px;
}
</style>
