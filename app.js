let parent = document.getElementById("parent")
let index = 0;
let cart = []


function productmapping() {
  for (let i = 0; i < products.length; i++) {





    let container = `<div class="card" style="width: 18rem;">
<img src=${products[i].url} class="card-img-top images " alt="...">
<div class="card-body">
  <h5 class="card-title">${products[i].title}</h5>
  <h5 class="card-title">${products[i].price}$</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-success" onclick="addtocart(${products[i].id})">Add To cart</a>
</div>
</div>`


    parent.innerHTML += container;







  }
}
productmapping()

function addtocart(id) {
  for (let i = 0; i < products.length; i++) {


  }
  let currentProduct = products.find(x => x.id === id);
  currentProduct.quantity = 1
  cart.push(currentProduct)


  console.log(cart)

  showcartprocess()

}


function showcartprocess() {

  for (i = 0; i < cart.length; i++) {
    let container = `<div class="card" style="width: 18rem;">
  <img src=${cart[i].url} class="card-img-top images " alt="...">
  <div class="card-body">
    <h5 class="card-title">${cart[i].title}</h5>
    <h5 class="card-title">${cart[i].price}$</h5>
    <h5 class="card-title">${cart[i].quantity}$</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  
    
  </div>
  </div>`

    child.innerHTML += container;
  }
}

