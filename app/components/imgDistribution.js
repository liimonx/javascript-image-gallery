import images from './imgsrc'
const grid1 = document.getElementById('grid_1')
const grid2 = document.getElementById('grid_2')
const grid3 = document.getElementById('grid_3')
const grid4 = document.getElementById('grid_4')

const createImg = (src, tag, grid)=>{
    const img = document.createElement('img')
        img.src = src
        img.dataset.tag = tag
    grid.appendChild(img)
}

images.forEach(img => {
    imageDistribution(
        img, 
        grid1.children.length, 
        grid2.children.length, 
        grid3.children.length, 
        grid4.children.length
    )
})

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