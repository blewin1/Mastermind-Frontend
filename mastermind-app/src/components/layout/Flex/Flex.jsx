import React from 'react'
import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justifyContent || 'center'};
`

export default Flex
