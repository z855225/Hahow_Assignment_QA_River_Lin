export function racesInEpisode(filmID) {
    const query = `query {
        film (filmID: ${filmID}) {
            title
            episodeID
            speciesConnection {
                species {
                    name
                }
            }
        }
    }`
    return cy.graphQL(query)
}

export function allFilms() {
    const query = `query {
        allFilms {
            films {
                episodeID
                title
            }
        }
    }`
    return cy.graphQL(query)
}

export function allVehicles() {
    const query = `query {
        allVehicles {
            vehicles {
                name
                maxAtmospheringSpeed
            }
        }
    }`
    return cy.graphQL(query)
}