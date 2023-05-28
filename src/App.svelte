<script>
	import Router from "svelte-spa-router";
	import Home from "./components/home.svelte";
	import Navbar from "./components/navbar.svelte";
	import Footer from "./components/footer.svelte";
	import Launches from "./components/launches/launches-page.svelte";
	import News from "./components/news/news-page.svelte";

	let routes = {
		"/": Home,
		"/launches":Launches,
		"/news":News			
	}
	
</script>

<Navbar />
<main>
	<Router {routes}/>
</main>
<Footer />

<style>

</style>