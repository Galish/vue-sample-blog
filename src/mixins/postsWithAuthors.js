import { mapActions, mapGetters } from 'vuex'

const postsWithAuthorsMixin = {
	computed: {
		...mapGetters([ 'users' ]),
		authorIDs() {
			const set = new Set();

			(this.posts || []).forEach(({ userId }) => set.add(userId))

			return [ ...set ]
		},
		authorsMap() {
			return (this.users || [])
				.filter(({ id }) => this.authorIDs.includes(id))
				.reduce((acc, user) => ({
					...acc,
					[ user.id ]: user
				}), {})
		},
		postsWithAutorData() {
			if (
				!this.posts
				||
				!this.posts.every(({ userId }) => this.authorsMap[ userId ])
			) {
				return null
			}
			return this.posts.map(({ userId, ...post }) => ({
				...post,
				author: this.authorsMap[ userId ]
			}))
		}
	},
	watch: {
		posts() {
			this.fetchAuthors()
		}
	},
	beforeDestroy() {
		this.clearUsers()
	},
	methods: {
		...mapActions([ 'fetchUser', 'clearUsers' ]),
		fetchAuthors() {
			const existing = (this.users || []).map(({ id }) => id)
			const missing = this.authorIDs.filter(id => !existing.includes(id))
			const promises = missing.map(id => this.fetchUser({ id }))

			return Promise.all(promises)
		}
	}
}

export default postsWithAuthorsMixin
