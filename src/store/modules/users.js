import axios from 'axios'
import queryString from 'query-string'

const URL = 'https://jsonplaceholder.typicode.com/users'

const initialState = () => ({
	users: null,
	usersTotalCount: 0
})

const getters = {
	users: state => state.users,
	usersTotalCount: state => state.usersTotalCount
}

const actions = {
	async fetchUsers({ commit }, { limit = 10, page = 0 }) {
		const query = queryString.stringify({
			_limit: limit,
			_page: page
		})

		const response = await axios.get(`${URL}?${query}`)

		commit('setUsers', response.data)
		commit('setUsersTotalCount', response.headers[ 'x-total-count' ])
	},

	clearUsers({ commit }) {
		commit('setUsers', initialState().users)
	}
}

const mutations = {
	setUsers: (state, users) => state.users = users,
	setUsersTotalCount: (state, totalCount) => state.usersTotalCount = parseInt(totalCount)
}

export default {
	state: initialState(),
	getters,
	actions,
	mutations
}
