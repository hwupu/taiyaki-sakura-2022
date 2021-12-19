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

	$: hasHero = $page.path.match(/^\/$/) ? true : false;
</script>

<a
	href="#sr-nav"
	class="fixed top-0 inset-x-0 bg-red-600 text-white p-2 -translate-y-full focus:translate-y-0 z-50"
	>Skip to navigation</a
>

<a
	href="#sr-main"
	class="fixed top-0 inset-x-0 bg-red-600 text-white p-2 -translate-y-full focus:translate-y-0 z-50"
	>Skip to main content</a
>

<div
	class="w-full overflow-hidden sm:mb-[min(-260px,calc(-115px-20vh))]"
	class:h-screen={hasHero}
	class:h-0={!hasHero}
	style="transition: height ease-in-out 1s; scroll-snap-align: end;"
>
	<svelte:component this={HeroCarousel} enable={hasHero} />
</div>

<Navigation />

<main id="sr-main" style="scroll-margin: 110px; scroll-snap-align: start;">
	<slot />
</main>
