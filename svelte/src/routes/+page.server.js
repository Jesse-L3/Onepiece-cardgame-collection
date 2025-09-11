// +page.server.js
export async function load() {
  const baseURL = "https://optcgapi.com/api/";

  try {
    // Alle sets ophalen
    const setsRes = await fetch(`${baseURL}allSets/`);
    if (!setsRes.ok) throw new Error(`Failed to fetch sets: ${setsRes.status}`);
    const sets = await setsRes.json();

    // Alle kaarten per set ophalen
    const allCardsArrays = await Promise.all(
      sets.map(async (set) => {
        const cardsRes = await fetch(`${baseURL}sets/${set.set_id}/`);
        if (!cardsRes.ok) throw new Error(`Failed to fetch set ${set.set_id}`);
      //   if (!cardsRes.ok) {
      //     console.warn(`Geen gele kaarten in set ${set.set_id}`);
      //   return [];
      // }
        const setCards = await cardsRes.json();

        return setCards.map(c => ({ ...c, set_name: set.set_name }));
      })
    );

    const cards = allCardsArrays.flat();

    return {
      cards
    };
  } catch (error) {
    console.error("Fout bij ophalen kaarten:", error);
    return {
      cards: []
    };
  }
}
