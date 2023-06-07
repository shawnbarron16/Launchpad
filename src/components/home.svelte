<script>
	import ArticleStore from "../components/stores/ArticleStore.js";

	//The limit sets how many articles/launches will be displayed on the homepage
	let limit = 3;
</script>

<main>
	<h1>
		“When you launch in a rocket, you’re not really flying that rocket.
		You’re just sort of hanging on.” - Michael P. Anderson
	</h1>
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
