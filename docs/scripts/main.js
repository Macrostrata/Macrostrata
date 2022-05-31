const GITHUB_ORG = 'Macrostrata';
const BLUEPRINTS_INDEX_URL = `https://${GITHUB_ORG}.github.io/${GITHUB_ORG}/blueprints/index.json`;
const BLUEPRINTS_URL = `https://${GITHUB_ORG}.github.io/${GITHUB_ORG}/blueprints/`;


function getBlueprints() {
  // Get the index of blueprints
  return fetch(BLUEPRINTS_INDEX_URL)
    .then(response => response.json())
    .then(data => {
      const blueprintPromises = [];

      data.forEach(blueprint => {
        const blueprintURL = `${BLUEPRINTS_URL}${blueprint}.json`;
        blueprintPromises.push(fetch(blueprintURL).then(response => response.json()));
        console.log(`Getting ${blueprint} result`);
      });

      return Promise.all();
    })
    .then(resultsArr => {
      console.log('Got the blueprint results.')
      console.log(resultsArr);
    });
}
