import React from 'react'
import { connect } from 'react-redux'
import Hand from './Hand'

import { 
    HandDiv,
    Image
} from '../assets/styles'

const Player = ({ player }) => {
    return <Hand char={player} />
}

const mapStateToProps = ({ player }) => {
    return { player }
}

export default connect(mapStateToProps)(Player);