<script>
	import '../styles/main.css';

	import { onMount } from 'svelte';
	import { navigating, page } from '$app/stores';
	import Navigation from '$lib/navigation.svelte';

	let HeroCarousel;
	onMount(async () => {
		const module = await import('$lib/hero-carousel.svelte');
		HeroCarousel = module.default;
	});

	$: hasHero = $page.path.match(/^\/$/);
</script>

<div
	class="w-full overflow-hidden mb-[min(-260px,calc(-115px-20vh))]"
	class:h-screen={hasHero}
	class:h-0={!hasHero}
	style="transition: height ease-in-out 1s;"
>
	<svelte:component this={HeroCarousel} />
</div>

<Navigation />

<main>
	<slot />
</main>
