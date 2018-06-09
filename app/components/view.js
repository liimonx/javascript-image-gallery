const images = document.querySelectorAll('#gallery img');
const zoom = document.getElementById('zoom')
let render = `<div class="container"><div class="header"></div><div class="zoom-container"><img src="assets/images/photo-1464457312035-3d7d0e0c058e.jpg" alt=""></div><div class="related_images">
<h1>Related Images</h1><div class="__images"></div></div><div class="foot"></div></div>`


let update = (image)=>{
    image.addEventListener('click', ()=>{
        zoom.style.display = 'block'
        zoom.innerHTML = render
        zoom.scrollTop = 0;
        document.querySelector('body').style.overflow = 'hidden'
        const zoomContainer = document.querySelector('#zoom .zoom-container');
        const zoomContainerImage = document.querySelector('#zoom .zoom-container img'); 
        zoomContainerImage.src = image.src
        zoomContainerImage.dataset.tag = image.dataset.tag
        zoomContainer.addEventListener('click',()=>{
            if (zoomContainer.style.padding === "5% 20%") {
                zoomContainer.style.padding = "0"
            } else {
                zoomContainer.style.padding = "5% 20%"
            }
        })

        zoom.addEventListener('click',(e)=>{
            if (e.target.id === "zoom") {
                e.target.style.display = "none"
                const rC = document.querySelector('#zoom .container')
                zoom.removeChild(rC)
                document.querySelector('body').style.overflow = 'auto'
            }
        })
        
        let rl = [...images].filter(image => image.dataset.tag.toUpperCase().indexOf(zoomContainerImage.dataset.tag.toUpperCase()) > -1 )
        
        rl.forEach(r => {
            const rlic = document.querySelector('.__images')
            const rr = document.createElement('div')
            rr.classList.add('__image')
            const ri = document.createElement('img')
            ri.dataset.tag = r.dataset.tag
            ri.src = r.src
            if(zoomContainerImage.src !== ri.src){
                rr.appendChild(ri)
                rlic.appendChild(rr)
            }
            ri.addEventListener('click', (e)=>{
                zoomContainerImage.src = ri.src
                zoom.scrollTop = 0;
            })
        })

    })
}



images.forEach(image => update(image))
