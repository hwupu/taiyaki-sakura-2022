<script>
	import { onMount } from 'svelte';
	import Navigation from '$lib/navigation.svelte';

	let HeroCarousel;
	onMount(async () => {
		const module = await import('$lib/hero-carousel.svelte');
		HeroCarousel = module.default;
	});
</script>

<svelte:head>
	<title>Taiyaki Sakura</title>
</svelte:head>

<div class="w-full h-screen mb-[min(-260px,calc(-115px-20vh))]">
	<svelte:component this={HeroCarousel} />
</div>

<Navigation />

<main>
	<div class="h-screen">
		<h1>Welcome to Taiyaki Sakura!</h1>
	</div>
	<div class="h-screen" />
</main>
