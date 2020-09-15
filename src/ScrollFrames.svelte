<script>
  import { onMount } from "svelte";
  import ProgressBar from "./ProgressBar.svelte";

  export let frameCount;
  export let baseUrl;

  let canvas;
  let context;
  let y;
  let img = new Image();

  let loading = true;
  let loaded = 0;
  let progress = 0;

  const getFrameUrl = (index) => {
    return baseUrl + `${index.toString().padStart(4, "0")}.jpg`;
  };

  function loadFirstFrame(firstFrame) {
    img.src = getFrameUrl(firstFrame);
    canvas.width = screen.width;
    canvas.height = screen.height;
    img.onload = function () {
      context.drawImage(img, 0, 0);
    };
  }

  onMount(() => {
    context = canvas.getContext("2d");
    loadFirstFrame(frameCount);
  });

  const preloadImages = () => {
    // counting down to 0 to reverse playback of waves video
    for (let i = frameCount; i >= 1; i--) {
      let img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        loaded++;
        progress = loaded / frameCount;
        if (loaded === frameCount) loading = false;
        // console.log("loaded", loaded, progress, frameCount, loading);
      };
    }
  };

  preloadImages();

  function updateImage(index) {
    img.src = getFrameUrl(index);
    context.drawImage(img, 0, 0);
  }

  $: {
    const maxScrollTop =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = y / maxScrollTop;

    const frameIndex = Math.min(
      frameCount,
      Math.ceil(frameCount - scrollFraction * frameCount)
    );

    const index = isNaN(frameIndex) ? frameCount : frameIndex;
    requestAnimationFrame(() => updateImage(index));
  }
</script>

<style>
  canvas {
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .overlayer {
    position: absolute;
    width: 80%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
  }
</style>

<svelte:window bind:scrollY={y} />
<canvas bind:this={canvas} />

{#if loading}
  <div class="overlayer">
    <ProgressBar {progress} />
  </div>
{:else}
  <slot />
{/if}
