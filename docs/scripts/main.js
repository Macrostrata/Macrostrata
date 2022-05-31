const GITHUB_ORG = 'Macrostrata';
const BP_INDEX_URL = `https://${GITHUB_ORG}.github.io/${GITHUB_ORG}/blueprints/index.json`;

fetch(BP_INDEX_URL, { method: 'GET' })
.then(response => response.json())
.then(data => {
    console.log(data);
});

