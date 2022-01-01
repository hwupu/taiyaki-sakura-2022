<script context="module">
	/** @type {import('@sveltejs/kit').ExternalFetch} */
	export async function externalFetch(request) {
		if (request.url.startsWith('https://sakura.phwu.work/')) {
			// clone the original request, but change the URL
			request = new Request(
				request.url.replace('https://sakura.phwu.work/', 'http://backend:8000/'),
				request
			);
		}

		return fetch(request);
	}
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
