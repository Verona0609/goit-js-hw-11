// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


let lightbox;

export function renderImages(images){
  const gallery = document.querySelector(".img-container");
  gallery.innerHTML = images.map(image =>
`<a href="${image.largeImageUrl}"  class="gallery-item" >
<img src="${image.webformatUrl}" alt="${image.tags}" />
<div class="info">¨
  <p>Likes: ${image.likes}</p>
  <p>Views: ${image.views}</p>
  <p>Comments: ${image.comments}</p>
  <p>Downloads: ${image.downloads}</p>
</div>
</a>`
  ).join(``);
}

/* if (lightbox){
  lightbox.refresh();

}else{
  lightbox= new SimpleLightbox(gallery)
} */

export function showLoading(){
  document.querySelector(".loader").style.display = "block"
}

export function hideLoading(){
  document.querySelector(".loader").style.display = "none";
}

export function showError(message){
  iziToast.error({
    title:"Error",
    message,
  })
}

