<script>
  export let name;
  export let result;
  export let id;
  export let running;
  $: finished = !running;

  import Status from "./ActivityStatus.svelte";
  import { fade } from "svelte/transition";
</script>

<li class="list-group-item accordion" id="accordionExample" transition:fade>
  <div id="topItem" class="d-flex justify-content-between lh-condensed">
    <div>
      <h6 class="my-0">{name}</h6>
    </div>
    <div>
      <Status {finished} {result} />
      <button
        class="btn btn-outline-dark btn-sm ml-2 collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#collapse{id}"
        aria-expanded="false"
        aria-controls="collapse{id}">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-caret-down-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg></button>
    </div>
  </div>
  <div
    id="collapse{id}"
    class="collapse"
    aria-labelledby="heading{id}"
    data-parent="#accordionExample">
    <div class="card-body">
      {result.error ?? result.response}
    </div>
  </div>
</li>
