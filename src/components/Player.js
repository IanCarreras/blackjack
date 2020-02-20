import React from 'react'
import { connect } from 'react-redux'

import { 
    Hand,
    Image
} from '../assets/styles'

const Player = ({ player }) => {
    if (!player.hand[0]) return <h1>Loading...</h1>
    return (
        <Hand>
            {
                player.hand.map((card, indx) => {
                    return <Image
                            key={indx}
                            src={card.image} />
                })
            }
        </Hand>
    )
}

const mapStateToProps = ({ player }) => {
    return { player }
}

export default connect(mapStateToProps)(Player);