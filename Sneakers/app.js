const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Classic Boots",
    price: 119,
    colors: [
      {
        code: "black",
        img: ".img/img1.png",
      },
      {
        code: "Brown",
        img: "img/image2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Platform Boots",
    price: 149,
    colors: [
      {
        code: "black",
        img: "img/img2.png",
      },
      {
        code: "brown",
        img: "img/image2.2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Chelsea Boots",
    price: 109,
    colors: [
      {
        code: "black",
        img: "img/img3.png",
      },
      {
        code: "brown",
        img: "img/image2.1.png",
      },
    ],
  },
  {
    id: 4,
    title: "Shoe",
    price: 129,
    colors: [
      {
        code: "black",
        img: "img/img4.png",
      },
      {
        code: "brown",
        img: "img/image2.6.png",
      },
    ],
  },
  {
    id: 5,
    title: "Collaborations",
    price: 500,
    colors: [
      {
        code: "black",
        img: "img/img6.png",
      },
      {
        code: "brown",
        img: "img/image2.5.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

let availablekeywords = [
  'Classic Boots',
  'Platform Boots',
  'Chelsea Boots',
  'Boots',
  'Shoes',
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
  let result = [];
  let input = inputBox.value;
  if(input.length){
    result = availablekeywords.filter((keyword)=>{
     return keyword.toLowerCase().includes(input.toLowerCase);
    });
    console.log(result);
  }
}

function display(result){
  const content = result.map((list)=>{
    return "<li>" + list + "</li>";
  });
  
  resultBox.innerHTML = "<ul>" + content + "</ul>";
}
