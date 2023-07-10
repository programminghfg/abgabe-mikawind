<script>
	export let movie;
</script>

<div class="movie-container">
	<a href={'/movie/' + movie.id}>
		<div class="img-container">
			<img
				src={movie.thumbnail}
				alt={movie.title + 'poster'}
			/>
		</div>
		<div class="info">
			<h3>{movie.title}</h3>
			<p style="font-style: italic;" class="date">{movie.genre}</p>
		</div>
	</a>
</div>

<style>
	.img-container {
		border-radius: 8px;
		width: 100%;
		height: auto;
		overflow: hidden;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s linear;
	}

	.movie-container:hover .img-container img {
		transform: scale(1.05);
	}

	a {
		text-decoration: none;
		color: white;
	}

	.info {
		align-self: flex-end;
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: 12px 16px 12px;
	}

	.movie-container {
		display: flex;
		flex-direction: column;
		background-color: #262626;
		padding: 2px;
		border-radius: 10px;
	}

	.movie-container:hover {
		transition: 0.3s;
		position: relative;
		background-color: #3e3e3e;
		transform: scale(1.02);
	}
</style>
