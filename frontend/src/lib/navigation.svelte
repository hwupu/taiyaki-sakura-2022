<script>
	import { onMount } from 'svelte';
	import AnimatedLogo from '$lib/animated-logo.svelte';

	let isMenuOpen = false;
	let width;
	let btn;
	let menu;

	onMount(() => {
		btn = document.querySelector('#nav-menu-btn');
			menu = document.querySelector('#nav-menu');

			window.addEventListener('resize', resetMenu);
	});

	const resetMenu = () => {
		if (width < 620) {
			btn.disabled = false;
			isMenuOpen = false;
			closeMenu();
		} else {
			btn.disabled = true;
			btn.setAttribute('aria-expanded', 'true');
			menu.setAttribute('tabindex', '0');
			for (let li of menu.children) {
				li.style.transform = null;
				li.style.opacity = null;
			}
		}
	};

	const closeMenu = () => {
		btn.setAttribute('aria-expanded', 'false');
		menu.setAttribute('tabindex', '-1');
		for (let li of menu.children) {
			li.style.transform = 'translate(0px,0px)';
			li.style.opacity = 0;
		}
	};

	const openMenu = () => {
		btn.setAttribute('aria-expanded', 'true');
		menu.setAttribute('tabindex', '0');
		const n = menu.childElementCount - 1;
		let i = 0;
		let r = 170;
		for (let li of menu.children) {
			let x = Math.trunc(r * Math.cos((Math.PI * i) / (2 * n)));
			let y = Math.trunc(r * Math.sin((Math.PI * i) / (2 * n)));
			li.style.transform = 'translate(-' + x + 'px,-' + y + 'px)';
			li.style.opacity = 1;
			i += 1;
		}
	};

	const toggleMenu = () => {
		if (isMenuOpen) {
			closeMenu();
		} else {
			openMenu();
		}
		isMenuOpen = !isMenuOpen;
	};
</script>

<svelte:window bind:innerWidth={width} />

<nav
	id="sr-nav"
	aria-label="main"
	class="fixed bottom-0 right-0 z-40 sm:sticky sm:top-[-140px]
	  	   p-8 sm:py-0 sm:px-4
     	   sm:mt-[-140px] sm:mb-[140px] sm:max-w-screen-lg sm:mx-auto"
	style="scroll-snap-align: none;"
>
	<button
		id="nav-menu-btn"
		aria-controls="nav-menu"
		aria-expanded="false"
		class="sm:hidden bg-red-400 p-4 rounded-full flex justify-center items-center"
		on:click={toggleMenu}
	>
		<i>M</i>
		<span class="sr-only">Menu</span>
	</button>
	<ul
		id="nav-menu"
		role="region"
		tabindex="-1"
		class="relative sm:static bottom-0 right-0 z-[-1]
					 flex flex-col-reverse gap-4 sm:flex-row sm:items-end
					 text-right sm:text-center"
	>
		<li
			class="absolute transition-all sm:static sm:flex-none sm:order-4 sm:w-[238px] sm:mx-[calc(-1rem-5pt)]"
		>
			<a href="/">
				<AnimatedLogo />
				<span class="sm:sr-only">首頁</span>
			</a>
		</li>
		<li class="absolute transition-all sm:static bg-red-400 flex-1 sm:order-1">
			<a href="/tour">觀光</a>
		</li>
		<li class="absolute transition-all sm:static bg-red-400 flex-1 sm:order-2">
			<a href="/map">地圖</a>
		</li>
		<li class="absolute transition-all sm:static bg-red-400 flex-1 sm:order-3">
			<a href="/guild">公會</a>
		</li>
		<li class="absolute transition-all sm:static bg-red-400 flex-1 sm:order-5">
			<a href="/plan">藍圖</a>
		</li>
		<li class="absolute transition-all sm:static bg-red-400 flex-1 sm:order-6">
			<a href="/access">加入</a>
		</li>
		<li class="absolute transition-all sm:static bg-red-400 flex-1 sm:order-7">
			<a href="/login">登入</a>
		</li>
	</ul>
</nav>
