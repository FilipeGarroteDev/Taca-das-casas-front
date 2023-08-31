/* eslint-disable react/prop-types */
import { Input} from '@mui/joy';
import styled from 'styled-components';

export default function DateInputComponent({handleInput}) {

  return (
    <DateContainer>
      <h1>Insira a data da atividade =)   :</h1>
      <Input
        name='date'
        onChange={handleInput}
        type="date"
        sx={{ width: "95%"}}
      />
    </DateContainer>
  );
}

const DateContainer = styled.section`
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 20px;
  
  h1{
    margin-bottom: 10px;
    font-family: 'Phudu', cursive;
    font-weight: 400;
    font-size: 18px;
    color: #fff
  }
  
`;


