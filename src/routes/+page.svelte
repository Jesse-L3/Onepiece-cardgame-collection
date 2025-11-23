<script>
  import {CardList, Hero} from '$lib/index.js';
  let { data } = $props();
  let cards = data.cards;

  // console.log(cards);

</script>

<Hero />
<CardList {cards}/>