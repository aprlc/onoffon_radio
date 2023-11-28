<script>
	export let title;
	export let date;
</script>

<div id="container">
	<section>
		<h1>{title}</h1>
	
		<p>Published: {date}</p>
	</section>
	
	<section>
		<slot />
	</section>
</div>


<style>
	#container {
		width: 60ch;
		margin: 0 auto;
	}

	section {
		font-family: 'Toren', serif;
		font-weight: 400;
		font-size: 14px;
		padding-bottom: 20px;
	}

	h3 {
		color: green;
	}
</style>