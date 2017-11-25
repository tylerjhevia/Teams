const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });
const fs = require('fs');

nightmare
  .goto('https://stats.nba.com/players/list/')
  .wait('body')
  //   .click("tbody tr td a")
  .evaluate(() => {
    const players = [];
    let playerNames = document.querySelectorAll('.players-list li a');

    for (let i = 0; i < playerNames.length; i++) {
      players.push(playerNames[i].innerHTML);
    }
    return players;
  })
  .end()
  .then(res => {
    console.log('one', res);
    let output = JSON.stringify(res);
    fs.writeFile(`./NBA-players.js`, output, 'utf8', err => {
      if (err) {
        return console.error(err);
      }
    });
  })
  .catch(error => console.log(error));
