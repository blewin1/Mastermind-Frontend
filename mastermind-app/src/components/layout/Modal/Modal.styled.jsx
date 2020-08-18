import styled from 'styled-components'

export default styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 50;
    
    div {
        background-color: white;
        color: black;
        padding: 10px;
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        #close-modal {
            align-self: start;
        }
    }
`