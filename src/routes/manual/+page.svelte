<script>
    import pdfUrl from '$lib/radio_manual.pdf';
</script>

<section>
	<div class="info">
		<h1>How to Build a Handmade Radio</h1>
		<p>This manual walks through how you can build an online radio like the one on this website.</p>
		<p>Last updated on 11.30.2023</p>
	</div>
	<div>
		<iframe src={pdfUrl} title="PDF"/>
	</div>
</section>
  
<style>
	section {
		max-width: 80vw;
		margin: auto;
	}

	div.info{
		max-width: 50%;
		margin: 0 auto;
		margin-bottom: 2em;
	}

	iframe {
		width: 100%;
		height: 80vh;
	}

	div {
		text-align: center;
	}

	h1 {
		margin-bottom: 1em;
		text-align: left;
	}

	p {
		max-width: 54ch;
		text-align: left;
		margin-bottom: 0.5em;
	}

	@media screen and (max-width: 768px) {
		section{
			max-width: 100vw;
		}

		div.info {
			max-width: 100%;
		}

		iframe {
			height: 100vh;
		}
	}	
</style>