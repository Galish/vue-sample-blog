<template>
	<div class="eight wide computer column">
		<div class="ui items unstackable">
			<div class="item unstackable">
				<div class="image">
					<img
						:src="avatarSrc"
					>
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
						v-if="user.phone"
						class="description"
					>
						{{ user.phone }}
					</div>

					<div
						v-if="user.email || user.website"
						class="extra"
					>
						<p v-if="user.email">
							{{ user.email }}
						</p>

						<p v-if="user.website">
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
	'https://semantic-ui.com/images/avatar/large/jenny.jpg'
]

export default {
	name: 'User',
	props: {
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
			return AVATARS[ this.index % 2 ]
		}
	}
}
</script>
