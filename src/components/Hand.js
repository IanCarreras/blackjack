import React from 'react'
import { connect } from 'react-redux'

import {
    HandDiv,
    Image
} from '../assets/styles'

const Hand = ({char}) => {
    if (!char.hand[0]) return <h1>Loading...</h1>
    return (
        <HandDiv>
        {
            char.hand.map((card, indx) => {
                return <Image
                        key={indx}
                        src={card.image} />
            })
        }
        </HandDiv>
    )
}

export default Hand