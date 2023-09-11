/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';
import { users } from '../../../../mock';
import { useState } from 'react';

export default function SelectVolunteerComponent({handleInput}) {
  const [currentUser, setCurrentUser] = useState("");

  function handleDropDown(e) {
    setCurrentUser(e.target.value)
    handleInput(e)
  }

  return (
    <Container>
      <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{width: "95vw", borderColor: "#000"}}>
        <InputLabel id="demo-simple-select-label">Selecione o Voluntário</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentUser}
          name="volunteer"
          label="Selecione o Voluntário"
          onChange={handleDropDown}
        >
          {users.map(user => <MenuItem key={user.id} name="volunteer" value={user.email}>{user.name}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
    </Container>
  );
}

const Container = styled.section`
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 8px;
  
  h1{
    margin-bottom: 10px;
    font-family: 'Phudu', cursive;
    font-weight: 400;
    font-size: 18px;
    color: #fff
  }
  
`;


