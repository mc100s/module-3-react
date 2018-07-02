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
  return service.get(`result-${page}.json`)
  .then(response => {
    return response.data.total_results
  })
}

function getFirstResultName(page) {
  return service.get(`result-${page}.json`)
  .then(response => {
    return response.data.results[0].name
  })
}

function getNames(page) {
  return service.get(`result-${page}.json`)
  .then(response => {
    return response.data.results.map(x => x.name)
  })
}

function getIdsAndNames(page) {
  return service.get(`result-${page}.json`)
  .then(response => {
    return response.data.results.map(x => `#${x.id} ${x.name}`)
  })
}

function getSortedNames(page) {
  return service.get(`result-${page}.json`)
  .then(response => {
    return response.data.results
      .map(x => x.name)
      .sort()
  })
}

function getNamesFiltered(page, searchTerm) {
  return service.get(`result-${page}.json`)
  .then(response => {
    return response.data.results
      .map(x => x.name)
      .filter(name => name.toUpperCase().includes(searchTerm.toUpperCase()))
  })
}


function getActorNamesWithTheirKnownForMovies(page) {
  return service.get(`result-${page}.json`)
  .then(response => {
    return response.data.results
      .map(x => {
        let titles = x.known_for.map(movie => movie.title)
        return x.name + " ("+titles.join(", ")+")"
      })
  })
}