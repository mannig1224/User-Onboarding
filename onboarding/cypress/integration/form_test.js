//write tests here

describe('Forms App', () => {
    // schedule something to happen before each test
    // before each test we navigate to http://localhost:1234
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    // use the 'it' keyword for tests
    it('sanity checks', () => {
        // assertion
        expect(5).to.equal(5)
        expect(1+2).to.equal(3)
    })

    const firstName = () => cy.get('input[name=first_name]');
    const lastName = () => cy.get('input[name=last_name]');
    const email = () => cy.get('input[name=email]');
    const password = () => cy.get('input[name=password]');
    const submitBtn = () => cy.get('button[class=submitBtn]');
    const terms = () => cy.get('input[name=term]');

    it('the proper elements exists', () => {
        firstName().should('exist')
        lastName().should('exist')
        email().should('exist')
        password().should('exist')
    })

    describe('filling out inputs and cancelling', () => {

        it('submit button is disabled', () => {
            submitBtn().should('be.disabled')
        })

        it('can type inside the inputs', () => {

            firstName()
                .should('have.value', '')
                .type('manny')
                .should('have.value', 'manny')

            lastName()
                .should('have.value', '')
                .type('manny')
                .should('have.value', 'manny')

            email()
                .should('have.value', '')
                .type('egatica51@gmail.com')
                .should('have.value', 'egatica51@gmail.com')

            password()
                .should('have.value', '')
                .type('mannyga1224')
                .should('have.value', 'mannyga1224')
            terms()
                .check()
                .should('have.checked', 'true')
                
            submitBtn().should('not.be.disabled')
        
        })

        
    })


    describe('can check for form validation', () => {

        it('can check for form validation', () => {
            firstName()
                .should('have.value', '')
                .type('manny')
                .should('have.value', 'manny')
                .clear()
                
            
        
        
        })

        
    })
})