<script>
  import { slide } from "svelte/transition";
  import { colorDecider } from '$lib/javascript-components/color-decider.js';

  let { cards } = $props();
    console.log(cards);

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
<section> 
<ul>
  {#each cards as card, idx}
    <li style="--primary-color: {colorDecider(card.card_color).PrimaryColor}; --secondary-color: {colorDecider(card.card_color).SecondaryColor};">
    <a href="">
      <form action="">
        <button onclick={() => increaseAmount(idx)} aria-label="Increase amount">-</button>
        <span>{currentAmounts[idx]}</span>
        <button onclick={() => decreaseAmount(idx)} aria-label="Decrease Amount">+</button>
      </form>
      <div>
        <figure>
          <img src={card.card_image} alt={card.card_name} loading="lazy" />
          <img src="./images/cardback.png" alt="" loading="lazy" />
        </figure>
        <p style={`--primary-color: ${colorDecider(card.card_color).PrimaryColor === '#1B2020' ? 'white' : colorDecider(card.card_color).PrimaryColor === '#77377F' ? '#FAADFF' : colorDecider(card.card_color).PrimaryColor === '#5DA9D2' ? '#96DAFF' : colorDecider(card.card_color).PrimaryColor === '#F1C40F' ? '#FFF692' : colorDecider(card.card_color).PrimaryColor === '#5DA9D2' ? '#96DAFF' : colorDecider(card.card_color).PrimaryColor === '#2ECC71' ? '#31D49E' : colorDecider(card.card_color).PrimaryColor === '#D42F34' ? '#FF6C70' : 'inherit'}`}>{card.card_set_id} – {card.card_name} ({card.set_name})</p>
      </div>
    </a>
    </li>
    <!-- <a href="https://www.cardmarket.com/en/OnePiece/Products/Singles/{card.set_name.replaceAll(" ", "-")}/{card.card_name.replace('(Alternate Art)', ' ').trim().replaceAll(" ", "-") }-{card.card_set_id}{card.card_name.includes('Alternate Art') ? '-V2' : '-V1'}">check Cardmarket</a> doesnt work for all  -->
  {/each}
</ul>
</section>

<!-- <section>
<ul>
  {#each Array(200) as _, i}
    <li style="--primary-color: {colorDecider('Red').PrimaryColor}; --secondary-color: {colorDecider('Red').SecondaryColor};">
      <a href="">
      <form action="">
        <button>-</button>
        <span>0</span>
        <button>+</button>
      </form>
      <div>
        <figure>
          <img src="./images/OP01-003.jpg" alt={"Kaart " + (i + 1)} loading="lazy" width="200" />
          <figcaption>SET-{i + 1} – Card {i + 1} (Dummy Set)</figcaption>
        </figure>
      </div>
      </a>
    </li>
  {/each}
</ul>
</section> -->

<style>

  ul{
    display: grid;
    grid-template-columns: 1fr;
    list-style: none;
    row-gap: var(--section-gap);
  }

  li{
    background-color: var(--section-color);
    width: 220px;
    height: 300px;
    margin: auto;
    border-radius: 20px;
  }

  a{
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  div{
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  form{
    align-self: end;
    position: absolute;
    top: 0;
    z-index: 10;
  }

  form span{
    color: var(--primary-color);
  }

  form button{
    background: none;
    border: none;
    cursor: pointer;
  }

  figure{
    width: 119.46px;
    height: 166.92px;
    position: relative;
  }

  img{
    margin: auto;
    position: absolute;
    width: 119.46px;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

 
  img:first-child{
    z-index: 3;
    left: 58%; 
    transform: translate(-50%,-50%) rotate(9.54deg);
  }

 
  img:last-child{
    z-index: 1;
    left: 42%;
    transform: translate(-50%,-50%) rotate(-10.36deg);
    filter: blur(2);
    position: relative;

  }

  figure::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    z-index: 2;
    opacity: 0.5;
    top: 50%;
    left: 42%;
    border-radius: inherit;
    pointer-events: none;
    transform: none;
    transform: translate(-50%,-50%) rotate(-10.36deg);
    border-radius: 8px;
  }
    

  p{
    color: var(--primary-color);
    text-align: center;
  }

</style>