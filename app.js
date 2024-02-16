let parent = document.getElementById("parent")
let index = 0;

function productmapping() {
   for (let i = 0; i < products.length; i++) {
      console.log(products[i])



      let container = `<div class="card" style="width: 18rem;">
<img src=${products[i].url} class="card-img-top images " alt="...">
<div class="card-body">
  <h5 class="card-title">${products[i].title}</h5>
  <h5 class="card-title">${products[i].price}$</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-success">Add To cart</a>
</div>
</div>`

     parent.innerHTML+=container;







   }
}
productmapping()

