// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";



export function searchImages(images){
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

export function showLoading(){
  document.querySelector(".loading").style.display = "block"
}

export function hideLoading(){
  document.querySelector(".loading").style.display = "none";
}

export function showError(message){
  iziToast.error({
    title:"Error",
    message,
  })
}

