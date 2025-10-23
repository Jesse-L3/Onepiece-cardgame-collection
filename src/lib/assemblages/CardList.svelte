<script>
    let { cards } = $props();
    // console.log(cards);

    let currentAmounts = $state(Array(cards.length).fill(0));
  
  function increaseAmount(idx) {
    currentAmounts[idx]++;
  }

  function decreaseAmount(idx) {
    if (currentAmounts[idx] > 0) {
    currentAmounts[idx]--;
  }
}



const colorDecider = (color) => {
  if (color === 'Red') {
    return { PrimaryColor: '#D42F34', SecondaryColor: '#730F0F' };
  } else if (color === 'Blue') {
    return { PrimaryColor: '#5DA9D2', SecondaryColor: '#0F5973' };
  } else if (color === 'Green') {
    return { PrimaryColor: '#2ECC71', SecondaryColor: '#27AE60' };
  } else if (color === 'Yellow') {
    return { PrimaryColor: '#F1C40F', SecondaryColor: '#F39C12' };
  } else if (color === 'Purple') {
    return { PrimaryColor: '#77377F', SecondaryColor: '#51026B' };
  } else  if (color === 'Black') {
    return { PrimaryColor: '#1B2020', SecondaryColor: '#000000' };


  } else if (color === 'Yellow Black' || color === 'Black Yellow') {
    return { PrimaryColor: '#F1C40F', SecondaryColor: '#1B2020' };
  } else if (color === 'Blue Black' || color === 'Black Blue') {
    return { PrimaryColor: '#5DA9D2', SecondaryColor: '#1B2020' };
  } else if (color === 'Red Black' || color === 'Black Red') {
    return { PrimaryColor: '#D42F34', SecondaryColor: '#1B2020' };
  } else if (color === 'Green Black' || color === 'Black Green') {
    return { PrimaryColor: '#2ECC71', SecondaryColor: '#1B2020' };
  } else if (color === 'Purple Black' || color === 'Black Purple') {
    return { PrimaryColor: '#77377F', SecondaryColor: '#1B2020' };
  }

    else if (color === 'Red Green' || color === 'Green Red') {
    return { PrimaryColor: '#D42F34', SecondaryColor: '#2ECC71' };
  } else if (color === 'Red Blue' || color === 'Blue Red') {
    return { PrimaryColor: '#D42F34', SecondaryColor: '#5DA9D2' };
  } else if (color === 'Red Yellow' || color === 'Yellow Red') {
    return { PrimaryColor: '#D42F34', SecondaryColor: '#F1C40F' };
  } else if (color === 'Red Purple' || color === 'Purple Red') {
    return { PrimaryColor: '#D42F34', SecondaryColor: '#77377F' };
  }

    else if (color === 'Blue Green' || color === 'Green Blue') {
    return { PrimaryColor: '#5DA9D2', SecondaryColor: '#2ECC71' };
  } else if (color === 'Blue Yellow' || color === 'Yellow Blue') {
    return { PrimaryColor: '#5DA9D2', SecondaryColor: '#F1C40F' };
  } else if (color === 'Blue Purple' || color === 'Purple Blue') {
    return { PrimaryColor: '#5DA9D2', SecondaryColor: '#77377F' };
  }

    else if (color === 'Yellow Green' || color === 'Green Yellow') {
    return { PrimaryColor: '#F1C40F', SecondaryColor: '#2ECC71' };  
  } else if (color === 'Yellow Purple' || color === 'Purple Yellow') {
    return { PrimaryColor: '#F1C40F', SecondaryColor: '#77377F' };  
  }

  else if (color === 'Purple Green' || color === 'Green Purple') {
    return { PrimaryColor: '#77377F', SecondaryColor: '#2ECC71' };  
  }
  else {
    return { PrimaryColor: 'null', SecondaryColor: 'null' };
  }
};

</script>
<h1>Alle One Piece TCG Kaarten</h1>
<ul>
  {#each cards.slice(0, 500) as card, idx}
    <li style="--primary-color: {colorDecider(card.card_color).PrimaryColor}; --secondary-color: {colorDecider(card.card_color).SecondaryColor};">
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
       <p style={`--primary-color: ${colorDecider(card.card_color).PrimaryColor === '#1B2020' ? 'white' : colorDecider(card.card_color).PrimaryColor === '#77377F' ? '#FAADFF' : colorDecider(card.card_color).PrimaryColor === '#5DA9D2' ? '#96DAFF' : colorDecider(card.card_color).PrimaryColor === '#F1C40F' ? '#FFF692' : colorDecider(card.card_color).PrimaryColor === '#5DA9D2' ? '#96DAFF' : colorDecider(card.card_color).PrimaryColor === '#2ECC71' ? '#31D49E' : colorDecider(card.card_color).PrimaryColor === '#D42F34' ? '#FF6C70' : 'inherit'}`}>
        {card.card_set_id} – {card.card_name} ({card.set_name})
      </p>
      <!-- <button onclick={() => increaseAmount(idx)} aria-label="Increase amount">+</button>
      <p>{currentAmounts[idx]}</p>
      <button onclick={() => decreaseAmount(idx)} aria-label="Decrease Amount">-</button> -->
    </li>
  {/each}
</ul>

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

  li::after , li::before{
    content: '';
    position: absolute;
    height: 100%;
        width: 100%;
        background-image: linear-gradient(var(--primary-color), var(--secondary-color));
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        padding: 3px;
        border-radius: 20px;
  }

    li::before {
        filter: blur(1.5rem);
        opacity: 0.5;
        
    }

  li p {
    color: var(--primary-color);
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
    width: 100%;
    position: relative;
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