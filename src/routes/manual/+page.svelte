<!-- <section>
	<div class="info">
		<h1>How to Build a Handmade Radio</h1>
		<p>This manual walks through how you can build an online radio like the one on this website.</p>
		<p>Last updated on 11.30.2023</p>
	</div>

	<div>
		<iframe src="/radio_manual.pdf" title="PDF"/>
	</div>
</section> -->

<script>
	export let data;
	const manual = data.posts;
</script>

<div class="manual">
	<svelte:component this={manual.default} />
</div>
  
<style>
	.manual {
		max-width: 50%;
		margin: auto;
	}

	@media screen and (max-width: 768px) {
		.manual{
			max-width: 100%;
		}
	}
</style>