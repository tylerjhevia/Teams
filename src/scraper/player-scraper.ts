const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });
const fs = require('fs');
import links from '../../playerLinks.js';

links
  .reduce(function(accumulator, url) {
    return accumulator.then(function(results) {
      return nightmare
        .goto(url)
        .wait('body')
        .evaluate(() => {
          let playerName = document.querySelector('h1');

          for (let k = 0; k < beers.length; k++) {
            let beerName = beers[k].querySelector('a').innerText;
            let beerType = beers[k].querySelector('span').innerText;

            beerArray.push({ breweryName, beerName, beerType });
          }
          return beerArray;
        })
        .then(function(result) {
          results.push(result);
          return results;
        });
    });
  }, Promise.resolve([]))
  .then(function(results) {
    let output = JSON.stringify(results, null, 2);

    fs.writeFile('./co-beers-data.json', output, 'utf8', err => {
      if (err) {
        return err;
      }
    });
    /* eslint-disable no-alert, no-console */
    console.log('File was saved.');
    /* eslint-enable no-alert, no-console */
  })
  .catch(error => {
    /* eslint-disable no-alert, no-console */
    console.error('breweries search failed', error);
    /* eslint-enable no-alert, no-console */
  });
