/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { activities } from '../../../mock';

export default function ActivitiesContainer({selectedActivityGroup}) {

  return (
    <Container>
      <ActivitySide>
        <TableHeader>Atividade</TableHeader>
        {!activities ? null : activities[selectedActivityGroup].map(({activity, id}) => {
          return (<ActivityLine value={activity} side="activity" key={id}/>)
        })}
      </ActivitySide>
      <ScoreSide>
        <TableHeader>Pts</TableHeader>
        {!activities ? null : activities[selectedActivityGroup].map(({pts, id}) => {
          return (<ActivityLine value={pts} side="score" key={id}/>)
        })}
      </ScoreSide>
    </Container>
  );
}

function ActivityLine({value, side}) {


  return (
    <Line side={side}>
      <span>{value}</span>
    </Line>
  );
}

const Container = styled.main`
  width: 95vw;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  border-radius: 20px;
  overflow: hidden;
`;

const ActivitySide = styled.section`
  width: 72%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

const ScoreSide = styled.section`
  width: 25%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

const TableHeader = styled.section`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7c4b91;
  color: #fff;
  font-family: 'Amatic SC', cursive;
  font-size: 40px;
  font-weight: 700;
  line-break: auto;
  text-align: center;
`;

const Line = styled.section`
  box-sizing: border-box;
  border: 1px solid #e5adb6;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  padding: 5px;
  align-items: center;
  text-align: center;
  background-color: #ffc0cb;
  font-family: 'Phudu', cursive;
  font-size: ${props => props.side === "score" ? "1.4rem" : "1.2rem"};
  font-weight: ${props => props.side === "score" ? "500" : "400"};
`;


