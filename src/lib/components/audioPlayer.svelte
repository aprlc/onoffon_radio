<script>
    import { onMount, onDestroy } from 'svelte';
  
    let audio;
    let isPlaying = false;
    let currentTime = 0;
    let duration = 0;
  
    function handlePlay() {
      isPlaying = true;
    }
  
    function handlePause() {
      isPlaying = false;
    }
  
    function handleTimeUpdate() {
      if (audio) {
        currentTime = audio.currentTime;
        duration = audio.duration || 0;
      }
    }
  
    onMount(() => {
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleTimeUpdate);
    });
  
    onDestroy(() => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleTimeUpdate);
    });


    function formatTime(seconds) {
    if (isNaN(seconds)) return '...';
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
  
    async function togglePlay() {
      try {
        if (isPlaying) {
          await audio.pause();
        } else {
          await audio.play();
        }
      } catch (error) {
        console.error('Play/Pause error:', error.message);
      }
    }
  </script>
  
  <style>
    /* Your styles here */
  </style>
  
  <div class="audio-player">
    <audio bind:this={audio} src="https://stream.radioo.space/stream" preload="auto"></audio>
    <button on:click={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
    <div class="time-display">{formatTime(currentTime)} / {formatTime(duration)}</div>
  </div>

  