import styled from '@emotion/styled'
import cardTable from './card-table-background.jpg'

import Player from '../components/Player'
import Computer from '../components/Computer'

export const AppDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: url(${cardTable});
    background-size: cover;
    padding: 3rem;
`
export const CardTable = styled.div`
    border: 3px solid black;
    border-radius: 3rem;
    padding: 2rem;
    width: 60%;
    background: darkgreen;
`
export const Hand = styled.div`
    border: 2px solid white;
    width: 100%;
    margin: 1.5rem auto;
    text-align: center;
`
export const Image = styled.img`
    height: 15rem;
    margin-left: 1rem;
`
export const Back = styled.img`
    transform: rotate(90deg); 
    height: 10rem;
    position: relative;
    top: -2.5rem;
    left: .5rem;
    border-radius: .5rem;
`
export const Button = styled.button`
    margin: 1rem 0 0 1rem;
    height: 3rem;
    width: 5rem;
    border-radius: .3rem;
    font-size: 1rem;
    :hover {
        cursor: pointer;
        background: black;
        color: white;
    }
`
export const DisplayDiv = styled.div`
    margin: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: .5rem;
    background: black;
    height: 15rem;
    width: 15rem;
`
export const ScoreContainer = styled.div`
    height: 15rem;
`
export const Score = styled.h2`
    color: white;
`