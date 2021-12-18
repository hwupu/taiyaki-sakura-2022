<script>
	import { onMount } from 'svelte';

	onMount(() => {
	  const logo = document.querySelector('#animated-logo');
		const ringGroup = document.querySelector('#al-rg');
		const ring1 = document.querySelector('#al-r1');
		const ring2 = document.querySelector('#al-r2');
		const ring3 = document.querySelector('#al-r3');
		const ring4 = document.querySelector('#al-r4');
		const ring5 = document.querySelector('#al-r5');
		const ring6 = document.querySelector('#al-r6');
		const taiyakiBody = document.querySelector('#al-tb');
		const taiyakiFin = document.querySelector('#al-tf');
		const sakuraTop = document.querySelector('#al-st');
		const sakuraBottom = document.querySelector('#al-sb');

	  const handleInersection = (entries) => {
			entries.forEach((entry) => {

				//console.log(entry.intersectionRatio);
        if (entry.intersectionRatio < 1) {
				  const A = 0.3991416394710541;
				  const B = 1;
				  const C = 0;
				  const D = 0.8;
				  // let X = entry.intersectionRatio;
				  // let mappedValue = (X-A)/(B-A) * (D-C) + C;

				  let opacity = (entry.intersectionRatio - A) / (B - A) * (D - C) + C;
				  opacity = opacity * opacity;
				  ringGroup.style.opacity = opacity;
				  taiyakiBody.style.opacity = opacity;
				} else {
					ringGroup.style.opacity = 1;
					taiyakiBody.style.opacity = 1;
				}
	  	});
		};
		const options = {
      threshold: [ 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.999, 1 ]
		}
		const observer = new IntersectionObserver(handleInersection, options);
	  observer.observe(logo)
	});
</script>

