<template>
	<layout>
		<template v-slot:header>
			Vue sample app
		</template>

		<router-view />

		<template v-slot:footer>
			&copy; 2020 Some footer text
		</template>
	</layout>
</template>

<script>
import Layout from '@/components/Layout.vue'

export default {
	name: 'App',
	components: {
		Layout
	}
}
</script>
