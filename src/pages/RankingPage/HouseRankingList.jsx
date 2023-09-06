/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import styled from 'styled-components';

export default function HouseRankingList() {
	
	return (
		<Container>
			<Line>
				<strong>1º</strong>
				<span>Capivara</span>
				<h6>1563 pts</h6>
			</Line>
			<Line>
				<strong>2º</strong>
				<span>Sucuri</span>
				<h6>987 pts</h6>
			</Line>
			<Line>
				<strong>3º</strong>
				<span>Onça Pintada</span>
				<h6>86 pts</h6>
			</Line>
			<Line>
				<strong>4º</strong>
				<span>Arara Azul</span>
				<h6>7 pts</h6>
			</Line>
		</Container>
	);
}

const Container = styled.main`
	width: 95vw;
	height: 50vh;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	box-sizing: border-box;
	margin-top: -10px;
	background-color: #c5ece9;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

const Line = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 20px;
	align-items: center;
	height: 60px;

	&:nth-of-type(odd){
		background-color: #a3ccc9;
	}

	>strong{
		font-family: 'Ultra', serif;
		font-size: 26px;
		width: 25%;
	}

	>span{
		width: 50%;
		font-family: 'Phudu', cursive;
		font-weight: 700;
		font-size: 20px;
	}

	>h6{
		width: 25%;
		font-family: 'Phudu', cursive;
		font-size: 18px;
		font-weight: 700;
		display: flex;
		justify-content: flex-end;
	}
`
