const images = document.querySelector("#dog-image-container");
let dogBreeds = document.querySelector("#dog-breeds");
const breedFilter = document.getElementById("breed-dropdown");

const fetchDataImg = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random/4");
  const data = await response.json();
  data.message.forEach((item) => handleImage(item));
};

const handleImage = (data) => {
  const imgEl = document.createElement("img");
  imgEl.src = data;
  images.appendChild(imgEl);
};

const fetchBreed = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  let newObj = data.message;
  breeds = Object.keys(newObj);

  updateBreedList(breeds);
  addSelectListener();
};

const handleBreed = (data) => {
  const breedEl = document.createElement("li");
  breedEl.textContent = data;
  dogBreeds.appendChild(breedEl);

  breedEl.addEventListener("click", (e) => {
    e.target.style.color = "red";
  });
};

const updateBreedList = (breeds) => {
  let ul = document.querySelector("#dog-breeds");
  removeChildren(ul);
  breeds.forEach((breed) => handleBreed(breed));
};

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}
const addSelectListener = () => {
  let breedFilter = document.getElementById("breed-dropdown");

  breedFilter.addEventListener("change", (e) => {
    breedSelector(e.target.value);
  });
};

const breedSelector = (letter) => {
  updateBreedList(breeds.filter((breed) => breed.startsWith(letter)));
};

// const filterBreed = (array) => {
//   breedFilter.addEventListener("change", () => {
//     //console.log(array);
//     // if (selectedOption === "a") {
//     //   return array.filter((word) => word[0].toLowerCase() === selectedOption);
//     // } else if (selectedOption === "b") {
//     //   return array.filter((word) => word[0].toLowerCase() === selectedOption);
//     // } else if (selectedOption === "c") {
//     //   return array.filter((word) => word[0].toLowerCase() === selectedOption);
//     // } else if (selectedOption === "d") {
//     //   return array.filter((word) => word[0].toLowerCase() === selectedOption);
//     // } else {
//     //   return array;
//     // }
//   });
// };

fetchBreed();

fetchDataImg();
