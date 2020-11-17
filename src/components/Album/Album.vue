<template>
	<div class="col-lg-3 col-md-6 col-sm-12 mt-3 d-flex">
		<div class="card mb-3 flex-fill" @click="triggerModal">
			<img
				class="card-img-top"
				:src="albumThumbNail"
				alt="Card image cap"
			/>
			<div class="card-body">
				<p class="card-text">
					{{ title }}
				</p>
			</div>
			<div class="card-footer text-muted bg-white">
				<p class="card-text">
					<small class="text-muted">
						See the album
						<svg class="icon">
							<use
								xlink:href="../../assets/sprite.svg#icon-eye"
							/>
						</svg>
					</small>
				</p>
			</div>
		</div>
		<AlbumModal
			:id="id"
			:photos="photos"
			:comments="comments"
		/>
	</div>
</template>

<script>
import axios from "axios";
import AlbumModal from "./AlbumModal";
import $ from "jquery";
export default {
	name: "Album",
	props: {
		title: String,
		id: Number,
	},
	components: {
		AlbumModal,
	},
	data() {
		return {
			albumThumbNail: "",
			photos: [],
			comments: [],
		};
	},
	methods: {
		triggerModal() {
			$(`#${this.id}`).modal("show");
			if (this.photos.length === 0 && this.comments.length === 0) {
				this.getAllComments();
				this.getAllPhotos();
			}
		},
		getAllComments() {
			axios
				.get(
					`https://jsonplaceholder.typicode.com/comments?postId=${this.id}`
				)
				.then((res) => {
					this.comments = res.data;
				});
		},
		getAllPhotos() {
			axios
				.get(
					`https://jsonplaceholder.typicode.com/photos?albumId=${this.id}`
				)
				.then((res) => {
					this.photos = res.data;
					$(`.carousel${this.id}`).carousel();
				});
		},
		getFirstPhoto() {
			axios
				.get(`https://jsonplaceholder.typicode.com/photos`, {
					params: {
						albumId: this.id,
						_page: 1,
						_limit: 1,
					},
				})
				.then((res) => {
					this.albumThumbNail = res.data[0].thumbnailUrl;
					this.firstPhoto = res.data[0].url;
				});
		},
    },
    beforeDestroy() {
        $(`#${this.id}`).destroy();
    },
	mounted() {
		this.getFirstPhoto();
	},
};
</script>