<script context="module">
	export async function load() {
		const result = await fetch('https://sakura.phwu.work/api/v2/images')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				return data;
			})
			.catch((error) => {
				console.log(error);
				return 'error';
			});
		return { props: { result } };
	}
</script>

<script>
	export let result;
</script>

{#if result}
	<div>
		bakcend: {result.meta.total_count}
	</div>
{/if}
