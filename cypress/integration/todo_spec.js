describe('ToDo React', () => {
	const faker = require('faker');

	before(() => {
		cy.visit('http://todomvc.com/examples/react/#/');
	});

	it('should show the correct page title', () => {
		cy.title().should('include', 'React • TodoMVC');
	});

	it('should allow to create first todo item', () => {
		const toDoItem = faker.lorem.sentence();
		cy.get('.new-todo').type(`${toDoItem}{enter}`);
		cy.get('.todo-count').should('have.text', '1 item left');
		cy.contains('li', toDoItem).should('exist');
	});

	it('should increment total todo when adding another item', () => {
		const toDoItem = faker.lorem.sentence();
		cy.get('.new-todo').type(`${toDoItem}{enter}`);
		cy.get('.todo-count').should('have.text', '2 items left');
		cy.contains('li', toDoItem).should('exist');
	});

// My test

	//Mark complete todo-item
	it('should mark todo-item completed', () => {
		cy.get('.new-todo').type('word{enter}');
		cy.contains('li', 'word')
			.find('.toggle')
			.check();
	});

	//Mark complete all todo-items
	it('should mark all completed', () => {
		const toDoItem = faker.lorem.sentence();
		cy.get('.new-todo').type(`${toDoItem}{enter}`);
		cy.contains('li', toDoItem).should('exist');
		cy.get('.toggle-all').should('have.prop', 'checked');
	});

	//Clear completed displayed
	it('should display clear completed', () =>{
		cy.get('.toggle-all');
		cy.get('.clear-completed').contains('Clear completed');
	});

	//Remove completed items
	it('should remove completed items when clicked', () =>{
		cy.get('.toggle-all').should('have.prop', 'checked');
		cy.get('.clear-completed').click();
	});
});