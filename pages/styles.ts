import styled from "styled-components"

export const WrapApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  
  &>div {
    width: 400px;
    &>div {
      width: 100%;
    }
  }
`