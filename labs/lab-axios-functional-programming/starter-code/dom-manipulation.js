// You can change that value, from 1 to 3
let page = 1
//maybe a listener here?

// You shouldn't modidify the next lines

displayDataInTheConsole(page)


function updateTheDom(elementId) {
  return (result) => {
    document.getElementById(elementId).innerHTML = JSON.stringify(result, null, 2)
  }
}

getTotalResults(page)
.then(updateTheDom("getTotalResults"))

getFirstResultName(page)
.then(updateTheDom("getFirstResultName"))

getNames(page)
.then(updateTheDom("getNames"))

getIdsAndNames(page)
.then(updateTheDom("getIdsAndNames"))

getSortedNames(page)
.then(updateTheDom("getSortedNames"))

getNamesFiltered(page, "m")
.then(updateTheDom("getNamesFiltered"))

getActorNamesWithTheirKnownForMovies(page)
.then(updateTheDom("getActorNamesWithTheirKnownForMovies"))
