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
            expect($img[0].naturalWidth).to.be.greaterThan(0);
          });
        i += 3;
      });   //fin del ciclo
    });

    // cy.log("First conditional")

    // if (cy.get(':nth-child(7) > #content :nth-child(1)').first().should("be.visible")) {

    //     cy.log("Img Assertion done because first element is visible")
    //     cy.get(':nth-child(7) > #content :nth-child(1) img').first().then(($img) => {
    //         expect($img[0].naturalWidth).to.be.greaterThan(0);
    //     });
    // }

    // cy.log("Second conditional")

    // if (cy.get(':nth-child(7) > #content :nth-child(4)').first().should("be.visible")) {

    //     cy.log("Img Assertion done because second element is visible")
    //     cy.get(':nth-child(7) > #content :nth-child(4) img').then(($img2) => {
    //         expect($img2[0].naturalWidth).to.be.greaterThan(0);
    //     });
    // }

    // cy.log("Third conditional")

    // if (cy.get(':nth-child(7) > #content :nth-child(7)').first().should("be.visible")) {

    //     cy.log("Img assertion done because third element is visible")
    //     cy.get(':nth-child(7) > #content :nth-child(7) img').then(($img3) => {
    //         expect($img3[0].naturalWidth).to.be.greaterThan(0);
    //     });
    // }
  });
});
