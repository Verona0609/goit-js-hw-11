export function searchImg(query){
  const BASE_URL = `https://pixabay.com/api/`;
  const params = new URLSearchParams({
    key: `44189121-1bd84ab9c2376b17257837ab7`,
    q: `query`,
    image_type: `photo`,
    orientation: `horizontal`,
    safesearch: `true`


  })

const url= `${BASE_URL}?${params}`;
  if(!url.ok){
    throw new Error(`Failed to fetch images`)
  }
  return fetch(url).then(res=> res.json());
}



