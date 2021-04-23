import * as api from '../../support/starWarsGraphQLApi'

describe('The Star Wars API Tests', function() {

    it('Should have 9 different races in episode 6 "Return of the Jedi"', function () {
        const filmID = 3
        api.racesInEpisode(filmID).then((response) => {
            const episode = response.film.episodeID
            expect(episode).to.eq(6)
            const species = response.film.speciesConnection.species
            expect(species).to.have.lengthOf(9)
            cy.log(`${species.length} different races in episode 6`)
        })
    })

    it('Should list titles ordered by episode_id ASC', function () {
        api.allFilms().then((response) => {
            const films = response.allFilms.films
            const actualResult = ordered_by_episode_id_ASC(films)
            const expectResult = [
                [1, "The Phantom Menace"],
                [2, "Attack of the Clones"],
                [3, "Revenge of the Sith"],
                [4, "A New Hope"],
                [5, "The Empire Strikes Back"],
                [6, "Return of the Jedi"]
            ]
            actualResult.forEach(function(element) {
                cy.log(`Episode: ${element[0]}, Title: ${element[1]}`)
            })
            expect(JSON.stringify(actualResult)).to.eq(JSON.stringify(expectResult))
        })
    })

    it('Should list all vehicles that max atmosphering speed is over 1000', function () {
        api.allVehicles().then((response) => {
            const vehicles = response.allVehicles.vehicles
            const actualResult = vehicles_that_max_atmosphering_speed_is_over_1000(vehicles)
            const expectResult = [
                ["T-16 skyhopper", 1200],
                ["TIE/LN starfighter", 1200],
                ["Storm IV Twin-Pod cloud car", 1500],
                ["TIE/IN interceptor", 1250],
                ["Vulture Droid", 1200],
                ["Geonosian starfighter", 20000],
                ["Droid tri-fighter", 1180]
            ]
            actualResult.forEach(function(element) {
                cy.log(`Vehicle name: ${element[0]}, Max atmosphering speed: ${element[1]}`)
            })
            expect(JSON.stringify(actualResult)).to.eq(JSON.stringify(expectResult))
        })
    })

})

function ordered_by_episode_id_ASC(films) {  
    const result = []
    films.forEach(function(element) {
        result.push([
            element.episodeID,
            element.title
        ])
    })
    result.sort(function(a, b) {
        return a[0] - b[0]
    })
    return result
}

function vehicles_that_max_atmosphering_speed_is_over_1000(vehicles) {  
    const result = []
    vehicles.forEach(function(element) {
        if(element.maxAtmospheringSpeed > 1000) {
            result.push([
                element.name,
                element.maxAtmospheringSpeed
            ])
        }
    })
    return result
}