<template>
	<div
		v-if="posts"
		class="ui stackable grid"
	>
		<post-item
			v-for="(post, index) in posts"
			:key="post.id"
			:index="index"
			:post="post"
		/>
	</div>

	<div
		v-else
		class="ui stackable grid"
	>
		<div
			v-for="index in skeletonsCount"
			:key="index"
			class="four wide computer column"
		>
			<post-skeleton />
		</div>
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
		}
	}
}
</script>
