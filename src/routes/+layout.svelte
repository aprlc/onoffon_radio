<script>
	// Getting the site config
	import { config } from '../site.config';

	// Importing the global css
	import '../global.css';

	// Import the navigation
	import Header from '$lib/components/nav.svelte'
</script>

<svelte:head>
	<title>{config.title}</title>
	<meta name="description" content={config.description} />
</svelte:head>

<header>
	<Header />
</header>

<body>
	<slot />
</body>


