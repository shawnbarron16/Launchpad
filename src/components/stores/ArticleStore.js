import { writable } from "svelte/store";

//Fetch the news data directly from the news api, convert it into json, check if the fetch actually got results. 
//If yes map the results to an array called loadedArticles, then set the store value to that array.
//If no then console log the error.
const ArticleStore = writable([], set => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles')
        .then(res => res.json())
        .then(data => {
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