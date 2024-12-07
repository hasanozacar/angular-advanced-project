describe('DashboardComponent', () => {
  it('should load products and display them', () => {
    cy.intercept('GET', 'https://fakestoreapi.com/products', {
      statusCode: 200,
      body: [
        { title: 'Product 1', category: "men's clothing", price: 100 },
        { title: 'Product 2', category: 'electronics', price: 200 },
      ],
    }).as('getProducts');

    cy.visit('/dashboard');
    cy.wait('@getProducts');

    cy.get('.products-grid').should('be.visible');
    cy.get('.product-card').should('have.length', 4);
  });

  it('should filter products by category', () => {
    cy.visit('/dashboard');

    cy.get('mat-select').first().click();
    cy.get('mat-option').contains("men's clothing").click();
    cy.get('.product-card').first().contains("men's clothing");
  });

  it('should filter products by price range', () => {
    cy.intercept('GET', 'https://fakestoreapi.com/products', {
      statusCode: 200,
      body: [
        { title: 'Product 1', category: "men's clothing", price: 100 },
        { title: 'Product 2', category: 'electronics', price: 200 },
      ],
    }).as('getProducts');

    cy.visit('/dashboard');
    cy.wait('@getProducts');

    cy.get('mat-select').last().click();
    cy.get('mat-option').contains('Low to High').click();

    cy.get('.product-card').first().contains('Product 1');
  });

  it('should navigate to users page when button is clicked', () => {
    cy.visit('/dashboard');
    cy.get('.go-to-users-btn').click();
    cy.url().should('include', '/users');
  });
});
