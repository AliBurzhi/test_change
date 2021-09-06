/* const navListEl = document.querySelector('#categories');

console.log(`В списке  ${navListEl.children.length} категории.`);

const titleEl = document.querySelectorAll('h2');
const ul = document.querySelectorAll('.item>h2')
titleEl.forEach(title => {
    console.log(`Категория: ${title.textContent}`);
    console.log(`Количество элементов: ${title.nextElementSibling.children.length}`);
}); */

//======================================================================================|


/* const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulListRef = document.querySelector('#ingredients');



ingredients.forEach(ingredient => {
    const liItem = document.createElement('li');
    liItem.textContent = ingredient;
    ulListRef.append(liItem);
}); */

//=====================================================================================|

/* const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulListRef = document.querySelector('#gallery');


images.forEach(image => {
    const itemRef = document.createElement('li');
    const imageRef = document.createElement('img');
    imageRef.width = 350;
    imageRef.height = 200;
    imageRef.src = image.url;
    imageRef.alt = image.alt;
    ulListRef.append(itemRef, imageRef);

}); */



//=====================================================================================|

/* const remBtn = document.querySelector('[data-action="decrement"]');
const addBtn = document.querySelector('[data-action="increment"]');
let currentValue = document.querySelector('#value');


addBtn.addEventListener('click', addValue);
remBtn.addEventListener('click', remValue);


function addValue () {
  currentValue.textContent = Number(currentValue.textContent) + 1;
}

function remValue () {
  currentValue.textContent = Number(currentValue.textContent - 1);
} */

//=====================================================================================|

/* const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange() {
  if (inputRef.value === '') {
    spanRef.textContent = 'незнакомец';
  } else {
    spanRef.textContent = inputRef.value;
  }
} */

//=====================================================================================|

/* const inputRef = document.querySelector('#validation-input');


inputRef.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (inputRef.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
} */

//=====================================================================================|

/* const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', onInputChange);

function onInputChange() {
  span.style.fontSize = input.value + 'px';
 
} */
// ПИКСЕЛИ ДОБАВЛЯЕМ К ИНПУТУ А НЕ СПАНУ ПОТОМУ ЧТО У ИНПУТА VALUE ЭТО ПРОСТО ЧИСЛО И НАДО ДОБАВИТЬ PX

//=====================================================================================|

/* const input = document.querySelector('input');
const container = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-action="render"]');
const deleteBtn = document.querySelector('[data-action="destroy"]');


deleteBtn.addEventListener('click', destroyBoxes);


function randomizer() {
    return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
}

function createBoxes(amount) {
    let size = 30;
    const arr = [];
    destroyBoxes();
    for (let i = 1; i <= amount; i++) {
        const div = document.createElement("div");
      div.style.width = div.style.height = size + "px";
      div.style.backgroundColor = randomizer();
      arr.push(div);
      size += 10;
    }
  container.append(...arr);
}

function destroyBoxes() {
  document.querySelector("#boxes").innerHTML = "";
  input.value = "";
}

createBtn.addEventListener("click", () => {
    if (+input.max >= +input.value) {
        createBoxes(+input.value)
        return
    }
    alert("слишком много дивов")
}) */

//=====================================================================================|

// const galleryItems = [
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
//     description: 'Hokkaido Flower',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
//     description: 'Container Haulage Freight',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
//     description: 'Aerial Beach View',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
//     description: 'Flower Blooms',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
//     description: 'Alpine Mountains',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
//     description: 'Mountain Lake Sailing',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
//     description: 'Alpine Spring Meadows',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
//     description: 'Nature Landscape',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
//     description: 'Lighthouse Coast Sea',
//   },
// ];

/* const galleryContainer = document.querySelector('.js-gallery');
const imagesMarkUp = createGalleryMarkUp(galleryItems);


function createGalleryMarkUp(galleryItems) {
  return galleryItems.map(({preview , original, description}) => {
    return `
    <li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
      </a>
    </li>
  `;
  }).join(""); 
}

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkUp);


const modalContainer = document.querySelector('.js-lightbox');
const bigImage = document.querySelector('.lightbox__image');


galleryContainer.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  modalContainer.classList.add('is-open');
  bigImage.src = event.target.dataset.source;

  bigImage.index = event.target.dataset.index;
  bigImage.alt = event.target.alt;

  modalContainer.addEventListener('click', closeLightbox);
});

function closeLightbox(event) {
  if (event.target.nodeName !== 'IMG') {
    removeClassIsOpen(modalContainer);
    modalContainer.removeEventListener('click', closeLightbox);

  }
}

function removeClassIsOpen(lightBox) {
  lightBox.classList.remove('is-open');
} */


//=====================================================================================|