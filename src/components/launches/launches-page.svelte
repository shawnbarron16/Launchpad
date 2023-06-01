<script>
    import { db } from "../../firebase";

    let launches = []
    //Get every document from the db, looping over each one and run a function to render some html using the data from that document.
    //The last line, launches = launches, is needed because while the push method does update the launches array, the update is not seen until the array itself is resubstantiated. 
    db.collection('launches').get().then((snapshot) => {
        snapshot.docs.forEach(document => {
            launches.push(document.data())
            launches = launches
        })
    })

    console.log("Launches array:", launches)
</script>

<main>
    <h1>Launches</h1>
    {#each launches as launch (launch.id)}
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