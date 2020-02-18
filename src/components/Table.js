import React from 'react'
import { CardTable } from '../assets/styles'

import Computer from './Computer'
import Player from './Player'

const Table = ({actions}) => {
    return (
      <CardTable>
        <Computer />
        <Player />
      </CardTable>
    );
}

export default Table