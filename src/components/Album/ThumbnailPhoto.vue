<template>
	<a :href="src" target="_blank" rel="noopener noreferrer">
		<img
			:src="src"
			class="m-3 album-image"
			alt="image"
		/>
	</a>
</template>

<script>
export default {
	name: "ThumbnailPhoto",
	props: {
		src: String,
	},
};
</script>