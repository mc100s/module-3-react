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
    return response.data // You should write it "response.data.something"
  })
}

function getFirstResultName(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 2
    // Update that function so it only displays the name of the first actor
    return response.data
  })
}

function getNames(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 3
  })
}

function getIdsAndNames(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 4
  })
}

function getSortedNames(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 5
  })
}

function getNamesFiltered(page, searchTerm) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 6
  })
}


function getActorNamesWithTheirKnownForMovies(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 7
  })
}