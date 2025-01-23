import _ from 'underscore'

/**
 * Crea un nuevo deck
 * @param {Array<string>} tipoDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<string>} Retorna nuevo deck de cartas
 */
 export const crearDeck = (tipoDeCarta,tiposEspeciales) => {

    if(!tipoDeCarta || tipoDeCarta.length === 0) throw new Error('TiposDeCarta es obligatorio');

    if(!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('TiposEspeciales es obligatorio');


    let deck = []

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipoDeCarta) {
            deck.push(i + tipo)
        }
    }

    for (let especial of tiposEspeciales) {
        for (let tipo of tipoDeCarta) {
            deck.push(especial + tipo)
        }
    }

    deck = _.shuffle(deck)
    return deck
}

