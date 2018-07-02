let service = axios.create({
  baseURL:
    "https://raw.githubusercontent.com/mc100s/module-3-react/master/labs/lab-axios-functional-programming/"
});

function displayDataInTheConsole(page) {
  return service.get(`result-${page}.json`).then(response => {
    console.log("response.data ==> ", response.data);
  });
}

function getTotalResults(page) {
  return service.get(`page-${page}.json`).then(response => {
    // TODO: Iteration 1
    // Update that function so it only displays the value of "total_results" (18966)
    return response.data.total_results; // You should write it "response.data.something"
  });
}

function getFirstResultName(page) {
  return service.get(`page-${page}.json`).then(response => {
    // TODO: Iteration 2
    // Update that function so it only displays the name of the first actor
    return response.data.results[0].name;
  });
}

function getNames(page) {
  return service.get(`page-${page}.json`).then(response => {
    // TODO: Iteration 3
    actorNames = [];
    response.data.results.forEach(actor => {
      return actorNames.push(actor.name);
    });
    return actorNames;
  });
}

function getIdsAndNames(page) {
  return service.get(`page-${page}.json`).then(response => {
    // TODO: Iteration 4
    actorNamesId = [];
    response.data.results.forEach(actor => {
      return actorNamesId.push(`${actor.id} ${actor.name} `);
    });
    return actorNamesId;
  });
}

function getSortedNames(page) {
  return service.get(`page-${page}.json`).then(response => {
    // TODO: Iteration 5
    // TODO: Iteration 3
    actorNames = [];
    response.data.results.forEach(actor => {
      return actorNames.push(actor.name);
    });
    return actorNames.sort();
  });
}

function getNamesFiltered(page, searchTerm) {
  // let searchTerm = searchTerm.toUpperCase()
  return service.get(`page-${page}.json`).then(response => {
    actorNames = [];
    response.data.results.forEach(actor => {
      return actorNames.push(actor.name);
    });
    var filteredArray = actorNames.filter(actorName => {
      console.log(actorName);
      return actorName.toUpperCase().includes("m".toUpperCase());
    });
    return filteredArray;
  });
}

function getActorNamesWithTheirKnownForMovies(page) {
  return service.get(`page-${page}.json`).then(response => {
    actorNamesAndMovies = [];

    response.data.results.forEach(actor => {
      let movieArray = [];
      actor.known_for.forEach(movie => {
        return movieArray.push(movie.title);
      });

      return actorNamesAndMovies.push(`${actor.name} ${movieArray}`);
    });
    return actorNamesAndMovies;
  });
}
