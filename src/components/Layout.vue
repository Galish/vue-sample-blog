<template>
	<div class="ui container">
		<layout-header v-if="hasHeaderSlot">
			<slot name="header" />
		</layout-header>

		<main-menu :items="menuItems" />

		<slot />

		<layout-footer v-if="hasFooterSlot">
			<slot name="footer" />
		</layout-footer>
	</div>
</template>

<script>
import LayoutHeader from '@/components/LayoutHeader.vue'
import LayoutFooter from '@/components/LayoutFooter.vue'
import MainMenu from '@/components/MainMenu.vue'

export default {
	name: 'Layout',
	components: {
		LayoutHeader,
		LayoutFooter,
		MainMenu
	},
	data() {
		return {
			menuItems: [
				{
					id: 'home',
					label: 'Home',
					path: '/',
					icon: 'home'
				},
				{
					id: 'feed',
					label: 'Feed',
					path: '/feed',
					icon: 'newspaper outline'
				},
				{
					id: 'users',
					label: 'Users',
					path: '/users',
					icon: 'users'
				}
			]
		}
	},
	computed: {
		hasHeaderSlot() {
			return !!this.$slots.header
		},
		hasFooterSlot() {
			return !!this.$slots.footer
		}
	}
}
</script>
