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
    return response.data.total_results // You should write it "response.data.something"
  })
}

function getFirstResultName(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 2
    // Update that function so it only displays the name of the first actor
    console.log(response.data.results); 
    return response.data.results[0].name
  })
}

function getNames(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    let namesOfActors = [];
    response.data.results.map(function(i) {
      // console.log(i.name);
      namesOfActors.push(i.name)
    } )
    return namesOfActors;
    // TODO: Iteration 3
  })
}

function getIdsAndNames(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    let namesAndIdOfActors = [];
    response.data.results.map(function(i) {
      // console.log(i.name);
      namesAndIdOfActors.push(i.id + ' ' + i.name)
    } )
    return namesAndIdOfActors;
    // TODO: Iteration 4
  })
}

function getSortedNames(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    let namesOfActors = [];
    response.data.results.map(function(i) {
      // console.log(i.name);
      namesOfActors.push(i.name)
    } )
    return namesOfActors.sort();
    });
    // TODO: Iteration 5
  
}

function getNamesFiltered(page, searchTerm) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 6
    let namesOfActors = [];
    response.data.results.map(function(i) {
      if (i.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        namesOfActors.push(i.name)
      }
    } )
    return namesOfActors;
  })
}


function getActorNamesWithTheirKnownForMovies(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // console.log(response.data.results);
    // // TODO: Iteration 7
    // return response.data.results
    
    
    // .map(i =>{
    //   i.known_for


  //   })
  })
}