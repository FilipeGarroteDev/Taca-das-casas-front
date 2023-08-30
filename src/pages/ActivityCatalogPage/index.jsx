import CreaStripePattern from '../../components/CreaStripePattern';
import styled from 'styled-components';
import GreetingsHeader from '../../components/GreetingsHeader';
import ActivitiesMenu from './ActivitiesMenu';
import { useState } from 'react';
import ActivitiesContainer from './ActivitiesContainer';

export default function ActivityCatalogPage() {
  const [selectedActivityGroup, setSelectedActivityGroup] = useState("Presença")

  return (
    <MainWrapper>
      <GreetingsHeader/>
      <ActivitiesMenu setSelectedActivityGroup={setSelectedActivityGroup}/>
      <ActivitiesContainer selectedActivityGroup={selectedActivityGroup}/>
      <CreaStripePattern position="footer"/>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #eec7ff, #805592, #ffffff);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
`;


