import styled from 'styled-components'

const KeyPeg = styled.div`
    height: 8px;
    width: 8px;
    border-radius: 100px;
    border: 1px outset black;
    background-color: ${props => {
        switch (props.type) {
            case 2:
                return 'black'
            case 1:
                return 'white'
            default:
                return 'brown'
        }
    }};
`

export default KeyPeg
