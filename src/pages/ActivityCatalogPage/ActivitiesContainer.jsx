/* eslint-disable react/prop-types */
import styled from 'styled-components';

const activities = {
  Presença: [
    {id: 1, activity: "Presença Sábado", pts: 3},
    {id: 2, activity: "Remoto presente no sábado", pts: 4},
    {id: 3, activity: "Resolveu caos / problema", pts: 3},
    {id: 4, activity: "Arrumação das salas", pts: 2},
    {id: 5, activity: "Falta sem aviso", pts: -3},
    {id: 6, activity: "Saída do projeto", pts: -5},
  ],
  Engajamento: [
    {id: 1, activity: "Reuniões gerais/Planejamento", pts: 3},
    {id: 2, activity: "Reuniões de equipe", pts: 2},
    {id: 3, activity: "Grupo de trabalho", pts: 3},
    {id: 4, activity: "Presença na Integração", pts: 4},
    {id: 5, activity: "Ações externas", pts: 4},
    {id: 6, activity: "Visitou escola durante a semana", pts: 5},
    {id: 7, activity: "Preencheu painel", pts: 2},
    {id: 8, activity: "Preencheu relatório de aula", pts: 2},
    {id: 9, activity: "Leu e-mail da semana", pts: 2},
    {id: 10, activity: "Respondeu formulário", pts: 3},
  ],
  Divulgação: [
    {id: 1, activity: "Publicação no IG/FB/TikTok (feed/reels)", pts: 2},
    {id: 2, activity: "Publicação no IG/FB (stories)", pts: 1},
    {id: 3, activity: "Publicação no LinkedIn", pts: 2},
    {id: 4, activity: "Incluiu o @ na bio do IG/FB", pts: 2},
    {id: 5, activity: "Incluiu cargo no LinkedIn", pts: 2},
    {id: 6, activity: "Conversão novo voluntário", pts: 5},
    {id: 7, activity: "Conversão novo multiplicador", pts: 10},
  ]
}

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


