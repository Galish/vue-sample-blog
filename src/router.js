import Vue from 'vue'
import Router from 'vue-router'

import FeedView from '@/views/FeedView.vue'
import HomeView from '@/views/HomeView.vue'
import PostView from '@/views/PostView.vue'
import UsersView from '@/views/UsersView.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/feed',
			name: 'feed',
			component: FeedView
		},
		{
			path: '/feed/:id',
			name: 'post',
			component: PostView
		},
		{
			path: '/users',
			name: 'users',
			component: UsersView
		}
	]
})
