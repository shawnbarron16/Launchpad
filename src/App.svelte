<script>
	import Navbar from "./components/navbar.svelte";
	import Footer from "./components/footer.svelte";
</script>

<Navbar />
<main>
	<h1>“When you launch in a rocket, you’re not really flying that rocket.
		You’re just sort of hanging on.” - Michael P. Anderson
	</h1>
	<p>News and Launches</p>
</main>
<Footer />

<style>
	main{
		max-width: 1000px;
		margin: 40px auto;
		text-align: center;
	}
</style>