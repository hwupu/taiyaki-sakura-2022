<nav class="sticky top-[-140px] z-40 max-w-screen-lg mx-auto px-4" aria-label="Main navigation">
	<ul class="flex items-end gap-4 text-center">
		<li class="flex-none order-3 w-[238px] mx-[calc(-1rem-5pt)]">
			<a href="#">
				<AnimatedLogo />
				<span class="sr-only">Home</span>
			</a>
		</li>
		<li class="bg-red-400 flex-1 order-1"><a href="#">Link1</a></li>
		<li class="bg-red-400 flex-1 order-2"><a href="#">Link2</a></li>
		<li class="bg-red-400 flex-1 order-4"><a href="#">Link3</a></li>
		<li class="bg-red-400 flex-1 order-5"><a href="#">Link4</a></li>
	</ul>
</nav>

<script>
	import AnimatedLogo from "$lib/animated-logo.svelte";
</script>
