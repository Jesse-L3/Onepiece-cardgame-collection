<script>
import { onMounted } from 'vue'
import { useCards } from './composables/useCards'
import {lifecycleLoggerMixin} from "@/mixins/lifecycleLoggerMixin";

export default {
    name: 'Home',
    mixins: [lifecycleLoggerMixin]
}

const { cards, loading, error, fetchCards } = useCards()

onMounted(() => {
  fetchCards()
})
</script>

<template>
  <h1>Alle One Piece TCG Kaarten</h1>
  <div>
    <p v-if="loading">Laden...</p>
    <p v-if="error">Fout: {{ error.message }}</p>

    <ul v-if="!loading && !error">
      <li v-for="card in cards" :key="card.card_id">
        <div>
          <picture>
            <source :srcset="card.card_image" type="image/webp" />
            <source :srcset="card.card_image" type="image/jpeg" />
            <img :src="card.card_image" :alt="card.card_name" loading="lazy" width="200" />
          </picture>
          <div class="hover-blocks">
            <div
              v-for="index in 9"
              :key="index"
              class="hover-block"
              :class="'number' + (index - 1)"
              :data-index="index - 1"
            ></div>
          </div>
        </div>
        <p>{{ card.card_set_id }} – {{ card.card_name }} ({{ card.set_name }})</p>
      </li>
    </ul>
  </div>
</template>

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
