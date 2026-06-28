<script>
let { data } = $props();
const cards  = data.cards;

import { CardList } from '$lib/index.js';
</script>


<CardList cards={cards} />
