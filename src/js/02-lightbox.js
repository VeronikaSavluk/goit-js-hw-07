import { galleryItems } from './gallery-items.js';
// Change code below this line
// Створення і рендер розмітки на підставі масиву даних galleryItems і
// наданого шаблону елемента галереї.
// Використовуй готовий код з першого завдання.
const boxGallery = document.querySelector(".gallery");
const addGalleryItems = galleryItems.map((item) =>
`<li><a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description} />
</a></li>`).join(" ");
boxGallery.insertAdjacentHTML("beforeend", `${addGalleryItems}`);


// Підключення скрипту і стилів бібліотеки,
// використовуючи CDN сервіс cdnjs.
// Необхідно додати посилання на два файли:
// simple - lightbox.min.js і simple - lightbox.min.css.

// Ініціалізація бібліотеки після створення і
// додання елементів галереї у div.gallery.
// Для цього ознайомся з документацією SimpleLightbox -
// насамперед секції «Usage» і «Markup».
// Подивися в документації секцію «Options» і
// додай відображення підписів до зображень з атрибута alt.
// Нехай підпис буде знизу і з'являється через 250 мілісекунд
// після відкриття зображення.

const selectImage = (event) => {
  event.preventDefault();
  let gallery = new SimpleLightbox('.gallery a', { captionsData: `alt`, captionDelay: 250 });
};
boxGallery.addEventListener("click", selectImage);

console.log(galleryItems);