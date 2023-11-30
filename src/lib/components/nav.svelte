<header>
	<a href="/">Home</a>

	<nav>
		<ul>
			<li>
				<a href="/manual">Manual</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		padding: 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
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
	header {
		padding: 0rem 0.5rem;
		margin-bottom: 2em;
	}
}
</style>