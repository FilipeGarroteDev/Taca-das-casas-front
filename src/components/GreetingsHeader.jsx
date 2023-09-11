/* eslint-disable react/prop-types */
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import {ImExit} from "react-icons/im"
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function GreetingsHeader({isHomePage, isAdmin, color}) {
  const user = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate();

  return (
    <HeadersWrapper>
      {isHomePage 
        ? 
          <ImExit size="32px" color='#410a0a' onClick={() => {
            localStorage.clear();
            navigate("/signin")
          }}/> 
        : 
          <BsFillArrowLeftCircleFill size="28px" color={color} onClick={() => isAdmin ? navigate("/admin") : navigate("/")}/>
      }
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


