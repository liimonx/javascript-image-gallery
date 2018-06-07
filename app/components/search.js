const input = document.querySelector('#search__bar input')
const searchContainer = document.querySelector('#search__results')
const searchButton = document.querySelector('#search__bar button')
const allImages = document.querySelectorAll('#gallery img')
const resultImage = document.querySelector('.result-images')

const displayContainer = (value) => {
    if (value) {
        searchContainer.style.bottom = 0
        document.body.style.overflow = 'hidden'
    }else{
        searchContainer.style.bottom = '100%'
        document.body.style.overflow = 'auto' 
    }
}
input.addEventListener('click', () => displayContainer(true))
document.querySelector('#search__results .close').addEventListener('click', () => displayContainer(false))
document.querySelector('.logo').addEventListener('click', () => displayContainer(false))
