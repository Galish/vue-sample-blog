<template>
	<div>
		<slot />

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
						@click="onSelect(number)"
					>
						{{ number }}
					</div>
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
		}
	},
	data() {
		return {
			activePage: 1
		}
	},
	computed: {
		pagesCount() {
			return Math.ceil(this.totalCount / this.pageSize)
		}
	},
	watch: {
		activePage(activePage) {
			this.$emit('fetchData', activePage)
		}
	},
	created() {
		this.$emit('fetchData')
	},
	methods: {
		onSelect(page) {
			this.activePage = page
		}
	}
}
</script>
