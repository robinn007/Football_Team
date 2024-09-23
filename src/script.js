const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
  team: "FC Barcelona(FCB)",
  sport: "Football",
  year: 2024,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Hansi Flick",
    matches: 7,
  },
  players: [
    {
      name: "MarcAndre TerStegan",
      position: "goalkeeper",
      number: 1,
      isCaptain: true,
      nickname: null,
    },
    {
      name: "Pau Cubarsi",
      position: "defender",
      number: 2,
      isCaptain: false,
      nickname: null,
    },
     {
      name: "Alejandro Blade",
      position: "defender",
      number: 3,
      isCaptain: false,
      nickname: "El Bocha",
    },
    {
      name: "Ronald Araujo",
      position: "defender",
      number: 4,
      isCaptain: true,
      nickname: "Bichi",
    },
    {
      name: "Inigo Martinez",
      position: "defender",
      number: 5,
      isCaptain: false,
      nickname: "Tata",
    },
    {
      name: "Gavi",
      position: "midfielder",
      number: 6,
      isCaptain: false,
      nickname: "El Gran Capitán",
    },
    {
      name: "Ferran Torres",
      position: "forward",
      number: 7,
      isCaptain: false,
      nickname: "shark",
    },
    {
      name: "Pedri",
      position: "midfielder",
      number: 8,
      isCaptain: true,
      nickname: null,
    },
    {
      name: "Robert Lewandowski",
      position: "forward",
      number: 9,
      isCaptain: false,
      nickname: "lewa",
    },
    {
      name: "Ansu Fati",
      position: "forward",
      number: 10,
      isCaptain: false,
      nickname: "El Pibe de Oro",
    },
    {
      name: "Raphinha",
      position: "forward",
      number: 11,
      isCaptain: true,
      nickname: "Warrior",
    },
    {
      name: "Inaki Pena",
      position: "goalkeeper",
      number: 13,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Pablo Torre",
      position: "midfielder",
      number: 14,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Andreas Christansen",
      position: "defender",
      number: 15,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Fermin Lopez",
      position: "midfielder",
      number: 16,
      isCaptain: false,
      nickname: "El loco",
    },
    {
      name: "Marc Casado",
      position: "midfieler",
      number: 17,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Pau Victor",
      position: "forward",
      number: 18,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Lamine Yamal",
      position: "forward",
      number: 19,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Dani Olmo",
      position: "forward",
      number: 20,
      isCaptain: false,
      nickname: "El Cabezón",
    },
    {
      name: "Frenkie De Jong",
      position: "midfielder",
      number: 21,
      isCaptain: true,
      nickname: null,
    },
    {
      name: "Jules Kounde",
      position: "defender",
      number: 23,
      isCaptain: false,
      nickname: "Calesita",
    },
    {
      name: "Eric Garcia",
      position: "defender",
      number: 24,
      isCaptain: false,
      nickname: null,
    },
  ],
};

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

console.log("Sport:", sport);
console.log("Team:", team);
console.log("Year:", year);
console.log(coachName);
console.log(Array.isArray(sport));
console.log(sport.length);


console.log("Player_Name", players);


typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, number, isCaptain, nickname }) =>
        `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      `
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;

    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;

    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;

    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;

    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;

      case "captain":
        setPlayerCards(players.filter((player) => player.isCaptain === true));
        break;
  

  default:
  setPlayerCards();

  }
});
