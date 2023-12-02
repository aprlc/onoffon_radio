<div class="header">
	<a href="/" data-sveltekit-preload-data="hover">Home</a>

	<nav>
		<ul>
			<li>
				<a href="/manual" data-sveltekit-preload-data="off">Manual</a>
			</li>
		</ul>
	</nav>
</div>

<style lang="scss">
	.header {
		//padding: 0rem 1rem 1rem 1rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		z-index: 1000;
		position: fixed;
		width: 90%;
		justify-content: space-between;
	}

	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	@media screen and (max-width: 768px) {
	.header {
		padding: 0rem 0.5rem;
		margin-bottom: 2em;
	}
}
</style>