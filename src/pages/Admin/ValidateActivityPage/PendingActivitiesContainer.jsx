/* eslint-disable react/prop-types */
import { Checkbox } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import {GrValidate} from "react-icons/gr"
import EmptyPage from '../../../components/EmptyPage';

export default function PendingActivitiesContainer({activities, selectedActivities, setSelectedActivities}) {

  return (
    <Container>
      <Line />
      {activities.length === 0 ? <EmptyPage message="Tudo em ordem. Nenhuma atividade aguardando validação. :)"/> : activities.map(activity => <Line key={activity.id} activity={activity} selectedActivities={selectedActivities} setSelectedActivities={setSelectedActivities}/> )}
    </Container>
  );
}


function Line({activity, setSelectedActivities, selectedActivities}) {
  const [isChecked, setIsChecked] = useState(false);
  const isHeader = !activity;
  console.log(activity)

  function handleCheck(e){
    if(!isChecked){
      setSelectedActivities([...selectedActivities, e.target.value]);
      setIsChecked(true);
    } else {
      const supportArray = selectedActivities
      const index = supportArray.findIndex(id => id === e.target.value);
      supportArray.splice(index, 1)
      setSelectedActivities([...supportArray]);
      setIsChecked(false)
    }
  }

  return (
    <LineLayout isHeader={isHeader}>
      <h1>{isHeader ? "Voluntário" : activity.volunteer.split("@")[0]}</h1>
      <h2>{isHeader ? "Atividade" : activity.activity}</h2>
      <h3>{isHeader ? "Data" : activity.created_at.split("/").slice(0,2).join("/")}</h3>
      <span>
        {isHeader ? <GrValidate/> : <Checkbox color="secondary" value={activity.id} onChange={handleCheck}/>}
      </span>
    </LineLayout>
  )
}

const Container = styled.main`
  box-sizing: border-box;
  width: 95vw;
  height: 60vh;
  background-color: #fff;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
`;

const LineLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
  height: 50px;
  font-family: "Phudu", cursive;
  font-weight: ${props => props.isHeader ? 700 : 400};

  >h1{
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: flex-start
  }
  >h2{
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: flex-start
  }
  >h3{
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: flex-start
  }
  >span{
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: ${props => props.isHeader ? "center" : "flex-start"};
  }

`


