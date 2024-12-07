describe('UsersComponent', () => {
  it('should load users and display them', () => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users', {
      statusCode: 200,
      body: [
        { id: 1, name: 'User 1', email: 'user1@example.com' },
        { id: 2, name: 'User 2', email: 'user2@example.com' },
      ],
    }).as('getUsers');

    cy.visit('/users');
    cy.wait('@getUsers');

    cy.get('.user-item').should('have.length', 2);
    cy.get('.user-item').first().contains('User 1');
  });

  it('should go back to the previous page', () => {
    cy.visit('/users');
    cy.get('button').contains('Geri').click();
    cy.url().should('not.include', '/users');
  });
});
