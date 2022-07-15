import { galleryItems } from './gallery-items.js';
// Change code below this line
// Створення і рендер розмітки на підставі масиву даних galleryItems і
// наданого шаблону елемента галереї.
// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data - атрибуті source
//  на елементі < img >, і вказуватися в href посилання.Не додавай інші HTML теги або
// CSS класи, крім тих, що містяться в цьому шаблоні.
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
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на
// мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї.
// Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
// Використовуй готову розмітку модального вікна із зображенням
//  з прикладів бібліотеки basicLightbox.
// Додай закриття модального вікна після натискання клавіші Escape.
// Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно.
// Бібліотекаи basicLightbox містить метод для програмного закриття модального вікна.
const selectImage = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}">
        </div>
`, {
    onShow: (instance) => {
      window.addEventListener("keydown", onEsc);
      instance.element().querySelector("img").onclick = instance.close;
      },
    onClose: (instance) => {
      window.removeEventListener("keydown", onEsc);
      }
    });
    const onEsc = (event) => {
      if (event.key === "Escape") {
      instance.close();
    };
    };
  instance.show();
};
boxGallery.addEventListener("click", selectImage);

console.log(galleryItems);

