/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import logoCapivara from "../../assets/Capivara2.png"
import logoSucuri from "../../assets/sucuritransparente.png"
import logoArara from "../../assets/araratransparente.png"
import logoOnca from "../../assets/oncatransparente.png"

export default function PodiumComponent() {
	const housesImages = {
		capivara: logoCapivara,
		sucuri: logoSucuri,
		arara: logoArara,
		onca: logoOnca
	}
	
	return (
		<PodiumContainer>
			<SecondPlaceContainer>
				<img src={housesImages.sucuri} alt='house-logo'/>
				<div>2º</div>
			</SecondPlaceContainer>
			<FirstPlaceContainer>
				<img src={housesImages.capivara} alt='house-logo'/>
				<div>1º</div>
			</FirstPlaceContainer>
			<ThirdPlaceContainer>
				<img src={housesImages.onca} alt='house-logo'/>
				<div>3º</div>
			</ThirdPlaceContainer>
		</PodiumContainer>
	);
}

const PodiumContainer = styled.main`
	width: 95vw;
	height: 35vh;
	display: flex;
	justify-content: space-between;
  overflow: hidden;

	>section{
		padding-top: 8px;
		width: 31%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;

		>img{
			height: 35%;
			border-radius: 100px;
			object-fit: cover;
			margin-bottom: 1%;
			box-shadow: 2px 6px 15px 8px rgba(0,0,0,0.3);
		}

		>div{
			margin-top: 10px;
			border-top-left-radius: 15px;
			border-top-right-radius: 15px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-family: 'Ultra', serif;
			font-size: 40px;
			color: #c5ece9;
		}
	}
`;

const SecondPlaceContainer = styled.section`
	>div{
		background-color: #295854;
		height: 45%;
		width: 100%;
	}
`;

const FirstPlaceContainer = styled.section`
	>div{
		background-color: #214945;
		height: 65%;
		width: 100%;
	}
`;

const ThirdPlaceContainer = styled.section`
	>div{
		background-color: #33706b;
		height: 35%;
		width: 100%;
	}
`;
