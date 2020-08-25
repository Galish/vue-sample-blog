<template>
	<div class="ui container">
		<layout-header>
			Vue sample app
		</layout-header>

		<slot />

		<layout-footer v-if="hasFooterSlot">
			<slot name="footer" />
		</layout-footer>
	</div>
</template>

<script>
import LayoutHeader from '@/components/LayoutHeader.vue'
import LayoutFooter from '@/components/LayoutFooter.vue'

export default {
	name: 'Layout',
	components: {
		LayoutHeader,
		LayoutFooter
	},
	computed: {
		hasFooterSlot() {
			return !!this.$slots.footer
		}
	}
}
</script>
