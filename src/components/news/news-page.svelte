<script>
    let articles = [];
    async function getNews(req, res) {
        try {
            const newsUrl = "https://api.spaceflightnewsapi.net/v4/articles";
            const response = await fetch(newsUrl);
            response.json().then((data) => {
                articles = data.results;
            });
        } catch (error) {
            console.error("Error getting space news articles:", error);
            res.status(500).send("Error getting space news articles.");
        }
    }

    getNews();
</script>

<main>
    <h1>News</h1>
    {#each articles as article}
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
    {/each}
</main>

<style>
    img {
        margin-top: 5px;
        width: 150px;
        height: 100px;
    }
</style>
