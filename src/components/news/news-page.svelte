<script>
    import ArticleStore from "../stores/ArticleStore.js";
</script>

<main>
    <h1>News</h1>
    <div class="articles">
        {#each $ArticleStore as article}
            <a href={article.url}>
                <div class="article-container">
                    <div class="article-content">
                        <img src={article.image_url} alt="Article preview" />
                        <p class="title">
                            {article.title}
                        </p>
                        <p>
                            {article.summary}
                        </p>
                    </div>
                </div>
            </a>
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

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        img {
            float: none;
        }

        .article-content {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
</style>
