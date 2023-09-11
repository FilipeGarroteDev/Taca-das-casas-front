import CreaStripePattern from '../../../components/CreaStripePattern';
import styled from 'styled-components';
import GreetingsHeader from '../../../components/GreetingsHeader';
import OptionsContainer from './OptionsContainer';

export default function AdminRegisterPage() {


  return (
    <MainWrapper>
      <GreetingsHeader/>
        <OptionsContainer />
      <CreaStripePattern position="footer"/>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #eed0d7, #EB5B80, #ffffff);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

`;


