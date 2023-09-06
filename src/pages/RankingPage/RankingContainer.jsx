/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import PodiumComponent from './PodiumComponent';
import HouseRankingList from './HouseRankingList';

export default function RankingContainer() {
	
	return (
		<Container>
			<PodiumComponent />
			<HouseRankingList />
		</Container>
	);
}

const Container = styled.main`
	width: 95vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
  overflow: hidden;
  margin-top: 15px;
`;
