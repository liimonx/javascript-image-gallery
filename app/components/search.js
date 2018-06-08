const input = document.querySelector('#search__bar input')
const searchContainer = document.querySelector('#search__results')
const searchButton = document.querySelector('#search__bar button')
const itm = document.querySelector('#gallery .container-fluid')

let cln = itm.cloneNode(true)
const displayContainer = (value) => {
    if (value) {
        searchContainer.style.bottom = 0
        document.body.style.overflow = 'hidden'
        searchContainer.appendChild(cln)
    }else{
        searchContainer.style.bottom = '100%'
        document.body.style.overflow = 'auto' 
        searchContainer.removeChild(cln)
        input.value = ''
    }
}

const update = ()=>{
    const scImage = document.querySelectorAll('#search__results .container-fluid img')
    scImage.forEach(image => {
       image.style.display = 'none'
        results(image)
     });
}

const results = (image) =>{
    input.addEventListener('keyup', () => {
        const inputValue = input.value.toUpperCase()
       if (inputValue) {
            if (image.dataset.tag.toUpperCase().indexOf(inputValue) > -1) {
                image.style.display = 'block'
                
            } else {
                image.style.display = 'none'
            }
       } else {
            image.style.display = 'none'
       }        
    })
}

input.addEventListener('click', () => {
    displayContainer(true)
    update()
})

document.querySelector('#search__results .close').addEventListener('click', () => displayContainer(false))
document.querySelector('.logo').addEventListener('click', () => displayContainer(false))
