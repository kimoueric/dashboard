// const btnupdown = document.getElementById("btnupdown-2");
// const employeOpe = document.getElementById("employeOpe");
// const garantieOpe = document.getElementById("garantieOpe");
// const reparationOpe = document.getElementById("reparationOpe");
// const venteOpe = document.getElementById("venteOpe");
// const stockOpe = document.getElementById("stockOpe");

// const operationTable = [
//   employeOpe,
//   garantieOpe,
//   reparationOpe,
//   venteOpe,
//   stockOpe,
// ];

// operationTable.forEach((operation) => {
//   operation.addEventListener("click", function () {
//     console.log(operation.getAttribute("id"));
//     const activeElement = document.getElementsByClassName("activeItem");
//     activeElement[0].classList.remove("activeItem");
//     document.getElementById(
//       "title"
//     ).innerHTML = ` <p class="flex items-center">
//             <span>Gestions</span>
//             <i class="fi fi-sr-angle-small-right pt-[5px]"></i>
//             <span id="title" class="text-slate-500">${this.innerText}</span>
//           </p>
//            `;
//     document.getElementById("item2").classList.add("activeItem");
//   });
// });

// document.getElementById("item1").addEventListener("click", function () {
//   const activeElement = document.getElementsByClassName("activeItem");
//   activeElement[0].classList.remove("activeItem");
//   document.getElementById("title").innerHTML = `Dashboard `;
//   this.classList.add("activeItem");
// });
// btnupdown.getElementsByTagName("i")[0].addEventListener("click", function () {
//   const operationContainer = document.getElementById("operation-container-2");
//   if (operationContainer.className.toString().includes("opacity-0")) {
//     operationContainer.style.transition = "all 0.5s ease";
//     operationContainer.style.height = "200px";
//     operationContainer.classList.remove("opacity-0");
//     operationTable.forEach((operation) => {
//       operation.classList.add("animate__animated");
//       operation.classList.add("animate__slideInRight");
//     });
//     operationContainer.classList.add("opacity-1");
//     this.classList.remove("fi-sr-angle-small-down");
//     this.classList.add("fi-sr-angle-small-up");
//   } else {
//     operationContainer.classList.remove("opacity-1");
//     operationContainer.classList.add("opacity-0");
//     operationTable.forEach((operation) => {
//       operation.classList.remove("animate__animated");
//       operation.classList.remove("animate__slideInRight");
//     });
//     this.classList.remove("fi-sr-angle-small-up");
//     this.classList.add("fi-sr-angle-small-down");
//   }
// });

let manage = {
  btnUpdownTable: document.querySelectorAll(".btnupdown"),
  init: function () {
    this.btnUpdownTable.forEach((btnUpDown) => {
      btnUpDown.addEventListener("click", () => this.upDown(btnUpDown));
    });
    document.querySelectorAll("[data-li='none']").forEach((li) => {
      li.addEventListener("click", () => {
        this.activeLiItem(li.getAttribute("id"))
        this.activeLiContent(li.getAttribute("id"))
    });
    });
  },
  upDown: function (btnUpDown) {
    let isDown = null;
    let upDownIcon = btnUpDown.getElementsByTagName("i")[0];

    if (upDownIcon.className.includes("fi-sr-angle-small-down")) isDown = true;

    if (isDown) {
      upDownIcon.classList.remove("fi-sr-angle-small-down");
      upDownIcon.classList.add("fi-sr-angle-small-up");
      this.displayLiItem(btnUpDown.getAttribute("data-item"));
    } else {
      upDownIcon.classList.remove("fi-sr-angle-small-up");
      upDownIcon.classList.add("fi-sr-angle-small-down");
      this.hideLiItem(btnUpDown.getAttribute("data-item"));
    }
  },
  displayLiItem: function (idItem) {
    let liItem = document.querySelector(`[data-li-operation="${idItem}"]`);
    let liItemDiv = [...liItem.getElementsByTagName("div")];
    liItem.classList.remove("isHidden");
    liItem.classList.remove("animate__bounceOutLeft");
    liItem.classList.add("animate__animated");
    liItem.classList.add("animate__bounceInLeft");
    
    liItemDiv.forEach((item) => {
      item.addEventListener("click",()=>{
        this.activeLiItem(idItem);
        this.activeLiContent(item.getAttribute("id"));
      })
    })

  },
  hideLiItem: function (idItem) {
    let liItem = document.querySelector(`[data-li-operation="${idItem}"]`);
    liItem.classList.remove("animate__bounceInLeft");
    liItem.classList.add("animate__bounceOutLeft");
    setTimeout(() => {
      liItem.classList.add("isHidden");
    }, 400);
   
  },
  activeLiItem: function (idItem) {
    document.querySelector(".activeItem").classList.remove("activeItem");
    let liI = document.getElementById(idItem)
    liI.classList.add("activeItem");
  } ,
  activeLiContent : function (liItem) {
    let contentActive = document.querySelector(".isContentVisible") 
    let isSameActiveElement = liItem.toString() === contentActive.getAttribute("data-li-content").toString()
    console.log(isSameActiveElement);
    console.log(liItem);
    if(isSameActiveElement===false){
      contentActive.classList.add("isContentHidden");
      contentActive.classList.remove("isContentVisible");
      document.querySelector(`[data-li-content="${liItem}"]`).classList.remove("isContentHidden");
      document.querySelector(`[data-li-content="${liItem}"]`).classList.add("isContentVisible");
      document.querySelector(`[data-li-content="${liItem}"]`).classList.add("animate__animated");
      document.querySelector(`[data-li-content="${liItem}"]`).classList.add("animate__fadeIn"); 

      
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  manage.init();
});
