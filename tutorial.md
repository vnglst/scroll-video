# svelte video scroll tutorial

In this tutorial I’ll show you how svelte’s bind command works and how this can be used to create a cool scroll video effect with very little code.

The effect we’ll be creating here plays a video on scroll. This effect is often used in articles (for instance [here](https://www.nytimes.com/interactive/2020/09/09/world/middleeast/beirut-explosion.html) and [here](https://www.nytimes.com/interactive/2019/10/30/world/middleeast/syria-turkey-maps.html) by the NYTimes) or product landing pages ([like this one from Apple](https://www.apple.com/imac-pro/)). It gives web pages a very dynamic look and I was surprised to learn how easy you can accomplish this with svelte.

Let’s get started!

## Setting up svelte

Following the instructions on the svelte.dev homepage we run the following commands to get started with svelte:

```sh
npx degit sveltejs/template scroll-video
npm install
npm run dev
```

A new svelte project is now running on: http://localhost:5000

We’ll be adding our code the the `App.svelte` file, so let’s delete all the current code in that file first.

## Scrolling formula

When the user scroll down the page, we want the video the play forward. To accomplish this effect we will set the current video position using the following formula:

currentTime = duration \* scrollY / total scroll height

where:

- currentTime = the play position in the video
- duration = total playing time of the video
- scrollY = the current vertical scroll position

## Binding variables

Now that we figured out what the formula is going to be, let’s see how we can read these values by using svelte’s variable binding.

To read the vertical scrolling position add the following code:

```svelte
<script>
let scrollY;
</script>

<svelte:window bind:scrollY />
```

Before we can continue, we first have to make sure our window is heigh enough to allow for scrolling. Let’s add a div and some css for that:

```svelte
<script>
let scrollY;
</script>

<svelte:window bind:scrollY />

<div class="scroll-container" />

<style>
  #scroll-container {
    height: 5000px;
  }
</style>
```

Now to verify if this works, you might tempted to add a `console.log` just below the line with `let scrollY;`. If you do that you’ll only see only one 0 being logged. The reason this is logged only once is because any code inside the <script> will run only once (when initialising the component). To avoid this you’ll have to make the console.log reactive using the following notation:

```
$: console.log(scrollY);
```

This may look a bit funky (and it is! I’m not even sure if it’s still JavaScript) but you’ll get used to it.

After adding the console.log with the dollar sign, you should see the scroll position logged. Pretty cool for just 2 lines of code!

Similarly we can use bind on video to get the other values:

```svelte
<script>
// … existing code
let time;
let duration;
</script>

<!-- …existing code -->
<video
  bind:currentTime={time}
  bind:duration
  preload="metadata"
  muted
  src="https://static01.nyt.com/newsgraphics/2019/10/23/turkey-syria-video-upload/71ab097907156ca46fb7ffd4d21dfbd119fb47e8/syria-turkey-reconstruct-7-800.mp4"
  type="video/mp4" />
```

The cool thing about these bindings is that they are **bidirectional**. This means that the `time` variable not only holds the current playback time, but if we update it, we’re also updating the current playback position of the video!

Let’s combine this with the formula we made earlier.

## Updating video progress on scroll

Before we can continue we first have to make sure the video is always displayed in the center of the screen while we are scrolling. Let's add a container div and css to accomplish that:

```svelte
<!-- .... -->
<div class="video-container">
  <video
    bind:currentTime={time}
    bind:duration
    preload="metadata"
    muted
    src="https://int.nyt.com/newsgraphics/2020/beirut-explosion-video/main/warehouse-800.mp4"
    type="video/mp4" />
</div>

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
  /* ... */
</style>
```

Any changes in the scroll position should immediatly be reflected in a change in playback position. In other words: the changes in the time variable should react to the changes in the scroll position. To accomplish this we have to make sure our formule code is **reactive**. Just a with the console.log we use the `$:` notation to do this:

```svelte
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
```

After adding this piece our video scroll is working. To make the scroll effect more visible I've also added a heading and some content blocks. You can see the complete feature in the Svelte REPL below.
