// import data from './data'

console.log(got);
// console.log(got.houses.people);
let cards = document.querySelector(".cards");
console.log(got.houses[0].people);

function createUI() {
  for (let i = 0; i < got.houses.length; i++) {
    got.houses[i].people.forEach((element) => {
      // console.log(element.people);

      let li = document.createElement("li");

      let image = document.createElement("img");
      image.src = element.image;
      console.log(image);

      let name = document.createElement("h3");
      name.innerText = element.name;
      console.log(name);

      let description = document.createElement("p");
      description.innerText = element.description;
      console.log(description);

      let btn = document.createElement("button");
      btn.innerText = "Learn more!";
      console.log(btn);

      li.append(image, name, description, btn);
      cards.append(li);
    });
  }
}

// let name = document.createElement("p");
// name.innerText = element.name;

// console.log(name);

createUI();
