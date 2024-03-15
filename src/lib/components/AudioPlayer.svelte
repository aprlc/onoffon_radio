<script>
	import { onMount } from "svelte";

	// export let src = [];
	let player;
	let active = 0;
	// $: activeSrc = src[active];

	let isPlaying = false;

	onMount(() => {
		player.volume = 0.5;
	});

	const reload = () => {
		player.load()
		if(isPlaying) player.play()
	}

	const togglePlay = () => {
		isPlaying ? player.pause() : player.play();
		isPlaying = !isPlaying;
	};
</script>

<audio bind:this={player} loop>
	<!-- <source src={activeSrc} type="audio/mpeg" /> -->
	<source src="http://192.168.8.103:8000/stream" type="audio/mpeg">
</audio>

<button on:click={togglePlay} class="bg-red text-cream font-sans h-[100px] w-[100px] border rounded-full">
	{isPlaying ? '⏹ PAUSE' : '⏵ PLAY'}
</button>

<!-- <style>
	button {
    color: #ff4e3c;;
    background: none;
    border: 1px solid #ff4e3c;
    font-family: "Gothic A1";
    font-size: 1.25rem;
    border-radius: 12rem;
    margin: auto;
    width: 100%;
    padding: 1rem 1rem;
	}

  button:hover{
    background: #ff4e3c;
    color:ivory;
  }
</style> -->