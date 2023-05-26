<script>
    import { db } from "../../firebase";

    let launches = []
    //Get every document from the db, looping over each one and run a function to render some html using the data from that document
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
            <p>Agency: {launch.agency}</p>
            <p>Model: {launch.model}</p>
            <p>Past launches: {launch.past_launches}</p>
            <p>Is milestone: {launch.is_milestone}</p>
        </div>
    {/each}
</main>

<style>
    
</style>