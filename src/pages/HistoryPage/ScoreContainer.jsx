/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { BsFillXCircleFill, BsFillCheckCircleFill } from "react-icons/bs"
import { BiSolidTimeFive } from "react-icons/bi"
import { Pagination } from '@mui/material';

export default function ScoreContainer({activities}) {
	
	return (
		<Container>
			<ScoreLine/>
			{activities.map((activity) => <ScoreLine key={activity.id} activity={activity}/>)}
			<div>
				<Pagination count={10} variant="outlined" color="primary" size='small'/>
			</div>
		</Container>
	);
}

function ScoreLine({ activity }) {
	const icon = () => {
		switch(activity.status){
			case "pending":
				return <BiSolidTimeFive color='#DAA520'/>;
			case "success":
				return <BsFillCheckCircleFill color='#228B22'/>;
			default:
				return <BsFillXCircleFill color='#b22222'/>
		}
	}

	const isHeader = !activity

	return (
		<Line isHeader={isHeader}>
			<p>{isHeader ? "Atividade" : activity.activity}</p>
			<strong>{isHeader ? "Pts" : activity.pts}</strong>
			<span>{isHeader ? "Data" : activity.created_at.split("/").slice(0,2).join("/")}</span>
			<h6>{isHeader ? "Status" : icon()}</h6>
		</Line>
	);
}

const Container = styled.main`
	width: 95vw;
	height: 70vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	border-radius: 20px;
  overflow: hidden;
  margin-top: 30px;
	box-sizing: border-box;
	padding: 10px;
	background-color: #ffffff;
	position: relative;

	>div {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		position: absolute;
		bottom: 15px;
		left: 0;
	}
`;

const Line = styled.section`
	box-sizing: border-box;
	width: 100%;
	height: auto;
	max-height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Phudu', cursive;
	font-size: ${props => props.isHeader ? "1.3rem" : "1.1rem"};
	margin-bottom: ${props => props.isHeader ? "18px" : "8px"};
	

	>p{
		width: 40%;
		font-weight: 300;
		padding-left: 5px;
		font-weight: ${props => props.isHeader ? "500" : "300"};
		text-align: ${props => props.isHeader ? "center" : "none"};
	}

	>strong{
		width: 20%;
		font-weight: 300;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 500;
	}

	>span{
		width: 20%;
		font-weight: 300;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: ${props => props.isHeader ? "500" : "300"};
	}

	>h6{
		width: 20%;
		font-weight: 300;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: ${props => props.isHeader ? "500" : "300"};
	}
`;
