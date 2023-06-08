<script>
    import LaunchStore from "../stores/LaunchStore";
</script>

<main>
    <!--Access the Article Store and render the results-->
    <h1>Launches</h1>
    {#each $LaunchStore as launch (launch.id)}
        <div>
            Agency: {launch.launch_service_provider.name}
            Model: {launch.rocket.configuration.full_name}
            Number of launches for {launch.launch_service_provider.name} this year: {launch.agency_launch_attempt_count_year}
            Mission type: {launch.mission.type}
        </div>
    {/each}
</main>

<style>
    
</style>