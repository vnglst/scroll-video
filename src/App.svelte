<script>
  let time = 0;
  let duration;

  let scrollY = 0;

  $: {
    const totalScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    time = duration * (scrollY / totalScroll);
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

  #scroll-container {
    height: 5000px;
  }

  .heading {
    position: absolute;
    top: 200px;
    width: 100%;
    text-align: center;
    color: white;
  }

  .heading h1 {
    color: white;
    font-size: 4em;
  }
  .str {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    left: 50%;
    transform: translate(-50%, 0);
    line-height: 1.5;
    opacity: 0.8;
  }

  .str p {
    color: white;
    background-color: black;
    padding: 2em;
    min-width: 20em;
  }

  .str p:nth-child(2) {
    background-color: white;
    color: black;
  }

  .str1 {
    top: 1000px;
  }

  .str2 {
    top: 2500px;
  }

  .str3 {
    top: 4000px;
  }
</style>

<svelte:window bind:scrollY />

<div class="video-container">
  <video
    bind:currentTime={time}
    bind:duration
    preload="metadata"
    muted
    src="https://static01.nyt.com/newsgraphics/2019/10/23/turkey-syria-video-upload/71ab097907156ca46fb7ffd4d21dfbd119fb47e8/syria-turkey-reconstruct-7-800.mp4"
    type="video/mp4" />
  <!--
      alternative source:
      src="https://int.nyt.com/newsgraphics/2020/beirut-explosion-video/main/warehouse-800.mp4" 
    -->
</div>
<div id="scroll-container">
  <div class="heading">
    <h1>Video Scroll Tutorial</h1>
    <p>Using Svelte bindings to make our frontend lives easier</p>
  </div>
  <div class="str str1">
    <p>
      Data ordinarily flows down, from parent to child. The bind: directive
      allows data to flow the other way, from child to parent. Most bindings are
      specific to particular elements. The simplest bindings reflect the value
      of a property, such as input.value.
    </p>
    <p>
      If the name matches the value, you can use a shorthand.<br /><br />
      Numeric input values are coerced; even though input.value is a string as
      far as the DOM is concerned, Svelte will treat it as a number. If the
      input is empty or invalid (in the case of type="number"), the value is
      undefined.
    </p>
  </div>

  <div class="str str2">
    <p>
      Binding
      {`<select>`}
      value<br />

      {`
        A <select> value binding corresponds to the value property 
        on the selected <option>, which can be any value (not just 
        strings, as is normally the case in the DOM).
      `}
    </p>
    <p>
      {`
        A <select multiple> element behaves similarly to a checkbox group.
        When the value of an <option> matches its text content, the attribute can be omitted.
        Elements with the contenteditable attribute support innerHTML and textContent bindings.
      `}
    </p>
  </div>

  <div class="str str3">
    <p>
      Media element bindings
      <br /><br />
      {`
        Media elements (<audio> and <video>) have their own set of bindings 
        — six readonly ones...

        duration (readonly) — the total duration of the video, in seconds
        buffered (readonly) — an array of {start, end} objects
        played (readonly) — ditto
        seekable (readonly) — ditto
        seeking (readonly) — boolean
        ended (readonly) — boolean
      `}
    </p>
    <p>
      ...and five two-way bindings:<br /><br />
      currentTime — the current playback time in the video, in seconds<br />
      playbackRate — how fast or slow to play the video, where 1 is 'normal'<br />
      paused — this one should be self-explanatory volume — a value between 0<br />
      and 1 muted — a boolean value where true is muted
      <br />
      <br />
      Videos additionally have readonly videoWidth and videoHeight bindings.<br />
    </p>
  </div>
</div>
