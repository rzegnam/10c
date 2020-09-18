describe("career page", () => {
    beforeEach(() => {
        cy.visit("/")
        cy.get(".message__close").click()
        cy.findAllByText("Careers").eq(0).click()
    })

    it("should validate that there is exactly one 'QA Automation Engineer' role in careers tab", () => {
        // findByText query returns only 1 Match and throws an error for 1+ Match: https://testing-library.com/docs/react-testing-library/cheatsheet
        cy.findByText("QA Automation Engineer", {timeout: 30000})
    })

    it('should check the search functionality', () => {
        cy.findByPlaceholderText("Search jobs...", {timeout: 30000}).type("Automation")
        cy.get(".job-offer__title").each(($offer) => {
            expect($offer).to.contain("Automation")
        })
    })
})