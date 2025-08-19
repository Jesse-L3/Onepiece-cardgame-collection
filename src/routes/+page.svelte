<script>
  import { onMount } from "svelte";
  import { on } from "svelte/events";

  let cards = [];

  async function getAllCards() {
    const baseURL = "https://optcgapi.com/api/";

    try {
      // 1. Alle sets ophalen
      const setsRes = await fetch(`${baseURL}allSets/`);
      if (!setsRes.ok) throw new Error(`Failed to fetch sets: ${setsRes.status}`);
      const sets = await setsRes.json();

      // 2. Voor elke set de kaarten ophalen
      const allCardsArrays = await Promise.all(
        sets.map(async (set) => {
          const cardsRes = await fetch(`${baseURL}sets/${set.set_id}/`);
          if (!cardsRes.ok) throw new Error(`Failed to fetch set ${set.set_id}`);
          const setCards = await cardsRes.json();
          // Voeg set_name toe aan elke kaart
          return setCards.map(c => ({ ...c, set_name: set.set_name }));
        })
      );

      // 3. Flatten naar één array
      cards = allCardsArrays.flat();

      console.log("Totaal aantal kaarten:", cards.length);
    } catch (error) {
      console.error("Fout bij ophalen kaarten:", error);
    }
  }

  onMount(() => {
    getAllCards();
  });

  onMount(() => {
    document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("ul .houseDetail, .wrapper-lists ul li")
    .forEach((li, index) => {
      li.style.animationDelay = `${index * 0.2}s`;
    });
});
  });


</script>

<h1>Alle One Piece TCG Kaarten</h1>

<ul>
  {#each cards as card}
    <li>
      <picture>
        <source srcset={card.card_image} type="image/webp" />
        <source srcset={card.card_image} type="image/jpeg" />
        <img src={card.card_image} alt={card.card_name} width="200" />
      </picture>
      <p>{card.card_set_id} – {card.card_name} ({card.set_name})</p>
    </li>
  {/each}
</ul>

<style>
  h1 {
    text-align: center;
    margin-bottom: 1em;
  }

  ul {
    list-style-type: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2em;

    @media (min-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }
  }

   @property --card-rotation {
    syntax: "<angle>";
    inherits: true;
    initial-value: "0deg";
  }

  li {
    text-align: center;
    padding: 0.5em;
    border-radius: 8px;
    animation: fadeIn 1s forwards;
    animation-delay: 1s;
    transform: rotate(var(--card-rotation));
  }

  @keyframes fadeIn {
 from {
    opacity: 0;
  }
  to {
    opacity: 1;
    --card-rotation: 5deg;
  }
}

  img {
    aspect-ratio: 300 / 419;

    @media (min-width: 1080px) {
      width: 400px;
    }
  }
  
</style>