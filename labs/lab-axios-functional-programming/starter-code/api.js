let service = axios.create({
  baseURL: "https://raw.githubusercontent.com/mc100s/training-labs-react/master/src/lab-axios-functional-programming" 
})

function displayDataInTheConsole(page) {
  return service.get(`result-${page}.json`)
  .then(response => {
    console.log('response.data ==> ', response.data);
  })
}

function getTotalResults(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // "total_results" (18966)
    return response.data.total_results // You should write it "response.data.something"
  })
  // .then( result => {
  //   document.getElementById("getTotalResults").innerHTML = JSON.stringify(result, null, 2)
  // });
}

function getFirstResultName(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 2
    // Update that function so it only displays the name of the first actor
    return response.data.results[0].name
  })
}

function getNames(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 3
    return response.data.results.map( actor => actor.name);
  })
}

function getIdsAndNames(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    return response.data.results.map( actor => `#${actor.id} ${actor.name}`);
  })
}

function getSortedNames(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    return response.data.results.map( actor => actor.name).sort();
  })
}

function getNamesFiltered(page, searchTerm) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 6
    return response.data.results.map( actor => actor.name).filter(name => name.toUpperCase().includes(searchTerm.toUpperCase()) );
  })
}


function getActorNamesWithTheirKnownForMovies(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 7

    return response.data.results
      .map( actor => 
        `${actor.name} (${actor.known_for.map( movie => movie.title )})`
      );
  })
}

function getKnownForMovies(page) {
  return service.get(`page-${page}.json`)
  .then( response => {
    return response.data.results.map( actor => `${actor.known_for.map( movie => movie.title )}` ).sort();
  })
}