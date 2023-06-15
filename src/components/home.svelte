<script>
	import ArticleStore from "../components/stores/ArticleStore.js";
	import LaunchStore from "./stores/LaunchStore.js";

	const formatTime = (launchWindow) => {
		let betterString = launchWindow.replace("T", ":  Time: ");
		let formatedString = betterString.replace("Z", "");
		return formatedString;
	};

	let limit = 3;
</script>

<main>
	<h2>Latest News</h2>
	<div class="articles">
		{#each $ArticleStore as article, i}
			{#if i < limit}
				<a href={article.url}>
					<div class="news-article">
						<div class="article-content">
								<img
									class="article-image"
									src={article.image_url}
									alt="Article preview"
								/>
							<p class="title">
								{article.title}
							</p>
							<p>
								{article.summary}
							</p>
						</div>
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
					<div class="launch-content">
						<p class="model">
							Model: {launch.rocket.configuration.full_name}
						</p>
						<img
									src={launch.image}
									alt="rocket"
									class="rocket-img"
								/>
						<div class="launch-details">
							<p>
								Agency: {launch.launch_service_provider.name}
							</p>
							<p>
								Number of launches for {launch.launch_service_provider.name} this year: {launch.agency_launch_attempt_count_year}
							</p>
							<p>
								Mission type: {launch.mission.type}
							</p>
							<p>
								Launch Window: <br />
								Start: {formatTime(launch.window_start)} <br />
								End: {formatTime(launch.window_end)}
							</p>
						</div>
					</div>
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

	.article-image {
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
		margin-top: 5px;
		width: 300px;
		height: 200px;
	}

	/* Media query for mobile devices */
	@media (max-width: 768px) {
		.article-content,
		.launch-content {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		
		.article-image,
		.rocket-img {
			float: none;
		}
	}
</style>

