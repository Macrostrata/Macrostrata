const BP_INDEX_URL = "https://Macrostrata.github.io/blueprints/index.json";

fetch(BP_INDEX_URL, { method: 'GET' })
.then((response) => {
    console.log(response);
});

