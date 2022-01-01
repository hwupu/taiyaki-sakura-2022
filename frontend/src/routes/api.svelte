<script>
	let result = undefined;

	fetch('http://localhost:8000/api/v2/images')
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			result = data;
		})
		.catch((error) => {
			console.log(error);
			return [];
		});
</script>

{#if result}
	{result.meta.total_count}
{/if}
