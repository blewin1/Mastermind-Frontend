import styled from 'styled-components'

const CodePeg = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 100px;
    border: 1px outset black;
    color: white;
    background-color: ${props => {
        switch (props.color) {
            case 0:
                return 'red'
            case 1:
                return 'orange'
            case 2:
                return 'yellow'
            case 3:
                return 'green'
            case 4:
                return 'blue'
            case 5:
                return 'black'
            case 6:
                return 'purple'
            case 7:
                return 'lightbrown'
            default:
                return 'brown'
        }
    }};
    ${props => props.clickable ? 'cursor: pointer;' : ''}
    ${props => props.selected ? 'border: 3px outset black' : ''}
`

export default CodePeg
