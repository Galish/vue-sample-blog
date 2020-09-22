<template>
	<div class="eight wide computer column">
		<div class="ui items unstackable">
			<div class="item unstackable">
				<div class="image">
					<img :src="avatarSrc">
				</div>

				<div class="content">
					<div class="header">
						{{ name }}
					</div>

					<template v-if="company">
						<div
							v-if="company.name"
							class="meta"
						>
							<span>{{ company.name }}</span>
						</div>
					</template>

					<div
						v-if="phone || email || website"
						class="description"
					>
						<p v-if="phone">
							<i class="phone square icon" />

							{{ phone }}
						</p>

						<p v-if="email">
							<i class="mail square icon" />

							{{ email }}
						</p>

						<p v-if="website">
							<i class="external square icon" />

							{{ website }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getUserAvatar } from '@/helpers'

export default {
	name: 'UserCard',
	props: {
		avatar: {
			type: String,
			default: ''
		},
		index: {
			type: Number,
			default: 0
		},
		id: {
			type: Number,
			required: true
		},
		name: {
			type: String,
			required: true,
			default: ''
		},
		company: {
			type: Object,
			default() {
				return {}
			}
		},
		phone: {
			type: String,
			default: ''
		},
		email: {
			type: String,
			default: ''
		},
		website: {
			type: String,
			default: ''
		}
	},
	computed: {
		avatarSrc() {
			return this.avatar || this.getUserAvatar(this.id)
		}
	},
	methods: {
		getUserAvatar
	}
}
</script>
