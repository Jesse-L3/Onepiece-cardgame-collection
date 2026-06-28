import fetchJson from '$lib/JavaScript/fetch-json.js';

export async function load({ url }) {
  const baseURL = "https://optcgapi.com/api/";

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

    let cards = allCardsArrays.flat()
      .sort((a, b) => a.card_color.localeCompare(b.card_color));

    const cardColor = url.searchParams.get("card_color");

    if (cardColor) {
      cards = cards.filter((c) => c.card_color === cardColor);
    }

    return { cards };
  } catch (error) {
    console.error("Fout bij ophalen kaarten:", error);
    return { cards: [] };
  }
}