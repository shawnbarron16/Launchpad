<script>
</script>

<!--Have the links and logo on the left side of the screen, and the quote centered-->
<navbar class="navbar">
    <div class="navbar-left">
        <img src="https://www.freeiconspng.com/thumbs/rocket-png/blue-rocket-png-9.png" alt="A cartoon rocket flying" />
        <div class="navbar-links">
            <a class="navbar-link" href="#/">Home</a>
            <a class="navbar-link" href="#/news">News</a>
            <a class="navbar-link" href="#/launches">Launches</a>
        </div>
    </div>
    <div class="navbar-quote">
        <h1>
            “When you launch in a rocket, you’re not really flying that rocket.
            You’re just sort of hanging on.” - Michael P. Anderson
        </h1>
    </div>
    <div class="navbar-right" />
</navbar>

<style>
    .navbar {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        background-color: #121216;
        padding: 10px;
    }

    .navbar-left {
        display: flex;
        flex: 1;
        align-items: center;
    }

    .navbar-right {
        flex: 1;
    }

    img {
        max-width: 150px;
        max-height: 120px;
        margin-right: 20px;
    }

    .navbar-quote {
        display: flex;
        flex: 1;
        align-items: center;
        text-align: center;
        color: #8F43EE;
        flex: 1;
    }

    .navbar-links {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 10px;
    }

    .navbar-link {
        margin: 5px 0;
        font-size: x-large;
        color: #8F43EE;
        text-decoration: none;
    }

    /* Media query for mobile devices */
    @media (max-width: 767px) {
        .navbar {
            flex-direction: column;
            align-items: flex-start;
        }

        .navbar-left {
            flex-direction: row;
            justify-content: center;
        }

        img {
            margin-right: 0;
            margin-bottom: 10px;
        }

        .navbar-links {
            flex-direction: row;
            margin-top: 0;
        }

        .navbar-link {
            margin: 0 10px;
        }
    }
</style>


