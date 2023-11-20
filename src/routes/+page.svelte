<script>
	const postsModules = import.meta.glob('../posts/*.md', { eager: true });

	const posts = Object.values(postsModules);
	import Logo from '$lib/images/logo.svg';
</script>


<div id="container">
	<div id="logo">
		<img src={Logo} alt="logo"/>
	</div>

	<section class="about">
		<p>
			SPACE Radio is an online radio station made by and for the students of UAL’s Creative Computing Institute (CCI). 
		</p>
	</section>

	<section id="radio">
		<audio controls>
			<source src="http://192.168.0.34:8000/stream" type="audio/mp3">
			Your browser does not support the audio tag.
		 </audio>
	</section>

	<section>
		<h2>SCHEDULE</h2>
		<hr />
		<div class="posts">
			{#each posts as post}
				<div class="post-container">
					<div class="grid-item">{post.metadata.date}</div>
					<div class="grid-item">{post.metadata.time}</div>
					<div class="grid-item">{post.metadata.title}</div>
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
		padding-bottom: 20px;
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
