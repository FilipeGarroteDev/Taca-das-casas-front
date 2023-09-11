/* eslint-disable react/prop-types */
import styled from 'styled-components';
import {BiSolidDislike, BiSolidLike} from "react-icons/bi"
import { useState } from 'react';
import ActivityConfirmBox from './ActivityConfirmBox';

export default function ButtonArea({selectedActivities}) {
  const [open, setOpen] = useState(false);
  const [operation, setOperation] = useState("");

  const handleClickOpen = (operation) => {
    setOperation(operation)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    {open ? 
      <ActivityConfirmBox operation={operation} handleClose={handleClose} open={open} selectedActivities={selectedActivities}/> 
      :
      <Container>
        <Button type="validate"  onClick={() => handleClickOpen("validar")} disabled={selectedActivities.length === 0}>
          Validar
          <BiSolidLike/>
        </Button>
        <Button type="invalidate"  onClick={() => handleClickOpen("invalidar")} disabled={selectedActivities.length === 0}>
          Invalidar
          <BiSolidDislike/>
        </Button>
      </Container>
    }
    </>
    
    
  );
}

const Container = styled.main`
margin-top: 40px;
  box-sizing: border-box;
  width: 90vw;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 45%;
  height: 60px;
  border-radius: 20px;
  border: none;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  background-color: ${props => props.type === "validate" ? "#197519" : "#881616"};
  background-color: ${props => props.disabled ? "#585c58" : ""};
  font-size: 22px;
  font-family: "Phudu", cursive;
  font-weight: 500;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding-bottom: 5px;
`


