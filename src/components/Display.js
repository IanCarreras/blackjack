import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../actions/actions'

import { DisplayDiv, 
    ScoreContainer,
    Score,
    ButtonContainer, 
    Button 
} from '../assets/styles'

const Display = ({player, computer, winner, actions, deck, deckId}) => {
    return (
        <DisplayDiv>
            <ScoreContainer>
                {winner && <Score>{winner}</Score>}
                <Score>Computer: {computer.score}</Score>
                <Score>Player: {player.score}</Score>
            </ScoreContainer>
            <ButtonContainer>
                {!winner &&
                    <>
                        <Button disabled={player.stand || winner} onClick={() => actions.hit(deck.deck_id, 'player')}>Hit</Button>
                        <Button disabled={player.stand || winner} onClick={() => actions.stand()}>Stand</Button>
                    </>
                }
                
                {winner && <Button onClick={() => actions.dealHand(deckId)}>Next Hand</Button>}
            </ButtonContainer>
        </DisplayDiv>
    )
}

const mapStateToProps = ({ deck, player, winner }) => {
    return { deck, player, winner }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);