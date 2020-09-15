import DerFischer from "./DerFischer.svelte";
import TheRoad from "./TheRoad.svelte";
import NYT from "./NYT.svelte";
import AirPods from "./AirPods.svelte";
import App from "./App.svelte";

const params = new URLSearchParams(document.location.search.substring(1));
const article = params.get("article");

const mapper = {
  fischer: DerFischer,
  road: TheRoad,
  nyt: NYT,
  airpods: AirPods,
};

const Component = mapper[article] || App;

const app = new Component({
  target: document.body,
});

export default app;
