<script context="module">
	import { Autoplay, EffectFade, A11y } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	import 'swiper/css';
	import 'swiper/css/autoplay';
	import 'swiper/css/effect-fade';
	import 'swiper/css/a11y';

	let slides = [
		{ filename: 'bg-1', alt: 'Tower of Atlantics' },
		{ filename: 'bg-2', alt: 'East Ploywood' },
		{ filename: 'bg-3', alt: 'Torii near Atlantics' },
	];
</script>

<script>
	import { onMount } from 'svelte';

	export let enable = true;

	let swiper;

	const onSwiper = (e) => {
		swiper = e.detail[0];
	};

	$: {
		if (swiper && swiper.autoplay.running && !enable) {
			swiper.autoplay.stop();
		} else if (swiper && !swiper.autoplay.running && enable) {
			swiper.autoplay.start();
		}
	}

	let a11yOptions = {
		containerMessage: 'Decorative carousel',
		containerRoleDescriptionMessage:
			'Decorative carousel in background showing footages of Taiyaki Sakura worldview',
		itemRoleDescriptionMessage: 'Footage',
	};
</script>

<Swiper
	class="w-full h-screen bg-white dark:bg-black"
	modules={[Autoplay, EffectFade, A11y]}
	autoplay={{ delay: 5000 }}
	effect="fade"
	fadeEffect={{ crossFade: true }}
	allowTouchMove={false}
	simulateTouch={false}
	speed={700}
	on:swiper={onSwiper}
	aria-hidden={!enable}
	tabindex={enable ? 0 : -1}
	role="group"
	a11y={a11yOptions}
>
	{#each slides as slide}
		<SwiperSlide>
			<picture>
				<source srcset="images/{slide.filename}.webp" type="image/webp" />
				<img class="w-full h-full object-cover" src="images/{slide.filename}.jpg" alt={slide.alt} />
			</picture>
		</SwiperSlide>
	{/each}
</Swiper>
