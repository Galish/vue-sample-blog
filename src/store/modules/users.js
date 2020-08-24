import axios from 'axios'
import queryString from 'query-string'

const URL = 'https://jsonplaceholder.typicode.com/users'

const state = {
	users: [],
	usersTotalCount: 0
}

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
	}
}

const mutations = {
	setUsers: (state, users) => state.users = users,
	setUsersTotalCount: (state, totalCount) => state.usersTotalCount = parseInt(totalCount)
}

export default {
	state,
	getters,
	actions,
	mutations
}
