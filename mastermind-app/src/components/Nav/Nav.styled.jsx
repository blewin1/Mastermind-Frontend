import styled from 'styled-components'

export default styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    background-color: brown;

    @media (max-width: 470px) {
        h1{
            font-size: 20px;
        };
      }
`