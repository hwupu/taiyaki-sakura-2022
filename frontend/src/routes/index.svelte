<svelte:head>
	<title>Taiyaki Sakura</title>
</svelte:head>

<script>
	import { onMount } from 'svelte';
	import Navigation from "$lib/navigation.svelte";

	let HeroCarousel;
	onMount(async () => {
		const module = await import("$lib/hero-carousel.svelte");
		HeroCarousel = module.default;
	});
</script>

<div class="w-full h-screen mb-[min(-260px,calc(-115px-20vh))]">
  <svelte:component this={HeroCarousel}/>
</div>

<Navigation />

<div class="h-screen"></div>
<div class="h-screen"></div>
