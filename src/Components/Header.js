import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  width:100%;
  height:100px;
  margin:auto;
  background-color: #000;
  font-family: 'Varela Round', sans-serif;
  color:#fff;
  display:flex;
  align-self:center;
  justify-content: center;
  h1 {
    font-size:40px;
  }
`

function Header(props) {
  return (
    <Wrapper>
      <h1>{props.titulo}</h1>
    </Wrapper>
  );
}

export default Header;