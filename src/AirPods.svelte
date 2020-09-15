<script>
  import ScrollFrames from "./ScrollFrames.svelte";
</script>

<style>
  #scroll-container {
    height: 100vh;
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
    opacity: 0.8;
    padding: 2em;
    font-size: 1em;
    min-width: 20em;
    margin: 0 auto 1em 0;
  }

  .str p:nth-child(2) {
    background-color: white;
    color: black;
    margin: 0 0 0 auto;
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

  .str4 {
    top: 5500px;
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
    padding-bottom: 0;
    text-align: center;
  }

  .heading p {
    text-align: center;
    color: white;
  }
</style>

<ScrollFrames
  frameCount={147}
  baseUrl="https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/">
  <div id="scroll-container">
    <div class="heading">
      <h1>AirPods</h1>
      <p>by Apple</p>
    </div>
    <div class="str str1">
      <p>
        Das Wasser rauscht', das Wasser schwoll,<br /> Ein Fischer saß daran,<br />
        Sah nach dem Angel ruhevoll,<br /> Kühl bis ans Herz hinan.<br /> Und wie
        er sitzt und wie er lauscht,<br /> Teilt sich die Flut empor:<br /> Aus dem
        bewegten Wasser rauscht<br /> Ein feuchtes Weib hervor.<br />
      </p>
      <p>
        The water rushed, the water rose<br /> A fisherman by the sea<br /> Observed
        his line in deep repose,<br /> Cool to his heart was he.<br /> And as he
        sits and listens well,<br /> The billow breaks and parts,<br /> And from
        the waters' churning swell<br /> A dripping woman darts.<br />
      </p>
    </div>

    <div class="str str2">
      <p>
        Sie sang zu ihm, sie sprach zu ihm:<br /> »Was lockst du meine Brut<br />
        Mit Menschenwitz und Menschenlist<br /> Hinauf in Todesglut?<br /> Ach wüßtest
        du, wie's Fischlein ist<br /> So wohlig auf dem Grund,<br /> Du stiegst herunter,
        wie du bist,<br /> Und würdest erst gesund.<br />
      </p>
      <p>
        She sang to him, she spoke to him:<br /> "Why lure my kind away<br /> With
        human wit and cunningly<br /> To the deadly blaze of day?<br /> If you could
        know how blithe and free<br /> The fishes thrive below,<br /> You would descend,
        with us to be,<br /> And prosperous to grow.<br />
      </p>
    </div>
  </div>
</ScrollFrames>
