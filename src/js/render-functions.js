// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";







export function renderImages(images){
  const gallery = document.querySelector(".img-container");
  gallery.innerHTML = images.map(image =>

`<a href="${image.largeImageURL}"  class="gallery-item" >
<img src="${image.webformatURL}" alt="${image.tags}" />
<div class="info">¨
  <p class="info-title">Likes: <span class="info-value">${image.likes}</span> </p>
  <p class="info-title">Views: <span class="info-value">${image.views}</span></p>
  <p class="info-title">Comments: <span class="info-value">${image.comments}</span></p>
  <p class="info-title">Downloads: <span class="info-value">${image.downloads}</span></p>
</div>
</a>`
  ).join(``);
}



export function showLoading(){
  document.querySelector(".loader").style.display = "block";
}

export function hideLoading(){
  document.querySelector(".loader").style.display = "none";
}

export function showError(message){
  iziToast.error({
    title:"Error",
    message: "Sorry, there are no images matching your search query. Please try again!"
  })
}

