let service = axios.create({
  baseURL: "https://raw.githubusercontent.com/mc100s/module-3-react/master/labs/lab-axios-functional-programming/" 
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
    // TODO: Iteration 1
    // Update that function so it only displays the value of "total_results" (18966)
    return response.data.total_results; 
     // You should write it "response.data.something"
  })
}

function getFirstResultName(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 2
    // Update that function so it only displays the name of the first actor
    return response.data.results[0].name;
  })
}

function getNames(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 3
    let results = response.data.results;
    console.log(results);
    let nameResults = results.map( el => {
      return el.name
      
    }
    )
    return nameResults;
  })
}

function getIdsAndNames(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 3
    let results = response.data.results;
    console.log(results);
    let nameResults = results.map( el => {
      return "#" + el.id + " "+ el.name
      
    }
    )
    return nameResults;
  })
}

function getSortedNames(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 3
    let results = response.data.results;
    console.log(results);
    let nameResults = results.map( el => {
      return el.name
      
    }
    )
    return nameResults;
  })
  .then (nameResults => {
    return nameResults.sort();
  })
}

function getNamesFiltered(page, searchTerm) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 3
    let results = response.data.results;
    console.log(results);
    let nameResults = results.map( el => {
      return el.name
      
    }
    )
    return nameResults;
  })
  .then (nameResults => {    
      let filteredNames = nameResults.filter(actName => {
      return actName.toUpperCase().includes(searchTerm.toUpperCase());
    });
    return filteredNames;
  })
}


function getActorNamesWithTheirKnownForMovies(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 7
  })
}