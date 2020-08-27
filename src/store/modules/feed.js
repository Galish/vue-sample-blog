import axios from 'axios'
import queryString from 'query-string'

const URL = 'https://jsonplaceholder.typicode.com/posts'

const initialState = () => ({
	posts: null,
	postsTotalCount: 0
})

const getters = {
	posts: state => state.posts,
	postsTotalCount: state => state.postsTotalCount
}

const actions = {
	async fetchPosts({ commit }, { limit = 10, page = 0 }) {
		const query = queryString.stringify({
			_limit: limit,
			_page: page
		})

		const response = await axios.get(`${URL}?${query}`)

		commit('setPosts', response.data)
		commit('setPostsTotalCount', response.headers[ 'x-total-count' ])
	},

	clearPosts({ commit }) {
		commit('setPosts', initialState().posts)
	}
}

const mutations = {
	setPosts: (state, posts) => state.posts = posts,
	setPostsTotalCount: (state, totalCount) => state.postsTotalCount = parseInt(totalCount)
}

export default {
	state: initialState(),
	getters,
	actions,
	mutations
}
