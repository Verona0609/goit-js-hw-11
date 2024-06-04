export function searchImages(query){
  const BASE_URL = `https://pixabay.com`;
  const END_POINT = "/api/";
  const params = new URLSearchParams({
    key: `44189121-1bd84ab9c2376b17257837ab7`,
    q: query,
    image_type: `photo`,
    orientation: `horizontal`,
    safesearch: `true`


  })

const url= `${BASE_URL}${END_POINT}?${params}`;



  return fetch(url).then(res=>{
    if(!res.ok){
      throw new Error("Failed to fetch images");
    }
    return res.json();
  }

    );
}



