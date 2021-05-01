<script>
    import API from "../services/api";

	let name = "Simple API";
	let count = 0;
	let todos = {};

    async function handleClick() {
        count += 1;
        todos = await API.get(count);
        console.log(todos);
    }
</script>

<h1>Hello {name}!</h1>

<button on:click={handleClick}> Count </button>

<p>Sequence: {count}</p>

<p>Id: {todos.id ?? ''}</p>
<p>Title: {todos.title ?? ''}</p>
