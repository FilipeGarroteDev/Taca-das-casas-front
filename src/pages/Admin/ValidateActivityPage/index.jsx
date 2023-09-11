import CreaStripePattern from '../../../components/CreaStripePattern';
import styled from 'styled-components';
import GreetingsHeader from '../../../components/GreetingsHeader';
import { useEffect, useState } from 'react';
import { userActivities } from '../../../../mock';
import PendingActivitiesContainer from './PendingActivitiesContainer';
import ButtonArea from './ButtonArea';

export default function ValidateActivityPage() {
  const [allPendingActivities, setAllPendingActivities] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  console.log(allPendingActivities)

  useEffect(() => { 
    setAllPendingActivities(userActivities.filter(activities => activities.status === "pending"));
  }, [])

  return (
    <MainWrapper hasNewActivities={allPendingActivities.length > 0}>
      <GreetingsHeader isAdmin color="#805592"/>
      <PendingActivitiesContainer activities={allPendingActivities} selectedActivities={selectedActivities} setSelectedActivities={setSelectedActivities}/>
      <ButtonArea selectedActivities={selectedActivities}/>
      <CreaStripePattern position="footer"/>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #e9cff5, #805592, #ffffff);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 90px;

  >svg{
    font-size: 56px;
    color: #ceb31d;
    margin-bottom: -15px;
    filter: drop-shadow(2px 2px 20px #000)
  }

  >img{
    width: 50%;
    height: 30%;
    margin-bottom: 30px;
    filter: drop-shadow(2px 2px 20px #000)
  }

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
      background-color: #b9b4b4;
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
      position: relative;

      >div{
        position: absolute;
        top: -10px;
        right: -10px;
        width: 20%;
        height: 36%;
        background-color: crimson;
        border-radius: 50px;
        color: #fff;
        font-size: 25px;
        font-weight: 700;
        font-family: "Phudu", cursive;
        display: ${props => props.hasNewActivities ? "flex" : "none"};
        align-items: center;
        justify-content: center;
        box-shadow: 2px 2px 15px 1px rgba(0, 0, 0, 0.5);
      }
  }
  }

  
  

  
`;


