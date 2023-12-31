import CreaStripePattern from '../../components/CreaStripePattern';
import styled from 'styled-components';
import GreetingsHeader from '../../components/GreetingsHeader';
import { userActivities } from '../../../mock';
import EmptyPage from '../../components/EmptyPage';
import ScoreContainer from './ScoreContainer';

export default function HistoryPage() {

	return (
		<MainWrapper>
			<GreetingsHeader color="#006fab"/>
			<h1>Quadro de Pontos</h1>		
			{userActivities.length === 0 ? 
				<EmptyPage border message="Você ainda não possui atividades registradas. Corre lá na seção de registro e ajude sua Casa!! :)" /> 
				: 
				<ScoreContainer activities={userActivities}/>
			}
			<CreaStripePattern position="footer" />
		</MainWrapper>
	);
}

const MainWrapper = styled.main`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(to bottom, #e7f4fc, #006fab, #ffffff);
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

  >section{
    width: 100%;
    height: 75vh;
    display: flex;
    justify-content: center;
    overflow-y: scroll;
    margin-bottom: 30px;
  }

	>h1 {
		color: #000;
    font-family: 'Amatic SC', cursive;
    font-size: 40px;
    font-weight: 700;
    line-break: auto;
    text-align: center;
		margin-top: 60px;
	}
`;
