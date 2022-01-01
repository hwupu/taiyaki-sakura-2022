<script>
	let result = undefined;
	let result2 = undefined;

	fetch('http://backend:8000/api/v2/images')
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			result = data;
		})
		.catch((error) => {
			console.log(error);
			return [];
		});

	fetch('http://localhost:8000/api/v2/images')
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			result2 = data;
		})
		.catch((error) => {
			console.log(error);
			return [];
		});
</script>

{#if result}
	<div>
		bakcend: {result.meta.total_count}
	</div>
{/if}

{#if result2}
	<div>
		localhost: {result2.meta.total_count}
	</div>
{/if}
