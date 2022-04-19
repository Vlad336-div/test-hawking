import styled from "styled-components"

export const WrapSocial = styled.div`
  width: 100%;
`

export const WrapSocialIcon = styled.div`
  display: flex;
  
  & input {
    position: absolute;
    top: 0;
    opacity: 0;
  }
  
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
  }
`

export const Icon = styled.img<IIcon>`
  opacity: ${props => props.disabled ? '0.3' : '1'};
  width: 30px;
  cursor: pointer;
  transition: all 0.2s;
`