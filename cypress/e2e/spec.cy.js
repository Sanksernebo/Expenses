describe('Expenses App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it("can find elements", () => {
    cy.get(".expense-item") .should ('have.length', 2)
    cy.get(".expense-item h2") .first() .should( 'have.text', "Bag")
    cy.get(".expense-item h2") .last() .should
    ("contain.text", "Stuff")
  })
  it('should filter elements',() => {
    cy.get(".expenses-filter select").select(1)
    cy.get(".expense-item") .should ("have.length", 2)
  })
  it('should add expense',() => {
    cy.contains("Add Expense").click()
    cy.get('form [inputtype="text"]')
        .type("Äge Värk")
    cy.get('form input[type="number"]')
        .type("69.99")
    cy.get('form input[type="date"]')
        .type("2023-12-12")
    cy.get('button[type="submit"]').click()
    cy.get(".expense-item") .should ("have.length", 3)
  })
})
