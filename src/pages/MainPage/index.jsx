import CreaStripePattern from '../../components/CreaStripePattern';
import styled from 'styled-components';
import GreetingsHeader from '../../components/GreetingsHeader';
import { useNavigate } from 'react-router';

export default function MainPage() {
  const navigate = useNavigate()


  return (
    <MainWrapper>
      <GreetingsHeader/>
      <section>
        <div onClick={() => navigate("/register")}>Registrar atividade</div>
        <div onClick={() => navigate("/history")}>Meu Histórico</div>
        <div onClick={() => navigate("/activities")}>Catálogo da Pontuação</div>
        <div onClick={() => navigate("/ranking")}>Ranking das Casas</div>
      </section>
      <CreaStripePattern position="footer"/>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #fdd975, #fcc325, #ffffff);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  >section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;

    >div {
      box-sizing: border-box;
      width: 160px;
      height: 100px;
      border-radius: 18px;
      box-shadow: 2px 2px 15px 1px rgba(0, 0, 0, 0.5);
      background-color: #807c7c;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
      font-family: 'Amatic SC', cursive;
      font-size: 40px;
      font-weight: 700;
      line-break: auto;
      text-align: center;
      padding: 3px;
  }
  }

  
  

  
`;


