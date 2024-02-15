<script>
	import { onMount } from "svelte";

	export let src = [];
	let player;
	let active = 0;
	$: activeSrc = src[active];

	let isPlaying = false;

	onMount(() => {
		player.volume = 0.5;
	});

	const reload = () => {
		player.load()
		if(isPlaying) player.play()
	}

	// const next = () => {
	// 	if (active < src.length - 1) {
	// 		active++;
	// 	} else {
	// 		active = 0;
	// 	}
	// 	reload()
	// };

	// const previous = () => {
	// 	if (active == 0) {
	// 		active = src.length - 1;
	// 	} else {
	// 		active--;
	// 	}
	// 	reload()
	// };

	const togglePlay = () => {
		isPlaying ? player.pause() : player.play();
		isPlaying = !isPlaying;
	};
</script>

<audio bind:this={player} loop>
	<source src={activeSrc} type="audio/mpeg" />
</audio>

<button on:click={togglePlay}>
	{isPlaying ? '⏹ Pause' : '⏵ Play'}
</button>


<style>
	button {
    color: #ff4e3c;;
    background: none;
    border: 1px solid #ff4e3c;
    font-family: "Gothic A1";
    font-size: 1.25rem;
    border-radius: 12rem;
    margin: auto;
    width: 50%;
    padding: 1rem 1rem;
	}

  button:hover{
    background: #ff4e3c;
    color:ivory;
  }
</style>