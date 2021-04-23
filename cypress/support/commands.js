Cypress.Commands.add('graphQL', (data, headers = undefined) => {
    let reqData = {
        method: 'POST',
        url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
        body: { query: data }
    }
    if (headers) reqData.headers = headers
    return cy.request(reqData).then((response) => {
        return response.body.data
    })
})