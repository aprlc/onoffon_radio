<script>
	const postsModules = import.meta.glob('../posts/*.md', { eager: true });

	const posts = Object.values(postsModules);
</script>

<div id="container">
	<div class="about">
		<p>
		SPACE Radio is an online radio station made by and for the students of UAL’s Creative Computing Institute (CCI). 
		SPACE Radio aims to empower students to actively participate in creating, holding, exploring, and shaping space within and outside of CCI.
		</p>
	</div>
	<section id="radio">
		<iframe id="player" frameborder="0" width="280" height="216" src="http://localhost:8080/embed/player?stream=auto&title=Now Playing"></iframe>
	</section>
	<section>
		<h2>SCHEDULE</h2>
		<hr />
		<!-- Looping through the list of posts with svelte's {#each} syntax ref: https://svelte.dev/tutorial/each-blocks -->
		<div class="posts">
			{#each posts as post}
				<a href={post.metadata.slug}>
					<div class="post">
						<h3>{post.metadata.title}</h3>
						<span>{post.metadata.type}</span>
						<span>{post.metadata.date}</span>
						<span>{post.metadata.time}</span>
					</div>
				</a>
			{/each}
		</div>
	</section>
</div>

<!-- All the styling within .svelte files is scoped. Meaning any CSS in this file doesn't effect rest of the files -->
<style>
	section {
		font-family: 'Almarai', sans-serif;
		font-weight: 400;
		font-size: 12px;
	}

	hr {
		border-top: 1px solid black;
	}

	h2 {
		text-align: center;
	}

	#radio {
		margin: auto;
	}

	.about {
		margin-top: 2em;
	}

	.posts {
		display: flex;
		flex-direction: column;
		gap: 0em;
	}

	.post {
		display: flex;
		justify-content: space-between;
		gap: 2em;
		align-items: center;
	}

	#container {
		display: flex;
		flex-direction: column;
		gap: 1em;
		max-width: 50%;
		margin: auto;
	}

</style>
