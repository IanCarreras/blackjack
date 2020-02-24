import { statement } from "@babel/template";

const cardValues = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'KING': 10,
    'QUEEN': 10,
    'JACK': 10,
    'ACE': 11
}

export const cardValue = (value) => {
    return cardValues[value]
}

export const handValue = (hand) => {
    let score = 0
    hand.forEach(card => score += cardValue(card.value))
    return score
}

export const winner = (player, computer) => {
    let winner = ''
    // if(player <= 21 && player > computer || computer > 21) winner = 'Player wins'

    if(computer <= 21 && computer > player || player > 21) {
        winner = 'Computer wins'
    } else if(player === computer) {
        winner = 'Draw'
    } else {
        winner = 'Player wins'
    }
    return winner
}

export const hitSuccessState= (char, state, payload) => {
    return {
        ...state,
        [char]: {
            ...state[char],
            score: handValue([...state[char].hand, payload.cards[0]]),
            hand: [...state[char].hand, payload.cards[0]]
        }
    }
}