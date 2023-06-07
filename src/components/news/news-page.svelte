<script>
    import ArticleStore from "../stores/ArticleStore.js"
</script>

<main>
        <h1>News</h1>
        {#each $ArticleStore as article}
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
