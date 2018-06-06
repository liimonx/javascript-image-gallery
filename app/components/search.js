const input = document.querySelector('#search__bar input')
const searchButton = document.querySelector('#search__bar button')
const allImages = document.querySelectorAll('#gallery img')
const resultImage = document.querySelector('.result-images')


const update = ()=>{
    inputValue = input.value.toUpperCase()
    allImages.forEach(image => {
        if(image.dataset.tag.toUpperCase().indexOf(inputValue) > -1){
            console.log(image);
            
        }else{

        }
    })    
}
input.addEventListener('keyup', update)
