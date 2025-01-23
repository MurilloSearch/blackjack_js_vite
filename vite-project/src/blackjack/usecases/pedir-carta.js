
/**
 * Permite sacar una carta del deck
 * @param {Array<string>} deck Es un arreglo de strings
 * @returns {String} Retorna la carta del deck
 */
export const pedirCarta = (deck) => {

    if (deck.length === 0) {
        throw 'Deck vacio'
    }
    const carta = deck.pop()
    return carta
}