<svg width="238" height="233" id="animated-logo" class="pointer-none" draggable="false">
	<g id="al-rg" class="transition-opacity" x=0 y=0 width="238" height="233">
	  <foreignObject id="al-r6" class="" x="0" y="0" width="96" height="60"
	  	transform="translate(46 98) rotate(180 96 30)">
      <picture>
      	<source srcset="images/svg/ring6.svg" type="image/svg+xml">
      	<source srcset="images/webp/ring6.webp, images/webp/ring6@2x.webp 2x, images/webp/ring6@3x.webp 3x" type="image/webp">
	  		<img src="images/png/ring6.png" width="96" height="60" alt=""
	  			srcset="images/png/ring6@2x.png 2x, images/png/ring6@3x.png 3x">
      </picture>
	  </foreignObject>
	  <foreignObject id="al-r5" class="" x="0" y="0" width="109" height="66"
	    transform="translate(27 88) rotate(135 109 33)">
      <picture>
      	<source srcset="images/svg/ring5.svg" type="image/svg+xml">
      	<source srcset="images/webp/ring5.webp, images/webp/ring5@2x.webp 2x, images/webp/ring5@3x.webp 3x" type="image/webp">
	  		<img src="images/png/ring5.png" width="109" height="66" alt=""
	  			srcset="images/png/ring5@2x.png 2x, images/png/ring5@3x.png 3x">
      </picture>
	  </foreignObject>
	  <foreignObject id="al-r4" class="" x="0" y="0" width="118" height="72"
	    transform="translate(11 82) rotate(90 118 36)">
      <picture>
      	<source srcset="images/svg/ring4.svg" type="image/svg+xml">
      	<source srcset="images/webp/ring4.webp, images/webp/ring4@2x.webp 2x, images/webp/ring4@3x.webp 3x" type="image/webp">
	  		<img src="images/png/ring4.png" width="118" height="72" alt=""
	  			srcset="images/png/ring4@2x.png 2x, images/png/ring4@3x.png 3x">
      </picture>
	  </foreignObject>
	  <foreignObject id="al-r3" class="" x="0" y="0" width="126" height="77"
	    transform="translate(0 78) rotate(45 119 36.5)">
      <picture>
      	<source srcset="images/svg/ring3.svg" type="image/svg+xml">
      	<source srcset="images/webp/ring3.webp, images/webp/ring3@2x.webp 2x, images/webp/ring3@3x.webp 3x" type="image/webp">
	  		<img src="images/png/ring3.png" width="126" height="77" alt=""
	  			srcset="images/png/ring3@2x.png 2x, images/png/ring3@3x.png 3x">
      </picture>
	  </foreignObject>
	  <foreignObject id="al-r2" class="" x="0" y="0" width="119" height="73"
	    transform="translate(0 92) rotate(0 119 36.5)">
      <picture>
      	<source srcset="images/svg/ring2.svg" type="image/svg+xml">
      	<source srcset="images/webp/ring2.webp, images/webp/ring2@2x.webp 2x, images/webp/ring2@3x.webp 3x" type="image/webp">
	  		<img src="images/png/ring2.png" width="119" height="73" alt=""
	  			srcset="images/png/ring2@2x.png 2x, images/png/ring2@3x.png 3x">
      </picture>
	  </foreignObject>
	  <foreignObject id="al-r1" class="" x="0" y="0" width="98" height="60"
	    transform="translate(24 106) rotate(-45 98 30)">
      <picture>
      	<source srcset="images/svg/ring1.svg" type="image/svg+xml">
      	<source srcset="images/webp/ring1.webp, images/webp/ring1@2x.webp 2x, images/webp/ring1@3x.webp 3x" type="image/webp">
	  		<img src="images/png/ring1.png" width="98" height="60" alt=""
	  			srcset="images/png/ring1@2x.png 2x, images/png/ring1@3x.png 3x">
      </picture>
	  </foreignObject>
	</g>
	<g id="al-tb" class="transition-opacity" x=0 y=0 width="208" height="139"
	  transform="translate(26 48) rotate(0 104 139)">
	  <foreignObject x="0" y="0" width="208" height="139">
      <picture>
      	<source srcset="images/svg/taiyaki-body.svg" type="image/svg+xml">
      	<source srcset="images/webp/taiyaki-body.webp, images/webp/taiyaki-body@2x.webp 2x, images/webp/taiyaki-body@3x.webp 3x" type="image/webp">
	  		<img src="images/png/taiyaki-body.png" width="208" height="139" alt=""
	  			srcset="images/png/taiyaki-body@2x.png 2x, images/png/taiyaki-body@3x.png 3x">
      </picture>
	  </foreignObject>
		<foreignObject id="al-tf" class="" x="0" y="0" width="57" height="43"
		transform="translate(79 75) rotate(0 57 15)">
      <picture>
      	<source srcset="images/svg/taiyaki-fin.svg" type="image/svg+xml">
      	<source srcset="images/webp/taiyaki-fin.webp, images/webp/taiyaki-fin@2x.webp 2x, images/webp/taiyaki-fin@3x.webp 3x" type="image/webp">
	  		<img src="images/png/taiyaki-fin.png" width="57" height="43" alt=""
	  			srcset="images/png/taiyaki-fin@2x.png 2x, images/png/taiyaki-fin@3x.png 3x">
      </picture>
	  </foreignObject>
	</g>
	<foreignObject id="al-st" class="" x="0" y="0" width="46" height="43"
	  transform="translate(183 143.7) rotate(21.5 23 21.5)">
    <picture>
    	<source srcset="images/svg/sakura-flat.svg" type="image/svg+xml">
    	<source srcset="images/webp/sakura-flat.webp, images/webp/sakura-flat@2x.webp 2x, images/webp/sakura-flat@3x.webp 3x" type="image/webp">
			<img src="images/png/sakura-flat.png" width="46" height="43" alt=""
				srcset="images/png/sakura-flat@2x.png 2x, images/png/sakura-flat@3x.png 3x">
    </picture>
	</foreignObject>
	<foreignObject id="al-sb" class="" x="0" y="0" width="46" height="43"
	  transform="translate(23 187.5) rotate(-20 23 21.5)">
    <picture>
    	<source srcset="images/svg/sakura-flat.svg" type="image/svg+xml">
    	<source srcset="images/webp/sakura-flat.webp, images/webp/sakura-flat@2x.webp 2x, images/webp/sakura-flat@3x.webp 3x" type="image/webp">
			<img src="images/png/sakura-flat.png" width="46" height="43" alt=""
				srcset="images/png/sakura-flat@2x.png 2x, images/png/sakura-flat@3x.png 3x">
    </picture>
	</foreignObject>
	<foreignObject x="31.5" y="162.5" width="175" height="69">
    <picture>
    	<source srcset="images/svg/type-logo.svg" type="image/svg+xml">
    	<source srcset="images/webp/type-logo.webp, images/webp/type-logo@2x.webp 2x, images/webp/type-logo@3x.webp 3x" type="image/webp">
			<img src="images/png/type-logo.png" width="175" height="69" alt=""
				srcset="images/png/type-logo@2x.png 2x, images/png/type-logo@3x.png 3x">
    </picture>
	</foreignObject>
</svg>

