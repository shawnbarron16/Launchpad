<script>
	import ArticleStore from "../components/stores/ArticleStore.js";
	import LaunchStore from "./stores/LaunchStore.js";;

	const formatTime = (launchWindow) => {
        let betterString = launchWindow.replace("T", ':  Time: ')
        let formatedString = betterString.replace("Z", '')
        return formatedString
    }
	//The limit sets how many articles/launches will be displayed on the homepage
	let limit = 3;
</script>

<main>
	<h2>Latest News</h2>
	<!--The i in the each loops represents the index of the object pulled from the stores-->
	<div class="articles">
		{#each $ArticleStore as article, i}
			{#if i < limit}
				<a href={article.url}>
					<div class="news-article">
						<img src={article.image_url} alt="Article preview" />
						<p class="title">
							Title: {article.title}
						</p>
						<p>
							{article.summary}
						</p>
					</div>
				</a>
			{/if}
		{/each}
	</div>
	<h2>Upcoming Launches</h2>
	<div class="launches">
		{#each $LaunchStore as launch, i}
			{#if i < limit}
				<div class="launch-display">
					<p class="model">
						Model: {launch.rocket.configuration.full_name}
					</p>
					<p>
					Agency: {launch.launch_service_provider.name}
					<img src={launch.image} alt="rocket" class="rocket-img">
					</p>
					<p>
					Number of launches for {launch.launch_service_provider.name} this year: {launch.agency_launch_attempt_count_year}
					</p>
					<p>
					Mission type: {launch.mission.type}
					</p>
					Launch Window: <br>
                    Start: {formatTime(launch.window_start)} <br>
                    End: {formatTime(launch.window_end)}
				</div>
			{/if}
		{/each}
	</div>
</main>

<style>
	main {
		max-width: 1000px;
		margin: 40px auto;
		text-align: center;
		font-size: large;
	}

	img {
		margin-top: 5px;
		width: 300px;
		height: 200px;
		float: left;
	}

	a {
		text-align: left;
		border-style: double;
		margin-bottom: 25px;
	}

	.title {
		font-weight: 1000;
		font-size: larger;
	}

	.articles {
		display: flex;
		flex-direction: column;
	}

	.launches {
		display: flex;
		flex-direction: column;
	}

	.launch-display {
		text-align: left;
		border-style: double;
		margin-bottom: 25px;
	}

	.model {
		text-align: center;
		font-weight: 1000;
		font-size: larger;
	}
	
	.rocket-img {
		float: right;
	}
</style>
