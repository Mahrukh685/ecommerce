let parent=document.getElementById("parent")
let index=0;

function productmapping(){
for(let i=0;i<products.length;i++){
console.log(products[i])


let container=document.createElement("div")
let prod_title=document.createElement("h3")
prod_title.textContent=products[i].title;
let prod_price=document.createElement("h3")
prod_price.textContent=products[i].price;
let prod_img=document.createElement("img")
prod_img.src=products[i].url;
container.appendChild=prod_title;
container.appendChild=prod_price;
container.appendChild=prod_img;
parent.appendChild(container);







}
}
productmapping()

