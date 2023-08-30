import styled from 'styled-components';

export default function GreetingsHeader() {
  const user = JSON.parse(localStorage.getItem("user"))
  return (
    <HeadersWrapper>
      <h1>Olá, {user.name}</h1>
      <h1>Meus Pontos: 50</h1>
    </HeadersWrapper>
  );
}



const HeadersWrapper = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  >h1 {
    font-family: 'Amatic SC', cursive;
    font-size: 25px;
    font-weight: 700;
  }

`;


