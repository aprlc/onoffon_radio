<script>
	const postsModules = import.meta.glob("../posts/*.md", { eager: true });
	const posts = Object.values(postsModules);
	
	// import AudioPlayer from '$lib/components/AudioPlayer.svelte';

  import Logo from "$lib/images/onoffon-rotate.png";
</script>

<div id="container">
	<div id="logo">
		<img src={Logo} alt="onoffon radio logo" />
	</div>

	<section class="about">
		<p>
			<em>onoffon radio</em> is a handmade, online radio not bounded by location,
      audience, or contributors. Sometimes on, sometimes off, the radio holds space
      for discussion, casual publishing, knowledge sharing, audio-making, and sonic
      experimentation.
		</p>
	</section>

	<!-- <AudioPlayer /> -->

  <section id="radio" class="audio-player">
		<audio controls preload="auto">
			<source src="https://stream.radioo.space/stream" type="audio/mpeg" />
			<!-- <source src="http://192.168.8.103:8000/stream" type="audio/mpeg" /> -->
			Your browser does not support the audio tag.
		 </audio>
	</section>

	<section>
		<h4>Program</h4>
		
		<div class="posts">
			{#each posts as post}
				<div class="post-container">
					<div class="grid-item">{post.metadata.date}</div>
					<div class="grid-item">{post.metadata.time}</div>
					<div class="grid-item">{post.metadata.title}</div>
					<div class="grid-item">{post.metadata.type} ✶ {post.metadata.location}</div>
					<div class="grid-item gothic">{post.metadata.desc}</div>
				</div>
			{/each}
		</div>
<hr />
	</section>
</div>

<!-- All the styling within .svelte files is scoped. Meaning any CSS in this file doesn't effect rest of the files -->
<style>
	#container {
		display: flex;
		flex-direction: column;
		gap: 1em;
		width: 60%;
		margin: auto;
	}

	.gothic {
		font-family: 'Gothic A1', sans-serif;
		font-size: 0.9rem;
		line-height: 1.2;
	}

	section {
		font-family: "Toren", serif;
		font-weight: 400;
		padding-bottom: 20px;
	}

	section h4 {
		margin-bottom: 1rem;
	}

	.about p {
		max-width: 60ch;
		margin: 1em auto;
	}

	#logo {
		margin: 3em auto 2em auto;
		text-emphasis: center;
	}

	#logo img {
		height: 100%;
		max-width: 500px !important;
	}

	h4 {
		text-align: center;
	}

	#radio {
		margin: auto;
	}

	.audio-player {
		max-width: 300px;
		margin: 1rem;
	}

	.posts {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		gap: 0em;
	}

	.post-container {
		display: grid;
		grid-template-columns: 1fr 1fr 2fr;
		grid-template-rows: 1fr 0.5fr auto;
		border-top: #1e1e1e 1px solid;
	}

	/* first grid item */
	.post-container > :nth-child(1) {
		border-left: 1px solid #1e1e1e;
	}

	/* first 3 grid items (show details) */
	.post-container > :nth-child(-n + 3) {
		border-right: 1px solid #1e1e1e;
	}

	/* last grid item (location) */
	.post-container > :nth-child(4) {
		grid-row: 2;
		grid-column: 2 / span 2;
		font-size: 0.8rem;
	}

	/* last grid item (description) */
	.post-container .grid-item:last-child {
		grid-row: 3;
		grid-column: 2 / span 2;
	}

	.grid-item {
		padding: 1rem;
	}

	@media (max-width: 780px) {
		#container {
			width: 100%;
		}

		.post-container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto auto auto auto;
		}
		
		/* first 3 grid items (show details) */
		.post-container > :nth-child(-n + 3) {
			border-bottom: 1px solid #1e1e1e;
		}

		/* third grid item */
		.post-container > :nth-child(3) {
			grid-row: 2;
			grid-column: 1 / span 2;
			border-left: 1px solid #1e1e1e;
		}

		/* fourth grid item */
		.post-container > :nth-child(4) {
			grid-row: 3;
			grid-column: 1 / span 2;
		}

		/* fourth grid item */
		.post-container .grid-item:last-child {
			grid-row: 4;
			grid-column: 1 / span 2;
		}

	}
</style>
