import styled from 'styled-components'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'magenta', 'white']

const CodePeg = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 100px;
    border: 1px outset black;
    color: white;
    font-weight: bold;
    align-self: center;
    justify-self: center;
    background-color: ${props => colors[props.color]};
    ${props => props.color === -1 ? 'background-color: brown' : ''};
    ${props => props.color === null ? 'height: 12px; width: 12px; background-color: brown;' : ''}
    ${ props => props.clickable ? 'cursor: pointer;' : ''}
    ${ props => props.selected ? 'border: 6px double black' : ''}
`

export default CodePeg
