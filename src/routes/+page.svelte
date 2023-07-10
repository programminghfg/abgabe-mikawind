<script>
	import MovieCard from '$lib/components/MovieCard.svelte';

	export let data;
	let movies = data.result;
	console.log(movies);
</script>

<h1>Free to play Games</h1>

<div class="movie-grid">
	{#if movies}
	{#each movies as movieData}
		<MovieCard movie={movieData} />
	{/each}
	{/if}
</div>

<style>
	.movie-grid {
		margin-top: 32px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 16px;
	}
</style>
