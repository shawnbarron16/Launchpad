<script>
	import ArticleStore from "../components/stores/ArticleStore.js";
	import LaunchStore from "./stores/LaunchStore.js"

	//The limit sets how many articles/launches will be displayed on the homepage
	let limit = 3;
</script>

<main>
	<p>News and Launches</p>
	<h3>News</h3>
	{#each $ArticleStore as article, i}
		{#if i < limit}
			<a href={article.url}>
				<div>
					<p>
						Title: {article.title}
						<img src={article.image_url} alt="Article preview" />
					</p>
					<p>
						{article.summary}
					</p>
				</div>
			</a>
		{/if}
	{/each}
	<h3>Launches</h3>
	{#each $LaunchStore as launch, i}
		{#if i < limit}
		<div>
            Agency: {launch.launch_service_provider.name}
            Model: {launch.rocket.configuration.full_name}
            Number of launches for {launch.launch_service_provider.name} this year: {launch.agency_launch_attempt_count_year}
            Mission type: {launch.mission.type}
        </div>
		{/if}
	{/each}
</main>

<style>
	main {
		max-width: 1000px;
		margin: 40px auto;
		text-align: center;
	}

	img {
		margin-top: 5px;
		width: 150px;
		height: 100px;
	}
</style>
