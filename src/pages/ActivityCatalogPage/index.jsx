import CreaStripePattern from '../../components/CreaStripePattern';
import styled from 'styled-components';
import GreetingsHeader from '../../components/GreetingsHeader';
import ActivitiesMenu from '../../components/ActivitiesMenu';
import { useState } from 'react';
import ActivitiesContainer from './ActivitiesContainer';

export default function ActivityCatalogPage() {
	const [selectedActivityGroup, setSelectedActivityGroup] =
		useState('Presença');

	return (
		<MainWrapper>
			<GreetingsHeader />
			<ActivitiesMenu setSelectedActivityGroup={setSelectedActivityGroup} />
			<section>
				<ActivitiesContainer selectedActivityGroup={selectedActivityGroup} />
			</section>
			<CreaStripePattern position="footer" />
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

  >section{
    width: 100%;
    height: 75vh;
    display: flex;
    justify-content: center;
    overflow-y: scroll;
    margin-bottom: 30px;
  }
`;
