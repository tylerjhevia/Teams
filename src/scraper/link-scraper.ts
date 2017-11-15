const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });
const fs = require('fs');

nightmare
  .goto('https://www.basketball-reference.com/players/z/')
  .wait('body')
  .evaluate(() => {
    const playerLinks = [];
    let players = document.querySelectorAll(
      '.stats_table tbody tr th strong a'
    );

    for (let i = 0; i < players.length; i++) {
      let link = players[i].href;
      playerLinks.push(link);
    }
    return playerLinks;
  })
  .end()
  .then(res => {
    let output = JSON.stringify(res);
    console.log(output);
    fs.writeFile(`./playerLinks.json`, output, 'utf8', err => {
      if (err) {
        return console.error(err);
      }
    });
  })
  .catch(error => console.log(error));

// https://www.basketball-reference.com/players/a/abrinal01.html
