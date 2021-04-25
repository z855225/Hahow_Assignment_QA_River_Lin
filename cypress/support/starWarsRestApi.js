export function searchFilmByTitle(title) {
    return cy.request(`https://swapi.dev/api/films?search=${title}`)   
}

export function allFilms() {
    return cy.request('https://swapi.dev/api/films') 
}

export function allVehicles() {
    return cy.request('https://swapi.dev/api/vehicles')
}