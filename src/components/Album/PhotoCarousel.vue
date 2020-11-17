<template>
	<div
		:id="`carousel${id}`"
		class="carousel slide carousel-fade"
		:class="`carousel${id}`"
	>
		<div class="carousel-inner">
			<div
				class="carousel-item"
				v-for="(photo, idx) in photos"
				:class="{ active: idx == 0 }"
				:key="photo.id"
			>
				<img :src="photo.url" alt="" class="d-block w-100" />
			</div>
		</div>

		<a
			class="carousel-control-prev"
			:href="`#carousel${id}`"
			role="button"
			data-slide="prev"
		>
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="sr-only">Previous</span>
		</a>
		<a
			class="carousel-control-next"
			:href="`#carousel${id}`"
			role="button"
			data-slide="next"
		>
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="sr-only">Next</span>
		</a>
	</div>
</template>

<script>
export default {
    name: "PhotoCarousel",
    props: {
        photos: Array,
        id: Number
    }
};
</script>