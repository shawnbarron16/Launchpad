<script>
    import LaunchStore from "../stores/LaunchStore";

        const formatTime = (launchWindow) => {
        let betterString = launchWindow.replace("T", ':  Time: ')
        let formatedString = betterString.replace("Z", '')
        return formatedString
    }
</script>

<main>
    <!--Access the Article Store and render the results-->
    <h1>Launches</h1>
    <div class="launches">
        {#each $LaunchStore as launch (launch.id)}
            <div class="launch-display">
                <p class="model">
                    Model: {launch.rocket.configuration.full_name}
                </p>
                <p>
                    Agency: {launch.launch_service_provider.name}
                    <img src={launch.image} alt="rocket" class="rocket-img" />
                </p>
                <p>
                    Number of launches for {launch.launch_service_provider.name}
                    this year: {launch.agency_launch_attempt_count_year}
                </p>
                <p>
                    Mission type: {launch.mission.type}
                </p>
                    Launch Window: <br>
                    Start: {formatTime(launch.window_start)} <br>
                    End: {formatTime(launch.window_end)}
            </div>
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
