<template>
	<div class="eight wide tablet four wide computer column">
		<div class="ui raised card unstackable">
			<div class="content center aligned">
				<div class="ui fluid placeholder">
					<div class="header">
						<div class="line" />

						<div class="line mobile or lower hidden" />

						<div
							v-if="view !== 'short'"
							class="line tablet or lower hidden"
						/>
					</div>

					<div
						v-if="view !== 'short'"
						class="paragraph"
					>
						<div class="short line" />
					</div>

					<div class="paragraph">
						<div class="line" />

						<div
							v-if="view !== 'short'"
							class="line mobile or lower hidden"
						/>

						<div
							v-if="view !== 'short'"
							class="line tablet or lower hidden"
						/>

						<div class="short line" />
					</div>
				</div>
			</div>

			<div class="extra content">
				<div
					class="author"
					:class="{
						'right floated': view === 'full',
						'center aligned': view === 'short'
					}"
				>
					<div class="ui avatar image placeholder" />

					<div class="ui fluid placeholder">
						<div class="line" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PostSkeleton',
	props: {
		view: {
			type: String,
			default: 'full'
		}
	}
}
</script>

<style scoped>
.ui.card, .ui.cards>.card {
	min-height: 100%;
	width: auto;
}

.ui.placeholder .header .line {
	font-size: 22px;
}

.ui.placeholder .paragraph .line {
	font-size: 16px;
}

.extra.content .ui.fluid.placeholder {
	width: 80px;
	display: inline-block;
	margin-top: 0;
}
</style>
