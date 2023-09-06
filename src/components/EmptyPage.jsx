/* eslint-disable react/prop-types */
import styled from 'styled-components';

export default function EmptyPage({message}) {

  return (
    <Container>
      <span>{message}</span>
    </Container>
  );
}

const Container = styled.nav`
  width: 85vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  border: 1px solid #443e3e;
  padding: 10px;
  border-radius: 20px;

    >span {
      color: #443e3e;
	    font-family: 'Amatic SC', cursive;
	    font-size: 35px;
	    font-weight: 700;
	    line-break: auto;
	    text-align: center;
    }

  
  

  
`;


