<script>
let { data } = $props();
const cards  = data.cards;

console.log(cards);
</script>

<svelte:head>
	<title>One Piece Card Collection</title>
</svelte:head>

<main>
	<div class="hero">
		<h1>One Piece Card Collection</h1>
		<p>Browse all available cards</p>
	</div>

	<div class="card-grid">
		{#each cards as card (card.id)}
			<div class="card-item">
				<img 
					src={card.card_image} 
					alt={card.card_name || 'Card'} 
					loading="lazy"
				/>
				<div class="card-info">
					<p class="card-name">{card.card_name || 'Unknown'}</p>
					<p class="card-set">{card.set_name}</p>
          			<p>Color: {card.card_color}</p>
				</div>
			</div>
		{/each}
	</div>

	{#if cards.length === 0}
		<div class="no-cards">
			<p>No cards found</p>
		</div>
	{/if}
</main>

<style>
	main {
		padding: 2rem;
		max-width: 100%;
	}

	.hero {
		text-align: center;
		margin-bottom: 3rem;
	}

	.hero h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	.hero p {
		font-size: 1.1rem;
		color: #666;
	}

	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.card-item {
		display: flex;
		flex-direction: column;
		border-radius: 8px;
		overflow: hidden;
		background: #fff;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s, box-shadow 0.2s;
		cursor: pointer;
	}

	.card-item:hover {
		transform: translateY(-4px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	.card-item img {
		width: 100%;
		display: block;
	}

	.card-info {
		padding: 1rem;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.card-name {
		font-weight: 600;
		margin: 0 0 0.5rem 0;
		font-size: 0.95rem;
		line-height: 1.3;
	}

	.card-set {
		font-size: 0.85rem;
		color: #999;
		margin: 0;
	}

	.no-cards {
		text-align: center;
		padding: 3rem;
		color: #999;
	}

	@media (max-width: 768px) {
		.card-grid {
			grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
			gap: 1rem;
		}

		.card-item img {
			height: 210px;
		}

		.hero h1 {
			font-size: 1.8rem;
		}
	}
</style>
