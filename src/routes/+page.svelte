<script>
	const postsModules = import.meta.glob("../posts/*.md", { eager: true });
	const posts = Object.values(postsModules);

  import Logo from "$lib/images/onoffon-rotate.png";
//   import AudioPlayer from "$lib/components/AudioPlayer.svelte";
  import AudioPlayer from '$lib/components/AudioPlayerFull.svelte';
  const src = [
		'https://stream.radioo.space/stream',
	]
</script>

<div class="md:h-[90vh] flex flex-col md:flex-row gap-12 overflow-hidden">
	<section class="w-full md:h-[90%] md:w-3/5 flex flex-col justify-between gap-8 md:overscroll-none">
		<div id="logo" class="md:fixed md:bottom-4">
			<img src={Logo} alt="onoffon radio logo" class="max-w-full md:max-w-[48vw]" />
		</div>

		<p class="text-red mt-0 text-2xl md:text-4xl md:max-w-[48ch]">
			onoffon radio is a handmade, online radio not bounded by location,
      audience, or contributors. Sometimes on, sometimes off, the radio holds space
      for discussion, casual publishing, knowledge sharing, audio-making, and sonic
      experimentation.
		</p>

		

		<div id="radio" class="fixed bottom-4 md:right-4">
			<audio controls preload="auto">
				<source src="https://stream.radioo.space/stream" type="audio/mpeg" />
				<!-- <source src="http://192.168.8.103:8000/stream" type="audio/mpeg" /> -->
				Your browser does not support the audio tag.
			</audio>
		</div>
	</section>

	<!-- <AudioPlayer {src}/> -->

	<section class="w-full pb-24 md:pb-0 md:w-2/5 md:overflow-hidden md:overflow-y-scroll">
		<!-- <h4>Program</h4> -->
		
		<div class="flex flex-col gap-12 text-red md:h-[90%]">
			{#each posts as post}
				{#if post.metadata.hidden === false}
					<div class="grid grid-cols-4 gap-4 font-serif text-xs border-t border-red">
						<div class="col-start-1 p-1 border-l border-red">{post.metadata.date}</div>
						<div class="col-start-2 p-1 border-x border-red">{post.metadata.time}</div>
						<div class="col-start-3 p-1 col-span-2 border-r border-red">{post.metadata.title}</div>
						<div class="col-start-2 row-start-2 col-span-3">{post.metadata.type} ✶ {post.metadata.location}</div>
						<div class="col-start-2 row-start-3 col-span-3 font-sans">{post.metadata.desc}</div>
					</div>
				{/if}
			{/each}
		</div>
<!-- <hr /> -->
	</section>
</div>


<!-- <style>
	#pageContainer {
		display: flex;
		flex-direction: column;
		gap: 1em;
		max-width: 55vw;
		margin: auto;
	}

	.gothic {
		font-family: 'Gothic A1', sans-serif;
		/* font-size: 0.9rem; */
		line-height: 1.2;
	}

	section {
		font-family: "BIZ UDPMincho", sans-serif;
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
		text-align: center;
		/* max-width: 80%;
      	max-height: 100%;  */
	}

	#logo img {
		display: block;
      	width: 100%; /* Set the width to fill the container */
      	height: auto; /* Allow the height to adjust proportionally */
	}

	@supports (-webkit-appearance: none) {
  		/* Safari-specific styles */
		#logo {
			max-width: 80%;
  			max-height: 100%;
		}
		#logo img {
			display: block;
			width: 100%; /* Set the width to fill the container */
			height: auto; /* Allow the height to adjust proportionally */
		}
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
		gap: 1em;
	}

	.post-container {
		display: grid;
		grid-template-columns: 1fr 1fr 2fr;
		grid-template-rows: 1fr 0.5fr auto;
		border-top: #ff4e3c 1px solid;
		/* border-radius: 20px; */
	}

	/* first grid item */
	.post-container > :nth-child(1) {
		border-left: 1px solid #ff4e3c;
	}

	/* first 3 grid items (show details) */
	.post-container > :nth-child(-n + 3) {
		border-right: 1px solid #ff4e3c;
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
		font-size: 0.8rem;
	}

	@media (max-width: 780px) {
		#pageContainer {
			max-width: 100%;
		}

		.post-container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto auto auto auto;
		}
		
		/* first 3 grid items (show details) */
		.post-container > :nth-child(-n + 3) {
			border-bottom: 1px solid #ff4e3c;
		}

		/* third grid item */
		.post-container > :nth-child(3) {
			grid-row: 2;
			grid-column: 1 / span 2;
			border-left: 1px solid #ff4e3c;
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

		@supports (-webkit-appearance: none) {
			/* Safari-specific styles */
			#logo {
				max-width: 70%;
				max-height: 100%;
			}

			#logo img {
				display: block;
				width: 100%; 
				height: auto; 
			}
		}
	}
</style> -->
