<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  export let progress = 0;

  const smoothProgress = tweened(0, {
    duration: 400,
    easing: cubicOut,
  });

  $: smoothProgress.set(progress);
</script>

<style>
  .meter {
    height: 10px;
    position: relative;
    background: #141f1c;
    border-radius: 25px;
    padding: 10px;
  }

  span {
    display: block;
    height: 100%;
    border-radius: 20px;
    background-color: hsl(48, 3%, 95%);
    position: relative;
    overflow: hidden;
  }
</style>

<p>loading images</p>
<div class="meter"><span style={`width: ${$smoothProgress * 100}%`} /></div>
