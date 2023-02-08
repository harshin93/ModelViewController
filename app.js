class Model {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class View {
    static displayProduct(product) {
      const productContainer = document.getElementById("product-container");
      const productItem = document.createElement("div");
      productItem.classList.add("product-item");
      productItem.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
      `;
      productContainer.appendChild(productItem);
    }
  }
  
  class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;
    }
  
    updateProductName(name) {
      this.model.name = name;
    }
  
    updateProductPrice(price) {
      this.model.price = price;
    }
  
    displayProduct() {
      View.displayProduct(this.model);
    }
  }
  
  const model = new Model("iPhone", 999.99);
  const view = new View();
  const controller = new Controller(model, view);
  controller.displayProduct();
  controller.updateProductName("Samsung Galaxy");
  controller.updateProductPrice(849.99);
  controller.displayProduct();
  