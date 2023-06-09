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
		{#each $LaunchStore as launch, i}
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
		margin-top: 5px;
		width: 300px;
		height: 200px;
	}

	/* Media query for mobile devices */
	@media (max-width: 768px) {
		.launch-content {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		
		.rocket-img {
			float: none;
		}
	}
</style>
