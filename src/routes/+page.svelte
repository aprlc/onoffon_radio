<script>
	const postsModules = import.meta.glob('../posts/*.md', { eager: true });

	const posts = Object.values(postsModules);
</script>


<div id="container">
	<div id="logo">
		<img src="src/posts/images/logo.svg" alt="logo"/>
	</div>

	<div class="about">
		<p>
			SPACE Radio is an online radio station made by and for the students of UAL’s Creative Computing Institute (CCI). SPACE Radio aims to empower students to actively participate in creating, holding, exploring, and shaping <i>space</i> within and outside of CCI.
		</p>
	</div>
	<section id="radio">
		<!-- svelte-ignore a11y-missing-attribute -->
		<iframe id="player" frameborder="0" width="280" height="216" src="http://localhost:8080/embed/player?stream=auto&title=Now Playing"></iframe>
	</section>
	<section>
		<h2>SCHEDULE</h2>
		<hr />
		<div class="posts">
			{#each posts as post}
				<div class="post-container">
					<div class="grid-item"><span class="pp-neue">{post.metadata.date}</span></div>
					<div class="grid-item"><span class="pp-neue">{post.metadata.time}</span></div>
					<div class="grid-item"><span class="pp-neue">{post.metadata.title}</span></div>
					<div class="grid-item">{post.metadata.desc}</div>
				</div>
			{/each}
		</div>
	</section>
</div>

<!-- All the styling within .svelte files is scoped. Meaning any CSS in this file doesn't effect rest of the files -->
<style>
	
	section {
		font-family: 'Toren', serif;
		font-weight: 400;
		font-size: 14px;
	}

	#logo {
		margin: auto;
		text-emphasis: center;
	}
	#logo img {
		max-width: 140px !important;
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

	.posts {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		gap: 0em;
	}

	.pp-neue {
		font-family: 'PP Neue Machina', sans-serif;
	}

	.post-container {
		display: grid;
  		grid-template-columns: 1fr 2fr;
  		grid-gap: 10px;
	}

	.grid-item {
  		padding: 0px;
	}

	#container {
		display: flex;
		flex-direction: column;
		gap: 1em;
		width: 50%;
		margin: auto;
	}

	@media(max-width: 780px){
		#container {
			width: 100%;
		}
	}


</style>
