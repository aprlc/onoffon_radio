<script>
    import pdfUrl from '$lib/radio_manual.pdf';
</script>

<section>
	<div>
		<p>This manual walks through how you can build an online radio like the one on this website. </p>
	</div>
	<iframe src={pdfUrl} width="800" height="1000" title="PDF"/>
</section>
  
<style>
	section {
		font-family: 'Toren', serif;
		font-weight: 400;
		font-size: 14px;
		padding-bottom: 20px;
		max-width: 80vw;
		margin: 0 auto;
	}

	div {
		max-width: 60ch;
	}
</style>