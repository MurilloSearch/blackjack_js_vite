
/**
 * Retorna el valor de una carta determinada
 * @param {String} carta Tipo de carta
 * @returns {Number} Valor de la carta
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1)
    let puntos = isNaN(valor) ? valor === 'A' ? 11 : 10 : valor * 1
    return puntos
}