let myData;
let text;
let target = document.querySelector("#container");
let submit = document.querySelector("#submit");

function getFood() {
  text = document.getElementById("input").value;
  console.log(text);
  return fetch("https://proxy.calweb.xyz/http://www.recipepuppy.com/api/?q=" + text)
  .then (function(response){
    return response.json();
  }).then (function(data) {
    buildHtml(data);
  });
}

function buildHtml(recipes) {
  let html = "";
  for (let recipe of recipes.results) {
    let imgUrl = "";
    if (recipe.thumbnail) {
      imgUrl = recipe.thumbnail;
    } else {
      imgUrl = "http://lorempixel.com/120/120";
    }
    html += `<figure><img src="${imgUrl}"/>
      <figcaption><a href="${recipe.href}">${recipe.title}</a></figcaption>
      </figure>
      `;
    console.log(recipe.title);
  }
  target.innerHTML = html;
}

submit.addEventListener("click", getFood);
