<script>
  let { data } = $props();
  let cards = data.cards;

  let currentAmounts = $state(Array(cards.length).fill(0));
  
  function increaseAmount(idx) {
    currentAmounts[idx]++;
  }

  function decreaseAmount(idx) {
    if (currentAmounts[idx] > 0) {
    currentAmounts[idx]--;
  }
}
</script>

<h1>Alle One Piece TCG Kaarten</h1>
<main>
<ul>
  {#each cards.slice(300, 900) as card, idx}
    <li>
      <div>
        <picture>
          <source srcset={card.card_image} type="image/webp" />
          <source srcset={card.card_image} type="image/jpeg" />
          <img src={card.card_image} alt={card.card_name} loading="lazy" width="200" />
          <div class="hover-blocks">
            {#each Array(9) as _, index }
              <div class="hover-block number{index}" data-index={index}></div>
            {/each}
          </div>
        </picture>
      </div>
      <p>{card.card_set_id} – {card.card_name} ({card.set_name})</p>
      <button onclick={() => increaseAmount(idx)} aria-label="Increase amount">+</button>
      <p>{currentAmounts[idx]}</p>
      <button onclick={() => decreaseAmount(idx)} aria-label="Decrease Amount">-</button>
    </li>
  {/each}
</ul>
</main>

<!-- <ul>
  {#each Array(200) as _, i}
    <li>
      <div>
        <img src="./images/OP01-003.jpg" alt="Kaart {i + 1}" width="200" />
        <div class="hover-blocks">
        {#each Array(9) as _, index }
        <div class="hover-block number{index}" data-index={index}></div>
        {/each}
        </div>
      </div>
      <p>SET-{i + 1} – Card {i + 1} (Dummy Set)</p>
    </li>
  {/each}
</ul> -->


<style>

  @property --text-animations {
    syntax: "<angle>";
    inherits: true;
    initial-value: 0deg;
  }
  

  h1 {
    text-align: center;
    margin-bottom: 1em;
    animation: growshrink 0.7s ease-in-out;
    animation-iteration-count: 5;
    transform: rotate(var(--text-animations));
  }

  @keyframes growshrink {
    to{
      --text-animations: 360deg;
    }
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

   @property --card-content {
    syntax: "<number> | <color> | <angle>";
    inherits: false;
    initial-value: red;
  }
 
  li {
    --card-content: 20deg;
    text-align: center;
    padding: 0.5em;
    border-radius: 8px;
    animation: fadeIn 1s forwards;
    animation-delay: 0.5s;
    position: relative;
    transition: transform 0.3s ease; 
  }


  li p {
    color: var(--card-content);
  }


  @keyframes fadeIn {
 from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@supports (animation-timeline: view()){

  img {
    --card-content: 10deg;
    animation: straighten linear both;
    animation-timeline: view();
    animation-range: entry 0% cover 50%;
    /* animation-range: entry 40% exit 50%; */
    transform: rotate(var(--card-content));
}

@keyframes straighten {
  to{
    --card-content: 0deg;
    scale: 1;
  }
}

  /* @keyframes straighten{
    0% {
      --card-content: 10deg;
      scale: 0.8;
    }
    50% {
      --card-content: 0deg;
      scale: 1;
    }
    100% {
      --card-content: 10deg;
      scale: 0.8; 
    }
  } */
}

  picture {
  display: inline-block;
  position: relative;
}

picture {
  display: block;
}

.hover-blocks {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  pointer-events: all;
  /* Remove or adjust z-index if needed */
}

  img {
    aspect-ratio: 300 / 419;
    height: auto;
    width: 200px;
    position: relative;

    @media (min-width: 1080px) {
      width: 400px;
    }
  }

  .hover-blocks {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    pointer-events: all; 
  }

  .hover-block{
    z-index: 100;
    pointer-events: all;
  }
  

  li:has(.hover-block.number0:hover) { 
    transform: rotateX(var(--card-content)) rotateY(calc(-1 * var(--card-content))); 
  } 

  li:has(.hover-block.number1:hover) { 
    transform: rotateX(var(--card-content)) rotateY(0deg); 
  }  

  li:has(.hover-block.number2:hover) { 
    transform: rotateX(var(--card-content)) rotateY(var(--card-content)); 
  }  

  li:has(.hover-block.number3:hover) { 
    transform: rotateX(0deg) rotateY(calc(-1 * var(--card-content))); 
  }  

  li:has(.hover-block.number4:hover) { 
    transform: rotateX(0deg) rotateY(0deg); 
  }

  li:has(.hover-block.number5:hover) { 
    transform: rotateX(0deg) rotateY(var(--card-content)); 
  }   

  li:has(.hover-block.number6:hover) { 
    transform: rotateX(calc(-1 * var(--card-content))) rotateY(calc(-1 * var(--card-content))); 
  } 

  li:has(.hover-block.number7:hover) { 
    transform: rotateX(calc(-1 * var(--card-content))) rotateY(0deg); 
  } 

  li:has(.hover-block.number8:hover) { 
    transform: rotateX(calc(-1 * var(--card-content))) rotateY(var(--card-content)); 
  }  

</style>