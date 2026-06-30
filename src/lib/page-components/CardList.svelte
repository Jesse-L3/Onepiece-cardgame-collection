<script>
	import { onMount } from 'svelte';
	let { cards } = $props();
	import { colorDecider } from '$lib/JavaScript/color-decider.js';

	// snow colors

	const setSNowColor = (primary, secondary) => {
		document.documentElement.style.setProperty('--snow-color', primary);
		document.documentElement.style.setProperty('--snow-color-secondary', secondary);
	}

	const DefaultSnowcolor = () => {
		document.documentElement.style.setProperty('--snow-color', 'white');
		document.documentElement.style.setProperty('--snow-color-secondary', 'lightgray');
	}

	let section;

	onMount( () => {

			
			const cardItems = section.querySelectorAll('.card-item');

			const observer = new IntersectionObserver((entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting){
						entry.target.classList.add('visible');
						// observer.unobserve(entry.target);
						console.log('Card is visible:', entry.target);
					} else {
						entry.target.classList.remove('visible');
						
					}
				});
				}, 
				{threshold: 0.2}
			);

		cardItems.forEach(item => observer.observe(item));
	});	

</script>
<section bind:this={section} class="mx-4">
	<ul class="grid gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
		{#each cards as card}
			<li onmouseenter={() => setSNowColor(colorDecider(card.card_color).PrimaryColor, colorDecider(card.card_color).SecondaryColor)}
				ontouchstart={() => setSNowColor(colorDecider(card.card_color).PrimaryColor,colorDecider(card.card_color).SecondaryColor)}
				onmouseleave={DefaultSnowcolor}
				style="--current-element-primary: {colorDecider(card.card_color).PrimaryColor}; 
				--current-element-secondary: {colorDecider(card.card_color).SecondaryColor};" 
				class="card-item py-16 flex flex-col items-center relative rounded-lg overflow-hidden isolate"
			>
				<img class="w-[144px] h-auto relative z-10 pb-[36px]"
					src={card.card_image} 
					alt={card.card_name || 'Card'} 
					loading="lazy"
				/>
				<div class="relative z-10">
					<p class="text-xl text-center">{card.card_name || 'Unknown'} {card.set_id}</p>
				</div>
				<div class="absolute inset-0 z-0">
					<circle class="w-60 h-60 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-80"></circle>
				</div>
			</li>
		{/each}
	</ul>
</section>

{#if cards.length === 0}
<section class="mx-4">
	<ul class="grid gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
		{#each Array(200) as _, i}
			<li class="group card-item py-16 flex flex-col items-center relative rounded-lg overflow-hidden isolate">
				<img class="w-[144px] h-auto relative z-10 pb-[36px]"
					src="./images/OP01-003.jpg" 
					alt={"Kaart " + (i + 1)} 
					loading="lazy"
				/>
				<div class="relative z-10">
					<p class="text-xl text-center">SET-{i + 1} – Card {i + 1} (Dummy Set)</p>
				</div>
				<div class="absolute inset-0 z-0">
					<circle class="w-60 h-60 group-hover:bg-red-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-80"></circle>
				</div>
			</li>
		{/each}
	</ul>
</section>
	{/if}


<style>

	li{
		border: 1px solid var(--border-color);
		background-color: var(--li-background);
		transition: transform 0.3s ease-in-out;
	}

	@-moz-document url-prefix() {
		li{
			backdrop-filter: blur(46px);
		}
	}

	li:hover{
		transform: scale(1.05);
	}

	li:active img{
		scale: 1.5;
	}

	li img {
		transition: scale 0.1s ease-in-out;
	}

	li:hover circle{
		background-color: var(--current-element-primary);
		transition: background-color 0.3s ease-in-out;
		transition-delay: 0.3s;
	}

	.card-item{
		opacity: 1;
		transform: translateY(40px);
		transition: opacity 0.5s ease-out, transform 0.5s ease-out;
	}

	:global(.card-item.visible){
		opacity: 1;
		transform: translateY(0);
	}

</style>