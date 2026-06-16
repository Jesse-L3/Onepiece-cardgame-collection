// +page.server.js
export async function load({ url }) {
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
        const setCards = await cardsRes.json();

        // note: Hier return ik alle kaarten van alle sets. de map is optioneel. met de map zorg ik ervoor dat ik de set_name toevoeg aan elke kaart. map betekent dat ik een nieuwe array maak met de aangepaste kaarten. en de spread operator (...) zorgt ervoor dat ik alle eigenschappen van de kaart behoud en alleen set_name toevoeg.
        return setCards.map(c => ({ ...c, set_name: set.set_name }));
      })
    );

    let cards = allCardsArrays.flat()
     .sort((a, b) => a.card_color.localeCompare(b.card_color));

    const cardColor = url.searchParams.get("card_color");

    if (cardColor) {
      cards = cards.filter((c) => c.card_color === cardColor);
    }
      

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
