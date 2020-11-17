<template>
	<div
		class="modal fade bd-example-modal-lg"
		tabindex="-1"
		:id="id"
		role="dialog"
	>
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
                <PhotoCarousel :id="id" :photos="photos"/>
				<div
					class="modal-body px-0 d-flex flex-wrap align-items-center justify-content-center"
					v-if="imagesAreVisible"
				>
					<ThumbnailPhoto
						v-for="photo in photos"
						:key="photo.id"
						:src="photo.thumbnailUrl"
					/>
				</div>
				<div class="modal-body px-0" v-else>
					<Comment
						v-for="comment in comments"
						:key="comment.id"
						:name="comment.name"
						:body="comment.body"
						:email="comment.email"
					/>
				</div>
				<div class="modal-footer d-flex justify-content-between">
					<button
						class="btn btn-primary"
						@click="imagesAreVisible = !imagesAreVisible"
					>
						<span v-if="!imagesAreVisible">See all photos</span
						><span v-else>See all comments</span>
					</button>
					<button
						type="button"
						class="btn btn-secondary px-5"
						data-dismiss="modal"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Comment from "./Comment";
import ThumbnailPhoto from "./ThumbnailPhoto";
import PhotoCarousel from "./PhotoCarousel";
export default {
	name: "AlbumModal",
	props: {
		comments: Array,
		photos: Array,
		id: Number,
	},
	components: {
		Comment,
        ThumbnailPhoto,
        PhotoCarousel
	},
	data() {
		return {
			imagesAreVisible: false,
		};
	},
};
</script>