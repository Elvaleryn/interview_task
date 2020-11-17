<template>
	<div class="container album mt-5">
		<div class="row">
			<Album
				v-for="album in albums"
				:key="album.id"
				:title="album.title"
				:id="album.id"
			/>
		</div>
		<scroll-loader :loader-method="getAlbums" :loader-disable="disable">
		</scroll-loader>
	</div>
</template>

<script>
import axios from "axios";
import Album from "./Album/Album";

export default {
	name: "App",
	components: {
		Album,
	},
	data() {
		return {
			albums: [],
			page: 1,
			perPage: 12,
			disable: false,
		};
	},
	methods: {
		getAlbums() {
			axios
				.get("https://jsonplaceholder.typicode.com/albums", {
					params: {
						_page: this.page++,
						_limit: this.perPage,
					},
				})
				.then((res) => {
					this.albums = [...this.albums, ...res.data];
					this.disable =
						res.data.length < this.pageSize ||
						res.data.length === 0;
				});
		},
	},
	mounted() {
		this.getAlbums();
	},
};
</script>


