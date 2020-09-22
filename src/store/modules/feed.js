import axios from 'axios'
import queryString from 'query-string'

const URL = 'https://jsonplaceholder.typicode.com/posts'

const initialState = () => ({
	post: null,
	posts: null,
	postsTotalCount: 0
})

const getters = {
	post: state => state.post,
	posts: state => state.posts,
	postsTotalCount: state => state.postsTotalCount
}

const actions = {
	async fetchPost({ commit }, id) {
		const response = await axios.get(`${URL}/${id}`)

		commit('setPost', response.data)
	},

	async fetchPosts({ commit }, { limit = 10, page = 0 }) {
		const query = queryString.stringify({
			_limit: limit,
			_page: page
		})

		const response = await axios.get(`${URL}?${query}`)

		commit('setPosts', response.data)
		commit('setPostsTotalCount', response.headers[ 'x-total-count' ])
	},

	clearPost({ commit }) {
		commit('setPost', initialState().post)
	},

	clearPosts({ commit }) {
		commit('setPosts', initialState().posts)
	}
}

const mutations = {
	setPost: (state, post) => state.post = post,
	setPosts: (state, posts) => state.posts = posts,
	setPostsTotalCount: (state, totalCount) => state.postsTotalCount = parseInt(totalCount)
}

export default {
	state: initialState(),
	getters,
	actions,
	mutations
}
