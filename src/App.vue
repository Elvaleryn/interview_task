<template>
	<div id="app">
		<Header />
        <Albums />
		<Footer />
	</div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Albums from "./components/Albums";

export default {
	name: "App",
	components: {
		Header,
		Footer,
		Albums,
	},
};
</script>


