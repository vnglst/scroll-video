<script>
  import ScrollVideo from "./ScrollVideo.svelte";
</script>

<style>
  #vid1 {
    position: relative;
    height: 4000px;
  }

  .str {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .str p {
    color: white;
    background-color: black;
    line-height: 1.5;
    opacity: 0.7;
    padding: 2em;
    font-size: 1em;
    min-width: 23em;
    margin: 0 auto 1em 0;
  }

  .str1 {
    top: 1000px;
  }

  .str2 {
    top: 1700px;
  }

  .str3 {
    top: 2400px;
  }

  .str4 {
    top: 3100px;
  }

  .heading {
    position: absolute;
    top: 200px;
    width: 100%;
  }

  .heading h1 {
    color: white;
    font-size: 4em;
    padding: 0.2em;
    text-align: center;
  }

  .heading p {
    text-align: center;
    color: white;
  }
</style>

<ScrollVideo
  mp4Url="./videos/road-reversed.mp4"
  webmUrl="./videos/road-reversed.webm"
  posterUrl="./videos/road0838.jpg">
  <div id="vid1" class="first">
    <div class="heading">
      <h1>The Road Not Taken</h1>

      <p>by ROBERT FROST</p>
    </div>
    <div class="str str1">
      <p>
        Two roads diverged in a yellow wood,<br /> And sorry I could not travel both<br />
        And be one traveler, long I stood<br /> And looked down one as far as I could<br />
        To where it bent in the undergrowth;
      </p>
    </div>

    <div class="str str2">
      <p>
        Then took the other, as just as fair,<br /> And having perhaps the better
        claim,<br /> Because it was grassy and wanted wear;<br /> Though as for that
        the passing there<br /> Had worn them really about the same,
      </p>
    </div>

    <div class="str str3">
      <p>
        And both that morning equally lay<br /> In leaves no step had trodden black.<br />
        Oh, I kept the first for another day!<br /> Yet knowing how way leads on
        to way, <br /> I doubted if I should ever come back.
      </p>
    </div>

    <div class="str str4">
      <p>
        I shall be telling this with a sigh<br /> Somewhere ages and ages hence:<br />
        Two roads diverged in a wood, and I—<br /> I took the one less traveled by,<br />
        And that has made all the difference.
      </p>
    </div>
  </div>
</ScrollVideo>
