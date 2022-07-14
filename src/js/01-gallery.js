import { galleryItems } from './gallery-items.js';
// Change code below this line
// Створення і рендер розмітки на підставі масиву даних galleryItems і
// наданого шаблону елемента галереї.

const boxGallery = document.querySelector(".gallery");
const addGalleryItems = galleryItems.map((item) =>
`<div class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</div >`).join(" ");
boxGallery.insertAdjacentHTML("beforeend", `${addGalleryItems}`);
// Реалізація делегування на div.gallery і отримання url великого зображення.
// const selectImage = (event) => {
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }

//   const selectedImage = event.target.dataset.source;
// };
// const addOnGalleryItemsClick = boxGallery.addEventListener("click", selectImage);
// const removeOnGalleryItemsClick = boxGallery.removeEventListener("click", selectImage);
console.log(galleryItems);

// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на
// мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї.
// Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
// Використовуй готову розмітку модального вікна із зображенням
//  з прикладів бібліотеки basicLightbox.

// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data - атрибуті source
//  на елементі < img >, і вказуватися в href посилання.Не додавай інші HTML теги або
// CSS класи, крім тих, що містяться в цьому шаблоні.

// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>
// // Зверни увагу на те, що зображення обгорнуте посиланням,
// // отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку.
// Заборони цю поведінку за замовчуванням.

// Закриття з клавіатури
// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання,
// але буде хорошою додатковою практикою.

// Додай закриття модального вікна після натискання клавіші Escape.
// Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно.
// Бібліотекаи basicLightbox містить метод для програмного закриття модального вікна.