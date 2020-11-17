<template>
	<div class="comment pb-3 pt-3 px-3">
		<p>
			<span class="comment-name">{{ name }} </span>
			<span class="text-muted">{{ `(${email})` }}</span>
		</p>
		<p>{{ body }}</p>
	</div>
</template>

<script>
export default {
	name: "Comment",
	props: {
		name: String,
		email: String,
		body: String,
	},
};
</script>
