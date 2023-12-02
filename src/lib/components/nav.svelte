<header>
	<div class="container">
		<a href="/" data-sveltekit-preload-data="hover">Home</a>

		<nav>
			<ul>
				<li>
					<a href="/manual" data-sveltekit-preload-data="off">Manual</a>
				</li>
			</ul>
		</nav>
	</div>

</header>

<style>
	header{
		position: sticky; 
		top: 0;
		padding: 1rem 2rem;
	}

	.container {
		font-family: "Toren", serif;
		display: flex;
		flex-wrap: wrap;
		z-index: 1000;
		width: 100%;
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

	@media screen and (max-width: 780px) {
		header {
			background-color: #fff;
			padding: 0.5rem 0;
		}

	}
</style>