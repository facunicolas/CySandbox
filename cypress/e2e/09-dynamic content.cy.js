describe("Dynamic content", () => {
  beforeEach(() => {
    cy.visit("/dynamic_content");
  });

  it("Dynamic content assertion", () => {
    cy.get("div.row div#content.large-10 div.row").then((rows) => { //devuelve los elementos agrupados (3)
      var genArr = Array.from({ length: rows.length }); //un array del tamaño de la cantidad de elementos
      let i = 1; //counter principal (indice)
      let x = 1; //counter de iteraciones 
      cy.wrap(genArr).each(() => { //inicio del codigo para cada ciclo
        cy.log("Esta es la fila numero: " + x++);
        cy.get(`:nth-child(7) > #content :nth-child(${i}) img`).first().then(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0);//assertion de imagen rota
          });
        i += 3;
      });   //fin del ciclo
    });

  });
});
