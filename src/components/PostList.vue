<template>
	<div
		class="ui stackable grid"
	>
		<fragment v-if="hasSlot">
			<div
				v-for="className in [
					'center aligned sixteen wide column tablet mobile only',
					'eight wide column tablet or lower hidden'
				]"
				:key="className"
				:class="className"
			>
				<slot />
			</div>
		</fragment>

		<fragment v-if="posts">
			<post-item
				v-for="(post, index) in posts"
				:key="post.id"
				:index="index"
				:post="post"
				:view="view"
			/>
		</fragment>

		<fragment v-else>
			<post-skeleton
				v-for="index in skeletonsCount"
				:key="index"
				:view="view"
			/>
		</fragment>
	</div>
</template>

<script>
import PostItem from '@/components/PostItem'
import PostSkeleton from '@/components/PostSkeleton'

export default {
	name: 'PostList',
	components: {
		PostItem,
		PostSkeleton
	},
	props: {
		posts: {
			type: Array,
			default() {
				return []
			}
		},
		skeletonsCount: {
			type: Number,
			default: 10
		},
		view: {
			type: String,
			default: 'full'
		}
	},
	computed: {
		hasSlot() {
			return !!this.$slots.default
		},
	}
}
</script>
