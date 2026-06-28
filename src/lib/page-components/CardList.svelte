<script>
import { onMount } from 'svelte';
	let { cards } = $props();
	import { colorDecider } from '$lib/javascript/color-decider.js';

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
				{threshold: 0.5}
			);

		cardItems.forEach(item => observer.observe(item));
	});	

</script>
<section bind:this={section} class="mx-4">
	<ul class="grid gap-16 grid-cols-6">
		{#each cards as card}
			<li style="--current-element-primary: {colorDecider(card.card_color).PrimaryColor}; --current-element-secondary: {colorDecider(card.card_color).SecondaryColor};" class="card-item py-16 flex flex-col items-center relative rounded-lg overflow-hidden isolate">
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
	<ul class="grid gap-16 grid-cols-6">
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
		backdrop-filter: blur(46px);
		background-color: var(--li-background);
	}

	li:hover{
		scale: 1.05;
		transition: scale 0.3s ease-in-out;
	}

	li:hover circle{
		background-color: var(--current-element-primary);
		transition: background-color 0.3s ease-in-out;
		transition-delay: 0.3s;
	}

	.card-item{
		opacity: 0;
		transform: translateY(20px);
		transition: opacity 0.5s ease-out, transform 0.5s ease-out;
	}

	:global(.card-item.visible){
		opacity: 1;
		transform: translateY(0);
	}

</style>