import styled from '@emotion/styled'
import cardTable from './card-table-background.jpg'

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
    width: 100%;
    margin: 1.5rem auto;
    text-align: center;
`
export const Image = styled.img`
    height: 15rem;
    margin-left: -5rem;
`
export const Back = styled.img`
    transform: rotate(90deg); 
    height: 10rem;
    position: relative;
    top: -2.5rem;
    left: .5rem;
    border-radius: .5rem;
`
export const ButtonContainer = styled.div`
    width: 100%;
    height: 40%;
    text-align: center;
`
export const Button = styled.button(props => ({
    margin: '2rem .5rem',
    height: '3rem',
    width: '5rem',
    borderRadius: '.3rem',
    fontSize: '1rem',
    fontWeight: '5',
    mozBoxShadow: '.2rem .2rem .1rem #ccc',
    webkitBoxShadow: '.2rem .2rem .1rem #ccc',
    boxShadow: '.2rem .2rem .1rem #ccc',
    [`:hover`]: !props.disabled && {
        cursor: 'pointer',
        background: 'black',
        color: 'white',
        mozBoxShadow: 'none',
        webkitBoxShadow: 'none',
        boxShadow: 'none'
    }
}))

export const DisplayDiv = styled.div`
    margin: 7rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: .5rem;
    background: white;
    height: 25rem;
    width: 25rem;
`
export const ScoreContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Score = styled.h2`
    color: black;
`