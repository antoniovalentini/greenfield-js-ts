<script>
  export let finished;
  export let result;

  function PickResultColor(result) {
    return result.error ? "text-danger" : "text-success";
  }
</script>

{#if finished}
  <span class={PickResultColor(result)}>{result.error ? "KO" : "SUCCESS"}</span>
{:else}
  <div class="spinner-border spinner-border-sm" role="status">
    <span class="sr-only">Loading...</span>
  </div>
{/if}
