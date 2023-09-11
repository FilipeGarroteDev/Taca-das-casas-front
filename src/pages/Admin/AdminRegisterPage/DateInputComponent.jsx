/* eslint-disable react/prop-types */
import { DatePicker, LocalizationProvider, ptBR } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import styled from 'styled-components';

export default function DateInputComponent({setSelectedDate}) {
  const brasilLocale = ptBR.components.MuiLocalizationProvider.defaultProps.localeText;

  return (
    <DateContainer>
      <LocalizationProvider dateAdapter={AdapterDayjs} localeText={brasilLocale}>
        <DatePicker
          label="Selecione a data da atividade"
          format='DD/MM/YYYY'
          onChange={(newValue) => setSelectedDate(dayjs(newValue).format("DD/MM/YYYY"))}
          sx={{ color: 'secundary.main' }}
        />
      </LocalizationProvider>
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


