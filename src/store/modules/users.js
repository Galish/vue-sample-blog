import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/users'

const state = {
	users: []
}

const getters = {
	users: state => state.users
}

const actions = {
	async fetchUsers({ commit }) {
		const response = await axios.get(URL)

		commit('setUsers', response.data)
	}
}

const mutations = {
	setUsers: (state, users) => state.users = users
}

export default {
	state,
	getters,
	actions,
	mutations
}
