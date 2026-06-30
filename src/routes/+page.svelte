<script>
let { data } = $props();
const cards  = $derived(data.cards);

import { CardList } from '$lib/index.js';
  import Filter from '../lib/page-components/Filter.svelte';
</script>

<Filter name='n'/>
<CardList cards={cards} />
