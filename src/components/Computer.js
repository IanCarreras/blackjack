import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../actions/actions'
import {
    Image,
    Back,
    Hand
} from '../assets/styles'

import card from '../assets/playing-card-back.jpg'



const Computer = ({ deck, computer, player, actions, winner }) => {
    useEffect(() => {
        if(player.stand && computer.score < 17) actions.hit(deck.deck_id, 'computer') 
    }, [player.stand, computer.score])

    if (!computer.hand[0]) return <h1>Loading...</h1>

    if (player.stand || winner) return (
        <Hand>
            {
                computer.hand.map((card, indx) => {
                    return <Image
                            key={indx}
                            src={card.image} />
                })
            }
        </Hand>
    )

    return (
        <Hand>
            <Image src={computer.hand[0].image} />
            <Back src={card} alt='card face down' />
        </Hand>
    )
}

const mapStateToProps = ({ deck, computer, player, winner }) => {
    return { deck, computer, player, winner }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Computer);