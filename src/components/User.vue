<template>
	<div class="eight wide computer column">
		<div class="ui items unstackable">
			<div class="item unstackable">
				<div class="image">
					<img :src="avatarSrc">
				</div>

				<div class="content">
					<div class="header">
						{{ user.name }}
					</div>

					<template v-if="user.company">
						<div
							v-if="user.company.name"
							class="meta"
						>
							<span>{{ user.company.name }}</span>
						</div>
					</template>

					<div
						v-if="user.phone || user.email || user.website"
						class="description"
					>
						<p v-if="user.phone">
							<i class="phone square icon" />

							{{ user.phone }}
						</p>

						<p v-if="user.email">
							<i class="mail square icon" />

							{{ user.email }}
						</p>

						<p v-if="user.website">
							<i class="external square icon" />

							{{ user.website }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const AVATARS = [
	'https://semantic-ui.com/images/avatar/large/stevie.jpg',
	'https://semantic-ui.com/images/avatar/large/jenny.jpg',
	'https://semantic-ui.com/images/avatar2/large/elyse.png',
	'https://semantic-ui.com/images/avatar2/large/kristy.png',
	'https://semantic-ui.com/images/avatar2/large/matthew.png'
]

export default {
	name: 'User',
	props: {
		avatar: {
			type: String,
			default: ''
		},
		index: {
			type: Number,
			default: 0
		},
		user: {
			type: Object,
			required: true
		}
	},
	computed: {
		avatarSrc() {
			return this.avatar || this.getUserAvatar()
		}
	},
	methods: {
		getUserAvatar() {
			return AVATARS[ this.user.id % AVATARS.length ]
		}
	}
}
</script>
