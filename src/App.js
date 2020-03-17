import React from 'react';
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'
import Cadastro from './Components/CadastroOperacao';
import Header from './Components/Header';

const GlobalStyle = createGlobalStyle`
  body{
    width:900px;
    margin:auto;
    margin-top:5px;
  }
`
const Wrapper = styled.div`
  width:100%;
  height:100vh;
  min-height:600px;
  margin:auto;
`


function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header titulo={'Cadastro de Operação'} />
      <Cadastro />
    </Wrapper>
  );
}

export default App;
