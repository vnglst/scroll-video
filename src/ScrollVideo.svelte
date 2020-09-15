<script>
  export let mp4Url;
  export let webmUrl;
  export let posterUrl;

  let time = 0;
  let duration;

  let y = 0;

  function getCurrentTime(scrollPosition) {
    const pos =
      duration *
      (scrollPosition /
        (document.documentElement.scrollHeight - window.innerHeight));

    // between 0 and duration
    return Math.max(0, Math.min(pos, duration - 0.1));
  }

  $: {
    requestAnimationFrame(() => {
      time = getCurrentTime(y);
    });
  }
</script>

<style>
  .video-container {
    position: absolute;
    top: 0;
    bottom: 0;
    overflow: hidden;
  }
  .video-container video {
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<svelte:window bind:scrollY={y} />

<div class="video-container">
  <video
    poster={posterUrl}
    bind:currentTime={time}
    bind:duration
    preload="metadata"
    muted>
    <source src={webmUrl} type="video/webm" />
    <source src={mp4Url} type="video/mp4" />
  </video>
</div>

<slot />
