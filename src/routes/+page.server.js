import fetchJson from '$lib/JavaScript/fetch-json.js';

export async function load({ url }) {
  const baseURL = "https://optcgapi.com/api/";
  let cardName = url.searchParams.get('n') ?? '';
    console.log("Load:", url.search);

  try {
    // Alle sets ophalen
    const sets = await fetchJson(`${baseURL}allSets/`);

    // Alle kaarten per set ophalen
    const allCardsArrays = await Promise.all(
      sets.map(async (set) => {
        const setCards = await fetchJson(`${baseURL}sets/${set.set_id}/`);
        return setCards.map(c => ({ ...c, set_name: set.set_name }));
      })
    );

    let cards = allCardsArrays.flat();

    if (cardName) {
      cards = cards.filter(card => card.card_name.toLowerCase().includes(cardName.toLowerCase()));
    }

    // Fisher-Yates shuffle so order is random each page load
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    cards = shuffle(cards);

    return { cards, search: cardName };
  } catch (error) {
    console.error("Fout bij ophalen kaarten:", error);
    return { cards: [], searchParams: cardName };
  }
}