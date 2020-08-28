import axios from 'axios'
import queryString from 'query-string'

const URL = 'https://jsonplaceholder.typicode.com/users'

const initialState = () => ({
	users: null,
	usersTotalCount: 0
})

const getters = {
	users: state => state.users,
	usersByID: state => (ids = []) => (
		(state.users || []).filter(({ id }) => ids.includes(id))
	),
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

	async fetchUser({ commit }, { id }) {
		const response = await axios.get(`${URL}/${id}`)

		commit('appendUser', response.data)
	},

	clearUsers({ commit }) {
		commit('setUsers', initialState().users)
	}
}

const mutations = {
	appendUser: (state, user) => state.users = [ ...(state.users || []), user ],
	setUsers: (state, users) => state.users = users,
	setUsersTotalCount: (state, totalCount) => state.usersTotalCount = parseInt(totalCount)
}

export default {
	state: initialState(),
	getters,
	actions,
	mutations
}
