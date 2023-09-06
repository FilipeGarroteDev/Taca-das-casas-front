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

const users = [
  {
    id: 1,
    name: "Taís de Paiva",
    email: "taisdepaiva@gmail.com",
    password: "123456",
    house: "Capivara",
    department: "Estratégia",
    role: "volunteer"
  },
  {
    id: 2,
    name: "Filipe Garrote",
    email: "filipe.garrote@gmail.com",
    password: "123456",
    house: "Sucuri",
    department: "Agregado",
    role: "volunteer"
  },
  {
    id: 3,
    name: "Carlos Rodrigo",
    email: "carlos@carlos.com",
    password: "123456",
    house: "Onça-Pintada",
    department: "Agregado",
    role: "volunteer"
  },
  {
    id: 4,
    name: "Jorge Figueira",
    email: "jorge@jorge.com",
    password: "123456",
    house: "Arara-Azul",
    department: "Agregado",
    role: "volunteer"
  },
  {
    id: 4,
    name: "Ademir da Silva",
    email: "admin@admin.com",
    password: "123456",
    house: "Arara-Azul",
    department: "Agregado",
    role: "admin"
  }
]

const userActivities = []


export {activities, users, userActivities}