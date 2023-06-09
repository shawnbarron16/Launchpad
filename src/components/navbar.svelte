<script>
</script>

<navbar>
    <div class="navbar">
        <img src="/images/rocket-clip-art.png" alt="A cartoon rocket flying" />
        <a class="navbar-link" href="#/">Home</a>
        <a class="navbar-link" href="#/news">News</a>
        <a class="navbar-link" href="#/launches">Launches</a>
        <h1 class="navbar-quote">
            “When you launch in a rocket, you’re not really flying that rocket.
            You’re just sort of hanging on.” - Michael P. Anderson
        </h1>
    </div>
</navbar>

<style>
    .navbar {
        display: flex;
        margin: 0;
        text-align: left;
        max-height: 120px;
        background-color: #413543;
    }

    img {
        margin-top: 5px;
        max-width: 150px;
        max-height: 120px;
    }

    .navbar-quote {
        display: inline;
        text-align: center;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin: 0;
    }

    .navbar-link {
        align-self: flex-end;
        margin-left: 10px;
        margin-right: 10px;
        font-size: x-large;
    }
</style>
