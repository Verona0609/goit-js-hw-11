import {searchImages} from "./js/pixabay-api.js";
import {renderImages, showLoading, hideLoading, showError} from "./js/render-functions.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const formEl = document.querySelector(".form")
 

formEl.addEventListener("submit", e =>{
  e.preventDefault();

  const query = e.target.elements.query.value.trim();

  if (!query){
    showError("Please enter a search query!");
    return;
  }

  showLoading();

  searchImages(query)
  .then(data =>{
    hideLoading();



    if(data.hits.lenght === 0){
      showError ( " Sorry, there  are no images matching your search query. Please try again!");
      return;
    }


    renderImages(data.hits);

    const container = new SimpleLightbox(".img-container a");
    container.refresh();


  })
  .catch(error =>{
    hideLoading();
    showError("Failed to fetch images. Please try again later!")

  });
})

