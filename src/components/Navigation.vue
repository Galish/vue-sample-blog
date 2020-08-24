<template>
	<div
		v-if="pagesCount > 1"
		class="ui centered grid"
	>
		<div class="center aligned column">
			<div class="ui pagination menu">
				<div
					v-for="(number, index) in pagesCount"
					:key="index"
					class="item"
					:class="{ active: activePage === number }"
					@click="$emit('select', number)"
				>
					{{ number }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Navigation',
	props: {
		totalCount: {
			type: Number,
			default: 0
		},
		pageSize: {
			type: Number,
			default: 0
		},
		activePage: {
			type: Number,
			default: 1
		},
	},
	computed: {
		pagesCount() {
			return Math.ceil(this.totalCount / this.pageSize)
		}
	}
}
</script>
