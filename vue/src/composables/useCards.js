// src/composables/useCards.js
import { ref } from 'vue'
import axios from 'axios'

export function useCards() {
  const cards = ref(null)
  const loading = ref(true)
  const error = ref(null)

  const fetchCards = async () => {
    const baseURL = "https://optcgapi.com/api/"
    try {
      // Alle sets ophalen
      const setsRes = await axios.get(`${baseURL}allSets/`)
      const sets = setsRes.data

      // Alle kaarten per set ophalen
      const allCardsArrays = await Promise.all(
        sets.map(async (set) => {
          try {
            const cardsRes = await axios.get(`${baseURL}sets/${set.set_id}/`)
            const setCards = cardsRes.data
            return setCards.map(c => ({ ...c, set_name: set.set_name }))
          } catch (e) {
            console.warn(`Fout bij set ${set.set_id}:`, e)
            return []
          }
        })
      )

      cards.value = allCardsArrays.flat()
    } catch (e) {
      console.error("Fout bij ophalen kaarten:", e)
      error.value = e
    } finally {
      loading.value = false
    }
  }

  return { cards, loading, error, fetchCards }
}
