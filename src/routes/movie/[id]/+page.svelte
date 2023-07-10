<script>
    export let data;
    let id = data;

    let movie = data;

    /* let allow=false;
        let results= fetch(movie.game_url,{method:"HEAD"}).then(response=>
        {console.log(response.headers.get("X-Frame-Options")); if(response.headers.get("X-Frame-Options")!="DENY"&& response.headers.get("X-Frame-Options")!="SAMEORIGIN"){
            allow=true
        }}
        ) */
</script>

<img src={movie.thumbnail}>
<div>
<h1>{movie.title}</h1>
<p>Release Date: {movie.release_date}</p>
<p>Plattform: {movie.platform}</p>
<p>Genre: {movie.genre}</p>
<p>Beschreibung: {movie.short_description}</p>
<p>Hier geht es zur Website des Spiels: 
    <a href={movie.game_url}>hier</a>
</p>
</div>
<!-- {#if allow}  -->
<iframe src={movie.game_url}></iframe>
<!-- {/if} -->

<style>
    iframe{
        height:800px;
        width:100%;
        border-radius: 20px;
    }
    div{
        border-radius: 20px;
        background-color:#262626;
        padding: 20px;
        box-sizing: border-box;
        margin-bottom: 30px;
    }
    img{
        border-radius: 20px;
        width: 600px;
        margin-bottom: 30px;
    }

    h1{
        margin-bottom: 30px;
        margin-left: 0px;
        font-size: 50px;
    }

    p{
        font-size: 22px;
        margin: 6px;
        margin-left: 0px;
    }
</style>