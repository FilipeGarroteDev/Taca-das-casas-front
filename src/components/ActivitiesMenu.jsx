/* eslint-disable react/prop-types */
import styled from 'styled-components';

export default function ActivitiesMenu({setSelectedActivityGroup, page}) {

  return (
    <MenuContainer page={page}>
      <div onClick={() => setSelectedActivityGroup("Presença")}>Presença</div>
      <div onClick={() => setSelectedActivityGroup("Engajamento")}>Engajamento</div>
      <div onClick={() => setSelectedActivityGroup("Divulgação")}>Divulgação</div>
    </MenuContainer>
  );
}

const MenuContainer = styled.nav`
  width: 95vw;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  margin-bottom: ${props => props.page === "register" ? "0" : "20px"};
  align-items: center;

    >div {
      box-sizing: border-box;
      width: 31%;
      height: 40px;
      border-radius: 10px;
      box-shadow: 2px 2px 15px 1px rgba(0, 0, 0, 0.5);
      background-color: ${props => props.page === "register" ? "#cee9f8" : "#ffe6e6"};
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
      font-family: 'Amatic SC', cursive;
      font-size: 25px;
      font-weight: 700;
      line-break: auto;
      text-align: center;
      padding: 3px;
  }

  
  

  
`;


