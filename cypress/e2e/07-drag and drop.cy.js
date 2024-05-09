describe("Drag and drop", () => {
  beforeEach(() => {
    cy.visit("/drag_and_drop");
  });

  it("The old way", () => {
    //Las columnas coinciden con el texto que tienen adentro
    cy.get("#column-a").should("have.text", "A");
    cy.get("#column-b").should("have.text", "B");

    //Logica del arrastre y cambio de posicion------------------
    const dataTransfer = new DataTransfer();
    cy.get("#column-a").trigger("dragstart", {
      dataTransfer,
    });
    cy.get("#column-b").trigger("drop", { dataTransfer });
    cy.get("#column-a").trigger("dragend");
    //----------------------------------------------------------
    
    //Ahora el texto de la columna cambio, pero no su ID
    cy.get("#column-a").should("have.text", "B");
    cy.get("#column-b").should("have.text", "A");
  });
});
