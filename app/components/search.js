import images from './imgsrc'

const input = document.querySelector('#search__bar input')
const searchContainer = document.querySelector('#search')	
const searchButton = document.querySelector('#search__bar button')
const closeButon = document.querySelector('#search .close')
const result = document.getElementById('search__results')

const render = `<div class="container-fluid"><div class="row"><div class="col" id="s_grid_1"></div><div class="col" id="s_grid_2"></div><div class="col" id="s_grid_3"></div><div class="col" id="s_grid_4"></div></div></div>`

const displayContainer = (value) => {
        if (value) {	
            searchContainer.style.bottom = 0	
            document.body.style.overflow = 'hidden'	
            result.innerHTML = render
        }else{	
            searchContainer.style.bottom = '100%'	
            document.body.style.overflow = 'auto' 	
            input.value = ''
            const resultContainer = document.querySelector('#search__results .container-fluid')
            resultContainer.remove(resultContainer.children)
            
        }	
    }

closeButon.addEventListener('click', () => displayContainer(false))



input.addEventListener('click', () => {
    displayContainer(true)
    const grid1 = document.getElementById('s_grid_1')
    const grid2 = document.getElementById('s_grid_2')
    const grid3 = document.getElementById('s_grid_3')
    const grid4 = document.getElementById('s_grid_4')

    const createImg = (src, tag, grid)=>{
        const img = document.createElement('img')
            img.src = src
            img.dataset.tag = tag
        grid.appendChild(img)
    }
    
    function imageDistribution(img, a, b, c, d) {
        if (a == b && a == c && a == d) {
            createImg(img.src, img.tag, grid1)
        }else if (a > b) {
            createImg(img.src, img.tag, grid2)
        }else if (b > c) {
            createImg(img.src, img.tag, grid3)
        }else if (c > d) {
            createImg(img.src, img.tag, grid4)
        }
    }

    input.addEventListener('keyup', (e) => {
        const value = input.value.toUpperCase()
        if (value && e.key == 'Enter') {
            const resultImg = images.filter(img => img.tag.toUpperCase().indexOf(value) > -1)
            
            resultImg.forEach(img => {
                imageDistribution(
                    img, 
                    grid1.children.length, 
                    grid2.children.length, 
                    grid3.children.length, 
                    grid4.children.length
                )
                const sri = document.querySelectorAll('#search__results img')
                sri.forEach(i => {

                    if (i.src !== img.src) {
                        console.log(i);
                        
                    } else {
                        
                    }
                    
                })
            })
        }
                
    })

})


