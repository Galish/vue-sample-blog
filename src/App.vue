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

<style>
body a {
	color: #41B883;
}
body a:hover {
	color: #41B883;
	text-decoration: underline;
}
</style>
