import { writable } from "svelte/store";

const ArticleStore = writable([], set => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles')
        .then(res => res.json())
        .then(data => {
            //console.log("API response:", data);
            if (data && data.results) {
                const loadedArticles = data.results.map(result => {
                    return {
                        url: result.url,
                        title: result.title,
                        image_url: result.image_url,
                        summary: result.summary
                    };
                });
                set(loadedArticles);
            } else {
                console.error("Unexpected API response:", data.results);
            }
        })
        .catch(error => {
            console.error("API request error:", error);
        });
});

export default ArticleStore;