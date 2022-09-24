describe('Automatización de Pruebas Web', () => {
  it('Caso Exitoso: Usuario y Contraseña activos para el Login', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()
    cy.get('#email').type('guino_ptu1@ptu.com')
    cy.get('#passwd').type('ptu12345')
    cy.get('#SubmitLogin > span').click()
    cy.get('.info-account').should('contain','Welcome') // Hacer una aserción o comparar
  })

  it('Caso Fallido: Contraseña incorrecta para el Login', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()
    cy.get('#email').type('guino_ptu1@gmail.com')
    cy.get('#passwd').type('ptu')
    cy.get('#SubmitLogin > span').click()
    cy.get('ol > li').should('contain','Invalid password') // Hacer una aserción o comparar
  })

  it('Caso Fallido: Usuario incorrecta para el Login', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()
    cy.get('#email').type('guino_ptu1')
    cy.get('#passwd').type('ptu')
    cy.get('#SubmitLogin > span').click()
    cy.get('ol > li').should('contain','Invalid email address') // Hacer una aserción o comparar
  })
})