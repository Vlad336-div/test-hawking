import styled from "styled-components"

export const WrapCountRate = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100% !important;
  display: flex;
  justify-content: center;
  background: #2980b9;
  padding: 30px 0;
  
  & div {
    color: #fff;
    text-align: center;
    
    & span {
      font-weight: 700;
    }
  }
`