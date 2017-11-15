const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });
const fs = require('fs');
const links = require('../../playerLinks.js');

links
  .reduce(function(accumulator, url) {
    return accumulator.then(function(results) {
      return nightmare
        .goto(url)
        .wait('body')
        .evaluate(() => {
          let playerName = document.querySelector('h1').innerHTML;

          return playerName;
        })
        .then(function(result) {
          results.push(result);
          return results;
        });
    });
  }, Promise.resolve([]))
  .then(function(results) {
    let output = JSON.stringify(results, null, 2);

    fs.writeFile('./player-data.js', output, 'utf8', err => {
      if (err) {
        return err;
      }
    });
    console.log('File was saved.');
  })
  .catch(error => {
    console.error('breweries search failed', error);
  });
