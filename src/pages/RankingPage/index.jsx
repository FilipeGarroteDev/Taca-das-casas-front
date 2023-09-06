import CreaStripePattern from '../../components/CreaStripePattern';
import styled from 'styled-components';
import GreetingsHeader from '../../components/GreetingsHeader';
import RankingContainer from './RankingContainer';

export default function RankingPage() {

	return (
		<MainWrapper>
			<GreetingsHeader />
			<h1>Segue o Líder</h1>
			<RankingContainer />
			<CreaStripePattern position="footer" />
		</MainWrapper>
	);
}

const MainWrapper = styled.main`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(to bottom, #d9fffb, #53938d, #ffffff);
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
    font-size: 60px;
    font-weight: 700;
    line-break: auto;
    text-align: center;
		margin-top: 60px;
	}
`;
