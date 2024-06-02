import {searchImg} from "./js/pixabay-api.js";
import {searchImages, showLoading, hideLoading, showError} from "./js/render-functions.js";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const formEl = document.querySelector(".form")
const apiKey = `44189121-1bd84ab9c2376b17257837ab7`


formEl.addEventListener(`submit`,  e =>{
  e.preventDefault();

  const query = e.target.elements.query.value.trim();

  if(!query){
    showError("Please enter a search query!")
    return;
  }

  showLoading();

try{
  const data = searchImg(query, apiKey)
  hideLoading();

  if (data.hits.lenght===0){
    showError(`Sorry, there are no images matching your search query. Please try again!`)
    return;
  }
  searchImages(data.hits);

  const box= new SimpleLightbox(".img-container a")
  box.refresh();

}catch(error){
  hideLoading();
  showError("Failed to fetch images. Please try again later!")
}






})

