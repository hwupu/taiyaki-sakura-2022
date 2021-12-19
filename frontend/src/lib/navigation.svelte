<script>
	import AnimatedLogo from '$lib/animated-logo.svelte';
</script>

<nav
	class="fixed bottom-0 right-0 z-40 sm:sticky sm:top-[-140px] sm:mt-[-140px] sm:mb-[140px] sm:max-w-screen-lg sm:mx-auto sm:px-4"
	aria-label="main"
	id="sr-nav"
	style="scroll-snap-align: none;"
>
	<ul class="flex items-end gap-4 text-center">
		<li class="flex-none order-3 w-[238px] mx-[calc(-1rem-5pt)]">
			<a href="/">
				<AnimatedLogo />
				<span class="sr-only">Home</span>
			</a>
		</li>
		<li class="bg-red-400 flex-1 order-1"><a href="/new">new</a></li>
		<li class="bg-red-400 flex-1 order-2"><a href="#">Link2</a></li>
		<li class="bg-red-400 flex-1 order-4"><a href="#">Link3</a></li>
		<li class="bg-red-400 flex-1 order-5"><a href="#">Link4</a></li>
	</ul>
</nav>
