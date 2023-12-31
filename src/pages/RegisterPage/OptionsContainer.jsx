/* eslint-disable react-hooks/exhaustive-deps */
import { FormControl, FormLabel, Radio, RadioGroup } from '@mui/joy';
import styled from 'styled-components';
import { activities, userActivities } from '../../../mock';
import ActivitiesMenu from '../../components/ActivitiesMenu';
import { useEffect, useState } from 'react';
import DateInputComponent from './DateInputComponent';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function OptionsContainer() {
  const [selectedActivityGroup,setSelectedActivityGroup] = useState("Presença")
  const [activityData, setActivityData] = useState({});
  const [selectedDate, setSelectedDate] = useState("");
  const user = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate()
  console.log(activityData)

  const allFieldsFilled = activityData.activity && activityData.created_at
  
  useEffect(() => {
    setActivityData({
      ...activityData,
      created_at: selectedDate,
    });
  }, [selectedDate])

  function handleInput(e) {
    setActivityData({
      ...activityData,
      [e.target.name]: e.target.value,
    });
  }

  function sendActivity() {
    userActivities.push({
      id: (Math.random()*100000).toFixed(0),
      userId: user.id,
      volunteer: user.email,
      activity: activityData.activity.split(" = ")[0],
      pts: Number(activityData.activity.split(" = ")[1].split(" ")[0]),
      status: "pending",
      created_at: activityData.created_at
    })
    toast.success("Sua atividade foi registrada com sucesso! :)")
    navigate("/")
    console.log(userActivities)
  }

  return (
    <>
    <ActivitiesMenu page="register" setSelectedActivityGroup={setSelectedActivityGroup}/>
    <Container>
      <FormControl>
        <FormLabel><strong>{selectedActivityGroup}</strong></FormLabel>
        <RadioGroup defaultValue="outlined" name="radio-buttons-group">
          {activities[selectedActivityGroup].map(({activity, pts}) => {
            return (
              <Radio 
                key={activity.id}
                name="activity"
                value={`${activity} = ${pts} pts`}
                label={`${activity} = ${pts} pts`} 
                variant="outlined" 
                color="danger"
                onChange={handleInput}
              />
            )
          })}
        </RadioGroup>      
      </FormControl>
    </Container>
    <DateInputComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
    <RegisterButton onClick={() => sendActivity()} disabled={!allFieldsFilled} isDisabled={!allFieldsFilled}>Registrar atividade</RegisterButton>
    </>
  );
}

const Container = styled.section`
  box-sizing: border-box;
  width: 95%;
  height: auto;
  max-height: 60%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 20px;
  border-radius: 15px;
  background-color: #fff;
  overflow-x: auto;
  overflow-y: auto;
  
  strong{
    font-family: 'Phudu', cursive;
    font-weight: 400;
    font-size: 24px;
  }
`;

const RegisterButton = styled.button`
  border: none;
  width: 50%;
  height: 50px;
  margin-top: 10px;
  background-color: ${props => props.isDisabled ? "#c3c3c3" : "#c74666"};
  border-radius: 19px;
  box-shadow: 2px 2px 15px 1px rgba(0, 0, 0, 0.5);
  color: #fff;
  font-family: 'Phudu', cursive;
  font-weight: 400;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

`


