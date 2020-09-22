<template>
	<div class="ui labeled icon menu">
		<router-link
			v-for="item in menuItems"
			:key="item.id"
			class="item"
			:class="{ active: item.isActive }"
			:to="item.path"
		>
			<i
				class="icon"
				:class="item.icon"
			/>

			{{ item.label }}
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'MainMenu',
	props: {
		items: {
			type: Array,
			default() {
				return []
			}
		}
	},
	computed: {
		menuItems() {
			return this.items.map(item => ({
				...item,
				isActive: item.path === this.$route.path
			}))
		}
	},
	mounted() {
		console.info('App currentRoute:', this.$route.path)
	}
}
</script>

<style scoped="">
.ui.menu {
	margin-bottom: 40px;
}
.ui.menu .item.active {
	color: white;
	background-color: #41B883;
}
</style>
