// Import the fetchJson helper function from the lib folder
import fetchJson from 'lib/JavaScript/fetch-json.js'

export async function load({ url }) {
  // Define the base URL for the API
  const baseURL = "https://optcgapi.com/api/";

  try {
    // Fetch all available card sets from the API
    const allSetsResponse = fetchJson(`${baseURL}/allSets/`)
    // Fetch all cards for each set using Promise.all to run in parallel

    const allCardsArrays = await Promise.all(
      allSetsResponse.map(async (set) =>{
        const setCards = fetchJson(`${baseURL}/sets/${set.set_id}/`)
        return setCards.map(
          c => ({
            ...c,
            set_name: set.set_name}))
      })
    ) 
      
    
    // For each set, get the cards and add the set_name property to each card
    let cards = allCardsArrays.flat()
    .sort((a, b) => a.card_color.localeCompare(b.card_color))
    // Combine all card arrays into one single array using flat()
    // Sort the cards by card_color in alphabetical order

    // Get the card_color query parameter from the URL if it exists
    const cardColor = url.searchParams.get('card_color');
    // If a card_color filter exists, filter the cards array to only show matching cards
if(cardColor){
   cards = cards.filter((c) => c.card_color === 'cardcolor')
}
    // Return the cards array to the page
    return { cards };
  } catch (error) {
    // Log any errors that occur
    console.error("Fout bij ophalen kaarten:", error);
    // Return an empty array if there's an error
    return { cards: [] };
  }
}
