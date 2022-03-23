const API_KEY = '?key=4a7bd6f3d4314002babc4e422c08c2e6'
const URL = `https://api.rawg.io/api/games${API_KEY}`

export default class Home {
  constructor(app) {
    this.app = app
  }

  buildHtml() {
    this.getNextAwaitedGames()
    .then((games) => {
      console.log(games)
    })
  }


  async getNextAwaitedGames() {
    const response = await fetch(`${URL}&page_size=9`)
    const data = await response.json();
    return data.results
  }



  getHtml() {
    return `
    <section id="home">
    <h1> Homeee </h1>
    </section>
    `
  }
 }
