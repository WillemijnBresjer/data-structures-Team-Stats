/* We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games. */

const team = {
    _players: [
      {
        firstName: 'Amy',
        lastName: 'Lopez',
        age: 21
      },
      {
        firstName: 'Lola',
        lastName: 'Alvares',
        age: 24
      },
      {
        firstName: 'Lisa',
        lastName: 'Burkley',
        age: 23
      }
    ],
    _games: [
      {
        opponent: 'Dodgers',
        teamPoints: 4,
        opponentPoints: 3
      },
      {
        opponent: 'Indians',
        teamPoints: 7,
        opponentPoints: 5
      },
      {
        opponent: 'Seahawks',
        teamPoints: 1,
        opponentPoints: 2
      }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName,
        lastName,
        age
      };
      this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
      let game = {
        opponent,
        teamPoints,
        opponentPoints
      };
      this.games.push(game);
    }
  };
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76)
  console.log(team.players)
  team.addGame('Knicks', 4, 2);
  team.addGame('Bulls', 2, 5);
  team.addGame('Bruins', 5, 7);
  console.log(team.games);