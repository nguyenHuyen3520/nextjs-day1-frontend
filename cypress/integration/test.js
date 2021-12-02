describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://nextjs-day1-frontend-v3.vercel.app')
        cy.get('#HomePage').contains('Day la trang chu')
    })
})