// setTimeout(() => {
//   console.log("inside timeout - 0");
// }, 0);

// console.log("Hello");

// // setTimeout(() => {
// //   console.log("inside timeout - 4");
// // }, 4000);

// const a = 5;

// function intervalFunc(a = 0) {
//   //   a++;
//   const myInterval = setInterval(() => {
//     a++;
//     if (a === 8) {
//       return clearInterval(myInterval);
//     }
//     console.log(a);
//   }, 1000);
// }

// intervalFunc(5);
// const myHeader = document.getElementsByTagName("h1");
// const myDiv = document.getElementById("test");
// const myP = document.getElementsByClassName("parag");

const myNewHeader = document.querySelectorAll("h1");
const newDiv = document.querySelector("#test p");
const myNewP = document.querySelector(".parag");
const myList = document.querySelectorAll("ul li");
const btn = document.querySelector(".btn");
const myTestDiv = document.querySelector("#test");

setTimeout(() => {
  myNewHeader.forEach((item) => {
    //   console.log(item.innerText);
    // item.innerText = "Test";
    item.innerHTML = "test";
  });
}, 2000);

myList.forEach((list) => {
  //   console.log(list);
  //   list.onclick = (e) => {
  //     console.log(list.innerText);
  //   };

  list.addEventListener("click", () => {
    addList(document.querySelector(".some"), "dskjf", "dkjfhksjdhf");

    console.log("test");
  });
});

function addList(someElement, code, design) {
  someElement.innerHTML += `
    <ul>
        <li>${code}</li>
        <li>${design}</li>
    </ul>
  `;
}

btn.addEventListener("click", () => {
  //   newDiv.classList.add("new-paragraph");
  //   newDiv.classList.remove("parag");

  //   console.log(newDiv.classList);

  const newList = document.createElement("ul");
  //   newList.
  const newListItemCode = document.createElement("li");
  const newListItemDesign = document.createElement("li");

  newListItemCode.innerText = "Code";
  newListItemDesign.innerText = "Design";

  //   newList.appendChild(newListItemCode);
  //   newList.appendChild(newListItemDesign);

  newList.append(newListItemCode, newListItemDesign);

  myTestDiv.appendChild(newList);

  addList(myTestDiv, "Code", "Design");
  //   if (newDiv.classList.contains("new-paragraph")) {
  //     newDiv.classList.remove("new-paragraph");
  //   } else {
  //     newDiv.classList.add("new-paragraph");
  //   }
});

// console.log(myNewHeader, newDiv, myNewP);
